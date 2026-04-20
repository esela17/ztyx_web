"use client";

import { useState } from "react";

/**
 * خطاف مخصص لإدارة حالة التبويبات (Tabs)
 */
export function useTabs(initialTab: string) {
  const [activeTab, setActiveTab] = useState(initialTab);

  const switchTab = (tabId: string) => {
    setActiveTab(tabId);
  };

  return { activeTab, switchTab };
}
