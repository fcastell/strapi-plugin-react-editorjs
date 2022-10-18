import PluginId from '../pluginId'

import Embed from '@editorjs/embed'
import Table from '@editorjs/table'
import List from '@editorjs/list'
import LinkTool from '@editorjs/link'
import Header from '@editorjs/header'
import Marker from '@editorjs/marker'
import CheckList from '@editorjs/checklist'
import Delimiter from '@editorjs/delimiter'
import ColorPlugin from 'editorjs-text-color-plugin'
import Paragraph from 'editorjs-paragraph-with-alignment'
import Underline from '@editorjs/underline';

const customTools = {
  embed: Embed,
  table: {
    class: Table,
    inlineToolbar: true,
  },
  list: {
    class: List,
    inlineToolbar: true,
  },
  LinkTool: {
    class: LinkTool,
    config: {
      endpoint: `/api/${PluginId}/link`,
    },
  },
  header: {
    class: Header,
    inlineToolbar: true,
  },
  marker: {
    class: Marker,
    inlineToolbar: true,
  },
  checklist: {
    class: CheckList,
    inlineToolbar: true,
  },
  delimiter: Delimiter,
  Color: {
    class: ColorPlugin, // if load from CDN, please try: window.ColorPlugin
    config: {
       colorCollections: ['#EC7878','#9C27B0','#673AB7','#3F51B5','#0070FF','#03A9F4','#00BCD4','#4CAF50','#8BC34A','#CDDC39', '#FFF'],
       defaultColor: '#FF1300',
       type: 'text', 
    }     
  },
  Marker: {
    class: ColorPlugin, // if load from CDN, please try: window.ColorPlugin
    config: {
       defaultColor: '#FFBF00',
       type: 'marker', 
    }       
  },
  paragraph: {
    class: Paragraph,
    inlineToolbar: true,
  },
  underline: Underline
}

export default customTools
