{
  "targets": [{
    "target_name": "copy_dep",
    "type": "none",
    "copies": [{
      "destination": "<(PRODUCT_DIR)",
      "files": [
        "dep.c",
      ],
    }],
  }, {
    "target_name": "dep",
    "type": "static_library",
    "dependencies": [ "copy_dep" ],
    "sources": [
      "../<(CONFIGURATION_NAME)/dep.c",
    ],
  }],
}
