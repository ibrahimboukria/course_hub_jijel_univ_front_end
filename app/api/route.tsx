import { NextResponse } from "next/server";
type SELECTION = 
{
    faculter ? : string ,
    specialiter :string,
    Level :string , 
    semester : any

}
export async function POST(request:Request)
{
    const { faculter,specialiter ,Level , semester } : SELECTION = await request.json();
    console.log({faculter:faculter,"specialiter":specialiter ,"Level":Level , "semester":semester  })
    return NextResponse.json({"faculter":faculter ,"specialiter":specialiter ,"Level":Level , "semester":semester  });
}