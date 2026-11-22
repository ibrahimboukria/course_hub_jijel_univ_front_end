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
    const body : SELECTION = await request.json();
    console.log(body)
    return NextResponse.json(body);
}