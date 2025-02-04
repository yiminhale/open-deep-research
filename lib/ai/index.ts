import { experimental_wrapLanguageModel as wrapLanguageModel } from 'ai';
import { anthropic } from '@ai-sdk/anthropic';

import { customMiddleware } from './custom-middleware';

export const customModel = (apiIdentifier: string) => {
  return wrapLanguageModel({
    model: anthropic(apiIdentifier),
    middleware: customMiddleware,
  });
};