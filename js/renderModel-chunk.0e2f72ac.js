(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["renderModel-chunk"],{"04ed":function(t,e,o){},d88e:function(t,e,o){"use strict";o("04ed")},ff97:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"customToolbarContainer"},[o("div",{staticClass:"top-tools"},[o("el-col",{attrs:{span:4}},[o("div",{staticClass:"grid-content bg-purple",staticStyle:{color:"rgb(64, 158, 255)","font-weight":"800","font-size":"22px","margin-left":"44px"}},[t._v(" Easy Editor ")])]),o("el-col",{staticClass:"tools-group",attrs:{span:12}},[o("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"放大",placement:"bottom"}},[o("el-button",{staticStyle:{"font-size":"18px"},attrs:{icon:"el-icon-zoom-in",type:"text"},on:{click:t.zoomIn}})],1),o("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"缩小",placement:"bottom"}},[o("el-button",{staticStyle:{"font-size":"18px"},attrs:{icon:"el-icon-zoom-out",type:"text"},on:{click:t.zoomOut}})],1),o("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"等比缩放",placement:"bottom"}},[o("el-button",{staticStyle:{"font-size":"16px"},attrs:{type:"text",icon:"iconfont icon-expandalt-fill"},on:{click:t.autoSize}})],1),o("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"导出为图片",placement:"bottom"}},[o("el-button",{attrs:{type:"text",icon:"iconfont icon-tupian"},on:{click:t.showImage}})],1)],1),o("el-col",{attrs:{span:8}},[o("div",{staticClass:"grid-content bg-purple",staticStyle:{display:"flex","justify-content":"flex-end","padding-right":"20px"}},[o("el-button",{attrs:{round:"",size:"medium"},on:{click:function(e){return t.loadFlowCase(1)}}},[t._v("组件关系")]),o("el-button",{attrs:{round:"",size:"medium"},on:{click:function(e){return t.loadFlowCase(2)}}},[t._v("部署流程")]),o("el-button",{attrs:{round:"",size:"medium"},on:{click:function(e){return t.loadFlowCase(3)}}},[t._v("Vue生命周期案例")])],1)])],1),o("div",{ref:"container",staticClass:"graphContainer",attrs:{id:"graphContainer"}}),t._v(" ] ")])},i=[],s=(o("a15b"),o("caad"),o("2532"),o("1276"),o("ac1f"),o("159b"),o("07ac"),o("fd76")),l=o("df7c");Object.assign(s["h"],{NORMAL_TYPE_CLICKED:"NORMAL_TYPE_CLICKED"});var a=l.join("./data/data1.xml"),r=l.join("./data/data2.xml"),c=l.join("./data/data3.xml"),f={components:{},data:function(){return{graph:null,editor:null,palettes:{},graphXml:"",activeNames:["1","2","3"],isNode:!1,cellStyle:"",graphX:100,graphY:10,undoMng:"",isOutputXml:!1,edgeStyle:"orthogonalEdgeStyle",outline:"",idSeed:0,normalIdSeed:0,currentNormalType:{},normalTypePosition:{top:"0",left:"0"}}},methods:{createGraph:function(){this.editor=new s["g"],this.graph=this.editor.graph,this.editor.setGraphContainer(this.$refs.container),this.configureStylesheet(this.graph),s["n"].prototype.crisp=!0,s["f"].MIN_HOTSPOT_SIZE=16,s["f"].DEFAULT_HOTSPOT=1,this.graph.setHtmlLabels(!0),this.graph.foldingEnabled=!1,this.graph.connectionHandler.targetConnectImage=!1,this.graph.setAllowDanglingEdges(!0);var t=new s["b"]("Group",new s["j"],"group;fontColor=white;");t.setVertex(!1),t.setConnectable(!1),this.editor.defaultGroup=t,this.editor.groupBorderSize=40,this.graph.getLabel=function(t){var e=s["k"].prototype.getLabel.apply(this,arguments);if(this.isCellLocked(t))return"";if(this.isCellCollapsed(t)){var o=e.indexOf("</h1>");o>0&&(e=e.substring(0,o+5))}return e},this.graph.isValidDropTarget=function(t,e,o){return console.log(t,e,o),this.isSwimlane(t)},this.graph.isValidRoot=function(t){return this.isValidDropTarget(t)},this.graph.isCellSelectable=function(){return!1},this.graph.isHtmlLabel=function(t){return!this.isSwimlane(t)}},initGraph:function(){null!=this.graph&&void 0!=this.graph&&(this.graph.convertValueToString=function(t){return t["value"]?t["value"]:t["title"]})},showNormalTypeSelect:function(t,e){var o=e.properties.cell.state.cell;this.currentNormalType=o},configOption:function(){var t=this;this.graph.addMouseListener({currentState:null,previousStyle:null,mouseDown:function(e,o){if(o.state)if(o.state.cell.edge)console.log("点击了连线");else{var n=o.state.cell,i=!1;void 0!==n.style&&(i=n.style.includes("normalType")),i&&t.graph.fireEvent(new s["i"](s["h"].NORMAL_TYPE_CLICKED,"cell",o))}else console.log("点击了画布")},mouseMove:function(e,o){t.graphX=Math.ceil(o.graphX),t.graphY=o.graphY},mouseUp:function(e,o){if(console.log("mouseUp"),void 0!=o.sourceState){var n=o.sourceState.cell;if(n){n.vertex?t.isNode=!0:t.isNode=!1;var i=n.getStyle()?n.getStyle():null;if(t.isNode||!i||(t.edgeStyle=i),console.log(n),i){var s=i.split(";"),l={};s.forEach((function(t){l[t.split("=")[0]]=t.split("=")[1]})),t.cellStyle=l}}else t.$message.error("请选择节点或者连线")}}}),this.graph.addListener(s["h"].NORMAL_TYPE_CLICKED,this.showNormalTypeSelect),this.graph.setResizeContainer(!1),s["h"].disableContextMenu(this.$refs.container),this.graph.popupMenuHandler.factoryMethod=function(e){e.addItem("输出所有节点",null,(function(){Object.values(t.graph.getModel().cells).forEach((function(t){console.log(t)}))}))},this.graph.setPanning(!0),this.graph.setTooltips(!1),this.graph.setConnectable(!1),this.graph.setCellsEditable(!1),this.graph.setCellsResizable(!1),s["l"].prototype.scaleGrid=!1,s["l"].prototype.guidesEnabled=!1,s["l"].prototype.useGuidesForEvent=function(t){return!s["h"].isAltDown(t.getEvent())},this.graph.setEnabled(!1)},configureStylesheet:function(t){t.vertexLabelsMovable=!1,new s["c"](t,"#409eff");var e=new Object;e[s["f"].STYLE_SHAPE]=s["f"].SHAPE_LABEL,e[s["f"].STYLE_PERIMETER]=s["m"].RectanglePerimeter,e[s["f"].STYLE_VERTICAL_ALIGN]=s["f"].ALIGN_CENTER,e[s["f"].STYLE_ALIGN]=s["f"].ALIGN_CENTER,e[s["f"].STYLE_IMAGE_ALIGN]=s["f"].ALIGN_CENTER,e[s["f"].STYLE_IMAGE_VERTICAL_ALIGN]=s["f"].ALIGN_CENTER,e[s["f"].STYLE_SPACING_LEFT]=5,e[s["f"].STYLE_STROKECOLOR]="#5d65df",e[s["f"].STYLE_FILLCOLOR]="#FFFFFF",e[s["f"].STYLE_FONTCOLOR]="#1d258f",e[s["f"].STYLE_FONTFAMILY]="Verdana",e[s["f"].STYLE_FONTSIZE]="12",e[s["f"].STYLE_FONTSTYLE]="0",e[s["f"].STYLE_ROUNDED]=!1,e[s["f"].STYLE_IMAGE_WIDTH]="28",e[s["f"].STYLE_IMAGE_HEIGHT]="28",e[s["f"].STYLE_OPACITY]="100",t.getStylesheet().putDefaultVertexStyle(e),e=new Object,e[s["f"].STYLE_SHAPE]=s["f"].SHAPE_SWIMLANE,e[s["f"].STYLE_PERIMETER]=s["m"].RectanglePerimeter,e[s["f"].STYLE_ALIGN]=s["f"].ALIGN_CENTER,e[s["f"].STYLE_VERTICAL_ALIGN]=s["f"].ALIGN_TOP,e[s["f"].STYLE_FILLCOLOR]="#409eff",e[s["f"].STYLE_STROKECOLOR]="#409eff",e[s["f"].STYLE_FONTCOLOR]="#000000",e[s["f"].STYLE_ROUNDED]=!1,e[s["f"].STYLE_OPACITY]="80",e[s["f"].STYLE_STARTSIZE]="30",e[s["f"].STYLE_FONTSIZE]="16",e[s["f"].STYLE_FONTSTYLE]=1,t.getStylesheet().putCellStyle("group",e),e=new Object,e[s["f"].STYLE_SHAPE]=s["f"].SHAPE_IMAGE,e[s["f"].STYLE_FONTCOLOR]="#774400",e[s["f"].STYLE_PERIMETER]=s["m"].RectanglePerimeter,e[s["f"].STYLE_PERIMETER_SPACING]="6",e[s["f"].STYLE_ALIGN]=s["f"].ALIGN_LEFT,e[s["f"].STYLE_VERTICAL_ALIGN]=s["f"].ALIGN_MIDDLE,e[s["f"].STYLE_FONTSIZE]="10",e[s["f"].STYLE_FONTSTYLE]=2,e[s["f"].STYLE_IMAGE_WIDTH]="16",e[s["f"].STYLE_IMAGE_HEIGHT]="16",e[s["f"].STYLE_BACKGROUNDCOLOR]="transparent",t.getStylesheet().putCellStyle("port",e),e=t.getStylesheet().getDefaultEdgeStyle(),e[s["f"].STYLE_LABEL_BACKGROUNDCOLOR]="#FFFFFF",e[s["f"].STYLE_STROKEWIDTH]="2",e[s["f"].STYLE_ROUNDED]=!1;var o=this.graph.getStylesheet().getDefaultEdgeStyle();o["edgeStyle"]="orthogonalEdgeStyle",s["f"].STYLE_WHITE_SPACE="wrap",s["f"].HANDLE_FILLCOLOR="#99ccff",s["f"].HANDLE_STROKECOLOR="#0088cf",s["f"].STYLE_ANCHOR_POINT_DIRECTION="anchorPointDirection",s["f"].STYLE_STYLE_ROTATION="rotation"},zoomIn:function(){this.graph.zoomIn()},zoomOut:function(){this.graph.zoomOut()},autoSize:function(){this.editor.execute("actualSize")},showImage:function(){this.editor.execute("show")},uploadPaintFlow:function(t){var e=this;this.graph.selectAll(),this.graph.removeCells(this.graph.getSelectionCells()),setTimeout((function(){e.decode(t,e.graph),e.$message.success("渲染成功")}),1e3)},createXmlDom:function(t){if(document.all){var e=new s["a"]("Microsoft.XMLDOM");return e.loadXML(t),e}return(new DOMParser).parseFromString(t,"text/xml")},decode:function(t,e){this.graph.getModel().beginUpdate();try{var o=this.createXmlDom(t),n=o.documentElement,i=new s["e"](n.ownerDocument);i.decode(n,e.getModel())}finally{this.graph.getModel().endUpdate()}},outPutXml:function(){this.isOutputXml=!0,this.graphXml=this.encode(this.graph)},encode:function(t){var e=new s["e"],o=e.encode(t.getModel());return s["o"].getPrettyXml(o)},loadFlowCase:function(t){var e=this,o="";switch(t){case 1:o=a;break;case 2:o=r;break;case 3:o=c;break}var n=s["o"].load(o).request.response;this.graph.selectAll(),this.graph.removeCells(this.graph.getSelectionCells()),setTimeout((function(){e.decode(n,e.graph),e.$message.success("加载流程图案例成功")}),1e3)}},mounted:function(){s["d"].isBrowserSupported()?(s["k"].prototype.getAllConnectionConstraints=function(t){if(null!=t&&null!=t.shape)if(null!=t.shape.stencil){if(null!=t.shape.stencil.constraints)return t.shape.stencil.constraints}else if(null!=t.shape.constraints)return t.shape.constraints;return null},this.createGraph(),this.initGraph(),this.configOption()):this.$message.error("当前浏览器不支持拓扑图功能，请更换浏览器访问，建议使用Chrome浏览器访问!")}},u=f,h=(o("d88e"),o("2877")),p=Object(h["a"])(u,n,i,!1,null,null,null);e["default"]=p.exports}}]);
//# sourceMappingURL=renderModel-chunk.0e2f72ac.js.map