import { NextResponse } from "next/server";
import Test from "./components/Test";

export default function middleware(req) {
  let verify = req.cookies.get("loggedin");
  let url = req.url;

  if (!verify && url.includes("/adminadd")) {
    return NextResponse.redirect(<Test/>);
  }

  if (!verify && url.includes("/addcar")) {
    return NextResponse.redirect(<Test/>);
  }
}
