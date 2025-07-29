import { upsertPost } from "../storage.ts";
import { Post } from "../types.ts";
import {
  generatePostHistory,
  getPostHistory,
  initializeHistoryStorage,
  removePostHistory,
} from "./history.ts";
