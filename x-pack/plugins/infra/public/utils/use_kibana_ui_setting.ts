/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */
import { useMemo } from 'react';
import { useUiSetting$ } from '../../../../../src/plugins/kibana_react/public';

/**
 * This hook behaves like a `useState` hook in that it provides a requested
 * setting value (with an optional default) from the Kibana UI settings (also
 * known as "advanced settings") and a setter to change that setting:
 *
 * ```
 * const [darkMode, setDarkMode] = useKibanaUiSetting('theme:darkMode');
 * ```
 *
 * This is not just a static consumption of the value, but will reactively
 * update when the underlying setting subscription of the `UiSettingsClient`
 * notifies of a change.
 *
 * Unlike the `useState`, it doesn't give type guarantees for the value,
 * because the underlying `UiSettingsClient` doesn't support that.
 */
export const useKibanaUiSetting = (key: string, defaultValue?: any) => {
  const [uiSetting, setUiSetting] = useUiSetting$(key);
  const uiSettingValue = useMemo(() => {
    return uiSetting ? uiSetting : defaultValue;
  }, [uiSetting, defaultValue]);
  return [uiSettingValue, setUiSetting];
};