/*!
* TableSorter 2.16.1-beta min - Client-side table sorting with ease!
* Copyright (c) 2007 Christian Bach
*/
!function(g){g.extend({tablesorter:new function(){function d(){var a=arguments[0],b=1<arguments.length?Array.prototype.slice.call(arguments):a;if("undefined"!==typeof console&&"undefined"!==typeof console.log)console[/error/i.test(a)?"error":/warn/i.test(a)?"warn":"log"](b);else alert(b)}function u(a,b){d(a+" ("+((new Date).getTime()-b.getTime())+"ms)")}function m(a){for(var b in a)return!1;return!0}function p(a,b,c){if(!b)return"";var h=a.config,e=h.textExtraction||"",n="",n="basic"===e?g(b).attr(h.textAttribute)|| b.textContent||b.innerText||g(b).text()||"":"function"===typeof e?e(b,a,c):"object"===typeof e&&e.hasOwnProperty(c)?e[c](b,a,c):b.textContent||b.innerText||g(b).text()||"";return g.trim(n)}function r(a){var b=a.config,c=b.$tbodies=b.$table.children("tbody:not(."+b.cssInfoBlock+")"),h,e,n,k,s,l,g,m="";if(0===c.length)return b.debug?d("Warning: *Empty table!* Not building a parser cache"):"";b.debug&&(g=new Date,d("Detecting parsers for each column"));c=c[0].rows;if(c[0])for(h=[],e=c[0].cells.length, n=0;n<e;n++){k=b.$headers.filter(":not([colspan])");k=k.add(b.$headers.filter('[colspan="1"]')).filter('[data-column="'+n+'"]:last');s=b.headers[n];l=f.getParserById(f.getData(k,s,"sorter"));b.empties[n]=f.getData(k,s,"empty")||b.emptyTo||(b.emptyToBottom?"bottom":"top");b.strings[n]=f.getData(k,s,"string")||b.stringTo||"max";if(!l)a:{k=a;s=c;l=-1;for(var x=n,q=void 0,t=f.parsers.length,r=!1,v="",q=!0;""===v&&q;)l++,s[l]?(r=s[l].cells[x],v=p(k,r,x),k.config.debug&&d("Checking if value was empty on row "+ l+", column: "+x+': "'+v+'"')):q=!1;for(;0<=--t;)if((q=f.parsers[t])&&"text"!==q.id&&q.is&&q.is(v,k,r)){l=q;break a}l=f.getParserById("text")}b.debug&&(m+="column:"+n+"; parser:"+l.id+"; string:"+b.strings[n]+"; empty: "+b.empties[n]+"\n");h.push(l)}b.debug&&(d(m),u("Completed detecting parsers",g));b.parsers=h}function v(a){var b,c,h,e,n,k,s,l,y,m,x,q=a.config,t=q.$table.children("tbody"),r=q.parsers;q.cache={};if(!r)return q.debug?d("Warning: *Empty table!* Not building a cache"):"";q.debug&&(l= new Date);q.showProcessing&&f.isProcessing(a,!0);for(n=0;n<t.length;n++)if(x=[],b=q.cache[n]={normalized:[]},!t.eq(n).hasClass(q.cssInfoBlock)){y=t[n]&&t[n].rows.length||0;for(h=0;h<y;++h)if(m={child:[]},k=g(t[n].rows[h]),s=[],k.hasClass(q.cssChildRow)&&0!==h)c=b.normalized.length-1,b.normalized[c][q.columns].$row=b.normalized[c][q.columns].$row.add(k),k.prev().hasClass(q.cssChildRow)||k.prev().addClass(f.css.cssHasChild),m.child[c]=g.trim(k[0].textContent||k[0].innerText||k.text()||"");else{m.$row= k;m.order=h;for(e=0;e<q.columns;++e)"undefined"===typeof r[e]?q.debug&&d("No parser found for cell:",k[0].cells[e],"does it have a header?"):(c=p(a,k[0].cells[e],e),c=r[e].format(c,a,k[0].cells[e],e),s.push(c),"numeric"===(r[e].type||"").toLowerCase()&&(x[e]=Math.max(Math.abs(c)||0,x[e]||0)));s.push(m);b.normalized.push(s)}b.colMax=x}q.showProcessing&&f.isProcessing(a);q.debug&&u("Building cache for "+y+" rows",l)}function z(a,b){var c=a.config,h=c.widgetOptions,e=a.tBodies,n=[],k=c.cache,d,l,y,p, x,q;if(m(k))return c.appender?c.appender(a,n):a.isUpdating?c.$table.trigger("updateComplete",a):"";c.debug&&(q=new Date);for(x=0;x<e.length;x++)if(d=g(e[x]),d.length&&!d.hasClass(c.cssInfoBlock)){y=f.processTbody(a,d,!0);d=k[x].normalized;l=d.length;for(p=0;p<l;p++)n.push(d[p][c.columns].$row),c.appender&&(!c.pager||c.pager.removeRows&&h.pager_removeRows||c.pager.ajax)||y.append(d[p][c.columns].$row);f.processTbody(a,y,!1)}c.appender&&c.appender(a,n);c.debug&&u("Rebuilt table",q);b||c.appender||f.applyWidget(a); a.isUpdating&&c.$table.trigger("updateComplete",a)}function B(a){return/^d/i.test(a)||1===a}function C(a){var b,c,h,e,n,k,s,l=a.config;l.headerList=[];l.headerContent=[];l.debug&&(s=new Date);l.columns=f.computeColumnIndex(l.$table.children("thead, tfoot").children("tr"));e=l.cssIcon?'<i class="'+(l.cssIcon===f.css.icon?f.css.icon:l.cssIcon+" "+f.css.icon)+'"></i>':"";l.$headers=g(a).find(l.selectorHeaders).each(function(a){c=g(this);b=l.headers[a];l.headerContent[a]=g(this).html();n=l.headerTemplate.replace(/\{content\}/g, g(this).html()).replace(/\{icon\}/g,e);l.onRenderTemplate&&(h=l.onRenderTemplate.apply(c,[a,n]))&&"string"===typeof h&&(n=h);g(this).html('<div class="'+f.css.headerIn+'">'+n+"</div>");l.onRenderHeader&&l.onRenderHeader.apply(c,[a]);this.column=parseInt(g(this).attr("data-column"),10);this.order=B(f.getData(c,b,"sortInitialOrder")||l.sortInitialOrder)?[1,0,2]:[0,1,2];this.count=-1;this.lockedOrder=!1;k=f.getData(c,b,"lockedOrder")||!1;"undefined"!==typeof k&&!1!==k&&(this.order=this.lockedOrder=B(k)? [1,1,1]:[0,0,0]);c.addClass(f.css.header+" "+l.cssHeader);l.headerList[a]=this;c.parent().addClass(f.css.headerRow+" "+l.cssHeaderRow).attr("role","row");l.tabIndex&&c.attr("tabindex",0)}).attr({scope:"col",role:"columnheader"});A(a);l.debug&&(u("Built headers:",s),d(l.$headers))}function D(a,b,c){var h=a.config;h.$table.find(h.selectorRemove).remove();r(a);v(a);F(h.$table,b,c)}function A(a){var b,c,h=a.config;h.$headers.each(function(e,n){c=g(n);b="false"===f.getData(n,h.headers[e],"sorter");n.sortDisabled= b;c[b?"addClass":"removeClass"]("sorter-false").attr("aria-disabled",""+b);a.id&&(b?c.removeAttr("aria-controls"):c.attr("aria-controls",a.id))})}function E(a){var b,c,h,e=a.config,n=e.sortList,d=f.css.sortNone+" "+e.cssNone,s=[f.css.sortAsc+" "+e.cssAsc,f.css.sortDesc+" "+e.cssDesc],l=["ascending","descending"],m=g(a).find("tfoot tr").children().removeClass(s.join(" "));e.$headers.removeClass(s.join(" ")).addClass(d).attr("aria-sort","none");h=n.length;for(b=0;b<h;b++)if(2!==n[b][1]&&(a=e.$headers.not(".sorter-false").filter('[data-column="'+ n[b][0]+'"]'+(1===h?":last":"")),a.length))for(c=0;c<a.length;c++)a[c].sortDisabled||(a.eq(c).removeClass(d).addClass(s[n[b][1]]).attr("aria-sort",l[n[b][1]]),m.length&&m.filter('[data-column="'+n[b][0]+'"]').eq(c).addClass(s[n[b][1]]));e.$headers.not(".sorter-false").each(function(){var a=g(this),b=this.order[(this.count+1)%(e.sortReset?3:2)],b=a.text()+": "+f.language[a.hasClass(f.css.sortAsc)?"sortAsc":a.hasClass(f.css.sortDesc)?"sortDesc":"sortNone"]+f.language[0===b?"nextAsc":1===b?"nextDesc": "nextNone"];a.attr("aria-label",b)})}function J(a){if(a.config.widthFixed&&0===g(a).find("colgroup").length){var b=g("<colgroup>"),c=g(a).width();g(a.tBodies[0]).find("tr:first").children("td:visible").each(function(){b.append(g("<col>").css("width",parseInt(g(this).width()/c*1E3,10)/10+"%"))});g(a).prepend(b)}}function K(a,b){var c,h,e,n=a.config,f=b||n.sortList;n.sortList=[];g.each(f,function(a,b){c=[parseInt(b[0],10),parseInt(b[1],10)];if(e=n.$headers[c[0]])n.sortList.push(c),h=g.inArray(c[1], e.order),e.count=0<=h?h:c[1]%(n.sortReset?3:2)})}function L(a,b){return a&&a[b]?a[b].type||"":""}function M(a,b,c){var h,e,n,d=a.config,s=!c[d.sortMultiSortKey],l=d.$table;l.trigger("sortStart",a);b.count=c[d.sortResetKey]?2:(b.count+1)%(d.sortReset?3:2);d.sortRestart&&(e=b,d.$headers.each(function(){this===e||!s&&g(this).is("."+f.css.sortDesc+",."+f.css.sortAsc)||(this.count=-1)}));e=b.column;if(s){d.sortList=[];if(null!==d.sortForce)for(h=d.sortForce,c=0;c<h.length;c++)h[c][0]!==e&&d.sortList.push(h[c]); h=b.order[b.count];if(2>h&&(d.sortList.push([e,h]),1<b.colSpan))for(c=1;c<b.colSpan;c++)d.sortList.push([e+c,h])}else{if(d.sortAppend&&1<d.sortList.length)for(c=0;c<d.sortAppend.length;c++)n=f.isValueInArray(d.sortAppend[c][0],d.sortList),0<=n&&d.sortList.splice(n,1);if(0<=f.isValueInArray(e,d.sortList))for(c=0;c<d.sortList.length;c++)n=d.sortList[c],h=d.$headers[n[0]],n[0]===e&&(n[1]=h.order[b.count],2===n[1]&&(d.sortList.splice(c,1),h.count=-1));else if(h=b.order[b.count],2>h&&(d.sortList.push([e, h]),1<b.colSpan))for(c=1;c<b.colSpan;c++)d.sortList.push([e+c,h])}if(null!==d.sortAppend)for(h=d.sortAppend,c=0;c<h.length;c++)h[c][0]!==e&&d.sortList.push(h[c]);l.trigger("sortBegin",a);setTimeout(function(){E(a);G(a);z(a);l.trigger("sortEnd",a)},1)}function G(a){var b,c,h,e,d,k,g,l,y,p,r,q=0,t=a.config,w=t.textSorter||"",v=t.sortList,z=v.length,A=a.tBodies.length;if(!t.serverSideSorting&&!m(t.cache)){t.debug&&(d=new Date);for(c=0;c<A;c++)k=t.cache[c].colMax,g=t.cache[c].normalized,g.sort(function(c, d){for(b=0;b<z;b++){e=v[b][0];l=v[b][1];q=0===l;if(t.sortStable&&c[e]===d[e]&&1===z)break;(h=/n/i.test(L(t.parsers,e)))&&t.strings[e]?(h="boolean"===typeof t.string[t.strings[e]]?(q?1:-1)*(t.string[t.strings[e]]?-1:1):t.strings[e]?t.string[t.strings[e]]||0:0,y=t.numberSorter?t.numberSorter(c[e],d[e],q,k[e],a):f["sortNumeric"+(q?"Asc":"Desc")](c[e],d[e],h,k[e],e,a)):(p=q?c:d,r=q?d:c,y="function"===typeof w?w(p[e],r[e],q,e,a):"object"===typeof w&&w.hasOwnProperty(e)?w[e](p[e],r[e],q,e,a):f["sortNatural"+ (q?"Asc":"Desc")](c[e],d[e],e,a,t));if(y)return y}return c[t.columns].order-d[t.columns].order});t.debug&&u("Sorting on "+v.toString()+" and dir "+l+" time",d)}}function H(a,b){a[0].isUpdating&&a.trigger("updateComplete");g.isFunction(b)&&b(a[0])}function F(a,b,c){var h=a[0].config.sortList;!1!==b&&!a[0].isProcessing&&h.length?a.trigger("sorton",[h,function(){H(a,c)},!0]):(H(a,c),f.applyWidget(a[0],!1))}function I(a){var b=a.config,c=b.$table;c.unbind("sortReset update updateRows updateCell updateAll addRows updateComplete sorton appendCache updateCache applyWidgetId applyWidgets refreshWidgets destroy mouseup mouseleave ".split(" ").join(b.namespace+ " ")).bind("sortReset"+b.namespace,function(c,e){c.stopPropagation();b.sortList=[];E(a);G(a);z(a);g.isFunction(e)&&e(a)}).bind("updateAll"+b.namespace,function(c,e,d){c.stopPropagation();a.isUpdating=!0;f.refreshWidgets(a,!0,!0);f.restoreHeaders(a);C(a);f.bindEvents(a,b.$headers);I(a);D(a,e,d)}).bind("update"+b.namespace+" updateRows"+b.namespace,function(b,c,d){b.stopPropagation();a.isUpdating=!0;A(a);D(a,c,d)}).bind("updateCell"+b.namespace,function(h,e,d,f){h.stopPropagation();a.isUpdating=!0; c.find(b.selectorRemove).remove();var s,l;s=c.find("tbody");l=g(e);h=s.index(l.parents("tbody").filter(":first"));var m=l.parents("tr").filter(":first");e=l[0];s.length&&0<=h&&(s=s.eq(h).find("tr").index(m),l=l.index(),b.cache[h].normalized[s][b.columns].$row=m,e=b.cache[h].normalized[s][l]=b.parsers[l].format(p(a,e,l),a,e,l),"numeric"===(b.parsers[l].type||"").toLowerCase()&&(b.cache[h].colMax[l]=Math.max(Math.abs(e)||0,b.cache[h].colMax[l]||0)),F(c,d,f))}).bind("addRows"+b.namespace,function(h, e,d,f){h.stopPropagation();a.isUpdating=!0;if(m(b.cache))A(a),D(a,d,f);else{var g,l,u,v,x=e.filter("tr").length,q=c.find("tbody").index(e.parents("tbody").filter(":first"));b.parsers||r(a);for(h=0;h<x;h++){l=e[h].cells.length;v=[];u={child:[],$row:e.eq(h),order:b.cache[q].normalized.length};for(g=0;g<l;g++)v[g]=b.parsers[g].format(p(a,e[h].cells[g],g),a,e[h].cells[g],g),"numeric"===(b.parsers[g].type||"").toLowerCase()&&(b.cache[q].colMax[g]=Math.max(Math.abs(v[g])||0,b.cache[q].colMax[g]||0));v.push(u); b.cache[q].normalized.push(v)}F(c,d,f)}}).bind("updateComplete"+b.namespace,function(){a.isUpdating=!1}).bind("sorton"+b.namespace,function(b,e,d,k){var s=a.config;b.stopPropagation();c.trigger("sortStart",this);K(a,e);E(a);s.delayInit&&m(s.cache)&&v(a);c.trigger("sortBegin",this);G(a);z(a,k);c.trigger("sortEnd",this);f.applyWidget(a);g.isFunction(d)&&d(a)}).bind("appendCache"+b.namespace,function(b,c,d){b.stopPropagation();z(a,d);g.isFunction(c)&&c(a)}).bind("updateCache"+b.namespace,function(c, e){b.parsers||r(a);v(a);g.isFunction(e)&&e(a)}).bind("applyWidgetId"+b.namespace,function(c,e){c.stopPropagation();f.getWidgetById(e).format(a,b,b.widgetOptions)}).bind("applyWidgets"+b.namespace,function(b,c){b.stopPropagation();f.applyWidget(a,c)}).bind("refreshWidgets"+b.namespace,function(b,c,d){b.stopPropagation();f.refreshWidgets(a,c,d)}).bind("destroy"+b.namespace,function(b,c,d){b.stopPropagation();f.destroy(a,c,d)})}var f=this;f.version="2.16.1-beta";f.parsers=[];f.widgets=[];f.defaults= {theme:"default",widthFixed:!1,showProcessing:!1,headerTemplate:"{content}",onRenderTemplate:null,onRenderHeader:null,cancelSelection:!0,tabIndex:!0,dateFormat:"mmddyyyy",sortMultiSortKey:"shiftKey",sortResetKey:"ctrlKey",usNumberFormat:!0,delayInit:!1,serverSideSorting:!1,headers:{},ignoreCase:!0,sortForce:null,sortList:[],sortAppend:null,sortStable:!1,sortInitialOrder:"asc",sortLocaleCompare:!1,sortReset:!1,sortRestart:!1,emptyTo:"bottom",stringTo:"max",textExtraction:"basic",textAttribute:"data-text", textSorter:null,numberSorter:null,widgets:[],widgetOptions:{zebra:["even","odd"]},initWidgets:!0,initialized:null,tableClass:"",cssAsc:"",cssDesc:"",cssNone:"",cssHeader:"",cssHeaderRow:"",cssProcessing:"",cssChildRow:"tablesorter-childRow",cssIcon:"tablesorter-icon",cssInfoBlock:"tablesorter-infoOnly",selectorHeaders:"> thead th, > thead td",selectorSort:"th, td",selectorRemove:".remove-me",debug:!1,headerList:[],empties:{},strings:{},parsers:[]};f.css={table:"tablesorter",cssHasChild:"tablesorter-hasChildRow", childRow:"tablesorter-childRow",header:"tablesorter-header",headerRow:"tablesorter-headerRow",headerIn:"tablesorter-header-inner",icon:"tablesorter-icon",info:"tablesorter-infoOnly",processing:"tablesorter-processing",sortAsc:"tablesorter-headerAsc",sortDesc:"tablesorter-headerDesc",sortNone:"tablesorter-headerUnSorted"};f.language={sortAsc:"Ascending sort applied, ",sortDesc:"Descending sort applied, ",sortNone:"No sort applied, ",nextAsc:"activate to apply an ascending sort",nextDesc:"activate to apply a descending sort", nextNone:"activate to remove the sort"};f.log=d;f.benchmark=u;f.construct=function(a){return this.each(function(){var b=g.extend(!0,{},f.defaults,a);!this.hasInitialized&&f.buildTable&&"TABLE"!==this.tagName?f.buildTable(this,b):f.setup(this,b)})};f.setup=function(a,b){if(!a||!a.tHead||0===a.tBodies.length||!0===a.hasInitialized)return b.debug?d("ERROR: stopping initialization! No table, thead, tbody or tablesorter has already been initialized"):"";var c="",h=g(a),e=g.metadata;a.hasInitialized=!1; a.isProcessing=!0;a.config=b;g.data(a,"tablesorter",b);b.debug&&g.data(a,"startoveralltimer",new Date);b.supportsDataObject=function(a){a[0]=parseInt(a[0],10);return 1<a[0]||1===a[0]&&4<=parseInt(a[1],10)}(g.fn.jquery.split("."));b.string={max:1,min:-1,"max+":1,"max-":-1,zero:0,none:0,"null":0,top:!0,bottom:!1};/tablesorter\-/.test(h.attr("class"))||(c=""!==b.theme?" tablesorter-"+b.theme:"");b.$table=h.addClass(f.css.table+" "+b.tableClass+c).attr({role:"grid"});b.namespace=b.namespace?"."+b.namespace.replace(/\W/g, ""):".tablesorter"+Math.random().toString(16).slice(2);b.$tbodies=h.children("tbody:not(."+b.cssInfoBlock+")").attr({"aria-live":"polite","aria-relevant":"all"});b.$table.find("caption").length&&b.$table.attr("aria-labelledby","theCaption");b.widgetInit={};b.textExtraction=b.$table.attr("data-text-extraction")||b.textExtraction||"basic";C(a);J(a);r(a);b.delayInit||v(a);f.bindEvents(a,b.$headers);I(a);b.supportsDataObject&&"undefined"!==typeof h.data().sortlist?b.sortList=h.data().sortlist:e&&h.metadata()&& h.metadata().sortlist&&(b.sortList=h.metadata().sortlist);f.applyWidget(a,!0);0<b.sortList.length?h.trigger("sorton",[b.sortList,{},!b.initWidgets,!0]):(E(a),b.initWidgets&&f.applyWidget(a,!1));b.showProcessing&&h.unbind("sortBegin"+b.namespace+" sortEnd"+b.namespace).bind("sortBegin"+b.namespace+" sortEnd"+b.namespace,function(b){f.isProcessing(a,"sortBegin"===b.type)});a.hasInitialized=!0;a.isProcessing=!1;b.debug&&f.benchmark("Overall initialization time",g.data(a,"startoveralltimer"));h.trigger("tablesorter-initialized", a);"function"===typeof b.initialized&&b.initialized(a)};f.computeColumnIndex=function(a){var b=[],c=0,d,e,f,k,m,l,u,p,r,q;for(d=0;d<a.length;d++)for(m=a[d].cells,e=0;e<m.length;e++){f=m[e];k=g(f);l=f.parentNode.rowIndex;k.index();u=f.rowSpan||1;p=f.colSpan||1;"undefined"===typeof b[l]&&(b[l]=[]);for(f=0;f<b[l].length+1;f++)if("undefined"===typeof b[l][f]){r=f;break}c=Math.max(r,c);k.attr({"data-column":r});for(f=l;f<l+u;f++)for("undefined"===typeof b[f]&&(b[f]=[]),q=b[f],k=r;k<r+p;k++)q[k]="x"}return c+ 1};f.isProcessing=function(a,b,c){a=g(a);var d=a[0].config;a=c||a.find("."+f.css.header);b?("undefined"!==typeof c&&0<d.sortList.length&&(a=a.filter(function(){return this.sortDisabled?!1:0<=f.isValueInArray(parseFloat(g(this).attr("data-column")),d.sortList)})),a.addClass(f.css.processing+" "+d.cssProcessing)):a.removeClass(f.css.processing+" "+d.cssProcessing)};f.processTbody=function(a,b,c){a=g(a)[0];if(c)return a.isProcessing=!0,b.before('<span class="tablesorter-savemyplace"/>'),c=g.fn.detach? b.detach():b.remove();c=g(a).find("span.tablesorter-savemyplace");b.insertAfter(c);c.remove();a.isProcessing=!1};f.clearTableBody=function(a){g(a)[0].config.$tbodies.empty()};f.bindEvents=function(a,b){a=g(a)[0];var c,d=a.config;b.find(d.selectorSort).add(b.filter(d.selectorSort)).unbind(["mousedown","mouseup","sort","keyup",""].join(d.namespace+" ")).bind(["mousedown","mouseup","sort","keyup",""].join(d.namespace+" "),function(e,f){var k;k=e.type;if(!(1!==(e.which||e.button)&&!/sort|keyup/.test(k)|| "keyup"===k&&13!==e.which||"mouseup"===k&&!0!==f&&250<(new Date).getTime()-c)){if("mousedown"===k)return c=(new Date).getTime(),"INPUT"===e.target.tagName?"":!d.cancelSelection;d.delayInit&&m(d.cache)&&v(a);k=/TH|TD/.test(this.tagName)?this:g(this).parents("th, td")[0];k=d.$headers[b.index(k)];k.sortDisabled||M(a,k,e)}});d.cancelSelection&&b.attr("unselectable","on").bind("selectstart",!1).css({"user-select":"none",MozUserSelect:"none"})};f.restoreHeaders=function(a){var b=g(a)[0].config;b.$table.find(b.selectorHeaders).each(function(a){g(this).find("."+ f.css.headerIn).length&&g(this).html(b.headerContent[a])})};f.destroy=function(a,b,c){a=g(a)[0];if(a.hasInitialized){f.refreshWidgets(a,!0,!0);var d=g(a),e=a.config,n=d.find("thead:first"),k=n.find("tr."+f.css.headerRow).removeClass(f.css.headerRow+" "+e.cssHeaderRow),m=d.find("tfoot:first > tr").children("th, td");!1===b&&0<=g.inArray("uitheme",e.widgets)&&(d.trigger("applyWidgetId",["uitheme"]),d.trigger("applyWidgetId",["zebra"]));n.find("tr").not(k).remove();d.removeData("tablesorter").unbind("sortReset update updateAll updateRows updateCell addRows updateComplete sorton appendCache updateCache applyWidgetId applyWidgets refreshWidgets destroy mouseup mouseleave keypress sortBegin sortEnd ".split(" ").join(e.namespace+ " "));e.$headers.add(m).removeClass([f.css.header,e.cssHeader,e.cssAsc,e.cssDesc,f.css.sortAsc,f.css.sortDesc,f.css.sortNone].join(" ")).removeAttr("data-column").removeAttr("aria-label").attr("aria-disabled","true");k.find(e.selectorSort).unbind(["mousedown","mouseup","keypress",""].join(e.namespace+" "));f.restoreHeaders(a);d.toggleClass(f.css.table+" "+e.tableClass+" tablesorter-"+e.theme,!1===b);a.hasInitialized=!1;delete a.config.cache;"function"===typeof c&&c(a)}};f.regex={chunk:/(^([+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?)?$|^0x[0-9a-f]+$|\d+)/gi, chunks:/(^\\0|\\0$)/,hex:/^0x[0-9a-f]+$/i};f.sortNatural=function(a,b){if(a===b)return 0;var c,d,e,g,k,m;d=f.regex;if(d.hex.test(b)){c=parseInt(a.match(d.hex),16);e=parseInt(b.match(d.hex),16);if(c<e)return-1;if(c>e)return 1}c=a.replace(d.chunk,"\\0$1\\0").replace(d.chunks,"").split("\\0");d=b.replace(d.chunk,"\\0$1\\0").replace(d.chunks,"").split("\\0");m=Math.max(c.length,d.length);for(k=0;k<m;k++){e=isNaN(c[k])?c[k]||0:parseFloat(c[k])||0;g=isNaN(d[k])?d[k]||0:parseFloat(d[k])||0;if(isNaN(e)!== isNaN(g))return isNaN(e)?1:-1;typeof e!==typeof g&&(e+="",g+="");if(e<g)return-1;if(e>g)return 1}return 0};f.sortNaturalAsc=function(a,b,c,d,e){if(a===b)return 0;c=e.string[e.empties[c]||e.emptyTo];return""===a&&0!==c?"boolean"===typeof c?c?-1:1:-c||-1:""===b&&0!==c?"boolean"===typeof c?c?1:-1:c||1:f.sortNatural(a,b)};f.sortNaturalDesc=function(a,b,c,d,e){if(a===b)return 0;c=e.string[e.empties[c]||e.emptyTo];return""===a&&0!==c?"boolean"===typeof c?c?-1:1:c||1:""===b&&0!==c?"boolean"===typeof c?c? 1:-1:-c||-1:f.sortNatural(b,a)};f.sortText=function(a,b){return a>b?1:a<b?-1:0};f.getTextValue=function(a,b,c){if(c){var d=a?a.length:0,e=c+b;for(c=0;c<d;c++)e+=a.charCodeAt(c);return b*e}return 0};f.sortNumericAsc=function(a,b,c,d,e,g){if(a===b)return 0;g=g.config;e=g.string[g.empties[e]||g.emptyTo];if(""===a&&0!==e)return"boolean"===typeof e?e?-1:1:-e||-1;if(""===b&&0!==e)return"boolean"===typeof e?e?1:-1:e||1;isNaN(a)&&(a=f.getTextValue(a,c,d));isNaN(b)&&(b=f.getTextValue(b,c,d));return a-b};f.sortNumericDesc= function(a,b,c,d,e,g){if(a===b)return 0;g=g.config;e=g.string[g.empties[e]||g.emptyTo];if(""===a&&0!==e)return"boolean"===typeof e?e?-1:1:e||1;if(""===b&&0!==e)return"boolean"===typeof e?e?1:-1:-e||-1;isNaN(a)&&(a=f.getTextValue(a,c,d));isNaN(b)&&(b=f.getTextValue(b,c,d));return b-a};f.sortNumeric=function(a,b){return a-b};f.characterEquivalents={a:"\u00e1\u00e0\u00e2\u00e3\u00e4\u0105\u00e5",A:"\u00c1\u00c0\u00c2\u00c3\u00c4\u0104\u00c5",c:"\u00e7\u0107\u010d",C:"\u00c7\u0106\u010c",e:"\u00e9\u00e8\u00ea\u00eb\u011b\u0119", E:"\u00c9\u00c8\u00ca\u00cb\u011a\u0118",i:"\u00ed\u00ec\u0130\u00ee\u00ef\u0131",I:"\u00cd\u00cc\u0130\u00ce\u00cf",o:"\u00f3\u00f2\u00f4\u00f5\u00f6",O:"\u00d3\u00d2\u00d4\u00d5\u00d6",ss:"\u00df",SS:"\u1e9e",u:"\u00fa\u00f9\u00fb\u00fc\u016f",U:"\u00da\u00d9\u00db\u00dc\u016e"};f.replaceAccents=function(a){var b,c="[",d=f.characterEquivalents;if(!f.characterRegex){f.characterRegexArray={};for(b in d)"string"===typeof b&&(c+=d[b],f.characterRegexArray[b]=RegExp("["+d[b]+"]","g"));f.characterRegex= RegExp(c+"]")}if(f.characterRegex.test(a))for(b in d)"string"===typeof b&&(a=a.replace(f.characterRegexArray[b],b));return a};f.isValueInArray=function(a,b){var c,d=b.length;for(c=0;c<d;c++)if(b[c][0]===a)return c;return-1};f.addParser=function(a){var b,c=f.parsers.length,d=!0;for(b=0;b<c;b++)f.parsers[b].id.toLowerCase()===a.id.toLowerCase()&&(d=!1);d&&f.parsers.push(a)};f.getParserById=function(a){var b,c=f.parsers.length;for(b=0;b<c;b++)if(f.parsers[b].id.toLowerCase()===a.toString().toLowerCase())return f.parsers[b]; return!1};f.addWidget=function(a){f.widgets.push(a)};f.getWidgetById=function(a){var b,c,d=f.widgets.length;for(b=0;b<d;b++)if((c=f.widgets[b])&&c.hasOwnProperty("id")&&c.id.toLowerCase()===a.toLowerCase())return c};f.applyWidget=function(a,b){a=g(a)[0];var c=a.config,d=c.widgetOptions,e=[],n,k,m;!1!==b&&a.hasInitialized&&(a.isApplyingWidgets||a.isUpdating)||(c.debug&&(n=new Date),c.widgets.length&&(a.isApplyingWidgets=!0,c.widgets=g.grep(c.widgets,function(a,b){return g.inArray(a,c.widgets)===b}), g.each(c.widgets||[],function(a,b){(m=f.getWidgetById(b))&&m.id&&(m.priority||(m.priority=10),e[a]=m)}),e.sort(function(a,b){return a.priority<b.priority?-1:a.priority===b.priority?0:1}),g.each(e,function(e,f){if(f){if(b||!c.widgetInit[f.id])f.hasOwnProperty("options")&&(d=a.config.widgetOptions=g.extend(!0,{},f.options,d)),f.hasOwnProperty("init")&&f.init(a,f,c,d),c.widgetInit[f.id]=!0;!b&&f.hasOwnProperty("format")&&f.format(a,c,d,!1)}})),setTimeout(function(){a.isApplyingWidgets=!1},0),c.debug&& (k=c.widgets.length,u("Completed "+(!0===b?"initializing ":"applying ")+k+" widget"+(1!==k?"s":""),n)))};f.refreshWidgets=function(a,b,c){a=g(a)[0];var h,e=a.config,n=e.widgets,k=f.widgets,m=k.length;for(h=0;h<m;h++)k[h]&&k[h].id&&(b||0>g.inArray(k[h].id,n))&&(e.debug&&d('Refeshing widgets: Removing "'+k[h].id+'"'),k[h].hasOwnProperty("remove")&&e.widgetInit[k[h].id]&&(k[h].remove(a,e,e.widgetOptions),e.widgetInit[k[h].id]=!1));!0!==c&&f.applyWidget(a,b)};f.getData=function(a,b,c){var d="";a=g(a); var e,f;if(!a.length)return"";e=g.metadata?a.metadata():!1;f=" "+(a.attr("class")||"");"undefined"!==typeof a.data(c)||"undefined"!==typeof a.data(c.toLowerCase())?d+=a.data(c)||a.data(c.toLowerCase()):e&&"undefined"!==typeof e[c]?d+=e[c]:b&&"undefined"!==typeof b[c]?d+=b[c]:" "!==f&&f.match(" "+c+"-")&&(d=f.match(RegExp("\\s"+c+"-([\\w-]+)"))[1]||"");return g.trim(d)};f.formatFloat=function(a,b){if("string"!==typeof a||""===a)return a;var c;a=(b&&b.config?!1!==b.config.usNumberFormat:"undefined"!== typeof b?b:1)?a.replace(/,/g,""):a.replace(/[\s|\.]/g,"").replace(/,/g,".");/^\s*\([.\d]+\)/.test(a)&&(a=a.replace(/^\s*\(([.\d]+)\)/,"-$1"));c=parseFloat(a);return isNaN(c)?g.trim(a):c};f.isDigit=function(a){return isNaN(a)?/^[\-+(]?\d+[)]?$/.test(a.toString().replace(/[,.'"\s]/g,"")):!0}}});var p=g.tablesorter;g.fn.extend({tablesorter:p.construct});p.addParser({id:"text",is:function(){return!0},format:function(d,u){var m=u.config;d&&(d=g.trim(m.ignoreCase?d.toLocaleLowerCase():d),d=m.sortLocaleCompare? p.replaceAccents(d):d);return d},type:"text"});p.addParser({id:"digit",is:function(d){return p.isDigit(d)},format:function(d,u){var m=p.formatFloat((d||"").replace(/[^\w,. \-()]/g,""),u);return d&&"number"===typeof m?m:d?g.trim(d&&u.config.ignoreCase?d.toLocaleLowerCase():d):d},type:"numeric"});p.addParser({id:"currency",is:function(d){return/^\(?\d+[\u00a3$\u20ac\u00a4\u00a5\u00a2?.]|[\u00a3$\u20ac\u00a4\u00a5\u00a2?.]\d+\)?$/.test((d||"").replace(/[+\-,. ]/g,""))},format:function(d,u){var m=p.formatFloat((d|| "").replace(/[^\w,. \-()]/g,""),u);return d&&"number"===typeof m?m:d?g.trim(d&&u.config.ignoreCase?d.toLocaleLowerCase():d):d},type:"numeric"});p.addParser({id:"ipAddress",is:function(d){return/^\d{1,3}[\.]\d{1,3}[\.]\d{1,3}[\.]\d{1,3}$/.test(d)},format:function(d,g){var m,w=d?d.split("."):"",r="",v=w.length;for(m=0;m<v;m++)r+=("00"+w[m]).slice(-3);return d?p.formatFloat(r,g):d},type:"numeric"});p.addParser({id:"url",is:function(d){return/^(https?|ftp|file):\/\//.test(d)},format:function(d){return d? g.trim(d.replace(/(https?|ftp|file):\/\//,"")):d},type:"text"});p.addParser({id:"isoDate",is:function(d){return/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}/.test(d)},format:function(d,g){return d?p.formatFloat(""!==d?(new Date(d.replace(/-/g,"/"))).getTime()||d:"",g):d},type:"numeric"});p.addParser({id:"percent",is:function(d){return/(\d\s*?%|%\s*?\d)/.test(d)&&15>d.length},format:function(d,g){return d?p.formatFloat(d.replace(/%/g,""),g):d},type:"numeric"});p.addParser({id:"usLongDate",is:function(d){return/^[A-Z]{3,10}\.?\s+\d{1,2},?\s+(\d{4})(\s+\d{1,2}:\d{2}(:\d{2})?(\s+[AP]M)?)?$/i.test(d)|| /^\d{1,2}\s+[A-Z]{3,10}\s+\d{4}/i.test(d)},format:function(d,g){return d?p.formatFloat((new Date(d.replace(/(\S)([AP]M)$/i,"$1 $2"))).getTime()||d,g):d},type:"numeric"});p.addParser({id:"shortDate",is:function(d){return/(^\d{1,2}[\/\s]\d{1,2}[\/\s]\d{4})|(^\d{4}[\/\s]\d{1,2}[\/\s]\d{1,2})/.test((d||"").replace(/\s+/g," ").replace(/[\-.,]/g,"/"))},format:function(d,g,m,w){if(d){m=g.config;var r=m.$headers.filter("[data-column="+w+"]:last");w=r.length&&r[0].dateFormat||p.getData(r,m.headers[w],"dateFormat")|| m.dateFormat;d=d.replace(/\s+/g," ").replace(/[\-.,]/g,"/");"mmddyyyy"===w?d=d.replace(/(\d{1,2})[\/\s](\d{1,2})[\/\s](\d{4})/,"$3/$1/$2"):"ddmmyyyy"===w?d=d.replace(/(\d{1,2})[\/\s](\d{1,2})[\/\s](\d{4})/,"$3/$2/$1"):"yyyymmdd"===w&&(d=d.replace(/(\d{4})[\/\s](\d{1,2})[\/\s](\d{1,2})/,"$1/$2/$3"))}return d?p.formatFloat((new Date(d)).getTime()||d,g):d},type:"numeric"});p.addParser({id:"time",is:function(d){return/^(([0-2]?\d:[0-5]\d)|([0-1]?\d:[0-5]\d\s?([AP]M)))$/i.test(d)},format:function(d,g){return d? p.formatFloat((new Date("2000/01/01 "+d.replace(/(\S)([AP]M)$/i,"$1 $2"))).getTime()||d,g):d},type:"numeric"});p.addParser({id:"metadata",is:function(){return!1},format:function(d,p,m){d=p.config;d=d.parserMetadataName?d.parserMetadataName:"sortValue";return g(m).metadata()[d]},type:"numeric"});p.addWidget({id:"zebra",priority:90,format:function(d,u,m){var w,r,v,z,B,C,D=RegExp(u.cssChildRow,"i"),A=u.$tbodies;u.debug&&(B=new Date);for(d=0;d<A.length;d++)w=A.eq(d),C=w.children("tr").length,1<C&&(v= 0,w=w.children("tr:visible").not(u.selectorRemove),w.each(function(){r=g(this);D.test(this.className)||v++;z=0===v%2;r.removeClass(m.zebra[z?1:0]).addClass(m.zebra[z?0:1])}));u.debug&&p.benchmark("Applying Zebra widget",B)},remove:function(d,p,m){var w;p=p.$tbodies;var r=(m.zebra||["even","odd"]).join(" ");for(m=0;m<p.length;m++)w=g.tablesorter.processTbody(d,p.eq(m),!0),w.children().removeClass(r),g.tablesorter.processTbody(d,w,!1)}})}(jQuery);