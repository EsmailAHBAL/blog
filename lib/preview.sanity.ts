import { dataset, projectId } from "./client"
import {definePreview} from 'next-sanity/preview'
function onPublicAccessOnly (){
 throw new Error("no acces hh :3")
} 
if(!dataset || !projectId){
 throw new Error('missing dataset or project id')
}
export const usePreview = definePreview({
 dataset,projectId,onPublicAccessOnly
})