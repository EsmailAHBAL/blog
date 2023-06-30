import {legacy_createStore as create} from 'redux'
import { redcuer } from './reducer'
export const store = create(redcuer)