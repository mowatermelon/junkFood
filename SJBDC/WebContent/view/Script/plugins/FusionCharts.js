/*
 FusionCharts JavaScript Library
 Copyright FusionCharts Technologies LLP
 License Information at <http://www.fusioncharts.com/license>

 @author FusionCharts Technologies LLP
 @version fusioncharts/3.2.4-sr1.9888

 @attributions (infers respective third-party copyrights)
 Highcharts JS v2.1.9 (modified) <http://www.highcharts.com/license>
 SWFObject v2.2 (modified) <http://code.google.com/p/swfobject/>
 JSON v2 <http://www.JSON.org/js.html>
 jQuery 1.7.1 <http://jquery.com/>
 Firebug Lite 1.3.0 <http://getfirebug.com/firebuglite>
*/
(function () {
    if (!window.FusionCharts || !window.FusionCharts.version) {
        var a = {}, h = a.modules = {}, j = a.interpreters = {}, e = Object.prototype.toString, i = /msie/i.test(navigator.userAgent) && !window.opera, d = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, l = function (a, b) {
            var f, d; if (b instanceof Array) for (f = 0; f < b.length; f += 1) typeof b[f] !== "object" ? a[f] = b[f] : (typeof a[f] !== "object" && (a[f] = b[f] instanceof Array ? [] : {}), l(a[f], b[f])); else for (f in b) typeof b[f] ===
            "object" ? (d = e.call(b[f]), d === "[object Object]" ? (typeof a[f] !== "object" && (a[f] = {}), l(a[f], b[f])) : d === "[object Array]" ? (a[f] instanceof Array || (a[f] = []), l(a[f], b[f])) : a[f] = b[f]) : a[f] = b[f]; return a
        }; a.extend = function (a, b, f, d) { var g; if (f && a.prototype) a = a.prototype; if (d === !0) l(a, b); else for (g in b) a[g] = b[g]; return a }; a.uniqueId = function () { return "chartobject-" + (a.uniqueId.lastId += 1) }; a.uniqueId.lastId = 0; a.policies = {
            options: {
                swfSrcPath: ["swfSrcPath", void 0], product: ["product", "v3"], insertMode: ["insertMode",
                "replace"], safeMode: ["safeMode", !0], overlayButton: ["overlayButton", void 0], containerBackgroundColor: ["backgroundColor", "#ffffff"], chartType: ["type", void 0]
            }, attributes: { lang: ["lang", "EN"], "class": ["className", "FusionCharts"], id: ["id", void 0] }, width: ["width", "400"], height: ["height", "300"], src: ["swfUrl", ""]
        }; j.stat = ["swfUrl", "id", "width", "height", "debugMode", "registerWithJS", "backgroundColor", "scaleMode", "lang", "detectFlashVersion", "autoInstallRedirect"]; a.parsePolicies = function (c, b, f) {
            var d, g, k; for (g in b) if (a.policies[g] instanceof
            Array) k = f[b[g][0]], c[g] = k === void 0 ? b[g][1] : k; else for (d in typeof c[g] !== "object" && (c[g] = {}), b[g]) k = f[b[g][d][0]], c[g][d] = k === void 0 ? b[g][d][1] : k
        }; a.parseCommands = function (a, b, f) { var d, g; typeof b === "string" && (b = j[b] || []); d = 0; for (g = b.length; d < g; d++) a[b[d]] = f[d]; return a }; a.core = function (c) {
            if (!(this instanceof a.core)) {
                if (arguments.length === 1 && c instanceof Array && c[0] === "private") {
                    if (h[c[1]]) return; h[c[1]] = {}; c[3] instanceof Array && (a.core.version[c[1]] = c[3]); return typeof c[2] === "function" ? c[2].call(a,
                    h[c[1]]) : a
                } if (arguments.length === 1 && typeof c === "string") return a.core.items[c]; a.raiseError && a.raiseError(this, "25081840", "run", "", new SyntaxError('Use the "new" keyword while creating a new FusionCharts object'))
            } var b = {}; this.__state = {}; if (arguments.length === 1 && typeof arguments[0] === "object") b = arguments[0]; else if (a.parseCommands(b, j.stat, arguments), a.core.options.sensePreferredRenderer && b.swfUrl && b.swfUrl.match && !b.swfUrl.match(/[^a-z0-9]+/ig)) b.type = b.swfUrl; arguments.length > 1 && typeof arguments[arguments.length -
            1] === "object" && (delete b[j.stat[arguments.length - 1]], a.extend(b, arguments[arguments.length - 1])); this.id = typeof b.id === "undefined" ? this.id = a.uniqueId() : b.id; this.args = b; if (a.core.items[this.id] instanceof a.core) a.raiseWarning(this, "06091847", "param", "", Error('A FusionChart oject with the specified id "' + this.id + '" already exists. Renaming it to ' + (this.id = a.uniqueId()))); if (b.type && b.type.toString) {
                if (!a.renderer.userSetDefault && (i || d)) b.renderer = b.renderer || "javascript"; b.swfUrl = ((b.swfUrl = a.core.options.swfSrcPath ||
                b.swfSrcPath || a.core.options.scriptBaseUri) ? "" : b.swfUrl + "/") + b.type.replace(/\.swf\s*?$/ig, "") + ".swf"
            } a.parsePolicies(this, a.policies, b); this.attributes.id = this.id; this.resizeTo(b.width, b.height, !0); a.raiseEvent("BeforeInitialize", b, this); a.core.items[this.id] = this; a.raiseEvent("Initialized", b, this); return this
        }; a.core.prototype = {}; a.core.prototype.constructor = a.core; a.extend(a.core, { id: "FusionCharts", version: [3, 2, 4, "sr1", 9888], items: {}, options: { sensePreferredRenderer: !0 }, getObjectReference: function (c) { return a.core.items[c].ref } },
        !1); window.FusionCharts = a.core; window.FusionMaps && window.FusionMaps.legacy ? a.core(["private", "modules.core.geo", window.FusionMaps.legacy, window.FusionMaps.version]) : !/loaded|complete/.test(document.readyState) && !document.loaded && function () {
            function c() { if (!arguments.callee.done) arguments.callee.done = !0, f && clearInterval(f), window.FusionMaps && window.FusionMaps.legacy && a.core(["private", "modules.core.geo", window.FusionMaps.legacy, window.FusionMaps.version]), window.FusionMaps = a.core } document.addEventListener ?
            document.addEventListener("DOMContentLoaded", c, !1) : document.attachEvent && window.attachEvent("onLoad", c); if (/msie/i.test(navigator.userAgent) && !window.opera) try { location.protocol === "https:" ? document.write('<script id="__ie_onload_fusioncharts" defer="defer" src="//:"><\/script>') : document.write('<script id="__ie_onload_fusioncharts" defer="defer" src="javascript:void(0)"><\/script>'), document.getElementById("__ie_onload_fusioncharts").onreadystatechange = function () { this.readyState == "complete" && c() } } catch (b) { } if (/WebKit/i.test(navigator.userAgent)) var f =
            setInterval(function () { /loaded|complete/.test(document.readyState) && c() }, 10); window.onload = function (a) { return function () { c(); a && a.call && a.call(window) } }(window.onload)
        }(); window.FusionMaps = a.core
    }
})();
(function () {
    var a = FusionCharts(["private", "EventManager"]); if (a !== void 0) {
        window.FusionChartsEvents = {
            BeforeInitialize: "beforeinitialize", Initialized: "initialized", Loaded: "loaded", BeforeRender: "beforerender", Rendered: "rendered", DataLoadRequested: "dataloadrequested", DataLoadRequestCancelled: "dataloadrequestcancelled", DataLoadRequestCompleted: "dataloadrequestcompleted", BeforeDataUpdate: "beforedataupdate", DataUpdateCancelled: "dataupdatecancelled", DataUpdated: "dataupdated", DataLoadCancelled: "dataloadcancelled",
            DataLoaded: "dataloaded", DataLoadError: "dataloaderror", NoDataToDisplay: "nodatatodisplay", DataXMLInvalid: "dataxmlinvalid", InvalidDataError: "invaliddataerror", DrawComplete: "drawcomplete", Resized: "resized", BeforeDispose: "beforedispose", Disposed: "disposed"
        }; var h = function (a, d, e, c) { try { a[0].call(d, e, c || {}) } catch (b) { setTimeout(function () { throw b; }, 0) } }, j = function (i, d, e) {
            if (i instanceof Array) for (var c = 0, b; c < i.length; c += 1) {
                if (i[c][1] === d.sender || i[c][1] === void 0) if (b = i[c][1] === d.sender ? d.sender : a.core, h(i[c],
                b, d, e), d.detached === !0) i.splice(c, 1), c -= 1, d.detached = !1; if (d.cancelled === !0) break
            }
        }, e = {
            unpropagator: function () { return (this.cancelled = !0) === !1 }, detacher: function () { return (this.detached = !0) === !1 }, undefaulter: function () { return (this.prevented = !0) === !1 }, listeners: {}, lastEventId: 0, addListener: function (i, d, l) {
                if (i instanceof Array) for (var c = 0; c < i.length; c += 1) e.addListener(i[c], d, l); else typeof i !== "string" ? a.raiseError(l || a.core, "03091549", "param", "::EventTarget.addListener", Error("Unspecified Event Type")) :
                typeof d !== "function" ? a.raiseError(l || a.core, "03091550", "param", "::EventTarget.addListener", Error("Invalid Event Listener")) : (i = i.toLowerCase(), e.listeners[i] instanceof Array || (e.listeners[i] = []), e.listeners[i].push([d, l]))
            }, removeListener: function (i, d, l) {
                var c; if (typeof d !== "function") a.raiseError(l || a.core, "03091560", "param", "::EventTarget.removeListener", Error("Invalid Event Listener")); else if (i instanceof Array) for (c = 0; c < i.length; c += 1) e.removeListener(i[c], d, l); else if (typeof i !== "string") a.raiseError(l ||
                a.core, "03091559", "param", "::EventTarget.removeListener", Error("Unspecified Event Type")); else if (i = i.toLowerCase(), i = e.listeners[i], i instanceof Array) for (c = 0; c < i.length; c += 1) i[c][0] === d && i[c][1] === l && (i.splice(c, 1), c -= 1)
            }, triggerEvent: function (i, d, l, c, b) {
                if (typeof i !== "string") a.raiseError(d, "03091602", "param", "::EventTarget.dispatchEvent", Error("Invalid Event Type")); else {
                    i = i.toLowerCase(); d = {
                        eventType: i, eventId: e.lastEventId += 1, sender: d || Error("Orphan Event"), cancel: !1, stopPropagation: this.unpropagator,
                        prevented: !1, preventDefault: this.undefaulter, detached: !1, detachHandler: this.detacher
                    }; if (c) d.originalEvent = c; j(e.listeners[i], d, l); j(e.listeners["*"], d, l); b && d.prevented === !1 && h(b, d.sender, d, l); return !0
                }
            }
        }; a.raiseEvent = function (a, d, l, c, b) { return e.triggerEvent(a, l, d, c, b) }; a.addEventListener = function (a, d) { return e.addListener(a, d) }; a.removeEventListener = function (a, d) { return e.removeListener(a, d) }; a.extend(a.core, { addEventListener: a.addEventListener, removeEventListener: a.removeEventListener }, !1); a.extend(a.core,
        { addEventListener: function (a, d) { return e.addListener(a, d, this) }, removeEventListener: function (a, d) { return e.removeListener(a, d, this) } }, !0); a.addEventListener("BeforeDispose", function (a) { var d, l; for (d in e.listeners) for (l = 0; l < e.listeners[d].length; l += 1) e.listeners[d][l][1] === a.sender && e.listeners[d].splice(l, 1) })
    }
})();
(function () {
    var a = FusionCharts(["private", "ErrorHandler"]); if (a !== void 0) {
        var h = { type: "TypeException", range: "ValueRangeException", impl: "NotImplementedException", param: "ParameterException", run: "RuntimeException", comp: "DesignTimeError", undefined: "UnspecifiedException" }, j = function (i, d, e, c, b, f) {
            var u = "#" + d + " " + (i ? i.id : "unknown-source") + c + " " + f + " >> "; b instanceof Error ? (b.name = h[e], b.module = "FusionCharts" + c, b.level = f, b.message = u + b.message, u = b.message, window.setTimeout(function () { throw b; }, 0)) : u += b; d =
            { id: d, nature: h[e], source: "FusionCharts" + c, message: u }; a.raiseEvent(f, d, i); if (typeof window["FC_" + f] === "function") window["FC_" + f](d)
        }; a.raiseError = function (a, d, e, c, b) { j(a, d, e, c, b, "Error") }; a.raiseWarning = function (a, d, e, c, b) { j(a, d, e, c, b, "Warning") }; var e = {
            outputHelpers: {
                text: function (a, d) { e.outputTo("#" + a.eventId + " [" + (a.sender.id || a.sender).toString() + '] fired "' + a.eventType + '" event. ' + (a.eventType === "error" || a.eventType === "warning" ? d.message : "")) }, event: function (a, d) { this.outputTo(a, d) }, verbose: function (a,
                d) { e.outputTo(a.eventId, a.sender.id, a.eventType, d) }
            }, outputHandler: function (i, d) { typeof e.outputTo !== "function" ? a.core.debugMode.outputFailed = !0 : (a.core.debugMode.outputFailed = !1, e.currentOutputHelper(i, d)) }, currentOutputHelper: void 0, outputTo: void 0, enabled: !1
        }; e.currentOutputHelper = e.outputHelpers.text; a.extend(a.core, {
            debugMode: {
                syncStateWithCharts: !0, outputFormat: function (a) {
                    if (a && typeof a.toLowerCase === "function" && typeof e.outputHelpers[a = a.toLowerCase()] === "function") return e.currentOutputHelper =
                    e.outputHelpers[a], !0; return !1
                }, outputTo: function (i) { typeof i === "function" ? e.outputTo = i : i === null && (a.core.debugMode.enabled(!1), delete e.outputTo) }, enabled: function (i, d, j) {
                    var c; if (typeof i === "object" && arguments.length === 1) c = i, i = c.state, d = c.outputTo, j = c.outputFormat; if (typeof i === "function") { if (typeof d === "string" && (arguments.length === 2 || c)) j = d; d = i; i = !0 } if (typeof i === "boolean" && i !== e.enabled) a.core[(e.enabled = i) ? "addEventListener" : "removeEventListener"]("*", e.outputHandler); if (typeof d === "function") e.outputTo =
                    d; a.core.debugMode.outputFormat(j); return e.enabled
                }, _enableFirebugLite: function () { window.console && window.console.firebug ? a.core.debugMode.enabled(console.log, "verbose") : a.loadScript("firebug-lite.js", function () { a.core.debugMode.enabled(console.log, "verbose") }, "{ startOpened: true }") }
            }
        }, !1)
    }
})();
(function () {
    var a = FusionCharts(["private", "modules.mantle.ajax"]); if (a) {
        var h = window, j = parseFloat(navigator.appVersion.split("MSIE")[1]), e = j >= 5.5 && j <= 7 ? !0 : !1, i = h.location.protocol === "file:", d = h.ActiveXObject, l = (!d || !i) && h.XMLHttpRequest, c = { objects: 0, xhr: 0, requests: 0, success: 0, failure: 0, idle: 0 }, b = function () {
            var a; if (l) return b = function () { c.xhr++; return new l }, b(); try { a = new d("Msxml2.XMLHTTP"), b = function () { c.xhr++; return new d("Msxml2.XMLHTTP") } } catch (e) {
                try {
                    a = new d("Microsoft.XMLHTTP"), b = function () {
                        c.xhr++;
                        return new d("Microsoft.XMLHTTP")
                    }
                } catch (g) { a = !1 }
            } return a
        }, h = a.ajax = function (a, b) { this.onSuccess = a; this.onError = b; this.open = !1; c.objects++; c.idle++ }; h.stats = function (b) { return b ? c[b] : a.extend({}, c) }; h.prototype.headers = { "If-Modified-Since": "Sat, 29 Oct 1994 19:43:31 GMT", "X-Requested-With": "XMLHttpRequest", "X-Requested-By": "FusionCharts", Accept: "text/plain, */*" }; h.prototype.get = function (f, d) {
            var g = this, k = g.xmlhttp, t = g.headers, p = g.onError, j = g.onSuccess, m; if (!k || e) k = b(), g.xmlhttp = k; k.onreadystatechange =
            function () { try { if (k.readyState === 4) !k.status && i || k.status >= 200 && k.status < 300 || k.status === 304 || k.status === 1223 || k.status === 0 ? (j && j(k.responseText, g, d, f), c.success++) : p && (p(Error("XmlHttprequest Error"), g, d, f), c.failure++), c.idle--, g.open = !1 } catch (a) { p && p(a, g, d, f), c.failure++ } }; try { k.overrideMimeType && k.overrideMimeType("text/plain"); k.open("GET", f, !0); for (m in t) k.setRequestHeader(m, t[m]); k.send(null); c.requests++; c.idle++; g.open = !0 } catch (o) {
                a.raiseError(a.core, "1110111515A", "run", "XmlHttprequest Error",
                o.message)
            } return k
        }; h.prototype.abort = function () { var a = this.xmlhttp; this.open = !1; return a && typeof a.abort === "function" && a.readyState && a.readyState !== 0 && a.abort() }; h.prototype.dispose = function () { this.open && this.abort(); delete this.onError; delete this.onSuccess; delete this.xmlhttp; delete this.open; c.objects--; return null }
    }
})();
(function () {
    var a = FusionCharts(["private", "modules.mantle.runtime;1.1"]); if (a !== void 0) {
        var h = /(^|[\/\\])(fusioncharts\.js|fusioncharts\.debug\.js|fusioncharts\.core\.js|fusioncharts\.min\.js)([\?#].*)?$/ig; a.getScriptBaseUri = function (a) { var b = document.getElementsByTagName("script"), g = b.length, f, c; for (c = 0; c < g; c += 1) if (f = b[c].getAttribute("src"), !(f === void 0 || f === null || f.match(a) === null)) return f.replace(a, "$1") }; a.core.options.scriptBaseUri = function () {
            var b = a.getScriptBaseUri(h); if (b === void 0) return a.raiseError(FusionCharts,
            "1603111624", "run", ">GenericRuntime~scriptBaseUri", "Unable to locate FusionCharts script source location (URL)."), ""; return b
        }(); var j = /[\\\"<>;&]/, e = /^[^\S]*?(sf|f|ht)(tp|tps):\/\//i, i = FusionChartsEvents.ExternalResourceLoad = "externalresourceload", d = {}, l = {}, c = {}, b = {}; a.isXSSSafe = function (a, b) { if (b && e.exec(a) !== null) return !1; return j.exec(a) === null }; a.loadScript = function (g, f, k, m, e) {
            if (!g) return !1; var u = f && f.success || f, j = f && f.failure, h, x = { type: "script", success: !1 }, w = function () {
                b[h] = clearTimeout(b[h]);
                x.success ? u && u(g, h) : j && j(g, h); a.raiseEvent(i, x, a.core)
            }, e = e ? "" : a.core.options.scriptBaseUri; h = e + g; a.isXSSSafe(h, !1) || (h = typeof window.encodeURIComponent === "function" ? window.encodeURIComponent(h) : window.escape(h)); x.path = e; x.src = h; x.file = g; if (c[h] === !0 && m) return x.success = !0, x.notReloaded = !0, typeof f === "function" && (f(), a.raiseEvent(i, x, a.core)), !0; if (d[h] && m) return !1; d[h] = !0; l[h] && l[h].parentNode && l[h].parentNode.removeChild(l[h]); f = l[h] = document.createElement("script"); f.type = "text/javascript"; f.src =
            h; k && (f.innerHTML = k); if (typeof u === "function") c[h] = !1, b[h] = clearTimeout(b[h]), f.onload = function () { c[h] = !0; x.success = !0; w() }, f.onerror = function () { c[h] = !1; d[h] = !1; w() }, f.onreadystatechange = function () { if (this.readyState === "complete" || this.readyState === "loaded") c[h] = !0, x.success = !0, w() }; document.getElementsByTagName("head")[0].appendChild(f); typeof j === "function" && (b[h] = setTimeout(function () { c[h] || w() }, a.core.options.html5ResourceLoadTimeout || 15E3)); return !0
        }; a.capitalizeString = function (a, b) {
            return a ?
            a.replace(b ? /(^|\s)([a-z])/g : /(^|\s)([a-z])/, function (a, b, g) { return b + g.toUpperCase() }) : a
        }; var f = a.purgeDOM = function (a) { var b = a.attributes, g, c; if (b) for (g = b.length - 1; g >= 0; g -= 1) c = b[g].name, typeof a[c] === "function" && (a[c] = null); if (b = a.childNodes) { b = b.length; for (g = 0; g < b; g += 1) f(a.childNodes[g]) } }, u = function (a, b, g) { for (var f in a) { var c; if (a[f] instanceof Array) b[a[f][0]] = g[f]; else for (c in a[f]) b[a[f][c][0]] = g[f][c] } }, g = /[^\%\d]*$/ig, k = /^(FusionCharts|FusionWidgets|FusionMaps)/; a.extend(a.core, {
            dispose: function () {
                a.raiseEvent("BeforeDispose",
                {}, this); a.renderer.dispose(this); delete a.core.items[this.id]; a.raiseEvent("Disposed", {}, this); for (var b in this) delete this[b]
            }, clone: function (b, g) { var f = typeof b, c = {}, k = a.extend({}, this.args, !1, !1); u(a.policies, k, this); u(a.renderer.getRendererPolicy(this.options.renderer), k, this); delete k.id; delete k.animate; delete k.stallLoad; c.link = k.link; k = a.extend({}, k, !1, !1); k.link = c.link; switch (f) { case "object": a.extend(k, b); break; case "boolean": g = b } return g ? k : new a.core(k) }, isActive: function () {
                if (!this.ref ||
                document.getElementById(this.id) !== this.ref || typeof this.ref.signature !== "function") return !1; try { return k.test(this.ref.signature()) } catch (a) { return !1 }
            }, resizeTo: function (b, f, c) { var k = { width: b, height: f }; if (typeof b === "object") k.width = b.width, k.height = b.height, c = f; if (k.width && typeof k.width.toString === "function") this.width = k.width.toString().replace(g, ""); if (k.height && typeof k.height.toString === "function") this.height = k.height.toString().replace(g, ""); c !== !0 && a.renderer.resize(this, k) }, chartType: function (a) {
                var b =
                this.src, g; if (typeof a === "string") this.src = a, this.isActive() && this.render(); return (g = (g = b.substring(b.indexOf(".swf"), 0)) ? g : b).substring(g.lastIndexOf("/") + 1).toLowerCase().replace(/^fcmap_/i, "")
            }
        }, !0); window.getChartFromId = window.getMapFromId = function (b) {
            a.raiseWarning(this, "11133001041", "run", "GenericRuntime~getObjectFromId()", 'Use of deprecated getChartFromId() or getMapFromId(). Replace with "FusionCharts()" or FusionCharts.items[].'); return a.core.items[b] instanceof a.core ? a.core.items[b].ref :
            window.swfobject.getObjectById(b)
        }
    }
})();
(function () {
    var a = FusionCharts(["private", "RendererManager"]); if (a !== void 0) {
        a.policies.options.containerElementId = ["renderAt", void 0]; a.policies.options.renderer = ["renderer", void 0]; a.normalizeCSSDimension = function (a, f, c) {
            var a = a === void 0 ? c.offsetWidth : a, f = f === void 0 ? c.offsetHeight : f, g; c.style.width = a = a.toString ? a.toString() : "0"; c.style.height = f = f.toString ? f.toString() : "0"; if (a.match(/^\s*\d*\.?\d*\%\s*$/) && !a.match(/^\s*0\%\s*$/) && c.offsetWidth === 0) for (g = c; g = g.offsetParent;) if (g.offsetWidth > 0) {
                a =
                (g.offsetWidth * parseFloat(a.match(/\d*/)[0]) / 100).toString(); break
            } if (f.match(/^\s*\d*\.?\d*\%\s*$/) && !f.match(/^\s*0\%\s*$/) && c.offsetHeight <= 20) for (g = c; g = g.offsetParent;) if (g.offsetHeight > 0) { f = (g.offsetHeight * parseFloat(f.match(/\d*/)[0]) / 100).toString(); break } g = { width: a.replace ? a.replace(/^\s*(\d*\.?\d*)\s*$/ig, "$1px") : a, height: f.replace ? f.replace(/^\s*(\d*\.?\d*)\s*$/ig, "$1px") : f }; c.style.width = g.width; c.style.height = g.height; return g
        }; var h = function () {
            a.raiseError(this, "25081845", "run", "::RendererManager",
            Error("No active renderer"))
        }, j = { undefined: { render: h, remove: h, update: h, resize: h, config: h, policies: {} } }, e = {}, i = a.renderer = {
            register: function (b, f) { if (!b || typeof b.toString !== "function") throw "#03091436 ~renderer.register() Invalid value for renderer name."; b = b.toString().toLowerCase(); if (j[b] !== void 0) return a.raiseError(a.core, "03091438", "param", "::RendererManager>register", 'Duplicate renderer name specified in "name"'), !1; j[b] = f; return !0 }, userSetDefault: !1, setDefault: function (b) {
                if (!b || typeof b.toString !==
                "function") return a.raiseError(a.core, "25081731", "param", "::RendererManager>setDefault", 'Invalid renderer name specified in "name"'), !1; if (j[b = b.toString().toLowerCase()] === void 0) return a.raiseError(a.core, "25081733", "range", "::RendererManager>setDefault", "The specified renderer does not exist."), !1; this.userSetDefault = !1; a.policies.options.renderer = ["renderer", b]; return !0
            }, notifyRender: function (b) {
                var f = a.core.items[b && b.id]; (!f || b.success === !1 && !b.silent) && a.raiseError(a.core.items[b.id], "25081850",
                "run", "::RendererManager", Error("There was an error rendering the chart. Enable FusionCharts JS debugMode for more information.")); if (f.ref = b.ref) b.ref.FusionCharts = a.core.items[b.id]; a.raiseEvent("internal.DOMElementCreated", b, f)
            }, protectedMethods: { options: !0, attributes: !0, src: !0, ref: !0, constructor: !0, signature: !0, link: !0 }, getRenderer: function (a) { return j[a] }, getRendererPolicy: function (a) { a = j[a].policies; return typeof a === "object" ? a : {} }, currentRendererName: function () { return a.policies.options.renderer[1] },
            update: function (a) { e[a.id].update.apply(a, Array.prototype.slice.call(arguments, 1)) }, render: function (a) { e[a.id].render.apply(a, Array.prototype.slice.call(arguments, 1)) }, remove: function (a) { e[a.id].remove.apply(a, Array.prototype.slice.call(arguments, 1)) }, resize: function (a) { e[a.id].resize.apply(a, Array.prototype.slice.call(arguments, 1)) }, config: function (a) { e[a.id].config.apply(a, Array.prototype.slice.call(arguments, 1)) }, dispose: function (a) {
                e[a.id].dispose.apply(a, Array.prototype.slice.call(arguments,
                1))
            }
        }, d = function (b) { return function () { if (this.ref === void 0 || this.ref === null || typeof this.ref[b] !== "function") a.raiseError(this, "25081617", "run", "~" + b + "()", "ExternalInterface call failed. Check whether chart has been rendered."); else return this.ref[b].apply(this.ref, arguments) } }; a.addEventListener("BeforeInitialize", function (b) {
            var b = b.sender, f; if (typeof b.options.renderer === "string" && j[b.options.renderer.toLowerCase()] === void 0) b.options.renderer = a.policies.options.renderer[1]; b.options.renderer =
            b.options.renderer.toLowerCase(); e[b.id] = j[b.options.renderer]; if (e[b.id].initialized !== !0 && typeof e[b.id].init === "function") e[b.id].init(), e[b.id].initialized = !0; a.parsePolicies(b, e[b.id].policies || {}, b.args); for (var c in e[b.id].prototype) b[c] = e[b.id].prototype[c]; for (f in e[b.id].events) b.addEventListener(f, e[b.id].events[f])
        }); a.addEventListener("Loaded", function (b) {
            var f = b.sender, b = b.sender.ref; f instanceof a.core && delete f.__state.rendering; if (!(b === void 0 || b === null || typeof b.getExternalInterfaceMethods !==
            "function")) { var c; try { c = b.getExternalInterfaceMethods(), c = typeof c === "string" ? c.split(",") : [] } catch (g) { c = [], a.raiseError(f, "13111126041", "run", "RendererManager^Loaded", Error("Error while retrieving data from the chart-object." + (g.message && g.message.indexOf("NPObject") >= 0 ? " Possible cross-domain security restriction." : ""))) } for (b = 0; b < c.length; b += 1) f[c[b]] === void 0 && (f[c[b]] = d(c[b])) }
        }); var l = function (a, f) { if (typeof a[f] === "function") return function () { return a[f].apply(a, arguments) }; return a[f] }; a.addEventListener("loaded",
        function (b) { var f = b.sender; if (f.ref) { var c = a.renderer.protectedMethods, g = a.renderer.getRenderer(f.options.renderer).protectedMethods, k; for (k in b.sender) if (g && !c[k] && !(g[k] || f.ref[k] !== void 0)) try { f.ref[k] = l(b.sender, k) } catch (d) { } } }); var c = function (a, f) { var c = document.getElementById(a), g = f.getAttribute("id"); if (c === null) return !1; if (a === g) return !0; for (var g = f.getElementsByTagName("*"), k = 0; k < g.length; k += 1) if (g[k] === c) return !1; return !0 }; a.extend(a.core, {
            render: function (b) {
                var f, d; ((f = window[this.id]) &&
                f.FusionCharts && f.FusionCharts === this || (f = this.ref) && f.FusionCharts && f.FusionCharts === this) && a.renderer.dispose(this); window[this.id] !== void 0 && a.raiseError(this, "25081843", "comp", ".render", Error("#25081843:IECompatibility() Chart Id is same as a JavaScript variable name. Variable naming error. Please use unique name for chart JS variable, chart-id and container id.")); d = this.options.insertMode.toLowerCase() || "replace"; if (b === void 0) b = this.options.containerElementId; typeof b === "string" && (b = document.getElementById(b));
                if (b === void 0 || b === null) return a.raiseError(this, "03091456", "run", ".render()", Error("Unable to find the container DOM element.")), this; if (c(this.id, b)) return a.raiseError(this, "05102109", "run", ".render()", Error("A duplicate object already exists with the specific Id: " + this.id)), this; f = document.createElement(this.options.containerElementType || "span"); f.setAttribute("id", this.id); if (d !== "append" && d !== "prepend") for (; b.hasChildNodes() ;) b.removeChild(b.firstChild); d === "prepend" && b.firstChild ? b.insertBefore(f,
                b.firstChild) : b.appendChild(f); this.options.containerElement = b; this.options.containerElementId = b.id; if (d = f.style) d.lineHeight = "100%", d.display = "inline-block", d.zoom = "1", d["*DISPLAY"] = "inline"; a.normalizeCSSDimension(this.width, this.height, f); this.__state.rendering = !0; a.raiseEvent("BeforeRender", { container: b, width: this.width, height: this.height, renderer: this.options.renderer }, this); a.renderer.render(this, f, a.renderer.notifyRender); return this
            }, remove: function () { a.renderer.remove(this); return this },
            configure: function (b, f) { var c; b && (typeof b === "string" ? (c = {}, c[b] = f) : c = b, a.renderer.config(this, c)) }
        }, !0); a.extend(a.core, {
            setCurrentRenderer: function () { var a = i.setDefault.apply(i, arguments); i.userSetDefault = !0; return a }, getCurrentRenderer: function () { return i.currentRendererName.apply(i, arguments) }, render: function () {
                var b = ["swfUrl", "id", "width", "height", "renderAt", "dataSource", "dataFormat"], f = {}, c; if (arguments[0] instanceof a.core) return arguments[0].render(), arguments[0]; for (c = 0; c < arguments.length &&
                c < b.length; c += 1) f[b[c]] = arguments[c]; typeof arguments[arguments.length - 1] === "object" && (delete f[b[c - 1]], a.extend(f, arguments[arguments.length - 1])); if (f.dataFormat === void 0) f.dataFormat = FusionChartsDataFormats.XMLURL; return (new a.core(f)).render()
            }
        }, !1)
    }
})();
(function () {
    var a = FusionCharts(["private", "DataHandlerManager"]); if (a !== void 0) {
        window.FusionChartsDataFormats = {}; var h = a.transcoders = {}, j = {}, e = {}, i = /url$/i, d = function (b, c, d, g) {
            var k = !1, e = d.obj, i = d.format, d = d.silent; a.raiseEvent("DataLoadRequestCompleted", { source: "XmlHttpRequest", url: g, data: b, dataFormat: i, cancelDataLoad: function () { k = !0; c.abort(); this.cancelDataLoad = function () { return !1 }; return !0 }, xmlHttpRequestObject: c.xhr }, e); k !== !0 ? e.setChartData(b, i, d) : a.raiseEvent("DataLoadCancelled", {
                source: "XmlHttpRequest",
                url: g, dataFormat: i, xmlHttpRequestObject: c.xhr
            }, e)
        }, l = function (b, c, d, g) { d = d.obj; b = { source: "XmlHttpRequest", url: g, xmlHttpRequestObject: c.xhr, error: b, httpStatus: c.xhr && c.xhr.status ? c.xhr.status : -1 }; a.raiseEvent("DataLoadError", b, d); typeof window.FC_DataLoadError === "function" && window.FC_DataLoadError(d.id, b) }; a.policies.options.dataSource = ["dataSource", void 0]; a.policies.options.dataFormat = ["dataFormat", void 0]; a.policies.options.dataConfiguration = ["dataConfiguration", void 0]; a.policies.options.showDataLoadingMessage =
        ["showDataLoadingMessage", !0]; a.addDataHandler = function (b, c) {
            if (typeof b !== "string" || h[b.toLowerCase()] !== void 0) a.raiseError(a.core, "03091606", "param", "::DataManager.addDataHandler", Error("Invalid Data Handler Name")); else {
                var d = {}, g = b.toLowerCase(); h[g] = c; c.name = b; d["set" + b + "Url"] = function (a) { return this.setChartDataUrl(a, b) }; d["set" + b + "Data"] = function (a, g) { return this.setChartData(a, b, !1, g) }; d["get" + b + "Data"] = function () { return this.getChartData(b) }; window.FusionChartsDataFormats[b] = g; window.FusionChartsDataFormats[b +
                "URL"] = g + "URL"; a.extend(a.core, d, !0)
            }
        }; a.addEventListener("BeforeInitialize", function (a) { a = a.sender; j[a.id] = ""; e[a.id] = {}; if (a.options.dataSource !== void 0 && typeof a.options.dataFormat === "string") a.__state.dataSetDuringConstruction = !0, a.setChartData(a.options.dataSource, a.options.dataFormat) }); a.addEventListener("BeforeDispose", function (a) { var c = a.sender; delete j[a.sender.id]; delete e[a.sender.id]; c && c.__state && c.__state.dhmXhrObj && c.__state.dhmXhrObj.abort() }); a.extend(a.core, {
            setChartDataUrl: function (b,
            c, e) {
                if (c === void 0 || c === null || typeof c.toString !== "function") a.raiseError(a.core, "03091609", "param", ".setChartDataUrl", Error("Invalid Data Format")); else {
                    var c = c.toString().toLowerCase(), g, k = this, t = k.options && k.options.renderer === "flash" && k.options.useLegacyXMLTransport || !1; i.test(c) ? g = c.slice(0, -3) : (g = c, c += "url"); a.raiseEvent("DataLoadRequested", {
                        source: "XmlHttpRequest", url: b, dataFormat: g, cancelDataLoadRequest: function () {
                            t = !0; a.raiseEvent("DataLoadRequestCancelled", {
                                source: "XmlHttpRequest", url: b,
                                dataFormat: g
                            }, k); try { this.__state && this.__state.dhmXhrObj && this.__state.dhmXhrObj.abort() } catch (c) { } this.cancelDataLoadRequest = function () { return !1 }; return !0
                        }
                    }, k); if (t) { if (this.__state && this.__state.dhmXhrObj) try { this.__state.dhmXhrObj.abort() } catch (h) { } } else { this.options.dataSource = b; if (!this.__state.dhmXhrObj) this.__state.dhmXhrObj = new a.ajax(d, l); this.__state.dhmXhrObj.get(typeof window.decodeURIComponent === "function" ? window.decodeURIComponent(b) : window.unescape(b), { obj: this, format: g, silent: e }) }
                }
            },
            setChartData: function (b, c, d) {
                if (c === void 0 || c === null || typeof c.toString !== "function") a.raiseError(a.core, "03091610", "param", ".setChartData", Error("Invalid Data Format")); else {
                    var c = c.toString().toLowerCase(), g; if (i.test(c)) this.setChartDataUrl(b, c, d); else {
                        this.options.dataSource = b; g = c; this.options.dataFormat = c; var c = h[g], k = !1; if (typeof c === "undefined") a.raiseError(a.core, "03091611", "param", ".setChartData", Error("Data Format not recognized")); else if (c = c.encode(b, this, this.options.dataConfiguration) ||
                        {}, c.format = c.dataFormat = g, c.dataSource = b, c.cancelDataUpdate = function () { k = !0; this.cancelDataUpdate = function () { return !1 }; return !0 }, a.raiseEvent("BeforeDataUpdate", c, this), delete c.cancelDataUpdate, k === !0) a.raiseEvent("DataUpdateCancelled", c, this); else {
                            j[this.id] = c.data || ""; e[this.id] = {}; if (d !== !0) this.options.safeMode === !0 && this.__state.rendering === !0 && !this.isActive() ? (this.__state.updatePending = c, a.raiseWarning(this, "23091255", "run", "::DataHandler~update", "Renderer update was postponed due to async loading.")) :
                            (delete this.__state.updatePending, a.renderer.update(this, c)); this.__state.dataReady = void 0; a.raiseEvent("DataUpdated", c, this)
                        }
                    }
                }
            }, getChartData: function (b, c) {
                var f; var d; if (b === void 0 || typeof b.toString !== "function" || (d = h[b = b.toString().toLowerCase()]) === void 0) a.raiseError(this, "25081543", "param", "~getChartData()", Error('Unrecognized data-format specified in "format"')); else return f = typeof e[this.id][b] === "object" ? e[this.id][b] : e[this.id][b] = d.decode(j[this.id], this, this.options.dataConfiguration),
                d = f, Boolean(c) === !0 ? d : d.data
            }, dataReady: function () { return this.__state.dataReady }
        }, !0); a.extend(a.core, {
            transcodeData: function (b, c, d, g, k) {
                if (!c || typeof c.toString !== "function" || !d || typeof d.toString !== "function" || h[d = d.toString().toLowerCase()] === void 0 || h[c = c.toString().toLowerCase()] === void 0) a.raiseError(this, "14090217", "param", "transcodeData()", Error("Unrecognized data-format specified during transcoding.")); else {
                    b = h[c].encode(b, this, k); d = h[d].decode(b.data, this, k); if (!(d.error instanceof Error)) d.error =
                    b.error; return g ? d : d.data
                }
            }
        }, !1); a.addEventListener("Disposed", function (a) { delete e[a.sender.id] }); a.addEventListener("Loaded", function (b) { b = b.sender; b instanceof a.core && b.__state.updatePending !== void 0 && (a.renderer.update(b, b.__state.updatePending), delete b.__state.updatePending) }); a.addEventListener("NoDataToDisplay", function (a) { a.sender.__state.dataReady = !1 }); var c = a._interactiveCharts = { selectscatter: [!0, !1], dragcolumn2d: [!0, !0], dragarea: [!0, !0], dragline: [!0, !0], dragnode: [!0, !0] }; a.addEventListener("Loaded",
        function (b) {
            var b = b.sender, d = b.__state, e, g; if (b.chartType && c[b.chartType()] && c[b.chartType()][0]) { for (e in a.transcoders) g = a.transcoders[e].name, g = "get" + g + "Data", b[g] = function (b, g) { return function (c) { return c === !1 ? g.apply(this) : this.ref.getUpdatedXMLData ? a.core.transcodeData(this.ref.getUpdatedXMLData(), "xml", b) : this.getData ? this.getData(b) : g.apply(this) } }(e, b.constructor.prototype[g]), b[g]._dynamicdatarouter = !0; d.dynamicDataRoutingEnabled = !0 } else if (d.dynamicDataRoutingEnabled) {
                for (e in a.transcoders) g =
                a.transcoders[e].name, g = "get" + g + "Data", b.hasOwnProperty(g) && b[g]._dynamicdatarouter && delete b[g]; d.dynamicDataRoutingEnabled = !1
            }
        })
    }
})();
var swfobject = window.swfobject = function () {
    function a() { if (!D) { try { var a = n.getElementsByTagName("body")[0].appendChild(n.createElement("span")); a.parentNode.removeChild(a) } catch (b) { return } D = !0; for (var a = E.length, g = 0; g < a; g++) E[g]() } } function h(a) { D ? a() : E[E.length] = a } function j(a) {
        if (typeof w.addEventListener != v) w.addEventListener("load", a, !1); else if (typeof n.addEventListener != v) n.addEventListener("load", a, !1); else if (typeof w.attachEvent != v) t(w, "onload", a); else if (typeof w.onload == "function") {
            var b =
            w.onload; w.onload = function () { b(); a() }
        } else w.onload = a
    } function e() { var a = n.getElementsByTagName("body")[0], b = n.createElement(y); b.setAttribute("type", B); var g = a.appendChild(b); if (g) { var c = 0; (function () { if (typeof g.GetVariable != v) { var d; try { d = g.GetVariable("$version") } catch (k) { } if (d) d = d.split(" ")[1].split(","), q.pv = [parseInt(d[0], 10), parseInt(d[1], 10), parseInt(d[2], 10)] } else if (c < 10) { c++; setTimeout(arguments.callee, 10); return } a.removeChild(b); g = null; i() })() } else i() } function i() {
        var a = s.length; if (a >
        0) for (var g = 0; g < a; g++) {
            var f = s[g].id, e = s[g].callbackFn, i = s[g].userData || {}; i.success = !1; i.id = f; if (q.pv[0] > 0) {
                var t = k(f); if (t) if (p(s[g].swfVersion) && !(q.wk && q.wk < 312)) { if (m(f, !0), e) i.success = !0, i.ref = d(f), e(i) } else if (s[g].expressInstall && l()) {
                    i = {}; i.data = s[g].expressInstall; i.width = t.getAttribute("width") || "0"; i.height = t.getAttribute("height") || "0"; if (t.getAttribute("class")) i.styleclass = t.getAttribute("class"); if (t.getAttribute("align")) i.align = t.getAttribute("align"); for (var h = {}, t = t.getElementsByTagName("param"),
                    j = t.length, o = 0; o < j; o++) t[o].getAttribute("name").toLowerCase() != "movie" && (h[t[o].getAttribute("name")] = t[o].getAttribute("value")); c(i, h, f, e)
                } else b(t), e && e(i)
            } else if (m(f, !0), e) { if ((f = d(f)) && typeof f.SetVariable != v) i.success = !0, i.ref = f; e(i) }
        }
    } function d(a) { var b, g = null; if (!document.embeds || !(b = document.embeds[a])) if (!((b = k(a)) && b.nodeName == "OBJECT")) b = window[a]; if (!b) return g; typeof b.SetVariable != v ? g = b : (a = b.getElementsByTagName(y)[0]) && (g = a); return g } function l() {
        return !H && p("6.0.65") && (q.win ||
        q.mac) && !(q.wk && q.wk < 312)
    } function c(a, b, g, c) {
        H = !0; K = c || null; M = { success: !1, id: g }; var d = k(g); if (d) {
            d.nodeName == "OBJECT" ? (G = f(d), I = null) : (G = d, I = g); a.id = x; if (typeof a.width == v || !/%$/.test(a.width) && parseInt(a.width, 10) < 310) a.width = "310"; if (typeof a.height == v || !/%$/.test(a.height) && parseInt(a.height, 10) < 137) a.height = "137"; n.title = n.title.slice(0, 47) + " - Flash Player Installation"; c = q.ie && q.win ? "ActiveX" : "PlugIn"; c = "MMredirectURL=" + w.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + c + "&MMdoctitle=" +
            n.title; typeof b.flashvars != v ? b.flashvars += "&" + c : b.flashvars = c; if (q.ie && q.win && d.readyState != 4) c = n.createElement("div"), g += "SWFObjectNew", c.setAttribute("id", g), d.parentNode.insertBefore(c, d), d.style.display = "none", function () { d.readyState == 4 ? d.parentNode.removeChild(d) : setTimeout(arguments.callee, 10) }(); u(a, b, g)
        }
    } function b(a) {
        if (q.ie && q.win && a.readyState != 4) {
            var b = n.createElement("div"); a.parentNode.insertBefore(b, a); b.parentNode.replaceChild(f(a), b); a.style.display = "none"; (function () {
                a.readyState ==
                4 ? a.parentNode.removeChild(a) : setTimeout(arguments.callee, 10)
            })()
        } else a.parentNode.replaceChild(f(a), a)
    } function f(a) { var b = n.createElement("div"); if (q.win && q.ie) b.innerHTML = a.innerHTML; else if (a = a.getElementsByTagName(y)[0]) if (a = a.childNodes) for (var g = a.length, c = 0; c < g; c++) !(a[c].nodeType == 1 && a[c].nodeName == "PARAM") && a[c].nodeType != 8 && b.appendChild(a[c].cloneNode(!0)); return b } function u(a, b, g) {
        var c, g = k(g); if (q.wk && q.wk < 312) return c; if (g) {
            if (typeof a.id == v) a.id = g.id; if (q.ie && q.win) {
                var d = "", f; for (f in a) if (a[f] !=
                Object.prototype[f]) f.toLowerCase() == "data" ? b.movie = a[f] : f.toLowerCase() == "styleclass" ? d += ' class="' + a[f] + '"' : f.toLowerCase() != "classid" && (d += " " + f + '="' + a[f] + '"'); f = ""; for (var m in b) b[m] != Object.prototype[m] && (f += '<param name="' + m + '" value="' + b[m] + '" />'); g.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + d + ">" + f + "</object>"; J[J.length] = a.id; c = k(a.id)
            } else {
                m = n.createElement(y); m.setAttribute("type", B); for (var e in a) a[e] != Object.prototype[e] && (e.toLowerCase() == "styleclass" ?
                m.setAttribute("class", a[e]) : e.toLowerCase() != "classid" && m.setAttribute(e, a[e])); for (d in b) b[d] != Object.prototype[d] && d.toLowerCase() != "movie" && (a = m, f = d, e = b[d], c = n.createElement("param"), c.setAttribute("name", f), c.setAttribute("value", e), a.appendChild(c)); g.parentNode.replaceChild(m, g); c = m
            }
        } return c
    } function g(a) {
        var b = k(a); if (b && b.nodeName == "OBJECT") q.ie && q.win ? (b.style.display = "none", function () {
            if (b.readyState == 4) { var g = k(a); if (g) { for (var c in g) typeof g[c] == "function" && (g[c] = null); g.parentNode.removeChild(g) } } else setTimeout(arguments.callee,
            10)
        }()) : b.parentNode.removeChild(b)
    } function k(a) { var b = null; try { b = n.getElementById(a) } catch (g) { } return b } function t(a, b, g) { a.attachEvent(b, g); F[F.length] = [a, b, g] } function p(a) { var b = q.pv, a = a.split("."); a[0] = parseInt(a[0], 10); a[1] = parseInt(a[1], 10) || 0; a[2] = parseInt(a[2], 10) || 0; return b[0] > a[0] || b[0] == a[0] && b[1] > a[1] || b[0] == a[0] && b[1] == a[1] && b[2] >= a[2] ? !0 : !1 } function r(a, b, g, c) {
        if (!q.ie || !q.mac) {
            var d = n.getElementsByTagName("head")[0]; if (d) {
                g = g && typeof g == "string" ? g : "screen"; c && (L = C = null); if (!C || L !=
                g) c = n.createElement("style"), c.setAttribute("type", "text/css"), c.setAttribute("media", g), C = d.appendChild(c), q.ie && q.win && typeof n.styleSheets != v && n.styleSheets.length > 0 && (C = n.styleSheets[n.styleSheets.length - 1]), L = g; q.ie && q.win ? C && typeof C.addRule == y && C.addRule(a, b) : C && typeof n.createTextNode != v && C.appendChild(n.createTextNode(a + " {" + b + "}"))
            }
        }
    } function m(a, b) { if (N) { var g = b ? "visible" : "hidden"; D && k(a) ? k(a).style.visibility = g : r("#" + a, "visibility:" + g) } } function o(a) {
        return /[\\\"<>\.;]/.exec(a) != null &&
        typeof encodeURIComponent != v ? encodeURIComponent(a) : a
    } var v = "undefined", y = "object", B = "application/x-shockwave-flash", x = "SWFObjectExprInst", w = window, n = document, z = navigator, A = !1, E = [function () { A ? e() : i() }], s = [], J = [], F = [], G, I, K, M, D = !1, H = !1, C, L, N = !0, q = function () {
        var a = typeof n.getElementById != v && typeof n.getElementsByTagName != v && typeof n.createElement != v, b = z.userAgent.toLowerCase(), g = z.platform.toLowerCase(), c = g ? /win/.test(g) : /win/.test(b), g = g ? /mac/.test(g) : /mac/.test(b), b = /webkit/.test(b) ? parseFloat(b.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,
        "$1")) : !1, d = !+"\u000b1", f = [0, 0, 0], k = null; if (typeof z.plugins != v && typeof z.plugins["Shockwave Flash"] == y) { if ((k = z.plugins["Shockwave Flash"].description) && !(typeof z.mimeTypes != v && z.mimeTypes[B] && !z.mimeTypes[B].enabledPlugin)) A = !0, d = !1, k = k.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), f[0] = parseInt(k.replace(/^(.*)\..*$/, "$1"), 10), f[1] = parseInt(k.replace(/^.*\.(.*)\s.*$/, "$1"), 10), f[2] = /[a-zA-Z]/.test(k) ? parseInt(k.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0 } else if (typeof w.ActiveXObject != v) try {
            var m = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
            if (m) { try { k = m.GetVariable("$version") } catch (e) { } k && (d = !0, k = k.split(" ")[1].split(","), f = [parseInt(k[0], 10), parseInt(k[1], 10), parseInt(k[2], 10)]) }
        } catch (i) { } return { w3: a, pv: f, wk: b, ie: d, win: c, mac: g }
    }(); (function () {
        q.w3 && ((typeof n.readyState != v && n.readyState == "complete" || typeof n.readyState == v && (n.getElementsByTagName("body")[0] || n.body)) && a(), D || (typeof n.addEventListener != v && n.addEventListener("DOMContentLoaded", a, !1), q.ie && q.win && (n.attachEvent("onreadystatechange", function () {
            n.readyState == "complete" &&
            (n.detachEvent("onreadystatechange", arguments.callee), a())
        }), w == top && function () { if (!D) { try { n.documentElement.doScroll("left") } catch (b) { setTimeout(arguments.callee, 0); return } a() } }()), q.wk && function () { D || (/loaded|complete/.test(n.readyState) ? a() : setTimeout(arguments.callee, 0)) }(), j(a)))
    })(); (function () {
        q.ie && q.win && window.attachEvent("onunload", function () {
            for (var a = F.length, b = 0; b < a; b++) F[b][0].detachEvent(F[b][1], F[b][2]); a = J.length; for (b = 0; b < a; b++) g(J[b]); for (var c in q) q[c] = null; q = null; for (var d in swfobject) swfobject[d] =
            null; swfobject = null
        })
    })(); return {
        FusionChartsModified: !0, registerObject: function (a, b, g, c, d) { var f = d || {}; if (q.w3 && a && b) f.id = a, f.swfVersion = b, f.expressInstall = g, f.callbackFn = c, f.userData = d, s[s.length] = f, m(a, !1); else if (c) f.success = !1, f.id = a, c(f) }, getObjectById: function (a) { if (q.w3) return d(a) }, embedSWF: function (a, b, g, d, f, k, e, i, t, j, o) {
            var r = o || {}; r.success = !1; r.id = b; q.w3 && !(q.wk && q.wk < 312) && a && b && g && d && f ? (m(b, !1), h(function () {
                g += ""; d += ""; var h = {}; if (t && typeof t === y) for (var o in t) h[o] = t[o]; h.data = a; h.width =
                g; h.height = d; o = {}; if (i && typeof i === y) for (var n in i) o[n] = i[n]; if (e && typeof e === y) for (var q in e) typeof o.flashvars != v ? o.flashvars += "&" + q + "=" + e[q] : o.flashvars = q + "=" + e[q]; if (p(f)) n = u(h, o, b), h.id == b && m(b, !0), r.success = !0, r.ref = n; else if (k && l()) { h.data = k; c(h, o, b, j); return } else m(b, !0); j && j(r)
            })) : j && j(r)
        }, switchOffAutoHideShow: function () { N = !1 }, ua: q, getFlashPlayerVersion: function () { return { major: q.pv[0], minor: q.pv[1], release: q.pv[2] } }, hasFlashPlayerVersion: p, createSWF: function (a, b, g) {
            if (q.w3) return u(a,
            b, g)
        }, showExpressInstall: function (a, b, g, d) { q.w3 && l() && c(a, b, g, d) }, removeSWF: function (a) { q.w3 && g(a) }, createCSS: function (a, b, g, c) { q.w3 && r(a, b, g, c) }, addDomLoadEvent: h, addLoadEvent: j, getQueryParamValue: function (a) { var b = n.location.search || n.location.hash; if (b) { /\?/.test(b) && (b = b.split("?")[1]); if (a == null) return o(b); for (var b = b.split("&"), g = 0; g < b.length; g++) if (b[g].substring(0, b[g].indexOf("=")) == a) return o(b[g].substring(b[g].indexOf("=") + 1)) } return "" }, expressInstallCallback: function () {
            if (H) {
                var a = k(x);
                if (a && G) { a.parentNode.replaceChild(G, a); if (I && (m(I, !0), q.ie && q.win)) G.style.display = "block"; K && K(M) } H = !1
            }
        }
    }
}();
FusionCharts(["private", "modules.renderer.flash", function () {
    var a = this, h = window, j = document, e = function (a) { return typeof a === "function" }, i = h.encodeURIComponent ? function (a) { return h.encodeURIComponent(a) } : function (a) { return h.escape(a) }; try { a.swfobject = h.swfobject, h.swfobject.createCSS("object.FusionCharts:focus, embed.FusionCharts:focus", "outline: none") } catch (d) { } a.core.options.requiredFlashPlayerVersion = "8"; a.core.options.flashInstallerUrl = "http://get.adobe.com/flashplayer/"; a.core.options.installRedirectMessage =
    "You need Adobe Flash Player 8 (or above) to view the charts on this page. It is a free, lightweight and safe installation from Adobe Systems Incorporated.\n\nWould you like to go to Adobe's website and install Flash Player?"; a.core.hasRequiredFlashVersion = function (b) { if (typeof b === "undefined") b = a.core.options.requiredFlashPlayerVersion; return h.swfobject ? h.swfobject.hasFlashPlayerVersion(b) : void 0 }; var l = !1, c = /.*?\%\s*?$/g, b = { chartWidth: !0, chartHeight: !0, mapWidth: !0, mapHeight: !0 }, f = function (b, c) {
        if (!(c &&
        c.source === "XmlHttpRequest")) { var d = b.sender; if (d.ref && e(d.ref.dataInvokedOnSWF) && d.ref.dataInvokedOnSWF() && e(d.ref.getXML)) a.raiseWarning(d, "08300116", "run", "::DataHandler~__fusioncharts_vars", "Data was set in UTF unsafe manner"), d.setChartData(h.unescape(b.sender.ref.getXML({ escaped: !0 })), FusionChartsDataFormats.XML, !0), d.flashVars.dataXML = d.getChartData(FusionChartsDataFormats.XML), delete d.flashVars.dataURL; b.sender.removeEventListener("DataLoaded", f) }
    }; h.__fusioncharts_dimension = function () {
        return function (b) {
            var d,
            f; return !((d = a.core(b)) instanceof a.core && d.ref && (f = d.ref.parentNode)) ? {} : { width: f.offsetWidth * (c.test(d.width) ? parseInt(d.width, 10) / 100 : 1), height: f.offsetHeight * (c.test(d.height) ? parseInt(d.height, 10) / 100 : 1) }
        }
    }(); h.__fusioncharts_vars = function (b, c) {
        var d = a.core.items[b]; if (!(d instanceof a.core)) return setTimeout(function () {
            var c; if (c = b !== void 0) {
                var d = h.swfobject.getObjectById(b), f, k, i; c = {}; var j; if (!d && typeof d.tagName !== "string") c = void 0; else {
                    if ((f = d.parentNode) && f.tagName && f.tagName.toLowerCase() ===
                    "object" && f.parentNode) f = f.parentNode; if (f) { c.renderAt = f; if (!(d.tagName.toLowerCase() !== "object" && d.getAttribute && (j = d.getAttribute("flashvars") || "")) && d.hasChildNodes && d.hasChildNodes()) { i = d.childNodes; f = 0; for (d = i.length; f < d; f += 1) if (i[f].tagName === "PARAM" && (k = i[f].getAttribute("name")) && k.toLowerCase() === "flashvars") j = i[f].getAttribute("value") || "" } if (j && e(j.toString)) { j = j.split(/\=|&/g); c.flashVars = {}; f = 0; for (d = j.length; f < d; f += 2) c.flashVars[j[f]] = j[f + 1] } } else c = void 0
                }
            } c || a.raiseError(a.core, "25081621",
            "run", "::FlashRenderer", "FusionCharts Flash object is accessing flashVars of non-existent object.")
        }, 0), !1; if (typeof c === "object") { if (d.ref && e(d.ref.dataInvokedOnSWF) && d.ref.dataInvokedOnSWF()) { if (c.dataURL !== void 0) d.addEventListener("DataLoaded", f); else if (c.dataXML !== void 0) c.dataXML = h.unescape(c.dataXML); d.__state.flashUpdatedFlashVars = !0 } else delete c.dataURL, delete c.dataXML; a.extend(d.flashVars, c); return !0 } if (d.__state.dataSetDuringConstruction && d.flashVars.dataXML === void 0 && d.options.dataSource !==
        void 0 && typeof d.options.dataFormat === "string") d.flashVars.dataXML = d.options.dataSource; d.__state.flashInvokedFlashVarsRequest = !0; return d.flashVars
    }; h.__fusioncharts_event = function (b, c) { setTimeout(function () { a.raiseEvent(b.type, c, a.core.items[b.sender]) }, 0) }; var u = function (b) {
        b = b.sender; if (b.options.renderer === "flash") {
            if (b.width === void 0) b.width = a.renderer.policies.flashVars.chartWidth[1]; if (b.height === void 0) b.height = a.renderer.policies.flashVars.chartHeight[1]; if (b.flashVars.DOMId === void 0) b.flashVars.DOMId =
            b.id; a.extend(b.flashVars, { registerWithJS: "1", chartWidth: b.width, chartHeight: b.height, InvalidXMLText: "Invalid data." }); if (Boolean(b.options.autoInstallRedirect) === !0 && !h.swfobject.hasFlashPlayerVersion(a.core.options.requiredFlashPlayerVersion.toString()) && l === !1 && (l = !0, a.core.options.installRedirectMessage && h.confirm(a.core.options.installRedirectMessage))) h.location.href = a.core.options.flashInstallerUrl; if (b.options.dataFormat === void 0 && b.options.dataSource === void 0) b.options.dataFormat = FusionChartsDataFormats.XMLURL,
            b.options.dataSource = "Data.xml"
        }
    }; a.renderer.register("flash", {
        dataFormat: "xml", init: function () { a.addEventListener("BeforeInitialize", u) }, policies: {
            params: { scaleMode: ["scaleMode", "noScale"], scale: ["scaleMode", "noScale"], wMode: ["wMode", "opaque"], menu: ["menu", void 0], bgColor: ["backgroundColor", "#ffffff"], allowScriptAccess: ["allowScriptAccess", "always"], quality: ["quality", "best"], swLiveConnect: ["swLiveConnect", void 0], base: ["base", void 0], align: ["align", void 0], salign: ["sAlign", void 0] }, flashVars: {
                lang: ["lang",
                "EN"], debugMode: ["debugMode", void 0], scaleMode: ["scaleMode", "noScale"], animation: ["animate", void 0]
            }, options: { autoInstallRedirect: ["autoInstallRedirect", !1], useLegacyXMLTransport: ["_useLegacyXMLTransport", !1] }
        }, render: function (c, d) {
            Boolean(this.flashVars.animation) === !0 && delete this.flashVars.animation; this.src || a.raiseError(this, "03102348", "run", "::FlashRenderer.render", 'Could not find a valid "src" attribute. swfUrl or chart type missing.'); var f = {}, e = this.flashVars.dataXML, j = this.flashVars.dataURL,
            m, o; a.extend(f, this.flashVars); if (this.flashVars.stallLoad === !0) { if (this.options.dataFormat === FusionChartsDataFormats.XML) e = this.options.dataSource; if (this.options.dataFormat === FusionChartsDataFormats.XMLURL) j = this.options.dataSource } if (a.core.debugMode.enabled() && a.core.debugMode.syncStateWithCharts && f.debugMode === void 0 && this.options.safeMode) f.debugMode = "1"; this.__state.lastRenderedSrc = this.src; f.dataXML = i(e) || ""; f.dataURL = a.isXSSSafe(j) ? j || "" : i(j) || ""; for (m in b) f.hasOwnProperty(m) && (f[m] = i(f[m]));
            if (!h.swfobject || !h.swfobject.embedSWF || !h.swfobject.FusionChartsModified) h.swfobject = a.swfobject; l && !a.core.options.installRedirectMessage && (o = { silent: !0 }); h.swfobject && h.swfobject.embedSWF ? h.swfobject.embedSWF(this.src, c.id, this.width, this.height, a.core.options.requiredFlashPlayerVersion, void 0, f, this.params, this.attributes, d, o) : a.raiseError(this, "1113061611", "run", "FlashRenderer~render", Error("Could not find swfobject library or embedSWF API"))
        }, update: function (a) {
            var b = this.ref, c = a.data; this.flashVars.dataXML =
            c; a.error === void 0 ? this.isActive() && e(b.setDataXML) ? this.src !== this.__state.lastRenderedSrc ? this.render() : b.setDataXML(c, !1) : (delete this.flashVars.dataURL, delete this.flashVars.animation) : this.isActive() && e(b.showChartMessage) ? b.showChartMessage("InvalidXMLText") : (this.flashVars.dataXML = "<Invalid" + a.format.toUpperCase() + ">", delete this.flashVars.dataURL, delete this.flashVars.animation)
        }, resize: function () {
            this.flashVars.chartWidth = this.width; this.flashVars.chartHeight = this.height; if (this.ref !== void 0) this.ref.width =
            this.width, this.ref.height = this.height, e(this.ref.resize) && this.ref.resize(this.ref.offsetWidth, this.ref.offsetHeight)
        }, config: function (b) { a.extend(this.flashVars, b) }, dispose: function () { var a; h.swfobject.removeSWF(this.id); (a = this.ref) && a.parentNode && a.parentNode.removeChild(a) }, protectedMethods: { flashVars: !0, params: !0, setDataXML: !0, setDataURL: !0, hasRendered: !0, getXML: !0, getDataAsCSV: !0, print: !0, exportChart: !0 }, events: {
            Loaded: function (a) { a.sender.flashVars.animation = "0" }, DataLoadRequested: function (b,
            c) {
                var d = b.sender, e = c.url, i = !1; if (c.dataFormat === FusionChartsDataFormats.XML && (h.location.protocol === "file:" && Boolean(d.options.safeMode) || Boolean(d.options.useLegacyXMLTransport))) d.ref ? d.ref.setDataURL ? d.ref.setDataURL(e, !1) : a.raiseError(this, "0109112330", "run", ">FlashRenderer^DataLoadRequested", Error("Unable to fetch URL due to security restriction on Flash Player. Update global security settings.")) : d.flashVars.dataURL = e, b.stopPropagation(), i = !0, c.cancelDataLoadRequest(), d.addEventListener("DataLoaded",
                f); if (d.ref && d.showChartMessage) delete d.flashVars.stallLoad, d.options.showDataLoadingMessage && d.ref.showChartMessage("XMLLoadingText"); else if (!i) d.flashVars.stallLoad = !0
            }, DataLoadRequestCancelled: function (a) { a = a.sender; a.ref && e(a.showChartMessage) && a.ref.showChartMessage(); delete a.flashVars.stallLoad }, DataLoadError: function (a, b) {
                var c = a.sender; c.ref && e(c.ref.showChartMessage) && b.source === "XmlHttpRequest" ? c.ref.showChartMessage("LoadDataErrorText") : (delete c.flashVars.dataURL, c.flashVars.dataXML =
                "<JSON parsing error>", delete c.flashVars.stallLoad)
            }, DataLoadRequestCompleted: function (a, b) { b.source === "XmlHttpRequest" && delete a.sender.flashVars.stallLoad }
        }, prototype: {
            getSWFHTML: function () {
                var a = j.createElement("span"), b = j.createElement("span"), c = "RnVzaW9uQ2hhcnRz" + (new Date).getTime(); a.appendChild(b); b.setAttribute("id", c); a.style.display = "none"; j.getElementsByTagName("body")[0].appendChild(a); h.swfobject.embedSWF(this.src, c, this.width, this.height, "8.0.0", void 0, this.flashVars, this.params, this.attrs);
                b = a.innerHTML.replace(c, this.id); h.swfobject.removeSWF(c); a.parentNode.removeChild(a); return b
            }, setTransparent: function (a) { typeof a !== "boolean" && a !== null && (a = !0); this.params.wMode = a === null ? "window" : a === !0 ? "transparent" : "opaque" }, registerObject: function () { }, addVariable: function () { a.raiseWarning(this, "1012141919", "run", "FlashRenderer~addVariable()", 'Use of deprecated "addVariable()". Replace with "configure()".'); a.core.prototype.configure.apply(this, arguments) }, setDataXML: function (b) {
                a.raiseWarning(this,
                "11033001081", "run", "GenericRuntime~setDataXML()", 'Use of deprecated "setDataXML()". Replace with "setXMLData()".'); b === void 0 || b === null || !e(b.toString) ? a.raiseError(this, "25081627", "param", "~setDataXML", 'Invalid data type for parameter "xml"') : this.ref === void 0 || this.ref === null || !e(this.ref.setDataXML) ? this.setChartData(b.toString(), FusionChartsDataFormats.XML) : this.ref.setDataXML(b.toString())
            }, setDataURL: function (b) {
                a.raiseWarning(this, "11033001082", "run", "GenericRuntime~setDataURL()", 'Use of deprecated "setDataURL()". Replace with "setXMLUrl()".');
                b === void 0 || b === null || !e(b.toString) ? a.raiseError(this, "25081724", "param", "~setDataURL", 'Invalid data type for parameter "url"') : this.ref === void 0 || this.ref === null || !e(this.ref.setDataURL) ? this.setChartData(b.toString(), FusionChartsDataFormats.XMLURL) : this.ref.setDataURL(b.toString())
            }
        }
    }); a.renderer.setDefault("flash")
}]);
FusionCharts(["private", "modules.renderer.highcharts", function () {
    var a = this, h = window, j = document, e = a.core.options; /msie/i.test(navigator.userAgent); j.createElementNS && j.createElementNS("http://www.w3.org/2000/svg", "svg"); var i = function () { }, d = a.hcLib = { cmdQueue: [] }, l = d.moduleCmdQueue = { jquery: [], base: [], charts: [], powercharts: [], widgets: [], maps: [] }, c = d.moduleDependencies = {}, b = d.moduleMeta = {
        jquery: "jquery.min.js", base: "FusionCharts.HC.js", charts: "FusionCharts.HC.Charts.js", powercharts: "FusionCharts.HC.PowerCharts.js",
        widgets: "FusionCharts.HC.Widgets.js", maps: "FusionCharts.HC.Maps.js"
    }, f = {}, u = d.getDependentModuleName = function (a) { var b = [], d, g; for (d in c) if ((g = c[d][a]) !== void 0) b[g] = d; return b }; d.injectModuleDependency = function (a, b, g) { var f = !1; b === void 0 && (b = a); c[a] || (c[a] = {}, l[a] || (l[a] = [], d.moduleMeta[a] = e.html5ScriptNamePrefix + b + e.html5ScriptNameSuffix), f = !0); c[a][b] = g || 0; return f }; var g = d.hasModule = function (b) {
        var c, d; if (b instanceof Array) {
            c = 0; for (d = b.length; c < d; c += 1) if (!Boolean(a.modules["modules.renderer.highcharts-" +
            b]) || b === "jquery" && !Boolean(h.jQuery)) return !1; return !0
        } if (b === "jquery") return Boolean(h.jQuery); return Boolean(a.modules["modules.renderer.highcharts-" + b])
    }; d.needsModule = function (a, b) { return (d.moduleDependencies[a] && d.moduleDependencies[a][b]) !== void 0 }; var k = d.loadModule = function (c, d, e, k) {
        c instanceof Array || (c = [c]); var i = c.length, j = 0, h = function () {
            if (j >= i) d && d(); else {
                var l = c[j], t = b[l], p; j += 1; if (l) if (g(l)) { h(); return } else {
                    if (f[l]) {
                        a.raiseError(k || a.core, "1112201445A", "run", "JavaScriptRenderer~loadModule() ",
                        "required resources are absent or blocked from loading."); e && e(l); return
                    }
                } else e && e(l); p = l === "jquery" ? a.core.options.jQuerySourceFileName : a.core.options["html5" + a.capitalizeString(l) + "Src"]; a.loadScript(p == void 0 ? t : p, { success: function () { g(l) ? h() : e && e(l) }, failure: e && function () { e(l) } }, void 0, !0)
            }
        }; h()
    }, t = d.executeWaitingCommands = function (a) { for (var b; b = a.shift() ;) typeof b === "object" && i[b.cmd].apply(b.obj, b.args) }; d.cleanupWaitingCommands = function (a) {
        for (var b = a.chartType(), b = u(b), c, d = [], g; c = b.shift() ;) {
            for (c =
            l[c] || []; g = c.shift() ;) typeof g === "object" && g.obj !== a && d.push(g); c.concat(d); d = []
        }
    }; var p = function (a) { delete a.sender.jsVars._reflowData; a.sender.jsVars._reflowData = {}; delete a.sender.jsVars._reflowClean }, r = function () {
        var a = function () { }; a.prototype = {
            LoadDataErrorText: "Error in loading data.", XMLLoadingText: "Retrieving data. Please wait", InvalidXMLText: "Invalid data.", ChartNoDataText: "No data to display.", ReadingDataText: "Reading data. Please wait", ChartNotSupported: "Chart type not supported.", LoadingText: "Loading chart. Please wait",
            RenderChartErrorText: "Unable to render chart."
        }; return a.prototype.constructor = a
    }(); a.extend(a.core.options, { html5ScriptNameSuffix: ".js", html5ScriptNamePrefix: "FusionCharts.HC.", jQuerySourceFileName: "jquery.min.js" }); a.extend(i, {
        dataFormat: "json", ready: !1, policies: { jsVars: {}, options: { showLoadingMessage: ["showLoadingMessage", !0] } }, init: function () {
            h.jQuery ? g("base") ? i.ready = !0 : k("base", function () { i.ready = !0; t(d.cmdQueue) }, void 0, a.core) : k("jquery", function () {
                jQuery.noConflict(); if (h.$ === void 0) h.$ =
                jQuery; i.init()
            }, void 0, a.core)
        }, render: function (a) {
            var b = a, c = this.jsVars, g = c.msgStore; if (b && this.options.showLoadingMessage) b.innerHTML = '<small style="display: inline-block; *zoom:1; *display:inline; width: 100%; font-family: Verdana; font-size: 10px; color: #666666; text-align: center; padding-top: ' + (parseInt(b.style.height, 10) / 2 - 5) + 'px">' + g.LoadingText + "</small>", b.style.backgroundColor = c.transparent ? "transparent" : this.options.containerBackgroundColor || "#ffffff"; d.cmdQueue.push({
                cmd: "render",
                obj: this, args: arguments
            })
        }, update: function () { d.cmdQueue.push({ cmd: "update", obj: this, args: arguments }) }, resize: function () { d.cmdQueue.push({ cmd: "resize", obj: this, args: arguments }) }, dispose: function () { var a = d.cmdQueue, b, c; b = 0; for (c = a.length; b < c; b += 1) a[b].obj === this && (a.splice(b, 1), c -= 1, b -= 1) }, load: function () { d.cmdQueue.push({ cmd: "load", obj: this, args: arguments }) }, config: function (a, b) {
            var c, d = this.jsVars, g = d.msgStore, d = d.cfgStore; typeof a === "string" && arguments.length > 1 && (c = a, a = {}, a[c] = b); for (c in a) g[c] ?
            g[c] = a[c] : d[c.toLowerCase()] = a[c]
        }, protectedMethods: {}, events: {
            BeforeInitialize: function (a) { var b = a.sender, a = b.jsVars, c = this.chartType(); a.fcObj = b; a.msgStore = a.msgStore || new r; a.cfgStore = a.cfgStore || {}; a.previousDrawCount = -1; a.drawCount = 0; a._reflowData = {}; if (!(a.userModules instanceof Array) && (b = a.userModules, a.userModules = [], typeof b === "string")) a.userModules = a.userModules.concat(b.split(",")); if (!d.chartAPI || !d.chartAPI[c]) a.needsLoaderCall = !0 }, Initialized: function (a) {
                var a = a.sender, b = a.jsVars;
                b.needsLoaderCall && (delete b.needsLoaderCall, i.load.call(a))
            }, BeforeDataUpdate: p, BeforeDispose: p, BeforeRender: function (a) { var b = a.sender.jsVars; delete b.drLoadAttempted; delete b.waitingModule; delete b.waitingModuleError; p.apply(this, arguments) }, DataLoadRequested: function (a) {
                var a = a.sender, b = a.jsVars; delete b.loadError; a.ref && a.options.showDataLoadingMessage ? b.hcObj && !b.hasNativeMessage && b.hcObj.showLoading ? b.hcObj.showLoading(b.msgStore.XMLLoadingText) : a.ref.showChartMessage ? a.ref.showChartMessage("XMLLoadingText") :
                b.stallLoad = !0 : b.stallLoad = !0
            }, DataLoadRequestCompleted: function (a) { delete a.sender.id.stallLoad }, DataLoadError: function (a) { var b = a.sender, c = b.jsVars; delete c.stallLoad; c.loadError = !0; b.ref && typeof b.ref.showChartMessage === "function" && b.ref.showChartMessage("LoadDataErrorText"); p.apply(this, arguments) }
        }, _call: function (a, b, c) { a.apply(c || h, b || []) }
    }); a.extend(i.prototype, {
        getSWFHTML: function () { a.raiseWarning(this, "11090611381", "run", "JavaScriptRenderer~getSWFHTML()", "getSWFHTML() is not supported for JavaScript charts.") },
        addVariable: function () { a.raiseWarning(this, "11090611381", "run", "JavaScriptRenderer~addVariable()", 'Use of deprecated "addVariable()". Replace with "configure()".'); a.core.prototype.configure.apply(this, arguments) }, getXML: function () { a.raiseWarning(this, "11171116291", "run", "JavaScriptRenderer~getXML()", 'Use of deprecated "getXML()". Replace with "getXMLData()".'); return this.getXMLData.apply(this, arguments) }, setDataXML: function () {
            a.raiseWarning(this, "11171116292", "run", "JavaScriptRenderer~setDataXML()",
            'Use of deprecated "setDataXML()". Replace with "setXMLData()".'); return this.setXMLData.apply(this, arguments)
        }, setDataURL: function () { a.raiseWarning(this, "11171116293", "run", "JavaScriptRenderer~setDataURL()", 'Use of deprecated "SetDataURL()". Replace with "setXMLUrl()".'); return this.setXMLUrl.apply(this, arguments) }, hasRendered: function () { return this.jsVars.hcObj && this.jsVars.hcObj.hasRendered }, setTransparent: function (a) {
            var b; if (b = this.jsVars) typeof a !== "boolean" && a !== null && (a = !0), b.transparent =
            a === null ? !1 : a === !0 ? !0 : !1
        }
    }); a.extend(a.core, {
        _fallbackJSChartWhenNoFlash: function () { h.swfobject.hasFlashPlayerVersion(a.core.options.requiredFlashPlayerVersion) || a.renderer.setDefault("javascript") }, _enableJSChartsForSelectedBrowsers: function (b) { b === void 0 || b === null || a.renderer.setDefault(RegExp(b).test(navigator.userAgent) ? "javascript" : "flash") }, _doNotLoadExternalScript: function (a) { var c, d; for (c in a) d = c.toLowerCase(), b[d] && (f[d] = Boolean(a[c])) }, _preloadJSChartModule: function () {
            throw "NotImplemented()";
        }
    }); a.renderer.register("javascript", i); h.swfobject && h.swfobject.hasFlashPlayerVersion && !h.swfobject.hasFlashPlayerVersion(a.core.options.requiredFlashPlayerVersion) && (a.raiseWarning(a.core, "1204111846", "run", "JSRenderer", "Switched to JavaScript as default rendering due to absence of required Flash Player."), a.renderer.setDefault("javascript"))
}]);
(function () { var a = FusionCharts(["private", "XMLDataHandler"]); if (a !== void 0) { var h = function (a) { return { data: a, error: void 0 } }; a.addDataHandler("XML", { encode: h, decode: h }) } })(); var JSON; JSON || (JSON = {});
(function () {
    function a(a) { return a < 10 ? "0" + a : a } function h(a) { i.lastIndex = 0; return i.test(a) ? '"' + a.replace(i, function (a) { var b = c[a]; return typeof b === "string" ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4) }) + '"' : '"' + a + '"' } function j(a, c) {
        var g, e, i, p, r = d, m, o = c[a]; o && typeof o === "object" && typeof o.toJSON === "function" && (o = o.toJSON(a)); typeof b === "function" && (o = b.call(c, a, o)); switch (typeof o) {
            case "string": return h(o); case "number": return isFinite(o) ? String(o) : "null"; case "boolean": case "null": return String(o);
            case "object": if (!o) return "null"; d += l; m = []; if (Object.prototype.toString.apply(o) === "[object Array]") { p = o.length; for (g = 0; g < p; g += 1) m[g] = j(g, o) || "null"; i = m.length === 0 ? "[]" : d ? "[\n" + d + m.join(",\n" + d) + "\n" + r + "]" : "[" + m.join(",") + "]"; d = r; return i } if (b && typeof b === "object") { p = b.length; for (g = 0; g < p; g += 1) typeof b[g] === "string" && (e = b[g], (i = j(e, o)) && m.push(h(e) + (d ? ": " : ":") + i)) } else for (e in o) Object.prototype.hasOwnProperty.call(o, e) && (i = j(e, o)) && m.push(h(e) + (d ? ": " : ":") + i); i = m.length === 0 ? "{}" : d ? "{\n" + d + m.join(",\n" +
            d) + "\n" + r + "}" : "{" + m.join(",") + "}"; d = r; return i
        }
    } if (typeof Date.prototype.toJSON !== "function") Date.prototype.toJSON = function () { return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + a(this.getUTCMonth() + 1) + "-" + a(this.getUTCDate()) + "T" + a(this.getUTCHours()) + ":" + a(this.getUTCMinutes()) + ":" + a(this.getUTCSeconds()) + "Z" : null }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function () { return this.valueOf() }; var e = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
    i = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, d, l, c = { "\u0008": "\\b", "\t": "\\t", "\n": "\\n", "\u000c": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\" }, b; if (typeof JSON.stringify !== "function") JSON.stringify = function (a, c, g) {
        var e; l = d = ""; if (typeof g === "number") for (e = 0; e < g; e += 1) l += " "; else typeof g === "string" && (l = g); if ((b = c) && typeof c !== "function" && (typeof c !== "object" || typeof c.length !== "number")) throw Error("JSON.stringify"); return j("",
        { "": a })
    }; if (typeof JSON.parse !== "function") JSON.parse = function (a, b) {
        function c(a, d) { var f, e, k = a[d]; if (k && typeof k === "object") for (f in k) Object.prototype.hasOwnProperty.call(k, f) && (e = c(k, f), e !== void 0 ? k[f] = e : delete k[f]); return b.call(a, d, k) } var d, a = String(a); e.lastIndex = 0; e.test(a) && (a = a.replace(e, function (a) { return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4) })); if (/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return d = eval("(" + a + ")"), typeof b === "function" ? c({ "": d }, "") : d; throw new SyntaxError("JSON.parse");
    }
})();
(function () {
    var a = FusionCharts(["private", "JSON_DataHandler"]); if (a !== void 0) {
        window.JSON === void 0 && a.raiseError(this, "1113062012", "run", "JSONDataHandler", Error("Could not find library support for JSON parsing.")); a.core.options.allowIESafeXMLParsing = ["_allowIESafeXMLParsing", !0]; var h = function (a) { if (a === null || a === void 0 || typeof a.toString !== "function") return ""; return a = a.toString().replace(/&/g, "&amp;").replace(/\'/g, "&#39;").replace(/\"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;") }, j = function () {
            var e =
            {
                arr: {
                    set: !0, trendlines: !0, vtrendlines: !0, line: { trendlines: !0, vtrendlines: !0 }, data: !0, dataset: !0, lineset: !0, categories: !0, category: !0, linkeddata: !0, application: !0, definition: !0, axis: !0, connectors: !0, connector: { connectors: !0 }, trendset: !0, row: { rows: !0 }, column: { columns: !0 }, label: { labels: !0 }, color: { colorrange: !0 }, dial: { dials: !0 }, pointer: { pointers: !0 }, point: { trendpoints: !0 }, process: { processes: !0 }, task: { tasks: !0 }, milestone: { milestones: !0 }, datacolumn: { datatable: !0 }, text: { datacolumn: !0 }, alert: { alerts: !0 },
                    groups: { annotations: !0 }, items: { groups: !0 }, shapes: !0, shape: { shapes: !0 }, entitydef: !0, entity: { entitydef: !0 }
                }, tag: {
                    chart: "linkedchart", map: "linkedmap", set: "data", vline: { chart: "data", dataset: "data", categories: "category", linkedchart: "data" }, apply: { application: "application" }, style: { definition: "definition" }, marker: { application: "application", definition: "definition" }, entity: { entitydef: "entitydef", data: "data" }, shape: { shapes: "shapes" }, connector: {
                        connectors: {
                            chart: "connector", linkedchart: "connector", map: "connectors",
                            linkedmap: "connectors"
                        }
                    }, annotationgroup: { annotations: "groups" }, annotation: { groups: "items" }
                }, attr: { vline: { vline: "true" } }, ins: { chart: !0, map: !0 }, dsv: { dataset: "data", categories: "category" }, text: { target: "target", value: "value" }, group: { styles: { definition: !0, application: !0 }, chart: { value: !0, target: !0 }, linkedchart: { value: !0, target: !0 }, markers: { definition: !0, application: !0, shapes: !0, connectors: !0 }, map: { entitydef: !0, data: !0 }, linkedmap: { entitydef: !0, data: !0 } }
            }, d = {
                append: function (a, b, d, j) {
                    e.arr[d] && (e.arr[d] ===
                    !0 || e.arr[d][j] === !0) ? (b[d] instanceof Array || (b[d] = []), b[d].push(a)) : b[d] = a
                }, child: function (c, b, f, j) {
                    var g, k, h, l, r, m; for (g = 0; g < b.length; g += 1) switch (h = b[g], k = h.nodeName.toLowerCase(), h.nodeType) {
                        case 1: l = d.attr(h.attributes); m = e.ins[k]; m === !0 && (r = l, l = {}, l[k] = r); m = e.attr[k]; typeof m === "object" && a.extend(l, m); if (m = e.tag[k]) if (typeof m === "object" && typeof m[f] === "object") for (r in r = void 0, m[f]) { if (j[r]) { k = m[f][r]; break } } else typeof m === "object" && typeof m[f] === "string" ? k = m[f] : typeof m === "string" && (k = m);
                            h.childNodes.length && ((m = e.group[f]) && m[k] ? d.child(c, h.childNodes, k, j) : d.child(l, h.childNodes, k, j)); m = e.group[f]; (!m || !m[k]) && d.append(l, c, k, f); break; case 3: if (m = e.text[f]) k = m, l = h.data, d.append(l, c, k, f); m = e.dsv[f]; if (typeof m === "string" && j.chart && parseInt(j.chart.compactdatamode, 10)) k = m, l = h.data, c[k] = c[k] ? c[k] + l : l
                    }
                }, attr: function (a) { var b, d = {}; if (!a || !a.length) return d; for (b = 0; b < a.length; b += 1) d[a[b].nodeName.toLowerCase()] = a[b].value || a[b].nodeValue; return d }
            }, j = function (c) {
                var b = {}, f, e, g, k, i, h, r,
                m; if (typeof c !== "object" && typeof c.toString !== "function") return j.errorObject = new TypeError("xml2json.parse()"), b; for (var c = c.toString().replace(/<\!--[\s\S]*?--\>/g, "").replace(/<\?xml[\s\S]*?\?>/ig, "").replace(/&(?!([^;\n\r]+?;))/g, "&amp;$1"), c = c.replace(/^\s\s*/, ""), o = /\s/, v = c.length; o.test(c.charAt(v -= 1)) ;); c = c.slice(0, v + 1); if (!c) return b; try {
                    if (window.DOMParser) f = (new window.DOMParser).parseFromString(c, "text/xml"); else if (document.body && a.core.options.allowIESafeXMLParsing) {
                        var y = document.createElement("xml");
                        y.innerHTML = c; document.body.appendChild(y); f = y.XMLDocument; document.body.removeChild(y)
                    } else f = new ActiveXObject("Microsoft.XMLDOM"), f.async = "false", f.loadXML(c); if (!f || !f.childNodes || !(f.childNodes.length === 1 && (e = f.childNodes[0]) && e.nodeName && (g = e.nodeName.toLowerCase()) && (g === "chart" || g === "map" || g === "graph"))) return j.errorObject = new TypeError("xml2json.parse()"), b; else if (g === "graph") {
                        k = f.createElement("chart"); for (m = (h = e.attributes) && h.length || 0; m--;) k.setAttribute(h[m].name, h[m].value), h.removeNamedItem(h[m].name);
                        if (m = (r = e.childNodes) && r.length || 0) m -= 1, i = e.removeChild(r[m]), k.appendChild(i); for (; m--;) i = e.removeChild(r[m]), k.insertBefore(i, k.firstChild); f.replaceChild(k, e); e = k
                    }
                } catch (B) { j.errorObject = B } e ? (e.attributes && (b[g] = d.attr(e.attributes)), e.childNodes && d.child(b, e.childNodes, g, b), delete j.errorObject) : j.errorObject = new TypeError("xml2json.parse()"); return b
            }; return function (a) { delete j.errorObject; return { data: j(a), error: j.errorObject } }
        }(), e = function () {
            var a = {
                items: {
                    explode: {
                        data: "set", groups: { annotations: "annotationgroup" },
                        items: { groups: "annotation" }
                    }, text: { chart: { target: "target", value: "value" } }, dsv: { dataset: { data: "dataset" }, categories: { category: "categories" } }, attr: { chart: { chart: "chart" }, graph: { graph: "graph" }, map: { map: "map" }, linkedmap: { map: "map" }, linkedchart: { chart: "chart" } }, group: { styles: { definition: "style", application: "apply" }, map: { data: "entity", entitydef: "entity" }, markers: { definition: "marker", application: "marker", shapes: "shape", connectors: "connector" } }
                }, qualify: function (a, c, b) {
                    return typeof this.items[a][b] === "object" ?
                    this.items[a][b][c] : this.items[a][b]
                }
            }, d = function (e, c, b, f) {
                var j = "", g = "", k = "", t = "", p, r, m; c && typeof c.toLowerCase === "function" && (c = c.toLowerCase()); if (b === void 0 && e[c]) for (p in e[c]) if (r = p.toLowerCase(), r === "compactdatamode") f.applyDSV = e[c][p] == 1; if (e instanceof Array) for (p = 0; p < e.length; p += 1) t += typeof e[p] === "string" ? h(e[p]) : d(e[p], c, b, f); else {
                    for (p in e) r = p.toLowerCase(), e[p] instanceof Array && (m = a.qualify("group", r, c)) ? g += "<" + r + ">" + d(e[p], m, c, f) + "</" + r + ">" : typeof e[p] === "object" ? (m = a.qualify("attr",
                    r, c)) ? (k = d(e[p], m, c, f).replace(/\/\>/ig, ""), c = r) : g += d(e[p], r, c, f) : f.applyDSV && (m = a.qualify("dsv", r, c)) ? g += e[p] : (m = a.qualify("text", r, c)) ? g += "<" + m + ">" + e[p] + "</" + m + ">" : r === "vline" && Boolean(e[p]) ? c = "vline" : j += " " + r + '="' + h(e[p]).toString().replace(/\"/ig, "&quot;") + '"'; if (m = a.qualify("explode", b, c)) c = m; t = (k !== "" ? k : "<" + c) + j + (g !== "" ? ">" + g + "</" + c + ">" : " />")
                } return t
            }; return function (a) {
                delete d.errorObject; if (a && typeof a === "string") try { a = JSON.parse(a) } catch (c) { d.errorObject = c } return {
                    data: d(a, a && a.graph ? "graph" :
                    a && a.map ? "map" : "chart", void 0, {}), error: d.errorObject
                }
            }
        }(); a.addDataHandler("JSON", { encode: e, decode: j })
    }
})();
FusionCharts(["private", "CSVDataHandler", function () {
    var a = this, h; h = function (a) { this.data = []; this.columnCount = this.rowCount = 0; this.configure(a) }; h.decodeLiterals = function (a, e) { if (a === void 0 || a === null || !a.toString) return e; return a.replace("{tab}", "\t").replace("{quot}", '"').replace("{apos}", "'") }; h.prototype.set = function (a, e, h) { var d; if (this.rowCount <= a) { for (d = this.rowCount; d <= a; d += 1) this.data[d] = []; this.rowCount = a + 1 } if (this.columnCount <= e) this.columnCount = e + 1; this.data[a][e] = h }; h.prototype.setRow =
    function (a, e) { var h; if (this.rowCount <= a) { for (h = this.rowCount; h <= a; h += 1) this.data[h] = []; this.rowCount = a + 1 } if (this.columnCount < e.length) this.columnCount = e.length; this.data[a] = e }; h.prototype.get = function (a, e) { var h = this.data; return h[a] && h[a][e] }; h.prototype.configure = function (a) { var e = h.decodeLiterals; this.delimiter = e(a.delimiter, ","); this.qualifier = e(a.qualifier, '"'); this.eolCharacter = e(a.eolCharacter, "\r\n") }; h.prototype.clear = function () { this.data = []; this.columnCount = this.rowCount = 0 }; h.prototype.toString =
    function () { var a, e, h = ""; for (a = 0; a < this.rowCount; a += 1) e = this.qualifier + this.data[a].join(this.qualifier + this.delimiter + this.qualifier) + this.qualifier, h += e === '""' ? this.eolCharacter : e + this.eolCharacter; this.rowCount > 0 && (h = h.slice(0, h.length - 2)); return h }; a.addDataHandler("CSV", {
        encode: function (h, e) { a.raiseError(e, "0604111215A", "run", "::CSVDataHandler.encode()", "FusionCharts CSV data-handler only supports encoding of data."); throw "FeatureNotSupportedException()"; }, decode: function (j) {
            var j = a.core.transcodeData(j,
            "xml", "json") || {}, e, i, d, l, c, b, f, u, g = j.chart || j.map || j.graph || {}, k = Boolean(g.exporterrorcolumns || 0), t = j.categories && j.categories[0] && j.categories[0].category || []; i = j.map && !j.chart; var p = !1, r = !1, m = !1, o, v, y, B, x, w, n, z, A, E, s; e = new h({ separator: g.exportdataseparator, qualifier: g.exportdataqualifier }); if (i) e.setRow(0, ["Id", " Short Name", "Long Name", "Value", "Formatted Value"]); else if ((o = j.dials && j.dials.dial || j.pointers && j.pointers.pointer || j.value) !== void 0) if (typeof o === "string") e.set(0, 0, o), typeof j.target ===
            "string" && e.set(0, 1, j.target); else { e.setRow(0, ["Id", "Value"]); c = 0; f = 1; for (b = o.length; c < b; c += 1, f += 1) e.setRow(f, [f, o[c].value]) } else if (o = j.dataset || !(j.data instanceof Array) && []) {
                d = 1; (v = j.lineset) && (o = o.concat(v)); (y = j.axis) && (o = o.concat(y)); x = t.length; if (!(w = o.length)) for (c = 0; c < x; c += 1) n = t[c], e.set(c + 1, 0, n.label || n.name); for (c = 0; c < w; c += 1) {
                    z = o; z[c].dataset ? (z = z[c].dataset, l = 0, B = z.length) : (z = o, l = c, B = l + 1); for (; l < B && !p && !m; l += 1, d += 1) {
                        A = z[l]; e.set(0, d, A.seriesname); f = b = 0; for (E = A.data && A.data.length || 0; b <
                        E || b < x; b += 1) { n = t[b]; i = f + 1; s = A.data && A.data[f] || {}; if (s.x !== void 0 && s.y !== void 0) { p = !0; break } if (s.rowid !== void 0 && s.columnid !== void 0) { m = !0; break } if (b < x && !n.vline) { e.set(i, 0, n.label || n.name); n = parseFloat(s ? s.value : ""); n = isNaN(n) ? "" : n; e.set(i, d, n); if (r || k || s.errorvalue) r || (r = !0, e.set(0, d + 1, "Error")), u = 1, e.set(i, d + 1, s.errorvalue); f += 1 } } u && (d += u, u = 0)
                    }
                } v && (o = o.slice(0, -v.length)); y && o.slice(0, -y.length)
            } else if (o = j.data) {
                e.set(0, 1, g.yaxisname || "Value"); c = 0; for (x = o.length; c < x; c += 1) s = o[c], s.vline || (n = parseFloat(s.value ?
                s.value : ""), n = isNaN(n) ? "" : n, e.setRow(c + 1, [s.label || s.name, n]))
            } if (p) {
                e.clear(); r = !1; u = 0; e.setRow(0, ["Series", "x", "y"]); c = 0; i = 1; o = j.dataset; for (B = o.length; c < B; c += 1) {
                    b = 0; A = o[c] && o[c].data || []; for (w = A.length; b < w; b += 1, i += 1) {
                        s = A[b] || {}; n = [o[c].seriesname, s.x, s.y]; s.z !== void 0 && (n.push(s.z), u || (e.set(0, 3, "z"), u = 1)); if (r || k || s.errorvalue !== void 0 || s.horizontalerrorvalue !== void 0 || s.verticalerrorvalue !== void 0) n.push(s.errorvalue, s.horizontalerrorvalue === void 0 ? s.errorvalue : s.horizontalerrorvalue, s.verticalerrorvalue ===
                        void 0 ? s.errorvalue : s.verticalerrorvalue), r || (e.set(0, u + 3, "Error"), e.set(0, u + 4, "Horizontal Error"), e.set(0, u + 5, "Vertical Error")), r = !0; e.setRow(i, n)
                    }
                }
            } else if (m) {
                e.clear(); k = {}; p = {}; c = 0; b = 1; t = j.rows && j.rows.row || []; for (u = t.length; c < u; c += 1, b += 1) n = t[c], n.id && (k[n.id.toLowerCase()] = b, e.set(b, 0, n.label || n.id)); c = 0; b = 1; t = j.columns && j.columns.column || []; for (u = t.length; c < u; c += 1, b += 1) n = t[c], n.id && (p[n.id.toLowerCase()] = b, e.set(0, b, n.label || n.id)); A = j.dataset && j.dataset[0] && j.dataset[0].data || []; c = 0; for (u =
                A.length; c < u; c += 1) { s = A[c]; i = s.rowid.toLowerCase(); d = s.columnid.toLowerCase(); if (!k[i]) k[i] = e.rowCount, e.set(e.rowCount, 0, s.rowid); if (!p[d]) p[d] = e.columnCount, e.set(0, e.columnCount, s.columnid); e.set(k[i], p[d], s.value) }
            } e.rowCount > 0 && e.get(0, 0) === void 0 && e.set(0, 0, g.xaxisname || "Label"); return { data: e.toString(), error: void 0 }
        }
    }); a.core.addEventListener("Loaded", function (a) { a = a.sender; if (a.options.renderer === "javascript" && !a.getDataAsCSV) a.getDataAsCSV = a.ref.getDataAsCSV = a.getCSVData })
}]);
(function () {
    var a = FusionCharts(["private", "DynamicChartAttributes"]); a !== void 0 && a.extend(a.core, {
        setChartAttribute: function (a, j) { if (typeof a === "string") { var e = a, a = {}; a[e] = j } else if (a === null || typeof a !== "object") return; var e = 0, i = this.getChartData(FusionChartsDataFormats.JSON), d, l = i.chart || i.graph || i.map || {}; for (d in a) e += 1, a[d] === null ? delete l[d.toLowerCase()] : l[d.toLowerCase()] = a[d]; if (e > 0) { if (typeof l.animation === "undefined") l.animation = "0"; this.setChartData(i, FusionChartsDataFormats.JSON) } }, getChartAttribute: function (h) {
            var j =
            (j = this.getChartData(FusionChartsDataFormats.JSON)).chart || j.graph || j.map; if (arguments.length === 0 || h === void 0 || j === void 0) return j; var e, i; if (typeof h === "string") e = j[h.toString().toLowerCase()]; else if (h instanceof Array) { e = {}; for (i = 0; i < h.length; i += 1) e[h[i]] = j[h[i].toString().toLowerCase()] } else a.raiseError(this, "25081429", "param", "~getChartAttribute()", 'Unexpected value of "attribute"'); return e
        }
    }, !0)
})();
(function () {
    var a = FusionCharts(["private", "api.LinkManager"]); if (a !== void 0) {
        a.policies.link = ["link", void 0]; var h = window.FusionChartsDOMInsertModes = { REPLACE: "replace", APPEND: "append", PREPEND: "prepend" }, j = {}, e = function (d, e) { this.items = {}; this.root = d; this.parent = e; e instanceof a.core ? this.level = this.parent.link.level + 1 : (j[d.id] = [{}], this.level = 0) }, i = function (a, e) {
            return (a.options.containerElement === e.options.containerElement || a.options.containerElementId === e.options.containerElementId) && a.options.insertMode ===
            h.REPLACE
        }; e.prototype.configuration = function () { return j[this.root.id][this.level] || (j[this.root.id][this.level] = {}) }; a.extend(a.core, {
            configureLink: function (d, e) {
                var c; if (d instanceof Array) { for (c = 0; c < d.length; c += 1) typeof j[this.link.root.id][c] !== "object" && (j[this.link.root.id][c] = {}), a.extend(j[this.link.root.id][c], d[c]); j[this.link.root.id].splice(d.length) } else if (typeof d === "object") {
                    if (typeof e !== "number") e = this.link.level; j[this.link.root.id][e] === void 0 && (j[this.link.root.id][e] = {}); a.extend(j[this.link.root.id][e],
                    d)
                } else a.raiseError(this, "25081731", "param", "~configureLink()", "Unable to update link configuration from set parameters")
            }
        }, !0); a.addEventListener("BeforeInitialize", function (d) { if (d.sender.link instanceof e) { if (d.sender.link.parent instanceof a.core) d.sender.link.parent.link.items[d.sender.id] = d.sender } else d.sender.link = new e(d.sender) }); a.addEventListener("LinkedChartInvoked", function (d, h) {
            var c = d.sender, b = c.clone({ dataSource: h.data, dataFormat: h.linkType, link: new e(c.link.root, c) }, !0), f = h.alias;
            if (f) { if (!b.swfSrcPath && b.swfUrl) b.swfSrcPath = b.swfUrl.replace(/\/?[^\/]+?.swf$/ig, ""); b.type = f } c.args && parseInt(c.args.animate, 10) !== 0 && delete b.animate; a.extend(b, c.link.configuration()); a.raiseEvent("BeforeLinkedItemOpen", { level: c.link.level }, c.link.root); a.core.items[b.id] instanceof a.core && a.core.items[b.id].dispose(); b = new a.core(b); if (!i(b, c) && (!c.options.overlayButton || !c.options.overlayButton.message)) {
                if (typeof c.options.overlayButton !== "object") c.options.overlayButton = {}; c.options.overlayButton.message =
                "Close"
            } b.render(); a.raiseEvent("LinkedItemOpened", { level: c.link.level, item: b }, c.link.root)
        }); a.addEventListener("OverlayButtonClick", function (d, e) { if (e.id === "LinkManager") { var c = d.sender, b = c.link.level - 1, f = c.link.parent, h = c.link.root; a.raiseEvent("BeforeLinkedItemClose", { level: b, item: c }, h); setTimeout(function () { a.core.items[c.id] && c.dispose(); a.raiseEvent("LinkedItemClosed", { level: b }, h) }, 0); !f.isActive() && i(c, f) && f.render() } }); a.addEventListener("Loaded", function (d) {
            if ((d = d.sender) && d.link !== void 0 &&
            d.link.root !== d && d.link.parent instanceof a.core) if (d.ref && typeof d.ref.drawOverlayButton === "function") { var e = a.extend({ show: !0, id: "LinkManager" }, d.link.parent.options.overlayButton); a.extend(e, d.link.parent.link.configuration().overlayButton || {}); d.ref.drawOverlayButton(e) } else a.raiseWarning(d, "04091602", "run", "::LinkManager^Loaded", "Unable to draw overlay button on object. -" + d.id)
        }); a.addEventListener("BeforeDispose", function (d) {
            var h = d.sender; h && h.link instanceof e && (h.link.parent instanceof
            a.core && delete h.link.parent.link.items[d.sender.id], delete j[h.id])
        }); FusionChartsEvents.LinkedItemOpened = "linkeditemopened"; FusionChartsEvents.BeforeLinkedItemOpen = "beforelinkeditemopen"; FusionChartsEvents.LinkedItemClosed = "linkeditemclosed"; FusionChartsEvents.BeforeLinkedItemClose = "beforelinkeditemclose"
    }
})();
(function () {
    var a = FusionCharts(["private", "PrintManager"]); if (a !== void 0) {
        var h = { enabled: !1, invokeCSS: !0, processPollInterval: 2E3, message: "Chart is being prepared for print.", useExCanvas: !1, bypass: !1 }, j = {
            getCanvasElementOf: function (b, c, d) {
                if (b.__fusioncharts__canvascreated !== !0) {
                    var e = document.createElement("canvas"), f = a.core.items[b.id].attributes["class"]; h.useExCanvas && G_vmlCanvasManager && G_vmlCanvasManager.initElement(e); e.setAttribute("class", f); e.__fusioncharts__reference = b.id; b.parentNode.insertBefore(e,
                    b.nextSibling); b.__fusioncharts__canvascreated = !0
                } b.nextSibling.setAttribute("width", c || b.offsetWidth || 2); b.nextSibling.setAttribute("height", d || b.offsetHeight || 2); return b.nextSibling
            }, removeCanvasElementOf: function (a) {
                var b = a.ref && a.ref.parentNode ? a.ref.parentNode : a.options.containerElement || window.getElementById(a.options.containerElementId); if (b) {
                    var c = b.getElementsByTagName("canvas"), d, e; e = 0; for (d = c.length; e < d; e += 1) if (c[e].__fusioncharts__reference === a.id && (b.removeChild(c[e]), a.ref)) a.ref.__fusioncharts__canvascreated =
                    !1
                }
            }, rle2rgba: function (a, b, c) { typeof c !== "string" && (c = "FFFFFF"); var a = a.split(/[;,_]/), d, e, f, h, i, j = 0; for (e = 0; e < a.length; e += 2) { a[e] === "" && (a[e] = c); a[e] = ("000000" + a[e]).substr(-6); f = parseInt("0x" + a[e].substring(0, 2), 16); h = parseInt("0x" + a[e].substring(2, 4), 16); i = parseInt("0x" + a[e].substring(4, 6), 16); for (d = 0; d < a[e + 1]; d += 1) b[j] = f, b[j + 1] = h, b[j + 2] = i, b[j + 3] = 255, j += 4 } return b }, rle2array: function (a, b) {
                typeof b !== "string" && (b = "FFFFFF"); var c = a.split(";"), d, e; for (d in c) {
                    c[d] = c[d].split(/[_,]/); for (e = 0; e < c[d].length; e +=
                    2) c[d][e] = c[d][e] === "" ? b : ("000000" + c[d][e]).substr(-6)
                } return c
            }, drawText: function (b, c, d, e) { b = b.getContext("2d"); d = d || 2; e = e || 2; b.clearRect(0, 0, d, e); b.textBaseline = "middle"; b.textAlign = "center"; b.font = "8pt verdana"; b.fillStyle = "#776666"; typeof b.fillText === "function" ? b.fillText(c, d / 2, e / 2) : typeof b.mozDrawText === "function" ? (b.translate(d / 2, e / 2), b.mozDrawText(c)) : a.raiseWarning(a.core, "25081803", "run", "::PrintManager>lib.drawText", "Canvas text drawing is not supported in browser"); return !0 }, appendCSS: function (a) {
                var b =
                document.createElement("style"); b.setAttribute("type", "text/css"); typeof b.styleSheet === "undefined" ? b.appendChild(document.createTextNode(a)) : b.styleSheet.cssText = a; return document.getElementsByTagName("head")[0].appendChild(b)
            }
        }; j.drawRLE = function (a, b, c, d, e) {
            c = c || 2; d = d || 2; a.setAttribute("width", c); a.setAttribute("height", d); a = a.getContext("2d"); if (typeof a.putImageData === "function" && typeof a.createImageData === "function") c = a.createImageData(c, d), j.rle2rgba(b, c.data, e), a.putImageData(c, 0, 0); else for (e in c =
            j.rle2array(b, e), d = e = b = 0, c) for (d = b = 0; d < c[e].length; d += 2) a.fillStyle = "#" + c[e][d], a.fillRect(b, e, c[e][d + 1], 1), b += parseInt(c[e][d + 1], 10); return !0
        }; var e = { styles: { print: "canvas.FusionCharts{display:none;}@media print{object.FusionCharts{display:none;}canvas.FusionCharts{display:block;}}", error: "canvas.FusionCharts{display:none;}", normal: "" }, cssNode: void 0 }, i = {}, d = {}, l = 0, c; e.invoke = function (a) {
            typeof this.styles[a] !== "undefined" && (a = this.styles[a]); if (typeof a !== "undefined") this.cssNode !== void 0 && this.cssNode.parentNode !==
            void 0 && this.cssNode.parentNode.removeChild(this.cssNode), e.cssNode = j.appendCSS(a)
        }; var b = function (b) {
            var d = b.sender.ref, f, p; if (d === void 0 || typeof d.prepareImageDataStream !== "function" || d.prepareImageDataStream() === !1) c(b.sender); else {
                i[b.sender.id] || (i[b.sender.id] = d, l += 1, l === 1 && a.raiseEvent("PrintReadyStateChange", { ready: !1, bypass: h.bypass }, b.sender)); try { f = d.offsetWidth, p = d.offsetHeight, j.drawText(j.getCanvasElementOf(d, f, p), h.message, f, p) } catch (r) {
                    e.invoke("error"), a.raiseError(b.sender, "25081807",
                    "run", "::PrintManager>onDrawComplete", "There was an error while showing message to user via canvas.")
                }
            }
        }, f = function (b, c) { try { j.drawRLE(j.getCanvasElementOf(b.sender.ref, c.width, c.height), c.stream, c.width, c.height, c.bgColor) === !0 && i[b.sender.id] && (delete i[b.sender.id], l -= 1, l === 0 && a.raiseEvent("PrintReadyStateChange", { ready: !0, bypass: h.bypass }, b.sender)) } catch (d) { e.invoke("error"), a.raiseError(b.sender, "25081810", "run", "::PrintManager>onImageStreamReady", "There was an error while drawing canvas.") } },
        u = function (a) { j.removeCanvasElementOf(a.sender) }; c = function (c) { var e; if (c instanceof a.core) d[c.id] = c; else for (e in d) b({ sender: d[e] }, {}), delete d[e] }; a.extend(a.core, {
            printManager: {
                configure: function (b) { a.extend(h, b || {}) }, isReady: function () { if (h.bypass) return !0; if (l > 0 || !h.enabled) return !1; var b, c; for (b in a.core.items) if ((c = a.core.items[b].ref) !== void 0 && c.hasRendered && c.hasRendered() === !1) return !1; return !0 }, enabled: function (d) {
                    if (d === void 0) return h.enabled; if (a.renderer.currentRendererName() !==
                    "flash" || typeof document.createElement("canvas").getContext !== "function") return h.bypass = !0, a.raiseEvent("PrintReadyStateChange", { ready: !0, bypass: h.bypass }), a.raiseWarning(a.core, "25081816", "run", ".printManager.enabled", "printManager is not compatible with your browser"), h.enabled; h.bypass = !1; var i = d ? "addEventListener" : "removeEventListener"; a.core[i]("ImageStreamReady", f); a.core[i]("DrawComplete", b); a.core[i]("BeforeDispose", u); if (d === !0) {
                        var l; h.invokeCSS === !0 && e.invoke("print"); for (l in a.core.items) c(a.core.items[l]),
                        c()
                    } else { var p; e.invoke("error"); for (p in a.core.items) j.removeCanvasElementOf(a.core.items[p]); h.bypass || a.raiseEvent("PrintReadyStateChange", { ready: !1, bypass: h.bypass }); e.invoke("normal") } return h.enabled = d
                }, managedPrint: function (b) {
                    h.bypass ? window.print() : a.core.printManager.isReady() ? typeof b === "object" && b.ready !== !0 || (a.removeEventListener("PrintReadyStateChange", a.core.printManager.managedPrint), window.print()) : a.core.printManager.enabled(!0) !== !0 ? window.print() : a.addEventListener("PrintReadyStateChange",
                    a.core.printManager.managedPrint)
                }
            }
        }, !1); FusionChartsEvents.PrintReadyStateChange = "printreadystatechange"
    }
})();