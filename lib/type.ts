interface Base {
 _updatedAt :string,_createAt :string,_id :string,_type:string,_rev:string
}
export interface Post extends Base {
 author: Author;
 body: Block [];
 categories: Category [];
 mainImage: Image,
 slug: Slug,
 title: string,
 description: string}
 interface Author extends Base {
bio: Block [],
image: Image,
name: string,
slug: Slug;
 }
 
 export interface Image {
  _type: "image",
  asset: Reference,
  } 
  interface Reference {
  _ref: string,
  _type: "reference",
  }
  interface Slug {
  _type: "slug",
  current: string}
  interface Block {
   _key: string,
   _type: "block",
   children: Span [],
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   markDefs: any [],
   style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
   }
   interface Span {
    _key: string,
    _type: "span",
    marks: string [],
    text: string,
    }
    interface Category extends Base {
    description: string,
    title: string,
    }
    export interface MainImage {
     _type: "image",
     asset: Reference,
     }
    export  interface Title {
     _type: "string",
     current: string,
     }