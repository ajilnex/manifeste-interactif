import { useCallback, useRef, useState } from 'react';
import type { TooltipState } from '../types';

const MAX_DEPTH = 5;
const GRACE_PERIOD_MS = 250;

export function useTooltipChain() {
  const [chain, setChain] = useState<TooltipState[]>([]);
  const graceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lockTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearGraceTimer = useCallback(() => {
    if (graceTimerRef.current) {
      clearTimeout(graceTimerRef.current);
      graceTimerRef.current = null;
    }
  }, []);

  const clearLockTimer = useCallback(() => {
    if (lockTimerRef.current) {
      clearTimeout(lockTimerRef.current);
      lockTimerRef.current = null;
    }
  }, []);

  const openTooltip = useCallback((wordId: string, position: { x: number; y: number }, parentId?: string) => {
    clearGraceTimer();
    
    setChain(prev => {
      // If this tooltip is already open, don't re-add
      if (prev.some(t => t.wordId === wordId)) return prev;
      
      const level = parentId ? (prev.find(t => t.wordId === parentId)?.level ?? -1) + 1 : 0;
      
      // Enforce max depth
      if (level >= MAX_DEPTH) return prev;

      // If opening a root tooltip, close entire chain first
      if (!parentId) {
        return [{
          wordId,
          level: 0,
          isLocked: false,
          position,
        }];
      }

      // If opening a child, prune any siblings at the same level or deeper
      const parentLevel = prev.find(t => t.wordId === parentId)?.level ?? -1;
      const pruned = prev.filter(t => t.level <= parentLevel || 
        // Keep ancestors in the chain
        prev.slice(0, prev.findIndex(p => p.wordId === parentId) + 1).includes(t)
      );

      return [...pruned, {
        wordId,
        level,
        parentId,
        isLocked: false,
        position,
      }];
    });
  }, [clearGraceTimer]);

  const lockTooltip = useCallback((wordId: string) => {
    setChain(prev => prev.map(t => 
      t.wordId === wordId ? { ...t, isLocked: true } : t
    ));
  }, []);

  const closeTooltip = useCallback((wordId: string) => {
    setChain(prev => {
      const tooltip = prev.find(t => t.wordId === wordId);
      if (!tooltip) return prev;
      // Remove this tooltip and all its descendants
      return prev.filter(t => t.level < tooltip.level || 
        (t.level === tooltip.level && t.wordId !== wordId));
    });
  }, []);

  const closeAll = useCallback(() => {
    clearGraceTimer();
    clearLockTimer();
    setChain([]);
  }, [clearGraceTimer, clearLockTimer]);

  const startGracePeriod = useCallback(() => {
    clearGraceTimer();
    graceTimerRef.current = setTimeout(() => {
      setChain([]);
    }, GRACE_PERIOD_MS);
  }, [clearGraceTimer]);

  const cancelGracePeriod = useCallback(() => {
    clearGraceTimer();
  }, [clearGraceTimer]);

  const startLockTimer = useCallback((wordId: string, duration: number = 800) => {
    clearLockTimer();
    lockTimerRef.current = setTimeout(() => {
      lockTooltip(wordId);
    }, duration);
  }, [clearLockTimer, lockTooltip]);

  const isOpen = useCallback((wordId: string) => {
    return chain.some(t => t.wordId === wordId);
  }, [chain]);

  const isLocked = useCallback((wordId: string) => {
    return chain.find(t => t.wordId === wordId)?.isLocked ?? false;
  }, [chain]);

  return {
    chain,
    openTooltip,
    lockTooltip,
    closeTooltip,
    closeAll,
    startGracePeriod,
    cancelGracePeriod,
    startLockTimer,
    isOpen,
    isLocked,
  };
}
