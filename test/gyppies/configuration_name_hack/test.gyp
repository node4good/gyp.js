{
  "targets": [{
    "target_name": "copy_dep2",
    "type": "none",
    "copies": [{
      "destination": "<(PRODUCT_DIR)",
      "files": [
        "dep2.c",
      ],
    }],
  }, {
    "target_name": "test",
    "type": "executable",
    "dependencies": [ "dep/dep.gyp:dep", "copy_dep2" ],
    "sources": [
      "out/<(CONFIGURATION_NAME)/dep2.c",
      "main.c",
    ],
  }],
}
