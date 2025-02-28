import { ILayer } from '../layer/ILayerService';
import { IAttribute, IAttributeInitializationOptions } from './IAttribute';
import { IBuffer, IBufferInitializationOptions } from './IBuffer';
import { IElements, IElementsInitializationOptions } from './IElements';
import {
  IFramebuffer,
  IFramebufferInitializationOptions,
} from './IFramebuffer';
import { IModel, IModelInitializationOptions } from './IModel';
import { IMultiPassRenderer, IPass } from './IMultiPassRenderer';
import { ITexture2D, ITexture2DInitializationOptions } from './ITexture2D';

export interface IRenderConfig {
  /**
   * 是否开启 multi pass
   */
  enableMultiPassRenderer?: boolean;
  passes?: Array<IPass<unknown>>;
  antialias?: boolean;
  preserveDrawingBuffer?: boolean;
}

export interface IClearOptions {
  // gl.clearColor
  color?: [number, number, number, number];
  // gl.clearDepth 默认值为 1
  depth?: number;
  // gl.clearStencil 默认值为 0
  stencil?: number;
  // gl.bindFrameBuffer
  framebuffer?: IFramebuffer | null;
}

export interface IReadPixelsOptions {
  x: number;
  y: number;
  width: number;
  height: number;
  // gl.bindFrameBuffer
  framebuffer?: IFramebuffer;
  data?: Uint8Array;
}

export interface IRendererService {
  init($container: HTMLDivElement, cfg: IRenderConfig): Promise<void>;
  clear(options: IClearOptions): void;
  createModel(options: IModelInitializationOptions): IModel;
  createAttribute(options: IAttributeInitializationOptions): IAttribute;
  createBuffer(options: IBufferInitializationOptions): IBuffer;
  createElements(options: IElementsInitializationOptions): IElements;
  createTexture2D(options: ITexture2DInitializationOptions): ITexture2D;
  createFramebuffer(options: IFramebufferInitializationOptions): IFramebuffer;
  useFramebuffer(
    framebuffer: IFramebuffer | null,
    drawCommands: () => void,
  ): void;
  getViewportSize(): { width: number; height: number };
  getContainer(): HTMLElement | null;
  viewport(size: { x: number; y: number; width: number; height: number }): void;
  readPixels(options: IReadPixelsOptions): Uint8Array;
  destroy(): void;
}
