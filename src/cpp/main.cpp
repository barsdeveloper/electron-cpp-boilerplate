#include <iostream>
#include <napi.h>

using namespace Napi;

String Method(const CallbackInfo &info) {
  Env env = info.Env();
  Object console = env.Global().Get("console").As<Object>();
  console.Get("log").As<Function>().Call(
      {String::New(env, "Hello from C++ also on console")});
  return String::New(env, "Hello, I'm C++!");
}

Object Init(Env env, Object exports) {
  exports.Set(String::New(env, "helloCpp"), Function::New(env, Method));
  return exports;
}

NODE_API_MODULE(helloCpp, Init)
