cmake_minimum_required(VERSION 3.9)
cmake_policy(SET CMP0042 NEW)
set(CMAKE_CXX_STANDARD 20)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

project(electron-cpp-boilerplate)
include_directories(${CMAKE_JS_INC})
file(GLOB SOURCE_FILES "src/cpp/*.cpp" "src/cpp/*.h" "src/cpp/*.hpp")
add_library(${PROJECT_NAME} SHARED ${SOURCE_FILES} ${CMAKE_JS_SRC})
set_target_properties(${PROJECT_NAME} PROPERTIES PREFIX "" SUFFIX ".node")
target_link_libraries(${PROJECT_NAME} ${CMAKE_JS_LIB})

# Include Node-API wrappers
execute_process(COMMAND node -p "require('node-addon-api').include"
    WORKING_DIRECTORY ${CMAKE_SOURCE_DIR}
    OUTPUT_VARIABLE NODE_ADDON_API_DIR
)
execute_process(COMMAND node -p "require('node-api-headers').include_dir"
    WORKING_DIRECTORY ${CMAKE_SOURCE_DIR}
    OUTPUT_VARIABLE NODE_API_HEADERS_DIR
)

string(REGEX REPLACE "[\r\n\"]" "" NODE_ADDON_API_DIR ${NODE_ADDON_API_DIR})
string(REGEX REPLACE "[\r\n\"]" "" NODE_API_HEADERS_DIR ${NODE_API_HEADERS_DIR})
include_directories(${NODE_ADDON_API_DIR})
include_directories(${NODE_API_HEADERS_DIR})

# define NPI_VERSION
add_definitions(-DNAPI_VERSION=3)
