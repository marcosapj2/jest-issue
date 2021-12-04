import { RenderOptions } from '@testing-library/react'
import type { PreloadedState } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { AppState } from '@store'

export interface ExtendedRenderOptions<S = any> extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<AppState>
  store?: ReturnType<typeof configureStore>
}
