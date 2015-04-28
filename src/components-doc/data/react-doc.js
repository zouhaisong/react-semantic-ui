module.exports ={
  "components/elements/Button.jsx": {
    "description": "Button.",
    "props": {
      "color": {
        "type": {
          "name": "string"
        },
        "required": false,
        "description": "color of Button",
        "examples": [
          {
            "requireList": [
              {
                "path": "react",
                "src": "require('react')",
                "dest": "require(\"react\")"
              },
              {
                "path": "/Users/morlay/gitRepo/react-semantic-ui/components/elements/Button.jsx",
                "src": "require('../Button.jsx')",
                "dest": "require(\"components/elements/Button.jsx\")"
              }
            ],
            "contents": "var React = require(\"react\");\nvar Button = require(\"components/elements/Button.jsx\");\n\nvar instance = (\n  <div>\n    <Button color=\"black\"> black </Button>\n    <Button color=\"yellow\"> yellow </Button>\n    <Button color=\"green\"> green </Button>\n    <Button color=\"blue\"> blue </Button>\n    <Button color=\"orange\"> orange </Button>\n    <Button color=\"purple\"> purple </Button>\n    <Button color=\"red\"> red </Button>\n    <Button color=\"pink\"> pink </Button>\n    <Button color=\"teal\"> teal </Button>\n  </div> );\n\nReact.render(instance, mountNode);\n"
          }
        ]
      },
      "size": {
        "type": {
          "name": "string"
        },
        "required": false,
        "description": "size of Button",
        "examples": [
          {
            "requireList": [
              {
                "path": "react",
                "src": "require('react')",
                "dest": "require(\"react\")"
              },
              {
                "path": "/Users/morlay/gitRepo/react-semantic-ui/components/elements/Button.jsx",
                "src": "require('../Button.jsx')",
                "dest": "require(\"components/elements/Button.jsx\")"
              }
            ],
            "contents": "var React = require(\"react\");\nvar Button = require(\"components/elements/Button.jsx\");\n\nvar instance = (\n  <div>\n    <Button size=\"mini\"> mini </Button>\n    <Button size=\"tiny\"> tiny </Button>\n    <Button> normal </Button>\n    <Button size=\"large\"> large </Button>\n    <Button size=\"big\"> big </Button>\n    <Button size=\"huge\"> huge </Button>\n    <Button size=\"massive\"> massive </Button>\n  </div> );\n\nReact.render(instance, mountNode);\n"
          }
        ]
      },
      "icon": {
        "type": {
          "name": "string"
        },
        "required": false,
        "description": "icon in Button",
        "examples": []
      },
      "iconLabeled": {
        "type": {
          "name": "union",
          "value": [
            {
              "name": "bool"
            },
            {
              "name": "string"
            }
          ]
        },
        "required": false,
        "description": "labeled icon",
        "examples": [
          {
            "requireList": [
              {
                "path": "react",
                "src": "require('react')",
                "dest": "require(\"react\")"
              },
              {
                "path": "/Users/morlay/gitRepo/react-semantic-ui/components/elements/Button.jsx",
                "src": "require('../Button.jsx')",
                "dest": "require(\"components/elements/Button.jsx\")"
              }
            ],
            "contents": "var React = require(\"react\");\nvar Button = require(\"components/elements/Button.jsx\");\n\nvar instance = (\n  <div>\n    <Button icon=\"cloud\"/>\n    <Button icon=\"code\"> test </Button>\n    <Button icon=\"code\" iconLabeled> test </Button>\n    <Button icon=\"code\" iconLabeled='right'> test </Button>\n  </div> );\n\nReact.render(instance, mountNode);\n"
          }
        ]
      },
      "fluid": {
        "type": {
          "name": "bool"
        },
        "required": false,
        "description": "fluid button",
        "examples": [
          {
            "requireList": [
              {
                "path": "react",
                "src": "require('react')",
                "dest": "require(\"react\")"
              },
              {
                "path": "/Users/morlay/gitRepo/react-semantic-ui/components/elements/Button.jsx",
                "src": "require('./Button.jsx')",
                "dest": "require(\"components/elements/Button.jsx\")"
              }
            ],
            "contents": "var React = require(\"react\");\nvar Button = require(\"components/elements/Button.jsx\");\n\nvar instance = (\n<div>\n<Button fluid> black </Button>\n</div> );\n\nReact.render(instance, mountNode);"
          }
        ]
      },
      "circular": {
        "type": {
          "name": "bool"
        },
        "required": false,
        "description": "circular button ( **notice**: no effect with labeled )",
        "examples": [
          {
            "requireList": [
              {
                "path": "react",
                "src": "require('react')",
                "dest": "require(\"react\")"
              },
              {
                "path": "/Users/morlay/gitRepo/react-semantic-ui/components/elements/Button.jsx",
                "src": "require('./Button.jsx')",
                "dest": "require(\"components/elements/Button.jsx\")"
              }
            ],
            "contents": "var React = require(\"react\");\nvar Button = require(\"components/elements/Button.jsx\");\n\nvar instance = (\n<div>\n<Button icon='cloud' circular> circular button </Button>\n<Button icon='cloud' circular/>\n</div> );\n\nReact.render(instance, mountNode);"
          }
        ]
      }
    },
    "examples": [],
    "name": "Button",
    "module": "components/elements"
  },
  "components/elements/Icon.jsx": {
    "description": "Icon.",
    "props": {
      "type": {
        "type": {
          "name": "string"
        },
        "required": false,
        "description": "type name of Icon, will same as the filename.",
        "examples": [
          {
            "requireList": [
              {
                "path": "react",
                "src": "require('react')",
                "dest": "require(\"react\")"
              },
              {
                "path": "/Users/morlay/gitRepo/react-semantic-ui/components/elements/Icon.jsx",
                "src": "require('../Icon.jsx')",
                "dest": "require(\"components/elements/Icon.jsx\")"
              }
            ],
            "contents": "var React = require(\"react\");\nvar Icon = require(\"components/elements/Icon.jsx\");\n\nvar instance = (\n  <div>\n    <Icon type=\"cloud\"/>\n    <Icon type=\"code\"/>\n  </div> );\n\nReact.render(instance, mountNode);\n"
          }
        ]
      }
    },
    "examples": [],
    "name": "Icon",
    "module": "components/elements"
  },
  "components/elements/Symbol.jsx": {
    "description": "Symbol. need to update the SVG_STORE_FILE_PATH\n\nsee more https://github.com/jonathantneal/svg4everybody",
    "props": {
      "type": {
        "type": {
          "name": "string"
        },
        "required": false,
        "description": "type name of Symbol, will same as the filename.",
        "examples": [
          {
            "requireList": [
              {
                "path": "react",
                "src": "require('react')",
                "dest": "require(\"react\")"
              },
              {
                "path": "/Users/morlay/gitRepo/react-semantic-ui/components/elements/Symbol.jsx",
                "src": "require('../Symbol.jsx')",
                "dest": "require(\"components/elements/Symbol.jsx\")"
              }
            ],
            "contents": "var React = require(\"react\");\nvar Symbol = require(\"components/elements/Symbol.jsx\");\n\nvar instance = (\n    <div className='icon-grid'>\n      <Symbol type='access-time' title='access-time'/>\n      <Symbol type='add' title='add'/>\n      <Symbol type='arrow-drop-down' title='arrow-drop-down'/>\n      <Symbol type='arrow-drop-up' title='arrow-drop-up'/>\n      <Symbol type='bar-chart' title='bar-chart'/>\n      <Symbol type='cached' title='cached'/>\n      <Symbol type='call' title='call'/>\n      <Symbol type='camera-alt' title='camera-alt'/>\n      <Symbol type='clear' title='clear'/>\n      <Symbol type='control-point' title='control-point'/>\n      <Symbol type='done' title='done'/>\n      <Symbol type='favorite' title='favorite'/>\n      <Symbol type='file-download' title='file-download'/>\n      <Symbol type='file-upload' title='file-upload'/>\n      <Symbol type='keyboard-arrow-down' title='keyboard-arrow-down'/>\n      <Symbol type='keyboard-arrow-left' title='keyboard-arrow-left'/>\n      <Symbol type='keyboard-arrow-right' title='keyboard-arrow-right'/>\n      <Symbol type='keyboard-arrow-up' title='keyboard-arrow-up'/>\n      <Symbol type='line-chart' title='line-chart'/>\n      <Symbol type='lock' title='lock'/>\n      <Symbol type='my-library-add' title='my-library-add'/>\n      <Symbol type='person' title='person'/>\n      <Symbol type='refresh' title='refresh'/>\n      <Symbol type='search' title='search'/>\n    </div>\n);\n\nReact.render(instance, mountNode);\n"
          }
        ]
      }
    },
    "examples": [],
    "name": "Symbol",
    "module": "components/elements"
  }
}