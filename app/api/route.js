import { NextResponse } from "next/server";
export async function POST(request)
{
    const {faculter ,Level , semester }=await request.json();
    console.log({"faculter":faculter ,"Level":Level , "semester":semester  })
    return NextResponse.json({"faculter":faculter ,"Level":Level , "semester":semester  });
}