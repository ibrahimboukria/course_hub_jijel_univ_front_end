import { NextResponse } from "next/server";
type SELECTION = 
{
    faculter ? : string ,
    specialiter :string,
    Level ?:string , 
    semester : any

}

export async function POST(request:Request)
{
    try{ const body : SELECTION = await request.json();
    console.log(body)
    return NextResponse.json(body);
    }catch(error){
        console.log(error)
         return NextResponse.json(
            {error : "Invalid request"},
            {status : 400});
    }
    
}
   