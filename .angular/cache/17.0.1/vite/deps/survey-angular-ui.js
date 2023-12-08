import {
  require_survey_core
} from "./chunk-4MEF5RA6.js";
import {
  DomSanitizer
} from "./chunk-U6BYO76N.js";
import "./chunk-QXEPADCO.js";
import {
  CommonModule,
  DOCUMENT,
  NgForOf,
  NgIf,
  NgSwitch,
  NgSwitchCase,
  NgTemplateOutlet,
  getDOM
} from "./chunk-7NNCF2JZ.js";
import {
  ApplicationRef,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver$1,
  Directive,
  ElementRef,
  EventEmitter,
  Host,
  HostBinding,
  HostListener,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  NgZone,
  Optional,
  Output,
  Pipe,
  Renderer2,
  RuntimeError,
  Self,
  SkipSelf,
  TemplateRef,
  Version,
  ViewChild,
  ViewContainerRef,
  booleanAttribute,
  forwardRef,
  inject,
  isPromise,
  isSubscribable,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵhostProperty,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵpureFunction5,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeResourceUrl,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-7OL5A745.js";
import {
  forkJoin,
  from,
  map
} from "./chunk-UDPNJWHM.js";
import {
  __spreadProps,
  __spreadValues,
  __toESM
} from "./chunk-J5XZNU7V.js";

// node_modules/survey-angular-ui/fesm2015/survey-angular-ui.js
var Survey = __toESM(require_survey_core());
var import_survey_core = __toESM(require_survey_core());

// node_modules/@angular/cdk/fesm2022/portal.mjs
function throwNullPortalError() {
  throw Error("Must provide a portal to attach");
}
function throwPortalAlreadyAttachedError() {
  throw Error("Host already has a portal attached");
}
function throwPortalOutletAlreadyDisposedError() {
  throw Error("This PortalOutlet has already been disposed");
}
function throwUnknownPortalTypeError() {
  throw Error("Attempting to attach an unknown Portal type. BasePortalOutlet accepts either a ComponentPortal or a TemplatePortal.");
}
function throwNullPortalOutletError() {
  throw Error("Attempting to attach a portal to a null PortalOutlet");
}
function throwNoPortalAttachedError() {
  throw Error("Attempting to detach a portal that is not attached to a host");
}
var Portal = class {
  /** Attach this portal to a host. */
  attach(host) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (host == null) {
        throwNullPortalOutletError();
      }
      if (host.hasAttached()) {
        throwPortalAlreadyAttachedError();
      }
    }
    this._attachedHost = host;
    return host.attach(this);
  }
  /** Detach this portal from its host */
  detach() {
    let host = this._attachedHost;
    if (host != null) {
      this._attachedHost = null;
      host.detach();
    } else if (typeof ngDevMode === "undefined" || ngDevMode) {
      throwNoPortalAttachedError();
    }
  }
  /** Whether this portal is attached to a host. */
  get isAttached() {
    return this._attachedHost != null;
  }
  /**
   * Sets the PortalOutlet reference without performing `attach()`. This is used directly by
   * the PortalOutlet when it is performing an `attach()` or `detach()`.
   */
  setAttachedHost(host) {
    this._attachedHost = host;
  }
};
var ComponentPortal = class extends Portal {
  constructor(component, viewContainerRef, injector, componentFactoryResolver, projectableNodes) {
    super();
    this.component = component;
    this.viewContainerRef = viewContainerRef;
    this.injector = injector;
    this.componentFactoryResolver = componentFactoryResolver;
    this.projectableNodes = projectableNodes;
  }
};
var TemplatePortal = class extends Portal {
  constructor(templateRef, viewContainerRef, context, injector) {
    super();
    this.templateRef = templateRef;
    this.viewContainerRef = viewContainerRef;
    this.context = context;
    this.injector = injector;
  }
  get origin() {
    return this.templateRef.elementRef;
  }
  /**
   * Attach the portal to the provided `PortalOutlet`.
   * When a context is provided it will override the `context` property of the `TemplatePortal`
   * instance.
   */
  attach(host, context = this.context) {
    this.context = context;
    return super.attach(host);
  }
  detach() {
    this.context = void 0;
    return super.detach();
  }
};
var DomPortal = class extends Portal {
  constructor(element) {
    super();
    this.element = element instanceof ElementRef ? element.nativeElement : element;
  }
};
var BasePortalOutlet = class {
  constructor() {
    this._isDisposed = false;
    this.attachDomPortal = null;
  }
  /** Whether this host has an attached portal. */
  hasAttached() {
    return !!this._attachedPortal;
  }
  /** Attaches a portal. */
  attach(portal) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!portal) {
        throwNullPortalError();
      }
      if (this.hasAttached()) {
        throwPortalAlreadyAttachedError();
      }
      if (this._isDisposed) {
        throwPortalOutletAlreadyDisposedError();
      }
    }
    if (portal instanceof ComponentPortal) {
      this._attachedPortal = portal;
      return this.attachComponentPortal(portal);
    } else if (portal instanceof TemplatePortal) {
      this._attachedPortal = portal;
      return this.attachTemplatePortal(portal);
    } else if (this.attachDomPortal && portal instanceof DomPortal) {
      this._attachedPortal = portal;
      return this.attachDomPortal(portal);
    }
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      throwUnknownPortalTypeError();
    }
  }
  /** Detaches a previously attached portal. */
  detach() {
    if (this._attachedPortal) {
      this._attachedPortal.setAttachedHost(null);
      this._attachedPortal = null;
    }
    this._invokeDisposeFn();
  }
  /** Permanently dispose of this portal host. */
  dispose() {
    if (this.hasAttached()) {
      this.detach();
    }
    this._invokeDisposeFn();
    this._isDisposed = true;
  }
  /** @docs-private */
  setDisposeFn(fn) {
    this._disposeFn = fn;
  }
  _invokeDisposeFn() {
    if (this._disposeFn) {
      this._disposeFn();
      this._disposeFn = null;
    }
  }
};
var DomPortalOutlet = class extends BasePortalOutlet {
  /**
   * @param outletElement Element into which the content is projected.
   * @param _componentFactoryResolver Used to resolve the component factory.
   *   Only required when attaching component portals.
   * @param _appRef Reference to the application. Only used in component portals when there
   *   is no `ViewContainerRef` available.
   * @param _defaultInjector Injector to use as a fallback when the portal being attached doesn't
   *   have one. Only used for component portals.
   * @param _document Reference to the document. Used when attaching a DOM portal. Will eventually
   *   become a required parameter.
   */
  constructor(outletElement, _componentFactoryResolver, _appRef, _defaultInjector, _document) {
    super();
    this.outletElement = outletElement;
    this._componentFactoryResolver = _componentFactoryResolver;
    this._appRef = _appRef;
    this._defaultInjector = _defaultInjector;
    this.attachDomPortal = (portal) => {
      if (!this._document && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throw Error("Cannot attach DOM portal without _document constructor parameter");
      }
      const element = portal.element;
      if (!element.parentNode && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throw Error("DOM portal content must be attached to a parent node.");
      }
      const anchorNode = this._document.createComment("dom-portal");
      element.parentNode.insertBefore(anchorNode, element);
      this.outletElement.appendChild(element);
      this._attachedPortal = portal;
      super.setDisposeFn(() => {
        if (anchorNode.parentNode) {
          anchorNode.parentNode.replaceChild(element, anchorNode);
        }
      });
    };
    this._document = _document;
  }
  /**
   * Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver.
   * @param portal Portal to be attached
   * @returns Reference to the created component.
   */
  attachComponentPortal(portal) {
    const resolver = portal.componentFactoryResolver || this._componentFactoryResolver;
    if ((typeof ngDevMode === "undefined" || ngDevMode) && !resolver) {
      throw Error("Cannot attach component portal to outlet without a ComponentFactoryResolver.");
    }
    const componentFactory = resolver.resolveComponentFactory(portal.component);
    let componentRef;
    if (portal.viewContainerRef) {
      componentRef = portal.viewContainerRef.createComponent(componentFactory, portal.viewContainerRef.length, portal.injector || portal.viewContainerRef.injector, portal.projectableNodes || void 0);
      this.setDisposeFn(() => componentRef.destroy());
    } else {
      if ((typeof ngDevMode === "undefined" || ngDevMode) && !this._appRef) {
        throw Error("Cannot attach component portal to outlet without an ApplicationRef.");
      }
      componentRef = componentFactory.create(portal.injector || this._defaultInjector || Injector.NULL);
      this._appRef.attachView(componentRef.hostView);
      this.setDisposeFn(() => {
        if (this._appRef.viewCount > 0) {
          this._appRef.detachView(componentRef.hostView);
        }
        componentRef.destroy();
      });
    }
    this.outletElement.appendChild(this._getComponentRootNode(componentRef));
    this._attachedPortal = portal;
    return componentRef;
  }
  /**
   * Attaches a template portal to the DOM as an embedded view.
   * @param portal Portal to be attached.
   * @returns Reference to the created embedded view.
   */
  attachTemplatePortal(portal) {
    let viewContainer = portal.viewContainerRef;
    let viewRef = viewContainer.createEmbeddedView(portal.templateRef, portal.context, {
      injector: portal.injector
    });
    viewRef.rootNodes.forEach((rootNode) => this.outletElement.appendChild(rootNode));
    viewRef.detectChanges();
    this.setDisposeFn(() => {
      let index = viewContainer.indexOf(viewRef);
      if (index !== -1) {
        viewContainer.remove(index);
      }
    });
    this._attachedPortal = portal;
    return viewRef;
  }
  /**
   * Clears out a portal from the DOM.
   */
  dispose() {
    super.dispose();
    this.outletElement.remove();
  }
  /** Gets the root HTMLElement for an instantiated component. */
  _getComponentRootNode(componentRef) {
    return componentRef.hostView.rootNodes[0];
  }
};
var _CdkPortal = class _CdkPortal extends TemplatePortal {
  constructor(templateRef, viewContainerRef) {
    super(templateRef, viewContainerRef);
  }
};
_CdkPortal.ɵfac = function CdkPortal_Factory(t) {
  return new (t || _CdkPortal)(ɵɵdirectiveInject(TemplateRef), ɵɵdirectiveInject(ViewContainerRef));
};
_CdkPortal.ɵdir = ɵɵdefineDirective({
  type: _CdkPortal,
  selectors: [["", "cdkPortal", ""]],
  exportAs: ["cdkPortal"],
  features: [ɵɵInheritDefinitionFeature]
});
var CdkPortal = _CdkPortal;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkPortal, [{
    type: Directive,
    args: [{
      selector: "[cdkPortal]",
      exportAs: "cdkPortal"
    }]
  }], () => [{
    type: TemplateRef
  }, {
    type: ViewContainerRef
  }], null);
})();
var _TemplatePortalDirective = class _TemplatePortalDirective extends CdkPortal {
};
_TemplatePortalDirective.ɵfac = (() => {
  let ɵTemplatePortalDirective_BaseFactory;
  return function TemplatePortalDirective_Factory(t) {
    return (ɵTemplatePortalDirective_BaseFactory || (ɵTemplatePortalDirective_BaseFactory = ɵɵgetInheritedFactory(_TemplatePortalDirective)))(t || _TemplatePortalDirective);
  };
})();
_TemplatePortalDirective.ɵdir = ɵɵdefineDirective({
  type: _TemplatePortalDirective,
  selectors: [["", "cdk-portal", ""], ["", "portal", ""]],
  exportAs: ["cdkPortal"],
  features: [ɵɵProvidersFeature([{
    provide: CdkPortal,
    useExisting: _TemplatePortalDirective
  }]), ɵɵInheritDefinitionFeature]
});
var TemplatePortalDirective = _TemplatePortalDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TemplatePortalDirective, [{
    type: Directive,
    args: [{
      selector: "[cdk-portal], [portal]",
      exportAs: "cdkPortal",
      providers: [{
        provide: CdkPortal,
        useExisting: TemplatePortalDirective
      }]
    }]
  }], null, null);
})();
var _CdkPortalOutlet = class _CdkPortalOutlet extends BasePortalOutlet {
  constructor(_componentFactoryResolver, _viewContainerRef, _document) {
    super();
    this._componentFactoryResolver = _componentFactoryResolver;
    this._viewContainerRef = _viewContainerRef;
    this._isInitialized = false;
    this.attached = new EventEmitter();
    this.attachDomPortal = (portal) => {
      if (!this._document && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throw Error("Cannot attach DOM portal without _document constructor parameter");
      }
      const element = portal.element;
      if (!element.parentNode && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throw Error("DOM portal content must be attached to a parent node.");
      }
      const anchorNode = this._document.createComment("dom-portal");
      portal.setAttachedHost(this);
      element.parentNode.insertBefore(anchorNode, element);
      this._getRootNode().appendChild(element);
      this._attachedPortal = portal;
      super.setDisposeFn(() => {
        if (anchorNode.parentNode) {
          anchorNode.parentNode.replaceChild(element, anchorNode);
        }
      });
    };
    this._document = _document;
  }
  /** Portal associated with the Portal outlet. */
  get portal() {
    return this._attachedPortal;
  }
  set portal(portal) {
    if (this.hasAttached() && !portal && !this._isInitialized) {
      return;
    }
    if (this.hasAttached()) {
      super.detach();
    }
    if (portal) {
      super.attach(portal);
    }
    this._attachedPortal = portal || null;
  }
  /** Component or view reference that is attached to the portal. */
  get attachedRef() {
    return this._attachedRef;
  }
  ngOnInit() {
    this._isInitialized = true;
  }
  ngOnDestroy() {
    super.dispose();
    this._attachedRef = this._attachedPortal = null;
  }
  /**
   * Attach the given ComponentPortal to this PortalOutlet using the ComponentFactoryResolver.
   *
   * @param portal Portal to be attached to the portal outlet.
   * @returns Reference to the created component.
   */
  attachComponentPortal(portal) {
    portal.setAttachedHost(this);
    const viewContainerRef = portal.viewContainerRef != null ? portal.viewContainerRef : this._viewContainerRef;
    const resolver = portal.componentFactoryResolver || this._componentFactoryResolver;
    const componentFactory = resolver.resolveComponentFactory(portal.component);
    const ref = viewContainerRef.createComponent(componentFactory, viewContainerRef.length, portal.injector || viewContainerRef.injector, portal.projectableNodes || void 0);
    if (viewContainerRef !== this._viewContainerRef) {
      this._getRootNode().appendChild(ref.hostView.rootNodes[0]);
    }
    super.setDisposeFn(() => ref.destroy());
    this._attachedPortal = portal;
    this._attachedRef = ref;
    this.attached.emit(ref);
    return ref;
  }
  /**
   * Attach the given TemplatePortal to this PortalHost as an embedded View.
   * @param portal Portal to be attached.
   * @returns Reference to the created embedded view.
   */
  attachTemplatePortal(portal) {
    portal.setAttachedHost(this);
    const viewRef = this._viewContainerRef.createEmbeddedView(portal.templateRef, portal.context, {
      injector: portal.injector
    });
    super.setDisposeFn(() => this._viewContainerRef.clear());
    this._attachedPortal = portal;
    this._attachedRef = viewRef;
    this.attached.emit(viewRef);
    return viewRef;
  }
  /** Gets the root node of the portal outlet. */
  _getRootNode() {
    const nativeElement = this._viewContainerRef.element.nativeElement;
    return nativeElement.nodeType === nativeElement.ELEMENT_NODE ? nativeElement : nativeElement.parentNode;
  }
};
_CdkPortalOutlet.ɵfac = function CdkPortalOutlet_Factory(t) {
  return new (t || _CdkPortalOutlet)(ɵɵdirectiveInject(ComponentFactoryResolver$1), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(DOCUMENT));
};
_CdkPortalOutlet.ɵdir = ɵɵdefineDirective({
  type: _CdkPortalOutlet,
  selectors: [["", "cdkPortalOutlet", ""]],
  inputs: {
    portal: ["cdkPortalOutlet", "portal"]
  },
  outputs: {
    attached: "attached"
  },
  exportAs: ["cdkPortalOutlet"],
  features: [ɵɵInheritDefinitionFeature]
});
var CdkPortalOutlet = _CdkPortalOutlet;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkPortalOutlet, [{
    type: Directive,
    args: [{
      selector: "[cdkPortalOutlet]",
      exportAs: "cdkPortalOutlet",
      inputs: ["portal: cdkPortalOutlet"]
    }]
  }], () => [{
    type: ComponentFactoryResolver$1
  }, {
    type: ViewContainerRef
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], {
    attached: [{
      type: Output
    }]
  });
})();
var _PortalHostDirective = class _PortalHostDirective extends CdkPortalOutlet {
};
_PortalHostDirective.ɵfac = (() => {
  let ɵPortalHostDirective_BaseFactory;
  return function PortalHostDirective_Factory(t) {
    return (ɵPortalHostDirective_BaseFactory || (ɵPortalHostDirective_BaseFactory = ɵɵgetInheritedFactory(_PortalHostDirective)))(t || _PortalHostDirective);
  };
})();
_PortalHostDirective.ɵdir = ɵɵdefineDirective({
  type: _PortalHostDirective,
  selectors: [["", "cdkPortalHost", ""], ["", "portalHost", ""]],
  inputs: {
    portal: ["cdkPortalHost", "portal"]
  },
  exportAs: ["cdkPortalHost"],
  features: [ɵɵProvidersFeature([{
    provide: CdkPortalOutlet,
    useExisting: _PortalHostDirective
  }]), ɵɵInheritDefinitionFeature]
});
var PortalHostDirective = _PortalHostDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PortalHostDirective, [{
    type: Directive,
    args: [{
      selector: "[cdkPortalHost], [portalHost]",
      exportAs: "cdkPortalHost",
      inputs: ["portal: cdkPortalHost"],
      providers: [{
        provide: CdkPortalOutlet,
        useExisting: PortalHostDirective
      }]
    }]
  }], null, null);
})();
var _PortalModule = class _PortalModule {
};
_PortalModule.ɵfac = function PortalModule_Factory(t) {
  return new (t || _PortalModule)();
};
_PortalModule.ɵmod = ɵɵdefineNgModule({
  type: _PortalModule,
  declarations: [CdkPortal, CdkPortalOutlet, TemplatePortalDirective, PortalHostDirective],
  exports: [CdkPortal, CdkPortalOutlet, TemplatePortalDirective, PortalHostDirective]
});
_PortalModule.ɵinj = ɵɵdefineInjector({});
var PortalModule = _PortalModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PortalModule, [{
    type: NgModule,
    args: [{
      exports: [CdkPortal, CdkPortalOutlet, TemplatePortalDirective, PortalHostDirective],
      declarations: [CdkPortal, CdkPortalOutlet, TemplatePortalDirective, PortalHostDirective]
    }]
  }], null, null);
})();

// node_modules/@angular/forms/fesm2022/forms.mjs
var _BaseControlValueAccessor = class _BaseControlValueAccessor {
  constructor(_renderer, _elementRef) {
    this._renderer = _renderer;
    this._elementRef = _elementRef;
    this.onChange = (_) => {
    };
    this.onTouched = () => {
    };
  }
  /**
   * Helper method that sets a property on a target element using the current Renderer
   * implementation.
   * @nodoc
   */
  setProperty(key, value) {
    this._renderer.setProperty(this._elementRef.nativeElement, key, value);
  }
  /**
   * Registers a function called when the control is touched.
   * @nodoc
   */
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn) {
    this.onChange = fn;
  }
  /**
   * Sets the "disabled" property on the range input element.
   * @nodoc
   */
  setDisabledState(isDisabled) {
    this.setProperty("disabled", isDisabled);
  }
};
_BaseControlValueAccessor.ɵfac = function BaseControlValueAccessor_Factory(t) {
  return new (t || _BaseControlValueAccessor)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef));
};
_BaseControlValueAccessor.ɵdir = ɵɵdefineDirective({
  type: _BaseControlValueAccessor
});
var BaseControlValueAccessor = _BaseControlValueAccessor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseControlValueAccessor, [{
    type: Directive
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }], null);
})();
var _BuiltInControlValueAccessor = class _BuiltInControlValueAccessor extends BaseControlValueAccessor {
};
_BuiltInControlValueAccessor.ɵfac = (() => {
  let ɵBuiltInControlValueAccessor_BaseFactory;
  return function BuiltInControlValueAccessor_Factory(t) {
    return (ɵBuiltInControlValueAccessor_BaseFactory || (ɵBuiltInControlValueAccessor_BaseFactory = ɵɵgetInheritedFactory(_BuiltInControlValueAccessor)))(t || _BuiltInControlValueAccessor);
  };
})();
_BuiltInControlValueAccessor.ɵdir = ɵɵdefineDirective({
  type: _BuiltInControlValueAccessor,
  features: [ɵɵInheritDefinitionFeature]
});
var BuiltInControlValueAccessor = _BuiltInControlValueAccessor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BuiltInControlValueAccessor, [{
    type: Directive
  }], null, null);
})();
var NG_VALUE_ACCESSOR = new InjectionToken("NgValueAccessor");
var CHECKBOX_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CheckboxControlValueAccessor),
  multi: true
};
var _CheckboxControlValueAccessor = class _CheckboxControlValueAccessor extends BuiltInControlValueAccessor {
  /**
   * Sets the "checked" property on the input element.
   * @nodoc
   */
  writeValue(value) {
    this.setProperty("checked", value);
  }
};
_CheckboxControlValueAccessor.ɵfac = (() => {
  let ɵCheckboxControlValueAccessor_BaseFactory;
  return function CheckboxControlValueAccessor_Factory(t) {
    return (ɵCheckboxControlValueAccessor_BaseFactory || (ɵCheckboxControlValueAccessor_BaseFactory = ɵɵgetInheritedFactory(_CheckboxControlValueAccessor)))(t || _CheckboxControlValueAccessor);
  };
})();
_CheckboxControlValueAccessor.ɵdir = ɵɵdefineDirective({
  type: _CheckboxControlValueAccessor,
  selectors: [["input", "type", "checkbox", "formControlName", ""], ["input", "type", "checkbox", "formControl", ""], ["input", "type", "checkbox", "ngModel", ""]],
  hostBindings: function CheckboxControlValueAccessor_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("change", function CheckboxControlValueAccessor_change_HostBindingHandler($event) {
        return ctx.onChange($event.target.checked);
      })("blur", function CheckboxControlValueAccessor_blur_HostBindingHandler() {
        return ctx.onTouched();
      });
    }
  },
  features: [ɵɵProvidersFeature([CHECKBOX_VALUE_ACCESSOR]), ɵɵInheritDefinitionFeature]
});
var CheckboxControlValueAccessor = _CheckboxControlValueAccessor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckboxControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]",
      host: {
        "(change)": "onChange($event.target.checked)",
        "(blur)": "onTouched()"
      },
      providers: [CHECKBOX_VALUE_ACCESSOR]
    }]
  }], null, null);
})();
var DEFAULT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DefaultValueAccessor),
  multi: true
};
function _isAndroid() {
  const userAgent = getDOM() ? getDOM().getUserAgent() : "";
  return /android (\d+)/.test(userAgent.toLowerCase());
}
var COMPOSITION_BUFFER_MODE = new InjectionToken("CompositionEventMode");
var _DefaultValueAccessor = class _DefaultValueAccessor extends BaseControlValueAccessor {
  constructor(renderer, elementRef, _compositionMode) {
    super(renderer, elementRef);
    this._compositionMode = _compositionMode;
    this._composing = false;
    if (this._compositionMode == null) {
      this._compositionMode = !_isAndroid();
    }
  }
  /**
   * Sets the "value" property on the input element.
   * @nodoc
   */
  writeValue(value) {
    const normalizedValue = value == null ? "" : value;
    this.setProperty("value", normalizedValue);
  }
  /** @internal */
  _handleInput(value) {
    if (!this._compositionMode || this._compositionMode && !this._composing) {
      this.onChange(value);
    }
  }
  /** @internal */
  _compositionStart() {
    this._composing = true;
  }
  /** @internal */
  _compositionEnd(value) {
    this._composing = false;
    this._compositionMode && this.onChange(value);
  }
};
_DefaultValueAccessor.ɵfac = function DefaultValueAccessor_Factory(t) {
  return new (t || _DefaultValueAccessor)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(COMPOSITION_BUFFER_MODE, 8));
};
_DefaultValueAccessor.ɵdir = ɵɵdefineDirective({
  type: _DefaultValueAccessor,
  selectors: [["input", "formControlName", "", 3, "type", "checkbox"], ["textarea", "formControlName", ""], ["input", "formControl", "", 3, "type", "checkbox"], ["textarea", "formControl", ""], ["input", "ngModel", "", 3, "type", "checkbox"], ["textarea", "ngModel", ""], ["", "ngDefaultControl", ""]],
  hostBindings: function DefaultValueAccessor_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("input", function DefaultValueAccessor_input_HostBindingHandler($event) {
        return ctx._handleInput($event.target.value);
      })("blur", function DefaultValueAccessor_blur_HostBindingHandler() {
        return ctx.onTouched();
      })("compositionstart", function DefaultValueAccessor_compositionstart_HostBindingHandler() {
        return ctx._compositionStart();
      })("compositionend", function DefaultValueAccessor_compositionend_HostBindingHandler($event) {
        return ctx._compositionEnd($event.target.value);
      });
    }
  },
  features: [ɵɵProvidersFeature([DEFAULT_VALUE_ACCESSOR]), ɵɵInheritDefinitionFeature]
});
var DefaultValueAccessor = _DefaultValueAccessor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]",
      // TODO: vsavkin replace the above selector with the one below it once
      // https://github.com/angular/angular/issues/3011 is implemented
      // selector: '[ngModel],[formControl],[formControlName]',
      host: {
        "(input)": "$any(this)._handleInput($event.target.value)",
        "(blur)": "onTouched()",
        "(compositionstart)": "$any(this)._compositionStart()",
        "(compositionend)": "$any(this)._compositionEnd($event.target.value)"
      },
      providers: [DEFAULT_VALUE_ACCESSOR]
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [COMPOSITION_BUFFER_MODE]
    }]
  }], null);
})();
function isEmptyInputValue(value) {
  return value == null || (typeof value === "string" || Array.isArray(value)) && value.length === 0;
}
function hasValidLength(value) {
  return value != null && typeof value.length === "number";
}
var NG_VALIDATORS = new InjectionToken("NgValidators");
var NG_ASYNC_VALIDATORS = new InjectionToken("NgAsyncValidators");
var EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
function minValidator(min) {
  return (control) => {
    if (isEmptyInputValue(control.value) || isEmptyInputValue(min)) {
      return null;
    }
    const value = parseFloat(control.value);
    return !isNaN(value) && value < min ? {
      "min": {
        "min": min,
        "actual": control.value
      }
    } : null;
  };
}
function maxValidator(max) {
  return (control) => {
    if (isEmptyInputValue(control.value) || isEmptyInputValue(max)) {
      return null;
    }
    const value = parseFloat(control.value);
    return !isNaN(value) && value > max ? {
      "max": {
        "max": max,
        "actual": control.value
      }
    } : null;
  };
}
function requiredValidator(control) {
  return isEmptyInputValue(control.value) ? {
    "required": true
  } : null;
}
function requiredTrueValidator(control) {
  return control.value === true ? null : {
    "required": true
  };
}
function emailValidator(control) {
  if (isEmptyInputValue(control.value)) {
    return null;
  }
  return EMAIL_REGEXP.test(control.value) ? null : {
    "email": true
  };
}
function minLengthValidator(minLength) {
  return (control) => {
    if (isEmptyInputValue(control.value) || !hasValidLength(control.value)) {
      return null;
    }
    return control.value.length < minLength ? {
      "minlength": {
        "requiredLength": minLength,
        "actualLength": control.value.length
      }
    } : null;
  };
}
function maxLengthValidator(maxLength) {
  return (control) => {
    return hasValidLength(control.value) && control.value.length > maxLength ? {
      "maxlength": {
        "requiredLength": maxLength,
        "actualLength": control.value.length
      }
    } : null;
  };
}
function patternValidator(pattern) {
  if (!pattern)
    return nullValidator;
  let regex;
  let regexStr;
  if (typeof pattern === "string") {
    regexStr = "";
    if (pattern.charAt(0) !== "^")
      regexStr += "^";
    regexStr += pattern;
    if (pattern.charAt(pattern.length - 1) !== "$")
      regexStr += "$";
    regex = new RegExp(regexStr);
  } else {
    regexStr = pattern.toString();
    regex = pattern;
  }
  return (control) => {
    if (isEmptyInputValue(control.value)) {
      return null;
    }
    const value = control.value;
    return regex.test(value) ? null : {
      "pattern": {
        "requiredPattern": regexStr,
        "actualValue": value
      }
    };
  };
}
function nullValidator(control) {
  return null;
}
function isPresent(o) {
  return o != null;
}
function toObservable(value) {
  const obs = isPromise(value) ? from(value) : value;
  if ((typeof ngDevMode === "undefined" || ngDevMode) && !isSubscribable(obs)) {
    let errorMessage = `Expected async validator to return Promise or Observable.`;
    if (typeof value === "object") {
      errorMessage += " Are you using a synchronous validator where an async validator is expected?";
    }
    throw new RuntimeError(-1101, errorMessage);
  }
  return obs;
}
function mergeErrors(arrayOfErrors) {
  let res = {};
  arrayOfErrors.forEach((errors) => {
    res = errors != null ? __spreadValues(__spreadValues({}, res), errors) : res;
  });
  return Object.keys(res).length === 0 ? null : res;
}
function executeValidators(control, validators) {
  return validators.map((validator) => validator(control));
}
function isValidatorFn(validator) {
  return !validator.validate;
}
function normalizeValidators(validators) {
  return validators.map((validator) => {
    return isValidatorFn(validator) ? validator : (c) => validator.validate(c);
  });
}
function compose(validators) {
  if (!validators)
    return null;
  const presentValidators = validators.filter(isPresent);
  if (presentValidators.length == 0)
    return null;
  return function(control) {
    return mergeErrors(executeValidators(control, presentValidators));
  };
}
function composeValidators(validators) {
  return validators != null ? compose(normalizeValidators(validators)) : null;
}
function composeAsync(validators) {
  if (!validators)
    return null;
  const presentValidators = validators.filter(isPresent);
  if (presentValidators.length == 0)
    return null;
  return function(control) {
    const observables = executeValidators(control, presentValidators).map(toObservable);
    return forkJoin(observables).pipe(map(mergeErrors));
  };
}
function composeAsyncValidators(validators) {
  return validators != null ? composeAsync(normalizeValidators(validators)) : null;
}
function mergeValidators(controlValidators, dirValidator) {
  if (controlValidators === null)
    return [dirValidator];
  return Array.isArray(controlValidators) ? [...controlValidators, dirValidator] : [controlValidators, dirValidator];
}
function getControlValidators(control) {
  return control._rawValidators;
}
function getControlAsyncValidators(control) {
  return control._rawAsyncValidators;
}
function makeValidatorsArray(validators) {
  if (!validators)
    return [];
  return Array.isArray(validators) ? validators : [validators];
}
function hasValidator(validators, validator) {
  return Array.isArray(validators) ? validators.includes(validator) : validators === validator;
}
function addValidators(validators, currentValidators) {
  const current = makeValidatorsArray(currentValidators);
  const validatorsToAdd = makeValidatorsArray(validators);
  validatorsToAdd.forEach((v) => {
    if (!hasValidator(current, v)) {
      current.push(v);
    }
  });
  return current;
}
function removeValidators(validators, currentValidators) {
  return makeValidatorsArray(currentValidators).filter((v) => !hasValidator(validators, v));
}
var AbstractControlDirective = class {
  constructor() {
    this._rawValidators = [];
    this._rawAsyncValidators = [];
    this._onDestroyCallbacks = [];
  }
  /**
   * @description
   * Reports the value of the control if it is present, otherwise null.
   */
  get value() {
    return this.control ? this.control.value : null;
  }
  /**
   * @description
   * Reports whether the control is valid. A control is considered valid if no
   * validation errors exist with the current value.
   * If the control is not present, null is returned.
   */
  get valid() {
    return this.control ? this.control.valid : null;
  }
  /**
   * @description
   * Reports whether the control is invalid, meaning that an error exists in the input value.
   * If the control is not present, null is returned.
   */
  get invalid() {
    return this.control ? this.control.invalid : null;
  }
  /**
   * @description
   * Reports whether a control is pending, meaning that async validation is occurring and
   * errors are not yet available for the input value. If the control is not present, null is
   * returned.
   */
  get pending() {
    return this.control ? this.control.pending : null;
  }
  /**
   * @description
   * Reports whether the control is disabled, meaning that the control is disabled
   * in the UI and is exempt from validation checks and excluded from aggregate
   * values of ancestor controls. If the control is not present, null is returned.
   */
  get disabled() {
    return this.control ? this.control.disabled : null;
  }
  /**
   * @description
   * Reports whether the control is enabled, meaning that the control is included in ancestor
   * calculations of validity or value. If the control is not present, null is returned.
   */
  get enabled() {
    return this.control ? this.control.enabled : null;
  }
  /**
   * @description
   * Reports the control's validation errors. If the control is not present, null is returned.
   */
  get errors() {
    return this.control ? this.control.errors : null;
  }
  /**
   * @description
   * Reports whether the control is pristine, meaning that the user has not yet changed
   * the value in the UI. If the control is not present, null is returned.
   */
  get pristine() {
    return this.control ? this.control.pristine : null;
  }
  /**
   * @description
   * Reports whether the control is dirty, meaning that the user has changed
   * the value in the UI. If the control is not present, null is returned.
   */
  get dirty() {
    return this.control ? this.control.dirty : null;
  }
  /**
   * @description
   * Reports whether the control is touched, meaning that the user has triggered
   * a `blur` event on it. If the control is not present, null is returned.
   */
  get touched() {
    return this.control ? this.control.touched : null;
  }
  /**
   * @description
   * Reports the validation status of the control. Possible values include:
   * 'VALID', 'INVALID', 'DISABLED', and 'PENDING'.
   * If the control is not present, null is returned.
   */
  get status() {
    return this.control ? this.control.status : null;
  }
  /**
   * @description
   * Reports whether the control is untouched, meaning that the user has not yet triggered
   * a `blur` event on it. If the control is not present, null is returned.
   */
  get untouched() {
    return this.control ? this.control.untouched : null;
  }
  /**
   * @description
   * Returns a multicasting observable that emits a validation status whenever it is
   * calculated for the control. If the control is not present, null is returned.
   */
  get statusChanges() {
    return this.control ? this.control.statusChanges : null;
  }
  /**
   * @description
   * Returns a multicasting observable of value changes for the control that emits every time the
   * value of the control changes in the UI or programmatically.
   * If the control is not present, null is returned.
   */
  get valueChanges() {
    return this.control ? this.control.valueChanges : null;
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return null;
  }
  /**
   * Sets synchronous validators for this directive.
   * @internal
   */
  _setValidators(validators) {
    this._rawValidators = validators || [];
    this._composedValidatorFn = composeValidators(this._rawValidators);
  }
  /**
   * Sets asynchronous validators for this directive.
   * @internal
   */
  _setAsyncValidators(validators) {
    this._rawAsyncValidators = validators || [];
    this._composedAsyncValidatorFn = composeAsyncValidators(this._rawAsyncValidators);
  }
  /**
   * @description
   * Synchronous validator function composed of all the synchronous validators registered with this
   * directive.
   */
  get validator() {
    return this._composedValidatorFn || null;
  }
  /**
   * @description
   * Asynchronous validator function composed of all the asynchronous validators registered with
   * this directive.
   */
  get asyncValidator() {
    return this._composedAsyncValidatorFn || null;
  }
  /**
   * Internal function to register callbacks that should be invoked
   * when directive instance is being destroyed.
   * @internal
   */
  _registerOnDestroy(fn) {
    this._onDestroyCallbacks.push(fn);
  }
  /**
   * Internal function to invoke all registered "on destroy" callbacks.
   * Note: calling this function also clears the list of callbacks.
   * @internal
   */
  _invokeOnDestroyCallbacks() {
    this._onDestroyCallbacks.forEach((fn) => fn());
    this._onDestroyCallbacks = [];
  }
  /**
   * @description
   * Resets the control with the provided value if the control is present.
   */
  reset(value = void 0) {
    if (this.control)
      this.control.reset(value);
  }
  /**
   * @description
   * Reports whether the control with the given path has the error specified.
   *
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   *
   * @usageNotes
   * For example, for the following `FormGroup`:
   *
   * ```
   * form = new FormGroup({
   *   address: new FormGroup({ street: new FormControl() })
   * });
   * ```
   *
   * The path to the 'street' control from the root form would be 'address' -> 'street'.
   *
   * It can be provided to this method in one of two formats:
   *
   * 1. An array of string control names, e.g. `['address', 'street']`
   * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
   *
   * If no path is given, this method checks for the error on the current control.
   *
   * @returns whether the given error is present in the control at the given path.
   *
   * If the control is not present, false is returned.
   */
  hasError(errorCode, path) {
    return this.control ? this.control.hasError(errorCode, path) : false;
  }
  /**
   * @description
   * Reports error data for the control with the given path.
   *
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   *
   * @usageNotes
   * For example, for the following `FormGroup`:
   *
   * ```
   * form = new FormGroup({
   *   address: new FormGroup({ street: new FormControl() })
   * });
   * ```
   *
   * The path to the 'street' control from the root form would be 'address' -> 'street'.
   *
   * It can be provided to this method in one of two formats:
   *
   * 1. An array of string control names, e.g. `['address', 'street']`
   * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
   *
   * @returns error data for that particular error. If the control or error is not present,
   * null is returned.
   */
  getError(errorCode, path) {
    return this.control ? this.control.getError(errorCode, path) : null;
  }
};
var ControlContainer = class extends AbstractControlDirective {
  /**
   * @description
   * The top-level form directive for the control.
   */
  get formDirective() {
    return null;
  }
  /**
   * @description
   * The path to this group.
   */
  get path() {
    return null;
  }
};
var NgControl = class extends AbstractControlDirective {
  constructor() {
    super(...arguments);
    this._parent = null;
    this.name = null;
    this.valueAccessor = null;
  }
};
var AbstractControlStatus = class {
  constructor(cd) {
    this._cd = cd;
  }
  get isTouched() {
    return !!this._cd?.control?.touched;
  }
  get isUntouched() {
    return !!this._cd?.control?.untouched;
  }
  get isPristine() {
    return !!this._cd?.control?.pristine;
  }
  get isDirty() {
    return !!this._cd?.control?.dirty;
  }
  get isValid() {
    return !!this._cd?.control?.valid;
  }
  get isInvalid() {
    return !!this._cd?.control?.invalid;
  }
  get isPending() {
    return !!this._cd?.control?.pending;
  }
  get isSubmitted() {
    return !!this._cd?.submitted;
  }
};
var ngControlStatusHost = {
  "[class.ng-untouched]": "isUntouched",
  "[class.ng-touched]": "isTouched",
  "[class.ng-pristine]": "isPristine",
  "[class.ng-dirty]": "isDirty",
  "[class.ng-valid]": "isValid",
  "[class.ng-invalid]": "isInvalid",
  "[class.ng-pending]": "isPending"
};
var ngGroupStatusHost = __spreadProps(__spreadValues({}, ngControlStatusHost), {
  "[class.ng-submitted]": "isSubmitted"
});
var _NgControlStatus = class _NgControlStatus extends AbstractControlStatus {
  constructor(cd) {
    super(cd);
  }
};
_NgControlStatus.ɵfac = function NgControlStatus_Factory(t) {
  return new (t || _NgControlStatus)(ɵɵdirectiveInject(NgControl, 2));
};
_NgControlStatus.ɵdir = ɵɵdefineDirective({
  type: _NgControlStatus,
  selectors: [["", "formControlName", ""], ["", "ngModel", ""], ["", "formControl", ""]],
  hostVars: 14,
  hostBindings: function NgControlStatus_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ng-untouched", ctx.isUntouched)("ng-touched", ctx.isTouched)("ng-pristine", ctx.isPristine)("ng-dirty", ctx.isDirty)("ng-valid", ctx.isValid)("ng-invalid", ctx.isInvalid)("ng-pending", ctx.isPending);
    }
  },
  features: [ɵɵInheritDefinitionFeature]
});
var NgControlStatus = _NgControlStatus;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgControlStatus, [{
    type: Directive,
    args: [{
      selector: "[formControlName],[ngModel],[formControl]",
      host: ngControlStatusHost
    }]
  }], () => [{
    type: NgControl,
    decorators: [{
      type: Self
    }]
  }], null);
})();
var _NgControlStatusGroup = class _NgControlStatusGroup extends AbstractControlStatus {
  constructor(cd) {
    super(cd);
  }
};
_NgControlStatusGroup.ɵfac = function NgControlStatusGroup_Factory(t) {
  return new (t || _NgControlStatusGroup)(ɵɵdirectiveInject(ControlContainer, 10));
};
_NgControlStatusGroup.ɵdir = ɵɵdefineDirective({
  type: _NgControlStatusGroup,
  selectors: [["", "formGroupName", ""], ["", "formArrayName", ""], ["", "ngModelGroup", ""], ["", "formGroup", ""], ["form", 3, "ngNoForm", ""], ["", "ngForm", ""]],
  hostVars: 16,
  hostBindings: function NgControlStatusGroup_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ng-untouched", ctx.isUntouched)("ng-touched", ctx.isTouched)("ng-pristine", ctx.isPristine)("ng-dirty", ctx.isDirty)("ng-valid", ctx.isValid)("ng-invalid", ctx.isInvalid)("ng-pending", ctx.isPending)("ng-submitted", ctx.isSubmitted);
    }
  },
  features: [ɵɵInheritDefinitionFeature]
});
var NgControlStatusGroup = _NgControlStatusGroup;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgControlStatusGroup, [{
    type: Directive,
    args: [{
      selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]",
      host: ngGroupStatusHost
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }]
  }], null);
})();
var formControlNameExample = `
  <div [formGroup]="myGroup">
    <input formControlName="firstName">
  </div>

  In your class:

  this.myGroup = new FormGroup({
      firstName: new FormControl()
  });`;
var formGroupNameExample = `
  <div [formGroup]="myGroup">
      <div formGroupName="person">
        <input formControlName="firstName">
      </div>
  </div>

  In your class:

  this.myGroup = new FormGroup({
      person: new FormGroup({ firstName: new FormControl() })
  });`;
var formArrayNameExample = `
  <div [formGroup]="myGroup">
    <div formArrayName="cities">
      <div *ngFor="let city of cityArray.controls; index as i">
        <input [formControlName]="i">
      </div>
    </div>
  </div>

  In your class:

  this.cityArray = new FormArray([new FormControl('SF')]);
  this.myGroup = new FormGroup({
    cities: this.cityArray
  });`;
var ngModelGroupExample = `
  <form>
      <div ngModelGroup="person">
        <input [(ngModel)]="person.name" name="firstName">
      </div>
  </form>`;
var ngModelWithFormGroupExample = `
  <div [formGroup]="myGroup">
      <input formControlName="firstName">
      <input [(ngModel)]="showMoreControls" [ngModelOptions]="{standalone: true}">
  </div>
`;
function controlParentException() {
  return new RuntimeError(1050, `formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup
      directive and pass it an existing FormGroup instance (you can create one in your class).

    Example:

    ${formControlNameExample}`);
}
function ngModelGroupException() {
  return new RuntimeError(1051, `formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents
      that also have a "form" prefix: formGroupName, formArrayName, or formGroup.

      Option 1:  Update the parent to be formGroupName (reactive form strategy)

      ${formGroupNameExample}

      Option 2: Use ngModel instead of formControlName (template-driven strategy)

      ${ngModelGroupExample}`);
}
function missingFormException() {
  return new RuntimeError(1052, `formGroup expects a FormGroup instance. Please pass one in.

      Example:

      ${formControlNameExample}`);
}
function groupParentException() {
  return new RuntimeError(1053, `formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup
    directive and pass it an existing FormGroup instance (you can create one in your class).

    Example:

    ${formGroupNameExample}`);
}
function arrayParentException() {
  return new RuntimeError(1054, `formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup
      directive and pass it an existing FormGroup instance (you can create one in your class).

      Example:

      ${formArrayNameExample}`);
}
var disabledAttrWarning = `
  It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true
  when you set up this control in your component class, the disabled attribute will actually be set in the DOM for
  you. We recommend using this approach to avoid 'changed after checked' errors.

  Example:
  // Specify the \`disabled\` property at control creation time:
  form = new FormGroup({
    first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),
    last: new FormControl('Drew', Validators.required)
  });

  // Controls can also be enabled/disabled after creation:
  form.get('first')?.enable();
  form.get('last')?.disable();
`;
var asyncValidatorsDroppedWithOptsWarning = `
  It looks like you're constructing using a FormControl with both an options argument and an
  async validators argument. Mixing these arguments will cause your async validators to be dropped.
  You should either put all your validators in the options object, or in separate validators
  arguments. For example:

  // Using validators arguments
  fc = new FormControl(42, Validators.required, myAsyncValidator);

  // Using AbstractControlOptions
  fc = new FormControl(42, {validators: Validators.required, asyncValidators: myAV});

  // Do NOT mix them: async validators will be dropped!
  fc = new FormControl(42, {validators: Validators.required}, /* Oops! */ myAsyncValidator);
`;
function ngModelWarning(directiveName) {
  return `
  It looks like you're using ngModel on the same form field as ${directiveName}.
  Support for using the ngModel input property and ngModelChange event with
  reactive form directives has been deprecated in Angular v6 and will be removed
  in a future version of Angular.

  For more information on this, see our API docs here:
  https://angular.io/api/forms/${directiveName === "formControl" ? "FormControlDirective" : "FormControlName"}#use-with-ngmodel
  `;
}
function describeKey(isFormGroup, key) {
  return isFormGroup ? `with name: '${key}'` : `at index: ${key}`;
}
function noControlsError(isFormGroup) {
  return `
    There are no form controls registered with this ${isFormGroup ? "group" : "array"} yet. If you're using ngModel,
    you may want to check next tick (e.g. use setTimeout).
  `;
}
function missingControlError(isFormGroup, key) {
  return `Cannot find form control ${describeKey(isFormGroup, key)}`;
}
function missingControlValueError(isFormGroup, key) {
  return `Must supply a value for form control ${describeKey(isFormGroup, key)}`;
}
var VALID = "VALID";
var INVALID = "INVALID";
var PENDING = "PENDING";
var DISABLED = "DISABLED";
function pickValidators(validatorOrOpts) {
  return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.validators : validatorOrOpts) || null;
}
function coerceToValidator(validator) {
  return Array.isArray(validator) ? composeValidators(validator) : validator || null;
}
function pickAsyncValidators(asyncValidator, validatorOrOpts) {
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    if (isOptionsObj(validatorOrOpts) && asyncValidator) {
      console.warn(asyncValidatorsDroppedWithOptsWarning);
    }
  }
  return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.asyncValidators : asyncValidator) || null;
}
function coerceToAsyncValidator(asyncValidator) {
  return Array.isArray(asyncValidator) ? composeAsyncValidators(asyncValidator) : asyncValidator || null;
}
function isOptionsObj(validatorOrOpts) {
  return validatorOrOpts != null && !Array.isArray(validatorOrOpts) && typeof validatorOrOpts === "object";
}
function assertControlPresent(parent, isGroup, key) {
  const controls = parent.controls;
  const collection = isGroup ? Object.keys(controls) : controls;
  if (!collection.length) {
    throw new RuntimeError(1e3, typeof ngDevMode === "undefined" || ngDevMode ? noControlsError(isGroup) : "");
  }
  if (!controls[key]) {
    throw new RuntimeError(1001, typeof ngDevMode === "undefined" || ngDevMode ? missingControlError(isGroup, key) : "");
  }
}
function assertAllValuesPresent(control, isGroup, value) {
  control._forEachChild((_, key) => {
    if (value[key] === void 0) {
      throw new RuntimeError(1002, typeof ngDevMode === "undefined" || ngDevMode ? missingControlValueError(isGroup, key) : "");
    }
  });
}
var AbstractControl = class {
  /**
   * Initialize the AbstractControl instance.
   *
   * @param validators The function or array of functions that is used to determine the validity of
   *     this control synchronously.
   * @param asyncValidators The function or array of functions that is used to determine validity of
   *     this control asynchronously.
   */
  constructor(validators, asyncValidators) {
    this._pendingDirty = false;
    this._hasOwnPendingAsyncValidator = false;
    this._pendingTouched = false;
    this._onCollectionChange = () => {
    };
    this._parent = null;
    this.pristine = true;
    this.touched = false;
    this._onDisabledChange = [];
    this._assignValidators(validators);
    this._assignAsyncValidators(asyncValidators);
  }
  /**
   * Returns the function that is used to determine the validity of this control synchronously.
   * If multiple validators have been added, this will be a single composed function.
   * See `Validators.compose()` for additional information.
   */
  get validator() {
    return this._composedValidatorFn;
  }
  set validator(validatorFn) {
    this._rawValidators = this._composedValidatorFn = validatorFn;
  }
  /**
   * Returns the function that is used to determine the validity of this control asynchronously.
   * If multiple validators have been added, this will be a single composed function.
   * See `Validators.compose()` for additional information.
   */
  get asyncValidator() {
    return this._composedAsyncValidatorFn;
  }
  set asyncValidator(asyncValidatorFn) {
    this._rawAsyncValidators = this._composedAsyncValidatorFn = asyncValidatorFn;
  }
  /**
   * The parent control.
   */
  get parent() {
    return this._parent;
  }
  /**
   * A control is `valid` when its `status` is `VALID`.
   *
   * @see {@link AbstractControl.status}
   *
   * @returns True if the control has passed all of its validation tests,
   * false otherwise.
   */
  get valid() {
    return this.status === VALID;
  }
  /**
   * A control is `invalid` when its `status` is `INVALID`.
   *
   * @see {@link AbstractControl.status}
   *
   * @returns True if this control has failed one or more of its validation checks,
   * false otherwise.
   */
  get invalid() {
    return this.status === INVALID;
  }
  /**
   * A control is `pending` when its `status` is `PENDING`.
   *
   * @see {@link AbstractControl.status}
   *
   * @returns True if this control is in the process of conducting a validation check,
   * false otherwise.
   */
  get pending() {
    return this.status == PENDING;
  }
  /**
   * A control is `disabled` when its `status` is `DISABLED`.
   *
   * Disabled controls are exempt from validation checks and
   * are not included in the aggregate value of their ancestor
   * controls.
   *
   * @see {@link AbstractControl.status}
   *
   * @returns True if the control is disabled, false otherwise.
   */
  get disabled() {
    return this.status === DISABLED;
  }
  /**
   * A control is `enabled` as long as its `status` is not `DISABLED`.
   *
   * @returns True if the control has any status other than 'DISABLED',
   * false if the status is 'DISABLED'.
   *
   * @see {@link AbstractControl.status}
   *
   */
  get enabled() {
    return this.status !== DISABLED;
  }
  /**
   * A control is `dirty` if the user has changed the value
   * in the UI.
   *
   * @returns True if the user has changed the value of this control in the UI; compare `pristine`.
   * Programmatic changes to a control's value do not mark it dirty.
   */
  get dirty() {
    return !this.pristine;
  }
  /**
   * True if the control has not been marked as touched
   *
   * A control is `untouched` if the user has not yet triggered
   * a `blur` event on it.
   */
  get untouched() {
    return !this.touched;
  }
  /**
   * Reports the update strategy of the `AbstractControl` (meaning
   * the event on which the control updates itself).
   * Possible values: `'change'` | `'blur'` | `'submit'`
   * Default value: `'change'`
   */
  get updateOn() {
    return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : "change";
  }
  /**
   * Sets the synchronous validators that are active on this control.  Calling
   * this overwrites any existing synchronous validators.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * If you want to add a new validator without affecting existing ones, consider
   * using `addValidators()` method instead.
   */
  setValidators(validators) {
    this._assignValidators(validators);
  }
  /**
   * Sets the asynchronous validators that are active on this control. Calling this
   * overwrites any existing asynchronous validators.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * If you want to add a new validator without affecting existing ones, consider
   * using `addAsyncValidators()` method instead.
   */
  setAsyncValidators(validators) {
    this._assignAsyncValidators(validators);
  }
  /**
   * Add a synchronous validator or validators to this control, without affecting other validators.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * Adding a validator that already exists will have no effect. If duplicate validator functions
   * are present in the `validators` array, only the first instance would be added to a form
   * control.
   *
   * @param validators The new validator function or functions to add to this control.
   */
  addValidators(validators) {
    this.setValidators(addValidators(validators, this._rawValidators));
  }
  /**
   * Add an asynchronous validator or validators to this control, without affecting other
   * validators.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * Adding a validator that already exists will have no effect.
   *
   * @param validators The new asynchronous validator function or functions to add to this control.
   */
  addAsyncValidators(validators) {
    this.setAsyncValidators(addValidators(validators, this._rawAsyncValidators));
  }
  /**
   * Remove a synchronous validator from this control, without affecting other validators.
   * Validators are compared by function reference; you must pass a reference to the exact same
   * validator function as the one that was originally set. If a provided validator is not found,
   * it is ignored.
   *
   * @usageNotes
   *
   * ### Reference to a ValidatorFn
   *
   * ```
   * // Reference to the RequiredValidator
   * const ctrl = new FormControl<string | null>('', Validators.required);
   * ctrl.removeValidators(Validators.required);
   *
   * // Reference to anonymous function inside MinValidator
   * const minValidator = Validators.min(3);
   * const ctrl = new FormControl<string | null>('', minValidator);
   * expect(ctrl.hasValidator(minValidator)).toEqual(true)
   * expect(ctrl.hasValidator(Validators.min(3))).toEqual(false)
   *
   * ctrl.removeValidators(minValidator);
   * ```
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * @param validators The validator or validators to remove.
   */
  removeValidators(validators) {
    this.setValidators(removeValidators(validators, this._rawValidators));
  }
  /**
   * Remove an asynchronous validator from this control, without affecting other validators.
   * Validators are compared by function reference; you must pass a reference to the exact same
   * validator function as the one that was originally set. If a provided validator is not found, it
   * is ignored.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * @param validators The asynchronous validator or validators to remove.
   */
  removeAsyncValidators(validators) {
    this.setAsyncValidators(removeValidators(validators, this._rawAsyncValidators));
  }
  /**
   * Check whether a synchronous validator function is present on this control. The provided
   * validator must be a reference to the exact same function that was provided.
   *
   * @usageNotes
   *
   * ### Reference to a ValidatorFn
   *
   * ```
   * // Reference to the RequiredValidator
   * const ctrl = new FormControl<number | null>(0, Validators.required);
   * expect(ctrl.hasValidator(Validators.required)).toEqual(true)
   *
   * // Reference to anonymous function inside MinValidator
   * const minValidator = Validators.min(3);
   * const ctrl = new FormControl<number | null>(0, minValidator);
   * expect(ctrl.hasValidator(minValidator)).toEqual(true)
   * expect(ctrl.hasValidator(Validators.min(3))).toEqual(false)
   * ```
   *
   * @param validator The validator to check for presence. Compared by function reference.
   * @returns Whether the provided validator was found on this control.
   */
  hasValidator(validator) {
    return hasValidator(this._rawValidators, validator);
  }
  /**
   * Check whether an asynchronous validator function is present on this control. The provided
   * validator must be a reference to the exact same function that was provided.
   *
   * @param validator The asynchronous validator to check for presence. Compared by function
   *     reference.
   * @returns Whether the provided asynchronous validator was found on this control.
   */
  hasAsyncValidator(validator) {
    return hasValidator(this._rawAsyncValidators, validator);
  }
  /**
   * Empties out the synchronous validator list.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   */
  clearValidators() {
    this.validator = null;
  }
  /**
   * Empties out the async validator list.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   */
  clearAsyncValidators() {
    this.asyncValidator = null;
  }
  /**
   * Marks the control as `touched`. A control is touched by focus and
   * blur events that do not change the value.
   *
   * @see {@link markAsUntouched()}
   * @see {@link markAsDirty()}
   * @see {@link markAsPristine()}
   *
   * @param opts Configuration options that determine how the control propagates changes
   * and emits events after marking is applied.
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   */
  markAsTouched(opts = {}) {
    this.touched = true;
    if (this._parent && !opts.onlySelf) {
      this._parent.markAsTouched(opts);
    }
  }
  /**
   * Marks the control and all its descendant controls as `touched`.
   * @see {@link markAsTouched()}
   */
  markAllAsTouched() {
    this.markAsTouched({
      onlySelf: true
    });
    this._forEachChild((control) => control.markAllAsTouched());
  }
  /**
   * Marks the control as `untouched`.
   *
   * If the control has any children, also marks all children as `untouched`
   * and recalculates the `touched` status of all parent controls.
   *
   * @see {@link markAsTouched()}
   * @see {@link markAsDirty()}
   * @see {@link markAsPristine()}
   *
   * @param opts Configuration options that determine how the control propagates changes
   * and emits events after the marking is applied.
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   */
  markAsUntouched(opts = {}) {
    this.touched = false;
    this._pendingTouched = false;
    this._forEachChild((control) => {
      control.markAsUntouched({
        onlySelf: true
      });
    });
    if (this._parent && !opts.onlySelf) {
      this._parent._updateTouched(opts);
    }
  }
  /**
   * Marks the control as `dirty`. A control becomes dirty when
   * the control's value is changed through the UI; compare `markAsTouched`.
   *
   * @see {@link markAsTouched()}
   * @see {@link markAsUntouched()}
   * @see {@link markAsPristine()}
   *
   * @param opts Configuration options that determine how the control propagates changes
   * and emits events after marking is applied.
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   */
  markAsDirty(opts = {}) {
    this.pristine = false;
    if (this._parent && !opts.onlySelf) {
      this._parent.markAsDirty(opts);
    }
  }
  /**
   * Marks the control as `pristine`.
   *
   * If the control has any children, marks all children as `pristine`,
   * and recalculates the `pristine` status of all parent
   * controls.
   *
   * @see {@link markAsTouched()}
   * @see {@link markAsUntouched()}
   * @see {@link markAsDirty()}
   *
   * @param opts Configuration options that determine how the control emits events after
   * marking is applied.
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   */
  markAsPristine(opts = {}) {
    this.pristine = true;
    this._pendingDirty = false;
    this._forEachChild((control) => {
      control.markAsPristine({
        onlySelf: true
      });
    });
    if (this._parent && !opts.onlySelf) {
      this._parent._updatePristine(opts);
    }
  }
  /**
   * Marks the control as `pending`.
   *
   * A control is pending while the control performs async validation.
   *
   * @see {@link AbstractControl.status}
   *
   * @param opts Configuration options that determine how the control propagates changes and
   * emits events after marking is applied.
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   * * `emitEvent`: When true or not supplied (the default), the `statusChanges`
   * observable emits an event with the latest status the control is marked pending.
   * When false, no events are emitted.
   *
   */
  markAsPending(opts = {}) {
    this.status = PENDING;
    if (opts.emitEvent !== false) {
      this.statusChanges.emit(this.status);
    }
    if (this._parent && !opts.onlySelf) {
      this._parent.markAsPending(opts);
    }
  }
  /**
   * Disables the control. This means the control is exempt from validation checks and
   * excluded from the aggregate value of any parent. Its status is `DISABLED`.
   *
   * If the control has children, all children are also disabled.
   *
   * @see {@link AbstractControl.status}
   *
   * @param opts Configuration options that determine how the control propagates
   * changes and emits events after the control is disabled.
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control is disabled.
   * When false, no events are emitted.
   */
  disable(opts = {}) {
    const skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
    this.status = DISABLED;
    this.errors = null;
    this._forEachChild((control) => {
      control.disable(__spreadProps(__spreadValues({}, opts), {
        onlySelf: true
      }));
    });
    this._updateValue();
    if (opts.emitEvent !== false) {
      this.valueChanges.emit(this.value);
      this.statusChanges.emit(this.status);
    }
    this._updateAncestors(__spreadProps(__spreadValues({}, opts), {
      skipPristineCheck
    }));
    this._onDisabledChange.forEach((changeFn) => changeFn(true));
  }
  /**
   * Enables the control. This means the control is included in validation checks and
   * the aggregate value of its parent. Its status recalculates based on its value and
   * its validators.
   *
   * By default, if the control has children, all children are enabled.
   *
   * @see {@link AbstractControl.status}
   *
   * @param opts Configure options that control how the control propagates changes and
   * emits events when marked as untouched
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control is enabled.
   * When false, no events are emitted.
   */
  enable(opts = {}) {
    const skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
    this.status = VALID;
    this._forEachChild((control) => {
      control.enable(__spreadProps(__spreadValues({}, opts), {
        onlySelf: true
      }));
    });
    this.updateValueAndValidity({
      onlySelf: true,
      emitEvent: opts.emitEvent
    });
    this._updateAncestors(__spreadProps(__spreadValues({}, opts), {
      skipPristineCheck
    }));
    this._onDisabledChange.forEach((changeFn) => changeFn(false));
  }
  _updateAncestors(opts) {
    if (this._parent && !opts.onlySelf) {
      this._parent.updateValueAndValidity(opts);
      if (!opts.skipPristineCheck) {
        this._parent._updatePristine();
      }
      this._parent._updateTouched();
    }
  }
  /**
   * Sets the parent of the control
   *
   * @param parent The new parent.
   */
  setParent(parent) {
    this._parent = parent;
  }
  /**
   * The raw value of this control. For most control implementations, the raw value will include
   * disabled children.
   */
  getRawValue() {
    return this.value;
  }
  /**
   * Recalculates the value and validation status of the control.
   *
   * By default, it also updates the value and validity of its ancestors.
   *
   * @param opts Configuration options determine how the control propagates changes and emits events
   * after updates and validity checks are applied.
   * * `onlySelf`: When true, only update this control. When false or not supplied,
   * update all direct ancestors. Default is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control is updated.
   * When false, no events are emitted.
   */
  updateValueAndValidity(opts = {}) {
    this._setInitialStatus();
    this._updateValue();
    if (this.enabled) {
      this._cancelExistingSubscription();
      this.errors = this._runValidator();
      this.status = this._calculateStatus();
      if (this.status === VALID || this.status === PENDING) {
        this._runAsyncValidator(opts.emitEvent);
      }
    }
    if (opts.emitEvent !== false) {
      this.valueChanges.emit(this.value);
      this.statusChanges.emit(this.status);
    }
    if (this._parent && !opts.onlySelf) {
      this._parent.updateValueAndValidity(opts);
    }
  }
  /** @internal */
  _updateTreeValidity(opts = {
    emitEvent: true
  }) {
    this._forEachChild((ctrl) => ctrl._updateTreeValidity(opts));
    this.updateValueAndValidity({
      onlySelf: true,
      emitEvent: opts.emitEvent
    });
  }
  _setInitialStatus() {
    this.status = this._allControlsDisabled() ? DISABLED : VALID;
  }
  _runValidator() {
    return this.validator ? this.validator(this) : null;
  }
  _runAsyncValidator(emitEvent) {
    if (this.asyncValidator) {
      this.status = PENDING;
      this._hasOwnPendingAsyncValidator = true;
      const obs = toObservable(this.asyncValidator(this));
      this._asyncValidationSubscription = obs.subscribe((errors) => {
        this._hasOwnPendingAsyncValidator = false;
        this.setErrors(errors, {
          emitEvent
        });
      });
    }
  }
  _cancelExistingSubscription() {
    if (this._asyncValidationSubscription) {
      this._asyncValidationSubscription.unsubscribe();
      this._hasOwnPendingAsyncValidator = false;
    }
  }
  /**
   * Sets errors on a form control when running validations manually, rather than automatically.
   *
   * Calling `setErrors` also updates the validity of the parent control.
   *
   * @param opts Configuration options that determine how the control propagates
   * changes and emits events after the control errors are set.
   * * `emitEvent`: When true or not supplied (the default), the `statusChanges`
   * observable emits an event after the errors are set.
   *
   * @usageNotes
   *
   * ### Manually set the errors for a control
   *
   * ```
   * const login = new FormControl('someLogin');
   * login.setErrors({
   *   notUnique: true
   * });
   *
   * expect(login.valid).toEqual(false);
   * expect(login.errors).toEqual({ notUnique: true });
   *
   * login.setValue('someOtherLogin');
   *
   * expect(login.valid).toEqual(true);
   * ```
   */
  setErrors(errors, opts = {}) {
    this.errors = errors;
    this._updateControlsErrors(opts.emitEvent !== false);
  }
  /**
   * Retrieves a child control given the control's name or path.
   *
   * @param path A dot-delimited string or array of string/number values that define the path to the
   * control. If a string is provided, passing it as a string literal will result in improved type
   * information. Likewise, if an array is provided, passing it `as const` will cause improved type
   * information to be available.
   *
   * @usageNotes
   * ### Retrieve a nested control
   *
   * For example, to get a `name` control nested within a `person` sub-group:
   *
   * * `this.form.get('person.name');`
   *
   * -OR-
   *
   * * `this.form.get(['person', 'name'] as const);` // `as const` gives improved typings
   *
   * ### Retrieve a control in a FormArray
   *
   * When accessing an element inside a FormArray, you can use an element index.
   * For example, to get a `price` control from the first element in an `items` array you can use:
   *
   * * `this.form.get('items.0.price');`
   *
   * -OR-
   *
   * * `this.form.get(['items', 0, 'price']);`
   */
  get(path) {
    let currPath = path;
    if (currPath == null)
      return null;
    if (!Array.isArray(currPath))
      currPath = currPath.split(".");
    if (currPath.length === 0)
      return null;
    return currPath.reduce((control, name) => control && control._find(name), this);
  }
  /**
   * @description
   * Reports error data for the control with the given path.
   *
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   *
   * @usageNotes
   * For example, for the following `FormGroup`:
   *
   * ```
   * form = new FormGroup({
   *   address: new FormGroup({ street: new FormControl() })
   * });
   * ```
   *
   * The path to the 'street' control from the root form would be 'address' -> 'street'.
   *
   * It can be provided to this method in one of two formats:
   *
   * 1. An array of string control names, e.g. `['address', 'street']`
   * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
   *
   * @returns error data for that particular error. If the control or error is not present,
   * null is returned.
   */
  getError(errorCode, path) {
    const control = path ? this.get(path) : this;
    return control && control.errors ? control.errors[errorCode] : null;
  }
  /**
   * @description
   * Reports whether the control with the given path has the error specified.
   *
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   *
   * @usageNotes
   * For example, for the following `FormGroup`:
   *
   * ```
   * form = new FormGroup({
   *   address: new FormGroup({ street: new FormControl() })
   * });
   * ```
   *
   * The path to the 'street' control from the root form would be 'address' -> 'street'.
   *
   * It can be provided to this method in one of two formats:
   *
   * 1. An array of string control names, e.g. `['address', 'street']`
   * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
   *
   * If no path is given, this method checks for the error on the current control.
   *
   * @returns whether the given error is present in the control at the given path.
   *
   * If the control is not present, false is returned.
   */
  hasError(errorCode, path) {
    return !!this.getError(errorCode, path);
  }
  /**
   * Retrieves the top-level ancestor of this control.
   */
  get root() {
    let x = this;
    while (x._parent) {
      x = x._parent;
    }
    return x;
  }
  /** @internal */
  _updateControlsErrors(emitEvent) {
    this.status = this._calculateStatus();
    if (emitEvent) {
      this.statusChanges.emit(this.status);
    }
    if (this._parent) {
      this._parent._updateControlsErrors(emitEvent);
    }
  }
  /** @internal */
  _initObservables() {
    this.valueChanges = new EventEmitter();
    this.statusChanges = new EventEmitter();
  }
  _calculateStatus() {
    if (this._allControlsDisabled())
      return DISABLED;
    if (this.errors)
      return INVALID;
    if (this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(PENDING))
      return PENDING;
    if (this._anyControlsHaveStatus(INVALID))
      return INVALID;
    return VALID;
  }
  /** @internal */
  _anyControlsHaveStatus(status) {
    return this._anyControls((control) => control.status === status);
  }
  /** @internal */
  _anyControlsDirty() {
    return this._anyControls((control) => control.dirty);
  }
  /** @internal */
  _anyControlsTouched() {
    return this._anyControls((control) => control.touched);
  }
  /** @internal */
  _updatePristine(opts = {}) {
    this.pristine = !this._anyControlsDirty();
    if (this._parent && !opts.onlySelf) {
      this._parent._updatePristine(opts);
    }
  }
  /** @internal */
  _updateTouched(opts = {}) {
    this.touched = this._anyControlsTouched();
    if (this._parent && !opts.onlySelf) {
      this._parent._updateTouched(opts);
    }
  }
  /** @internal */
  _registerOnCollectionChange(fn) {
    this._onCollectionChange = fn;
  }
  /** @internal */
  _setUpdateStrategy(opts) {
    if (isOptionsObj(opts) && opts.updateOn != null) {
      this._updateOn = opts.updateOn;
    }
  }
  /**
   * Check to see if parent has been marked artificially dirty.
   *
   * @internal
   */
  _parentMarkedDirty(onlySelf) {
    const parentDirty = this._parent && this._parent.dirty;
    return !onlySelf && !!parentDirty && !this._parent._anyControlsDirty();
  }
  /** @internal */
  _find(name) {
    return null;
  }
  /**
   * Internal implementation of the `setValidators` method. Needs to be separated out into a
   * different method, because it is called in the constructor and it can break cases where
   * a control is extended.
   */
  _assignValidators(validators) {
    this._rawValidators = Array.isArray(validators) ? validators.slice() : validators;
    this._composedValidatorFn = coerceToValidator(this._rawValidators);
  }
  /**
   * Internal implementation of the `setAsyncValidators` method. Needs to be separated out into a
   * different method, because it is called in the constructor and it can break cases where
   * a control is extended.
   */
  _assignAsyncValidators(validators) {
    this._rawAsyncValidators = Array.isArray(validators) ? validators.slice() : validators;
    this._composedAsyncValidatorFn = coerceToAsyncValidator(this._rawAsyncValidators);
  }
};
var FormGroup = class extends AbstractControl {
  /**
   * Creates a new `FormGroup` instance.
   *
   * @param controls A collection of child controls. The key for each child is the name
   * under which it is registered.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of
   * such functions, or an `AbstractControlOptions` object that contains validation functions
   * and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator functions
   *
   */
  constructor(controls, validatorOrOpts, asyncValidator) {
    super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    (typeof ngDevMode === "undefined" || ngDevMode) && validateFormGroupControls(controls);
    this.controls = controls;
    this._initObservables();
    this._setUpdateStrategy(validatorOrOpts);
    this._setUpControls();
    this.updateValueAndValidity({
      onlySelf: true,
      // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
      // `VALID` or `INVALID`. The status should be broadcasted via the `statusChanges` observable,
      // so we set `emitEvent` to `true` to allow that during the control creation process.
      emitEvent: !!this.asyncValidator
    });
  }
  registerControl(name, control) {
    if (this.controls[name])
      return this.controls[name];
    this.controls[name] = control;
    control.setParent(this);
    control._registerOnCollectionChange(this._onCollectionChange);
    return control;
  }
  addControl(name, control, options = {}) {
    this.registerControl(name, control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  /**
   * Remove a control from this group. In a strongly-typed group, required controls cannot be
   * removed.
   *
   * This method also updates the value and validity of the control.
   *
   * @param name The control name to remove from the collection
   * @param options Specifies whether this FormGroup instance should emit events after a
   *     control is removed.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * removed. When false, no events are emitted.
   */
  removeControl(name, options = {}) {
    if (this.controls[name])
      this.controls[name]._registerOnCollectionChange(() => {
      });
    delete this.controls[name];
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  setControl(name, control, options = {}) {
    if (this.controls[name])
      this.controls[name]._registerOnCollectionChange(() => {
      });
    delete this.controls[name];
    if (control)
      this.registerControl(name, control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  contains(controlName) {
    return this.controls.hasOwnProperty(controlName) && this.controls[controlName].enabled;
  }
  /**
   * Sets the value of the `FormGroup`. It accepts an object that matches
   * the structure of the group, with control names as keys.
   *
   * @usageNotes
   * ### Set the complete value for the form group
   *
   * ```
   * const form = new FormGroup({
   *   first: new FormControl(),
   *   last: new FormControl()
   * });
   *
   * console.log(form.value);   // {first: null, last: null}
   *
   * form.setValue({first: 'Nancy', last: 'Drew'});
   * console.log(form.value);   // {first: 'Nancy', last: 'Drew'}
   * ```
   *
   * @throws When strict checks fail, such as setting the value of a control
   * that doesn't exist or if you exclude a value of a control that does exist.
   *
   * @param value The new value for the control that matches the structure of the group.
   * @param options Configuration options that determine how the control propagates changes
   * and emits events after the value changes.
   * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
   * false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control value is updated.
   * When false, no events are emitted.
   */
  setValue(value, options = {}) {
    assertAllValuesPresent(this, true, value);
    Object.keys(value).forEach((name) => {
      assertControlPresent(this, true, name);
      this.controls[name].setValue(value[name], {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this.updateValueAndValidity(options);
  }
  /**
   * Patches the value of the `FormGroup`. It accepts an object with control
   * names as keys, and does its best to match the values to the correct controls
   * in the group.
   *
   * It accepts both super-sets and sub-sets of the group without throwing an error.
   *
   * @usageNotes
   * ### Patch the value for a form group
   *
   * ```
   * const form = new FormGroup({
   *    first: new FormControl(),
   *    last: new FormControl()
   * });
   * console.log(form.value);   // {first: null, last: null}
   *
   * form.patchValue({first: 'Nancy'});
   * console.log(form.value);   // {first: 'Nancy', last: null}
   * ```
   *
   * @param value The object that matches the structure of the group.
   * @param options Configuration options that determine how the control propagates changes and
   * emits events after the value is patched.
   * * `onlySelf`: When true, each change only affects this control and not its parent. Default is
   * true.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control value
   * is updated. When false, no events are emitted. The configuration options are passed to
   * the {@link AbstractControl#updateValueAndValidity updateValueAndValidity} method.
   */
  patchValue(value, options = {}) {
    if (value == null)
      return;
    Object.keys(value).forEach((name) => {
      const control = this.controls[name];
      if (control) {
        control.patchValue(
          /* Guaranteed to be present, due to the outer forEach. */
          value[name],
          {
            onlySelf: true,
            emitEvent: options.emitEvent
          }
        );
      }
    });
    this.updateValueAndValidity(options);
  }
  /**
   * Resets the `FormGroup`, marks all descendants `pristine` and `untouched` and sets
   * the value of all descendants to their default values, or null if no defaults were provided.
   *
   * You reset to a specific form state by passing in a map of states
   * that matches the structure of your form, with control names as keys. The state
   * is a standalone value or a form state object with both a value and a disabled
   * status.
   *
   * @param value Resets the control with an initial value,
   * or an object that defines the initial value and disabled state.
   *
   * @param options Configuration options that determine how the control propagates changes
   * and emits events when the group is reset.
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
   * false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control is reset.
   * When false, no events are emitted.
   * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   *
   * @usageNotes
   *
   * ### Reset the form group values
   *
   * ```ts
   * const form = new FormGroup({
   *   first: new FormControl('first name'),
   *   last: new FormControl('last name')
   * });
   *
   * console.log(form.value);  // {first: 'first name', last: 'last name'}
   *
   * form.reset({ first: 'name', last: 'last name' });
   *
   * console.log(form.value);  // {first: 'name', last: 'last name'}
   * ```
   *
   * ### Reset the form group values and disabled status
   *
   * ```
   * const form = new FormGroup({
   *   first: new FormControl('first name'),
   *   last: new FormControl('last name')
   * });
   *
   * form.reset({
   *   first: {value: 'name', disabled: true},
   *   last: 'last'
   * });
   *
   * console.log(form.value);  // {last: 'last'}
   * console.log(form.get('first').status);  // 'DISABLED'
   * ```
   */
  reset(value = {}, options = {}) {
    this._forEachChild((control, name) => {
      control.reset(value ? value[name] : null, {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this._updatePristine(options);
    this._updateTouched(options);
    this.updateValueAndValidity(options);
  }
  /**
   * The aggregate value of the `FormGroup`, including any disabled controls.
   *
   * Retrieves all values regardless of disabled status.
   */
  getRawValue() {
    return this._reduceChildren({}, (acc, control, name) => {
      acc[name] = control.getRawValue();
      return acc;
    });
  }
  /** @internal */
  _syncPendingControls() {
    let subtreeUpdated = this._reduceChildren(false, (updated, child) => {
      return child._syncPendingControls() ? true : updated;
    });
    if (subtreeUpdated)
      this.updateValueAndValidity({
        onlySelf: true
      });
    return subtreeUpdated;
  }
  /** @internal */
  _forEachChild(cb) {
    Object.keys(this.controls).forEach((key) => {
      const control = this.controls[key];
      control && cb(control, key);
    });
  }
  /** @internal */
  _setUpControls() {
    this._forEachChild((control) => {
      control.setParent(this);
      control._registerOnCollectionChange(this._onCollectionChange);
    });
  }
  /** @internal */
  _updateValue() {
    this.value = this._reduceValue();
  }
  /** @internal */
  _anyControls(condition) {
    for (const [controlName, control] of Object.entries(this.controls)) {
      if (this.contains(controlName) && condition(control)) {
        return true;
      }
    }
    return false;
  }
  /** @internal */
  _reduceValue() {
    let acc = {};
    return this._reduceChildren(acc, (acc2, control, name) => {
      if (control.enabled || this.disabled) {
        acc2[name] = control.value;
      }
      return acc2;
    });
  }
  /** @internal */
  _reduceChildren(initValue, fn) {
    let res = initValue;
    this._forEachChild((control, name) => {
      res = fn(res, control, name);
    });
    return res;
  }
  /** @internal */
  _allControlsDisabled() {
    for (const controlName of Object.keys(this.controls)) {
      if (this.controls[controlName].enabled) {
        return false;
      }
    }
    return Object.keys(this.controls).length > 0 || this.disabled;
  }
  /** @internal */
  _find(name) {
    return this.controls.hasOwnProperty(name) ? this.controls[name] : null;
  }
};
function validateFormGroupControls(controls) {
  const invalidKeys = Object.keys(controls).filter((key) => key.includes("."));
  if (invalidKeys.length > 0) {
    console.warn(`FormGroup keys cannot include \`.\`, please replace the keys for: ${invalidKeys.join(",")}.`);
  }
}
var FormRecord = class extends FormGroup {
};
var CALL_SET_DISABLED_STATE = new InjectionToken("CallSetDisabledState", {
  providedIn: "root",
  factory: () => setDisabledStateDefault
});
var setDisabledStateDefault = "always";
function controlPath(name, parent) {
  return [...parent.path, name];
}
function setUpControl(control, dir, callSetDisabledState = setDisabledStateDefault) {
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    if (!control)
      _throwError(dir, "Cannot find control with");
    if (!dir.valueAccessor)
      _throwMissingValueAccessorError(dir);
  }
  setUpValidators(control, dir);
  dir.valueAccessor.writeValue(control.value);
  if (control.disabled || callSetDisabledState === "always") {
    dir.valueAccessor.setDisabledState?.(control.disabled);
  }
  setUpViewChangePipeline(control, dir);
  setUpModelChangePipeline(control, dir);
  setUpBlurPipeline(control, dir);
  setUpDisabledChangeHandler(control, dir);
}
function cleanUpControl(control, dir, validateControlPresenceOnChange = true) {
  const noop = () => {
    if (validateControlPresenceOnChange && (typeof ngDevMode === "undefined" || ngDevMode)) {
      _noControlError(dir);
    }
  };
  if (dir.valueAccessor) {
    dir.valueAccessor.registerOnChange(noop);
    dir.valueAccessor.registerOnTouched(noop);
  }
  cleanUpValidators(control, dir);
  if (control) {
    dir._invokeOnDestroyCallbacks();
    control._registerOnCollectionChange(() => {
    });
  }
}
function registerOnValidatorChange(validators, onChange) {
  validators.forEach((validator) => {
    if (validator.registerOnValidatorChange)
      validator.registerOnValidatorChange(onChange);
  });
}
function setUpDisabledChangeHandler(control, dir) {
  if (dir.valueAccessor.setDisabledState) {
    const onDisabledChange = (isDisabled) => {
      dir.valueAccessor.setDisabledState(isDisabled);
    };
    control.registerOnDisabledChange(onDisabledChange);
    dir._registerOnDestroy(() => {
      control._unregisterOnDisabledChange(onDisabledChange);
    });
  }
}
function setUpValidators(control, dir) {
  const validators = getControlValidators(control);
  if (dir.validator !== null) {
    control.setValidators(mergeValidators(validators, dir.validator));
  } else if (typeof validators === "function") {
    control.setValidators([validators]);
  }
  const asyncValidators = getControlAsyncValidators(control);
  if (dir.asyncValidator !== null) {
    control.setAsyncValidators(mergeValidators(asyncValidators, dir.asyncValidator));
  } else if (typeof asyncValidators === "function") {
    control.setAsyncValidators([asyncValidators]);
  }
  const onValidatorChange = () => control.updateValueAndValidity();
  registerOnValidatorChange(dir._rawValidators, onValidatorChange);
  registerOnValidatorChange(dir._rawAsyncValidators, onValidatorChange);
}
function cleanUpValidators(control, dir) {
  let isControlUpdated = false;
  if (control !== null) {
    if (dir.validator !== null) {
      const validators = getControlValidators(control);
      if (Array.isArray(validators) && validators.length > 0) {
        const updatedValidators = validators.filter((validator) => validator !== dir.validator);
        if (updatedValidators.length !== validators.length) {
          isControlUpdated = true;
          control.setValidators(updatedValidators);
        }
      }
    }
    if (dir.asyncValidator !== null) {
      const asyncValidators = getControlAsyncValidators(control);
      if (Array.isArray(asyncValidators) && asyncValidators.length > 0) {
        const updatedAsyncValidators = asyncValidators.filter((asyncValidator) => asyncValidator !== dir.asyncValidator);
        if (updatedAsyncValidators.length !== asyncValidators.length) {
          isControlUpdated = true;
          control.setAsyncValidators(updatedAsyncValidators);
        }
      }
    }
  }
  const noop = () => {
  };
  registerOnValidatorChange(dir._rawValidators, noop);
  registerOnValidatorChange(dir._rawAsyncValidators, noop);
  return isControlUpdated;
}
function setUpViewChangePipeline(control, dir) {
  dir.valueAccessor.registerOnChange((newValue) => {
    control._pendingValue = newValue;
    control._pendingChange = true;
    control._pendingDirty = true;
    if (control.updateOn === "change")
      updateControl(control, dir);
  });
}
function setUpBlurPipeline(control, dir) {
  dir.valueAccessor.registerOnTouched(() => {
    control._pendingTouched = true;
    if (control.updateOn === "blur" && control._pendingChange)
      updateControl(control, dir);
    if (control.updateOn !== "submit")
      control.markAsTouched();
  });
}
function updateControl(control, dir) {
  if (control._pendingDirty)
    control.markAsDirty();
  control.setValue(control._pendingValue, {
    emitModelToViewChange: false
  });
  dir.viewToModelUpdate(control._pendingValue);
  control._pendingChange = false;
}
function setUpModelChangePipeline(control, dir) {
  const onChange = (newValue, emitModelEvent) => {
    dir.valueAccessor.writeValue(newValue);
    if (emitModelEvent)
      dir.viewToModelUpdate(newValue);
  };
  control.registerOnChange(onChange);
  dir._registerOnDestroy(() => {
    control._unregisterOnChange(onChange);
  });
}
function setUpFormContainer(control, dir) {
  if (control == null && (typeof ngDevMode === "undefined" || ngDevMode))
    _throwError(dir, "Cannot find control with");
  setUpValidators(control, dir);
}
function cleanUpFormContainer(control, dir) {
  return cleanUpValidators(control, dir);
}
function _noControlError(dir) {
  return _throwError(dir, "There is no FormControl instance attached to form control element with");
}
function _throwError(dir, message) {
  const messageEnd = _describeControlLocation(dir);
  throw new Error(`${message} ${messageEnd}`);
}
function _describeControlLocation(dir) {
  const path = dir.path;
  if (path && path.length > 1)
    return `path: '${path.join(" -> ")}'`;
  if (path?.[0])
    return `name: '${path}'`;
  return "unspecified name attribute";
}
function _throwMissingValueAccessorError(dir) {
  const loc = _describeControlLocation(dir);
  throw new RuntimeError(-1203, `No value accessor for form control ${loc}.`);
}
function _throwInvalidValueAccessorError(dir) {
  const loc = _describeControlLocation(dir);
  throw new RuntimeError(1200, `Value accessor was not provided as an array for form control with ${loc}. Check that the \`NG_VALUE_ACCESSOR\` token is configured as a \`multi: true\` provider.`);
}
function isPropertyUpdated(changes, viewModel) {
  if (!changes.hasOwnProperty("model"))
    return false;
  const change = changes["model"];
  if (change.isFirstChange())
    return true;
  return !Object.is(viewModel, change.currentValue);
}
function isBuiltInAccessor(valueAccessor) {
  return Object.getPrototypeOf(valueAccessor.constructor) === BuiltInControlValueAccessor;
}
function syncPendingControls(form, directives) {
  form._syncPendingControls();
  directives.forEach((dir) => {
    const control = dir.control;
    if (control.updateOn === "submit" && control._pendingChange) {
      dir.viewToModelUpdate(control._pendingValue);
      control._pendingChange = false;
    }
  });
}
function selectValueAccessor(dir, valueAccessors) {
  if (!valueAccessors)
    return null;
  if (!Array.isArray(valueAccessors) && (typeof ngDevMode === "undefined" || ngDevMode))
    _throwInvalidValueAccessorError(dir);
  let defaultAccessor = void 0;
  let builtinAccessor = void 0;
  let customAccessor = void 0;
  valueAccessors.forEach((v) => {
    if (v.constructor === DefaultValueAccessor) {
      defaultAccessor = v;
    } else if (isBuiltInAccessor(v)) {
      if (builtinAccessor && (typeof ngDevMode === "undefined" || ngDevMode))
        _throwError(dir, "More than one built-in value accessor matches form control with");
      builtinAccessor = v;
    } else {
      if (customAccessor && (typeof ngDevMode === "undefined" || ngDevMode))
        _throwError(dir, "More than one custom value accessor matches form control with");
      customAccessor = v;
    }
  });
  if (customAccessor)
    return customAccessor;
  if (builtinAccessor)
    return builtinAccessor;
  if (defaultAccessor)
    return defaultAccessor;
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    _throwError(dir, "No valid value accessor for form control with");
  }
  return null;
}
function removeListItem$1(list, el) {
  const index = list.indexOf(el);
  if (index > -1)
    list.splice(index, 1);
}
function _ngModelWarning(name, type, instance, warningConfig) {
  if (warningConfig === "never")
    return;
  if ((warningConfig === null || warningConfig === "once") && !type._ngModelWarningSentOnce || warningConfig === "always" && !instance._ngModelWarningSent) {
    console.warn(ngModelWarning(name));
    type._ngModelWarningSentOnce = true;
    instance._ngModelWarningSent = true;
  }
}
var formDirectiveProvider$1 = {
  provide: ControlContainer,
  useExisting: forwardRef(() => NgForm)
};
var resolvedPromise$1 = (() => Promise.resolve())();
var _NgForm = class _NgForm extends ControlContainer {
  constructor(validators, asyncValidators, callSetDisabledState) {
    super();
    this.callSetDisabledState = callSetDisabledState;
    this.submitted = false;
    this._directives = /* @__PURE__ */ new Set();
    this.ngSubmit = new EventEmitter();
    this.form = new FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
  }
  /** @nodoc */
  ngAfterViewInit() {
    this._setUpdateStrategy();
  }
  /**
   * @description
   * The directive instance.
   */
  get formDirective() {
    return this;
  }
  /**
   * @description
   * The internal `FormGroup` instance.
   */
  get control() {
    return this.form;
  }
  /**
   * @description
   * Returns an array representing the path to this group. Because this directive
   * always lives at the top level of a form, it is always an empty array.
   */
  get path() {
    return [];
  }
  /**
   * @description
   * Returns a map of the controls in this group.
   */
  get controls() {
    return this.form.controls;
  }
  /**
   * @description
   * Method that sets up the control directive in this group, re-calculates its value
   * and validity, and adds the instance to the internal list of directives.
   *
   * @param dir The `NgModel` directive instance.
   */
  addControl(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      dir.control = container.registerControl(dir.name, dir.control);
      setUpControl(dir.control, dir, this.callSetDisabledState);
      dir.control.updateValueAndValidity({
        emitEvent: false
      });
      this._directives.add(dir);
    });
  }
  /**
   * @description
   * Retrieves the `FormControl` instance from the provided `NgModel` directive.
   *
   * @param dir The `NgModel` directive instance.
   */
  getControl(dir) {
    return this.form.get(dir.path);
  }
  /**
   * @description
   * Removes the `NgModel` instance from the internal list of directives
   *
   * @param dir The `NgModel` directive instance.
   */
  removeControl(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      if (container) {
        container.removeControl(dir.name);
      }
      this._directives.delete(dir);
    });
  }
  /**
   * @description
   * Adds a new `NgModelGroup` directive instance to the form.
   *
   * @param dir The `NgModelGroup` directive instance.
   */
  addFormGroup(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      const group = new FormGroup({});
      setUpFormContainer(group, dir);
      container.registerControl(dir.name, group);
      group.updateValueAndValidity({
        emitEvent: false
      });
    });
  }
  /**
   * @description
   * Removes the `NgModelGroup` directive instance from the form.
   *
   * @param dir The `NgModelGroup` directive instance.
   */
  removeFormGroup(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      if (container) {
        container.removeControl(dir.name);
      }
    });
  }
  /**
   * @description
   * Retrieves the `FormGroup` for a provided `NgModelGroup` directive instance
   *
   * @param dir The `NgModelGroup` directive instance.
   */
  getFormGroup(dir) {
    return this.form.get(dir.path);
  }
  /**
   * Sets the new value for the provided `NgControl` directive.
   *
   * @param dir The `NgControl` directive instance.
   * @param value The new value for the directive's control.
   */
  updateModel(dir, value) {
    resolvedPromise$1.then(() => {
      const ctrl = this.form.get(dir.path);
      ctrl.setValue(value);
    });
  }
  /**
   * @description
   * Sets the value for this `FormGroup`.
   *
   * @param value The new value
   */
  setValue(value) {
    this.control.setValue(value);
  }
  /**
   * @description
   * Method called when the "submit" event is triggered on the form.
   * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
   *
   * @param $event The "submit" event object
   */
  onSubmit($event) {
    this.submitted = true;
    syncPendingControls(this.form, this._directives);
    this.ngSubmit.emit($event);
    return $event?.target?.method === "dialog";
  }
  /**
   * @description
   * Method called when the "reset" event is triggered on the form.
   */
  onReset() {
    this.resetForm();
  }
  /**
   * @description
   * Resets the form to an initial value and resets its submitted status.
   *
   * @param value The new value for the form.
   */
  resetForm(value = void 0) {
    this.form.reset(value);
    this.submitted = false;
  }
  _setUpdateStrategy() {
    if (this.options && this.options.updateOn != null) {
      this.form._updateOn = this.options.updateOn;
    }
  }
  _findContainer(path) {
    path.pop();
    return path.length ? this.form.get(path) : this.form;
  }
};
_NgForm.ɵfac = function NgForm_Factory(t) {
  return new (t || _NgForm)(ɵɵdirectiveInject(NG_VALIDATORS, 10), ɵɵdirectiveInject(NG_ASYNC_VALIDATORS, 10), ɵɵdirectiveInject(CALL_SET_DISABLED_STATE, 8));
};
_NgForm.ɵdir = ɵɵdefineDirective({
  type: _NgForm,
  selectors: [["form", 3, "ngNoForm", "", 3, "formGroup", ""], ["ng-form"], ["", "ngForm", ""]],
  hostBindings: function NgForm_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("submit", function NgForm_submit_HostBindingHandler($event) {
        return ctx.onSubmit($event);
      })("reset", function NgForm_reset_HostBindingHandler() {
        return ctx.onReset();
      });
    }
  },
  inputs: {
    options: ["ngFormOptions", "options"]
  },
  outputs: {
    ngSubmit: "ngSubmit"
  },
  exportAs: ["ngForm"],
  features: [ɵɵProvidersFeature([formDirectiveProvider$1]), ɵɵInheritDefinitionFeature]
});
var NgForm = _NgForm;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgForm, [{
    type: Directive,
    args: [{
      selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]",
      providers: [formDirectiveProvider$1],
      host: {
        "(submit)": "onSubmit($event)",
        "(reset)": "onReset()"
      },
      outputs: ["ngSubmit"],
      exportAs: "ngForm"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    options: [{
      type: Input,
      args: ["ngFormOptions"]
    }]
  });
})();
function removeListItem(list, el) {
  const index = list.indexOf(el);
  if (index > -1)
    list.splice(index, 1);
}
function isFormControlState(formState) {
  return typeof formState === "object" && formState !== null && Object.keys(formState).length === 2 && "value" in formState && "disabled" in formState;
}
var FormControl = class FormControl2 extends AbstractControl {
  constructor(formState = null, validatorOrOpts, asyncValidator) {
    super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    this.defaultValue = null;
    this._onChange = [];
    this._pendingChange = false;
    this._applyFormState(formState);
    this._setUpdateStrategy(validatorOrOpts);
    this._initObservables();
    this.updateValueAndValidity({
      onlySelf: true,
      // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
      // `VALID` or `INVALID`.
      // The status should be broadcasted via the `statusChanges` observable, so we set
      // `emitEvent` to `true` to allow that during the control creation process.
      emitEvent: !!this.asyncValidator
    });
    if (isOptionsObj(validatorOrOpts) && (validatorOrOpts.nonNullable || validatorOrOpts.initialValueIsDefault)) {
      if (isFormControlState(formState)) {
        this.defaultValue = formState.value;
      } else {
        this.defaultValue = formState;
      }
    }
  }
  setValue(value, options = {}) {
    this.value = this._pendingValue = value;
    if (this._onChange.length && options.emitModelToViewChange !== false) {
      this._onChange.forEach((changeFn) => changeFn(this.value, options.emitViewToModelChange !== false));
    }
    this.updateValueAndValidity(options);
  }
  patchValue(value, options = {}) {
    this.setValue(value, options);
  }
  reset(formState = this.defaultValue, options = {}) {
    this._applyFormState(formState);
    this.markAsPristine(options);
    this.markAsUntouched(options);
    this.setValue(this.value, options);
    this._pendingChange = false;
  }
  /**  @internal */
  _updateValue() {
  }
  /**  @internal */
  _anyControls(condition) {
    return false;
  }
  /**  @internal */
  _allControlsDisabled() {
    return this.disabled;
  }
  registerOnChange(fn) {
    this._onChange.push(fn);
  }
  /** @internal */
  _unregisterOnChange(fn) {
    removeListItem(this._onChange, fn);
  }
  registerOnDisabledChange(fn) {
    this._onDisabledChange.push(fn);
  }
  /** @internal */
  _unregisterOnDisabledChange(fn) {
    removeListItem(this._onDisabledChange, fn);
  }
  /** @internal */
  _forEachChild(cb) {
  }
  /** @internal */
  _syncPendingControls() {
    if (this.updateOn === "submit") {
      if (this._pendingDirty)
        this.markAsDirty();
      if (this._pendingTouched)
        this.markAsTouched();
      if (this._pendingChange) {
        this.setValue(this._pendingValue, {
          onlySelf: true,
          emitModelToViewChange: false
        });
        return true;
      }
    }
    return false;
  }
  _applyFormState(formState) {
    if (isFormControlState(formState)) {
      this.value = this._pendingValue = formState.value;
      formState.disabled ? this.disable({
        onlySelf: true,
        emitEvent: false
      }) : this.enable({
        onlySelf: true,
        emitEvent: false
      });
    } else {
      this.value = this._pendingValue = formState;
    }
  }
};
var isFormControl = (control) => control instanceof FormControl;
var _AbstractFormGroupDirective = class _AbstractFormGroupDirective extends ControlContainer {
  /** @nodoc */
  ngOnInit() {
    this._checkParentType();
    this.formDirective.addFormGroup(this);
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this.formDirective) {
      this.formDirective.removeFormGroup(this);
    }
  }
  /**
   * @description
   * The `FormGroup` bound to this directive.
   */
  get control() {
    return this.formDirective.getFormGroup(this);
  }
  /**
   * @description
   * The path to this group from the top-level directive.
   */
  get path() {
    return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
  }
  /**
   * @description
   * The top-level directive for this group if present, otherwise null.
   */
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  /** @internal */
  _checkParentType() {
  }
};
_AbstractFormGroupDirective.ɵfac = (() => {
  let ɵAbstractFormGroupDirective_BaseFactory;
  return function AbstractFormGroupDirective_Factory(t) {
    return (ɵAbstractFormGroupDirective_BaseFactory || (ɵAbstractFormGroupDirective_BaseFactory = ɵɵgetInheritedFactory(_AbstractFormGroupDirective)))(t || _AbstractFormGroupDirective);
  };
})();
_AbstractFormGroupDirective.ɵdir = ɵɵdefineDirective({
  type: _AbstractFormGroupDirective,
  features: [ɵɵInheritDefinitionFeature]
});
var AbstractFormGroupDirective = _AbstractFormGroupDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractFormGroupDirective, [{
    type: Directive
  }], null, null);
})();
function modelParentException() {
  return new RuntimeError(1350, `
    ngModel cannot be used to register form controls with a parent formGroup directive.  Try using
    formGroup's partner directive "formControlName" instead.  Example:

    ${formControlNameExample}

    Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:

    Example:

    ${ngModelWithFormGroupExample}`);
}
function formGroupNameException() {
  return new RuntimeError(1351, `
    ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.

    Option 1: Use formControlName instead of ngModel (reactive strategy):

    ${formGroupNameExample}

    Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):

    ${ngModelGroupExample}`);
}
function missingNameException() {
  return new RuntimeError(1352, `If ngModel is used within a form tag, either the name attribute must be set or the form
    control must be defined as 'standalone' in ngModelOptions.

    Example 1: <input [(ngModel)]="person.firstName" name="first">
    Example 2: <input [(ngModel)]="person.firstName" [ngModelOptions]="{standalone: true}">`);
}
function modelGroupParentException() {
  return new RuntimeError(1353, `
    ngModelGroup cannot be used with a parent formGroup directive.

    Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):

    ${formGroupNameExample}

    Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):

    ${ngModelGroupExample}`);
}
var modelGroupProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => NgModelGroup)
};
var _NgModelGroup = class _NgModelGroup extends AbstractFormGroupDirective {
  constructor(parent, validators, asyncValidators) {
    super();
    this.name = "";
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  /** @internal */
  _checkParentType() {
    if (!(this._parent instanceof _NgModelGroup) && !(this._parent instanceof NgForm) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw modelGroupParentException();
    }
  }
};
_NgModelGroup.ɵfac = function NgModelGroup_Factory(t) {
  return new (t || _NgModelGroup)(ɵɵdirectiveInject(ControlContainer, 5), ɵɵdirectiveInject(NG_VALIDATORS, 10), ɵɵdirectiveInject(NG_ASYNC_VALIDATORS, 10));
};
_NgModelGroup.ɵdir = ɵɵdefineDirective({
  type: _NgModelGroup,
  selectors: [["", "ngModelGroup", ""]],
  inputs: {
    name: ["ngModelGroup", "name"]
  },
  exportAs: ["ngModelGroup"],
  features: [ɵɵProvidersFeature([modelGroupProvider]), ɵɵInheritDefinitionFeature]
});
var NgModelGroup = _NgModelGroup;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgModelGroup, [{
    type: Directive,
    args: [{
      selector: "[ngModelGroup]",
      providers: [modelGroupProvider],
      exportAs: "ngModelGroup"
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }], {
    name: [{
      type: Input,
      args: ["ngModelGroup"]
    }]
  });
})();
var formControlBinding$1 = {
  provide: NgControl,
  useExisting: forwardRef(() => NgModel)
};
var resolvedPromise = (() => Promise.resolve())();
var _NgModel = class _NgModel extends NgControl {
  constructor(parent, validators, asyncValidators, valueAccessors, _changeDetectorRef, callSetDisabledState) {
    super();
    this._changeDetectorRef = _changeDetectorRef;
    this.callSetDisabledState = callSetDisabledState;
    this.control = new FormControl();
    this._registered = false;
    this.name = "";
    this.update = new EventEmitter();
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
    this.valueAccessor = selectValueAccessor(this, valueAccessors);
  }
  /** @nodoc */
  ngOnChanges(changes) {
    this._checkForErrors();
    if (!this._registered || "name" in changes) {
      if (this._registered) {
        this._checkName();
        if (this.formDirective) {
          const oldName = changes["name"].previousValue;
          this.formDirective.removeControl({
            name: oldName,
            path: this._getPath(oldName)
          });
        }
      }
      this._setUpControl();
    }
    if ("isDisabled" in changes) {
      this._updateDisabled(changes);
    }
    if (isPropertyUpdated(changes, this.viewModel)) {
      this._updateValue(this.model);
      this.viewModel = this.model;
    }
  }
  /** @nodoc */
  ngOnDestroy() {
    this.formDirective && this.formDirective.removeControl(this);
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return this._getPath(this.name);
  }
  /**
   * @description
   * The top-level directive for this control if present, otherwise null.
   */
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  /**
   * @description
   * Sets the new value for the view model and emits an `ngModelChange` event.
   *
   * @param newValue The new value emitted by `ngModelChange`.
   */
  viewToModelUpdate(newValue) {
    this.viewModel = newValue;
    this.update.emit(newValue);
  }
  _setUpControl() {
    this._setUpdateStrategy();
    this._isStandalone() ? this._setUpStandalone() : this.formDirective.addControl(this);
    this._registered = true;
  }
  _setUpdateStrategy() {
    if (this.options && this.options.updateOn != null) {
      this.control._updateOn = this.options.updateOn;
    }
  }
  _isStandalone() {
    return !this._parent || !!(this.options && this.options.standalone);
  }
  _setUpStandalone() {
    setUpControl(this.control, this, this.callSetDisabledState);
    this.control.updateValueAndValidity({
      emitEvent: false
    });
  }
  _checkForErrors() {
    if (!this._isStandalone()) {
      this._checkParentType();
    }
    this._checkName();
  }
  _checkParentType() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!(this._parent instanceof NgModelGroup) && this._parent instanceof AbstractFormGroupDirective) {
        throw formGroupNameException();
      } else if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
        throw modelParentException();
      }
    }
  }
  _checkName() {
    if (this.options && this.options.name)
      this.name = this.options.name;
    if (!this._isStandalone() && !this.name && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw missingNameException();
    }
  }
  _updateValue(value) {
    resolvedPromise.then(() => {
      this.control.setValue(value, {
        emitViewToModelChange: false
      });
      this._changeDetectorRef?.markForCheck();
    });
  }
  _updateDisabled(changes) {
    const disabledValue = changes["isDisabled"].currentValue;
    const isDisabled = disabledValue !== 0 && booleanAttribute(disabledValue);
    resolvedPromise.then(() => {
      if (isDisabled && !this.control.disabled) {
        this.control.disable();
      } else if (!isDisabled && this.control.disabled) {
        this.control.enable();
      }
      this._changeDetectorRef?.markForCheck();
    });
  }
  _getPath(controlName) {
    return this._parent ? controlPath(controlName, this._parent) : [controlName];
  }
};
_NgModel.ɵfac = function NgModel_Factory(t) {
  return new (t || _NgModel)(ɵɵdirectiveInject(ControlContainer, 9), ɵɵdirectiveInject(NG_VALIDATORS, 10), ɵɵdirectiveInject(NG_ASYNC_VALIDATORS, 10), ɵɵdirectiveInject(NG_VALUE_ACCESSOR, 10), ɵɵdirectiveInject(ChangeDetectorRef, 8), ɵɵdirectiveInject(CALL_SET_DISABLED_STATE, 8));
};
_NgModel.ɵdir = ɵɵdefineDirective({
  type: _NgModel,
  selectors: [["", "ngModel", "", 3, "formControlName", "", 3, "formControl", ""]],
  inputs: {
    name: "name",
    isDisabled: ["disabled", "isDisabled"],
    model: ["ngModel", "model"],
    options: ["ngModelOptions", "options"]
  },
  outputs: {
    update: "ngModelChange"
  },
  exportAs: ["ngModel"],
  features: [ɵɵProvidersFeature([formControlBinding$1]), ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature]
});
var NgModel = _NgModel;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgModel, [{
    type: Directive,
    args: [{
      selector: "[ngModel]:not([formControlName]):not([formControl])",
      providers: [formControlBinding$1],
      exportAs: "ngModel"
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }]
  }, {
    type: ChangeDetectorRef,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ChangeDetectorRef]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    name: [{
      type: Input
    }],
    isDisabled: [{
      type: Input,
      args: ["disabled"]
    }],
    model: [{
      type: Input,
      args: ["ngModel"]
    }],
    options: [{
      type: Input,
      args: ["ngModelOptions"]
    }],
    update: [{
      type: Output,
      args: ["ngModelChange"]
    }]
  });
})();
var _ɵNgNoValidate = class _ɵNgNoValidate {
};
_ɵNgNoValidate.ɵfac = function ɵNgNoValidate_Factory(t) {
  return new (t || _ɵNgNoValidate)();
};
_ɵNgNoValidate.ɵdir = ɵɵdefineDirective({
  type: _ɵNgNoValidate,
  selectors: [["form", 3, "ngNoForm", "", 3, "ngNativeValidate", ""]],
  hostAttrs: ["novalidate", ""]
});
var ɵNgNoValidate = _ɵNgNoValidate;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ɵNgNoValidate, [{
    type: Directive,
    args: [{
      selector: "form:not([ngNoForm]):not([ngNativeValidate])",
      host: {
        "novalidate": ""
      }
    }]
  }], null, null);
})();
var NUMBER_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NumberValueAccessor),
  multi: true
};
var _NumberValueAccessor = class _NumberValueAccessor extends BuiltInControlValueAccessor {
  /**
   * Sets the "value" property on the input element.
   * @nodoc
   */
  writeValue(value) {
    const normalizedValue = value == null ? "" : value;
    this.setProperty("value", normalizedValue);
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn) {
    this.onChange = (value) => {
      fn(value == "" ? null : parseFloat(value));
    };
  }
};
_NumberValueAccessor.ɵfac = (() => {
  let ɵNumberValueAccessor_BaseFactory;
  return function NumberValueAccessor_Factory(t) {
    return (ɵNumberValueAccessor_BaseFactory || (ɵNumberValueAccessor_BaseFactory = ɵɵgetInheritedFactory(_NumberValueAccessor)))(t || _NumberValueAccessor);
  };
})();
_NumberValueAccessor.ɵdir = ɵɵdefineDirective({
  type: _NumberValueAccessor,
  selectors: [["input", "type", "number", "formControlName", ""], ["input", "type", "number", "formControl", ""], ["input", "type", "number", "ngModel", ""]],
  hostBindings: function NumberValueAccessor_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("input", function NumberValueAccessor_input_HostBindingHandler($event) {
        return ctx.onChange($event.target.value);
      })("blur", function NumberValueAccessor_blur_HostBindingHandler() {
        return ctx.onTouched();
      });
    }
  },
  features: [ɵɵProvidersFeature([NUMBER_VALUE_ACCESSOR]), ɵɵInheritDefinitionFeature]
});
var NumberValueAccessor = _NumberValueAccessor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NumberValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]",
      host: {
        "(input)": "onChange($event.target.value)",
        "(blur)": "onTouched()"
      },
      providers: [NUMBER_VALUE_ACCESSOR]
    }]
  }], null, null);
})();
var RADIO_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RadioControlValueAccessor),
  multi: true
};
function throwNameError() {
  throw new RuntimeError(1202, `
      If you define both a name and a formControlName attribute on your radio button, their values
      must match. Ex: <input type="radio" formControlName="food" name="food">
    `);
}
var _RadioControlRegistryModule = class _RadioControlRegistryModule {
};
_RadioControlRegistryModule.ɵfac = function RadioControlRegistryModule_Factory(t) {
  return new (t || _RadioControlRegistryModule)();
};
_RadioControlRegistryModule.ɵmod = ɵɵdefineNgModule({
  type: _RadioControlRegistryModule
});
_RadioControlRegistryModule.ɵinj = ɵɵdefineInjector({});
var RadioControlRegistryModule = _RadioControlRegistryModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioControlRegistryModule, [{
    type: NgModule
  }], null, null);
})();
var _RadioControlRegistry = class _RadioControlRegistry {
  constructor() {
    this._accessors = [];
  }
  /**
   * @description
   * Adds a control to the internal registry. For internal use only.
   */
  add(control, accessor) {
    this._accessors.push([control, accessor]);
  }
  /**
   * @description
   * Removes a control from the internal registry. For internal use only.
   */
  remove(accessor) {
    for (let i = this._accessors.length - 1; i >= 0; --i) {
      if (this._accessors[i][1] === accessor) {
        this._accessors.splice(i, 1);
        return;
      }
    }
  }
  /**
   * @description
   * Selects a radio button. For internal use only.
   */
  select(accessor) {
    this._accessors.forEach((c) => {
      if (this._isSameGroup(c, accessor) && c[1] !== accessor) {
        c[1].fireUncheck(accessor.value);
      }
    });
  }
  _isSameGroup(controlPair, accessor) {
    if (!controlPair[0].control)
      return false;
    return controlPair[0]._parent === accessor._control._parent && controlPair[1].name === accessor.name;
  }
};
_RadioControlRegistry.ɵfac = function RadioControlRegistry_Factory(t) {
  return new (t || _RadioControlRegistry)();
};
_RadioControlRegistry.ɵprov = ɵɵdefineInjectable({
  token: _RadioControlRegistry,
  factory: _RadioControlRegistry.ɵfac,
  providedIn: RadioControlRegistryModule
});
var RadioControlRegistry = _RadioControlRegistry;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioControlRegistry, [{
    type: Injectable,
    args: [{
      providedIn: RadioControlRegistryModule
    }]
  }], null, null);
})();
var _RadioControlValueAccessor = class _RadioControlValueAccessor extends BuiltInControlValueAccessor {
  constructor(renderer, elementRef, _registry, _injector) {
    super(renderer, elementRef);
    this._registry = _registry;
    this._injector = _injector;
    this.setDisabledStateFired = false;
    this.onChange = () => {
    };
    this.callSetDisabledState = inject(CALL_SET_DISABLED_STATE, {
      optional: true
    }) ?? setDisabledStateDefault;
  }
  /** @nodoc */
  ngOnInit() {
    this._control = this._injector.get(NgControl);
    this._checkName();
    this._registry.add(this._control, this);
  }
  /** @nodoc */
  ngOnDestroy() {
    this._registry.remove(this);
  }
  /**
   * Sets the "checked" property value on the radio input element.
   * @nodoc
   */
  writeValue(value) {
    this._state = value === this.value;
    this.setProperty("checked", this._state);
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn) {
    this._fn = fn;
    this.onChange = () => {
      fn(this.value);
      this._registry.select(this);
    };
  }
  /** @nodoc */
  setDisabledState(isDisabled) {
    if (this.setDisabledStateFired || isDisabled || this.callSetDisabledState === "whenDisabledForLegacyCode") {
      this.setProperty("disabled", isDisabled);
    }
    this.setDisabledStateFired = true;
  }
  /**
   * Sets the "value" on the radio input element and unchecks it.
   *
   * @param value
   */
  fireUncheck(value) {
    this.writeValue(value);
  }
  _checkName() {
    if (this.name && this.formControlName && this.name !== this.formControlName && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throwNameError();
    }
    if (!this.name && this.formControlName)
      this.name = this.formControlName;
  }
};
_RadioControlValueAccessor.ɵfac = function RadioControlValueAccessor_Factory(t) {
  return new (t || _RadioControlValueAccessor)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(RadioControlRegistry), ɵɵdirectiveInject(Injector));
};
_RadioControlValueAccessor.ɵdir = ɵɵdefineDirective({
  type: _RadioControlValueAccessor,
  selectors: [["input", "type", "radio", "formControlName", ""], ["input", "type", "radio", "formControl", ""], ["input", "type", "radio", "ngModel", ""]],
  hostBindings: function RadioControlValueAccessor_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("change", function RadioControlValueAccessor_change_HostBindingHandler() {
        return ctx.onChange();
      })("blur", function RadioControlValueAccessor_blur_HostBindingHandler() {
        return ctx.onTouched();
      });
    }
  },
  inputs: {
    name: "name",
    formControlName: "formControlName",
    value: "value"
  },
  features: [ɵɵProvidersFeature([RADIO_VALUE_ACCESSOR]), ɵɵInheritDefinitionFeature]
});
var RadioControlValueAccessor = _RadioControlValueAccessor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]",
      host: {
        "(change)": "onChange()",
        "(blur)": "onTouched()"
      },
      providers: [RADIO_VALUE_ACCESSOR]
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: RadioControlRegistry
  }, {
    type: Injector
  }], {
    name: [{
      type: Input
    }],
    formControlName: [{
      type: Input
    }],
    value: [{
      type: Input
    }]
  });
})();
var RANGE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RangeValueAccessor),
  multi: true
};
var _RangeValueAccessor = class _RangeValueAccessor extends BuiltInControlValueAccessor {
  /**
   * Sets the "value" property on the input element.
   * @nodoc
   */
  writeValue(value) {
    this.setProperty("value", parseFloat(value));
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn) {
    this.onChange = (value) => {
      fn(value == "" ? null : parseFloat(value));
    };
  }
};
_RangeValueAccessor.ɵfac = (() => {
  let ɵRangeValueAccessor_BaseFactory;
  return function RangeValueAccessor_Factory(t) {
    return (ɵRangeValueAccessor_BaseFactory || (ɵRangeValueAccessor_BaseFactory = ɵɵgetInheritedFactory(_RangeValueAccessor)))(t || _RangeValueAccessor);
  };
})();
_RangeValueAccessor.ɵdir = ɵɵdefineDirective({
  type: _RangeValueAccessor,
  selectors: [["input", "type", "range", "formControlName", ""], ["input", "type", "range", "formControl", ""], ["input", "type", "range", "ngModel", ""]],
  hostBindings: function RangeValueAccessor_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("change", function RangeValueAccessor_change_HostBindingHandler($event) {
        return ctx.onChange($event.target.value);
      })("input", function RangeValueAccessor_input_HostBindingHandler($event) {
        return ctx.onChange($event.target.value);
      })("blur", function RangeValueAccessor_blur_HostBindingHandler() {
        return ctx.onTouched();
      });
    }
  },
  features: [ɵɵProvidersFeature([RANGE_VALUE_ACCESSOR]), ɵɵInheritDefinitionFeature]
});
var RangeValueAccessor = _RangeValueAccessor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RangeValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]",
      host: {
        "(change)": "onChange($event.target.value)",
        "(input)": "onChange($event.target.value)",
        "(blur)": "onTouched()"
      },
      providers: [RANGE_VALUE_ACCESSOR]
    }]
  }], null, null);
})();
var NG_MODEL_WITH_FORM_CONTROL_WARNING = new InjectionToken("NgModelWithFormControlWarning");
var formControlBinding = {
  provide: NgControl,
  useExisting: forwardRef(() => FormControlDirective)
};
var _FormControlDirective = class _FormControlDirective extends NgControl {
  /**
   * @description
   * Triggers a warning in dev mode that this input should not be used with reactive forms.
   */
  set isDisabled(isDisabled) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      console.warn(disabledAttrWarning);
    }
  }
  constructor(validators, asyncValidators, valueAccessors, _ngModelWarningConfig, callSetDisabledState) {
    super();
    this._ngModelWarningConfig = _ngModelWarningConfig;
    this.callSetDisabledState = callSetDisabledState;
    this.update = new EventEmitter();
    this._ngModelWarningSent = false;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
    this.valueAccessor = selectValueAccessor(this, valueAccessors);
  }
  /** @nodoc */
  ngOnChanges(changes) {
    if (this._isControlChanged(changes)) {
      const previousForm = changes["form"].previousValue;
      if (previousForm) {
        cleanUpControl(
          previousForm,
          this,
          /* validateControlPresenceOnChange */
          false
        );
      }
      setUpControl(this.form, this, this.callSetDisabledState);
      this.form.updateValueAndValidity({
        emitEvent: false
      });
    }
    if (isPropertyUpdated(changes, this.viewModel)) {
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        _ngModelWarning("formControl", _FormControlDirective, this, this._ngModelWarningConfig);
      }
      this.form.setValue(this.model);
      this.viewModel = this.model;
    }
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this.form) {
      cleanUpControl(
        this.form,
        this,
        /* validateControlPresenceOnChange */
        false
      );
    }
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return [];
  }
  /**
   * @description
   * The `FormControl` bound to this directive.
   */
  get control() {
    return this.form;
  }
  /**
   * @description
   * Sets the new value for the view model and emits an `ngModelChange` event.
   *
   * @param newValue The new value for the view model.
   */
  viewToModelUpdate(newValue) {
    this.viewModel = newValue;
    this.update.emit(newValue);
  }
  _isControlChanged(changes) {
    return changes.hasOwnProperty("form");
  }
};
_FormControlDirective._ngModelWarningSentOnce = false;
_FormControlDirective.ɵfac = function FormControlDirective_Factory(t) {
  return new (t || _FormControlDirective)(ɵɵdirectiveInject(NG_VALIDATORS, 10), ɵɵdirectiveInject(NG_ASYNC_VALIDATORS, 10), ɵɵdirectiveInject(NG_VALUE_ACCESSOR, 10), ɵɵdirectiveInject(NG_MODEL_WITH_FORM_CONTROL_WARNING, 8), ɵɵdirectiveInject(CALL_SET_DISABLED_STATE, 8));
};
_FormControlDirective.ɵdir = ɵɵdefineDirective({
  type: _FormControlDirective,
  selectors: [["", "formControl", ""]],
  inputs: {
    form: ["formControl", "form"],
    isDisabled: ["disabled", "isDisabled"],
    model: ["ngModel", "model"]
  },
  outputs: {
    update: "ngModelChange"
  },
  exportAs: ["ngForm"],
  features: [ɵɵProvidersFeature([formControlBinding]), ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature]
});
var FormControlDirective = _FormControlDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormControlDirective, [{
    type: Directive,
    args: [{
      selector: "[formControl]",
      providers: [formControlBinding],
      exportAs: "ngForm"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    form: [{
      type: Input,
      args: ["formControl"]
    }],
    isDisabled: [{
      type: Input,
      args: ["disabled"]
    }],
    model: [{
      type: Input,
      args: ["ngModel"]
    }],
    update: [{
      type: Output,
      args: ["ngModelChange"]
    }]
  });
})();
var formDirectiveProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormGroupDirective)
};
var _FormGroupDirective = class _FormGroupDirective extends ControlContainer {
  constructor(validators, asyncValidators, callSetDisabledState) {
    super();
    this.callSetDisabledState = callSetDisabledState;
    this.submitted = false;
    this._onCollectionChange = () => this._updateDomValue();
    this.directives = [];
    this.form = null;
    this.ngSubmit = new EventEmitter();
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  /** @nodoc */
  ngOnChanges(changes) {
    this._checkFormPresent();
    if (changes.hasOwnProperty("form")) {
      this._updateValidators();
      this._updateDomValue();
      this._updateRegistrations();
      this._oldForm = this.form;
    }
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this.form) {
      cleanUpValidators(this.form, this);
      if (this.form._onCollectionChange === this._onCollectionChange) {
        this.form._registerOnCollectionChange(() => {
        });
      }
    }
  }
  /**
   * @description
   * Returns this directive's instance.
   */
  get formDirective() {
    return this;
  }
  /**
   * @description
   * Returns the `FormGroup` bound to this directive.
   */
  get control() {
    return this.form;
  }
  /**
   * @description
   * Returns an array representing the path to this group. Because this directive
   * always lives at the top level of a form, it always an empty array.
   */
  get path() {
    return [];
  }
  /**
   * @description
   * Method that sets up the control directive in this group, re-calculates its value
   * and validity, and adds the instance to the internal list of directives.
   *
   * @param dir The `FormControlName` directive instance.
   */
  addControl(dir) {
    const ctrl = this.form.get(dir.path);
    setUpControl(ctrl, dir, this.callSetDisabledState);
    ctrl.updateValueAndValidity({
      emitEvent: false
    });
    this.directives.push(dir);
    return ctrl;
  }
  /**
   * @description
   * Retrieves the `FormControl` instance from the provided `FormControlName` directive
   *
   * @param dir The `FormControlName` directive instance.
   */
  getControl(dir) {
    return this.form.get(dir.path);
  }
  /**
   * @description
   * Removes the `FormControlName` instance from the internal list of directives
   *
   * @param dir The `FormControlName` directive instance.
   */
  removeControl(dir) {
    cleanUpControl(
      dir.control || null,
      dir,
      /* validateControlPresenceOnChange */
      false
    );
    removeListItem$1(this.directives, dir);
  }
  /**
   * Adds a new `FormGroupName` directive instance to the form.
   *
   * @param dir The `FormGroupName` directive instance.
   */
  addFormGroup(dir) {
    this._setUpFormContainer(dir);
  }
  /**
   * Performs the necessary cleanup when a `FormGroupName` directive instance is removed from the
   * view.
   *
   * @param dir The `FormGroupName` directive instance.
   */
  removeFormGroup(dir) {
    this._cleanUpFormContainer(dir);
  }
  /**
   * @description
   * Retrieves the `FormGroup` for a provided `FormGroupName` directive instance
   *
   * @param dir The `FormGroupName` directive instance.
   */
  getFormGroup(dir) {
    return this.form.get(dir.path);
  }
  /**
   * Performs the necessary setup when a `FormArrayName` directive instance is added to the view.
   *
   * @param dir The `FormArrayName` directive instance.
   */
  addFormArray(dir) {
    this._setUpFormContainer(dir);
  }
  /**
   * Performs the necessary cleanup when a `FormArrayName` directive instance is removed from the
   * view.
   *
   * @param dir The `FormArrayName` directive instance.
   */
  removeFormArray(dir) {
    this._cleanUpFormContainer(dir);
  }
  /**
   * @description
   * Retrieves the `FormArray` for a provided `FormArrayName` directive instance.
   *
   * @param dir The `FormArrayName` directive instance.
   */
  getFormArray(dir) {
    return this.form.get(dir.path);
  }
  /**
   * Sets the new value for the provided `FormControlName` directive.
   *
   * @param dir The `FormControlName` directive instance.
   * @param value The new value for the directive's control.
   */
  updateModel(dir, value) {
    const ctrl = this.form.get(dir.path);
    ctrl.setValue(value);
  }
  /**
   * @description
   * Method called with the "submit" event is triggered on the form.
   * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
   *
   * @param $event The "submit" event object
   */
  onSubmit($event) {
    this.submitted = true;
    syncPendingControls(this.form, this.directives);
    this.ngSubmit.emit($event);
    return $event?.target?.method === "dialog";
  }
  /**
   * @description
   * Method called when the "reset" event is triggered on the form.
   */
  onReset() {
    this.resetForm();
  }
  /**
   * @description
   * Resets the form to an initial value and resets its submitted status.
   *
   * @param value The new value for the form.
   */
  resetForm(value = void 0) {
    this.form.reset(value);
    this.submitted = false;
  }
  /** @internal */
  _updateDomValue() {
    this.directives.forEach((dir) => {
      const oldCtrl = dir.control;
      const newCtrl = this.form.get(dir.path);
      if (oldCtrl !== newCtrl) {
        cleanUpControl(oldCtrl || null, dir);
        if (isFormControl(newCtrl)) {
          setUpControl(newCtrl, dir, this.callSetDisabledState);
          dir.control = newCtrl;
        }
      }
    });
    this.form._updateTreeValidity({
      emitEvent: false
    });
  }
  _setUpFormContainer(dir) {
    const ctrl = this.form.get(dir.path);
    setUpFormContainer(ctrl, dir);
    ctrl.updateValueAndValidity({
      emitEvent: false
    });
  }
  _cleanUpFormContainer(dir) {
    if (this.form) {
      const ctrl = this.form.get(dir.path);
      if (ctrl) {
        const isControlUpdated = cleanUpFormContainer(ctrl, dir);
        if (isControlUpdated) {
          ctrl.updateValueAndValidity({
            emitEvent: false
          });
        }
      }
    }
  }
  _updateRegistrations() {
    this.form._registerOnCollectionChange(this._onCollectionChange);
    if (this._oldForm) {
      this._oldForm._registerOnCollectionChange(() => {
      });
    }
  }
  _updateValidators() {
    setUpValidators(this.form, this);
    if (this._oldForm) {
      cleanUpValidators(this._oldForm, this);
    }
  }
  _checkFormPresent() {
    if (!this.form && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw missingFormException();
    }
  }
};
_FormGroupDirective.ɵfac = function FormGroupDirective_Factory(t) {
  return new (t || _FormGroupDirective)(ɵɵdirectiveInject(NG_VALIDATORS, 10), ɵɵdirectiveInject(NG_ASYNC_VALIDATORS, 10), ɵɵdirectiveInject(CALL_SET_DISABLED_STATE, 8));
};
_FormGroupDirective.ɵdir = ɵɵdefineDirective({
  type: _FormGroupDirective,
  selectors: [["", "formGroup", ""]],
  hostBindings: function FormGroupDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("submit", function FormGroupDirective_submit_HostBindingHandler($event) {
        return ctx.onSubmit($event);
      })("reset", function FormGroupDirective_reset_HostBindingHandler() {
        return ctx.onReset();
      });
    }
  },
  inputs: {
    form: ["formGroup", "form"]
  },
  outputs: {
    ngSubmit: "ngSubmit"
  },
  exportAs: ["ngForm"],
  features: [ɵɵProvidersFeature([formDirectiveProvider]), ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature]
});
var FormGroupDirective = _FormGroupDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormGroupDirective, [{
    type: Directive,
    args: [{
      selector: "[formGroup]",
      providers: [formDirectiveProvider],
      host: {
        "(submit)": "onSubmit($event)",
        "(reset)": "onReset()"
      },
      exportAs: "ngForm"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    form: [{
      type: Input,
      args: ["formGroup"]
    }],
    ngSubmit: [{
      type: Output
    }]
  });
})();
var formGroupNameProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormGroupName)
};
var _FormGroupName = class _FormGroupName extends AbstractFormGroupDirective {
  constructor(parent, validators, asyncValidators) {
    super();
    this.name = null;
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  /** @internal */
  _checkParentType() {
    if (_hasInvalidParent(this._parent) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw groupParentException();
    }
  }
};
_FormGroupName.ɵfac = function FormGroupName_Factory(t) {
  return new (t || _FormGroupName)(ɵɵdirectiveInject(ControlContainer, 13), ɵɵdirectiveInject(NG_VALIDATORS, 10), ɵɵdirectiveInject(NG_ASYNC_VALIDATORS, 10));
};
_FormGroupName.ɵdir = ɵɵdefineDirective({
  type: _FormGroupName,
  selectors: [["", "formGroupName", ""]],
  inputs: {
    name: ["formGroupName", "name"]
  },
  features: [ɵɵProvidersFeature([formGroupNameProvider]), ɵɵInheritDefinitionFeature]
});
var FormGroupName = _FormGroupName;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormGroupName, [{
    type: Directive,
    args: [{
      selector: "[formGroupName]",
      providers: [formGroupNameProvider]
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }], {
    name: [{
      type: Input,
      args: ["formGroupName"]
    }]
  });
})();
var formArrayNameProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormArrayName)
};
var _FormArrayName = class _FormArrayName extends ControlContainer {
  constructor(parent, validators, asyncValidators) {
    super();
    this.name = null;
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  /**
   * A lifecycle method called when the directive's inputs are initialized. For internal use only.
   * @throws If the directive does not have a valid parent.
   * @nodoc
   */
  ngOnInit() {
    this._checkParentType();
    this.formDirective.addFormArray(this);
  }
  /**
   * A lifecycle method called before the directive's instance is destroyed. For internal use only.
   * @nodoc
   */
  ngOnDestroy() {
    if (this.formDirective) {
      this.formDirective.removeFormArray(this);
    }
  }
  /**
   * @description
   * The `FormArray` bound to this directive.
   */
  get control() {
    return this.formDirective.getFormArray(this);
  }
  /**
   * @description
   * The top-level directive for this group if present, otherwise null.
   */
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
  }
  _checkParentType() {
    if (_hasInvalidParent(this._parent) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw arrayParentException();
    }
  }
};
_FormArrayName.ɵfac = function FormArrayName_Factory(t) {
  return new (t || _FormArrayName)(ɵɵdirectiveInject(ControlContainer, 13), ɵɵdirectiveInject(NG_VALIDATORS, 10), ɵɵdirectiveInject(NG_ASYNC_VALIDATORS, 10));
};
_FormArrayName.ɵdir = ɵɵdefineDirective({
  type: _FormArrayName,
  selectors: [["", "formArrayName", ""]],
  inputs: {
    name: ["formArrayName", "name"]
  },
  features: [ɵɵProvidersFeature([formArrayNameProvider]), ɵɵInheritDefinitionFeature]
});
var FormArrayName = _FormArrayName;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormArrayName, [{
    type: Directive,
    args: [{
      selector: "[formArrayName]",
      providers: [formArrayNameProvider]
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }], {
    name: [{
      type: Input,
      args: ["formArrayName"]
    }]
  });
})();
function _hasInvalidParent(parent) {
  return !(parent instanceof FormGroupName) && !(parent instanceof FormGroupDirective) && !(parent instanceof FormArrayName);
}
var controlNameBinding = {
  provide: NgControl,
  useExisting: forwardRef(() => FormControlName)
};
var _FormControlName = class _FormControlName extends NgControl {
  /**
   * @description
   * Triggers a warning in dev mode that this input should not be used with reactive forms.
   */
  set isDisabled(isDisabled) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      console.warn(disabledAttrWarning);
    }
  }
  constructor(parent, validators, asyncValidators, valueAccessors, _ngModelWarningConfig) {
    super();
    this._ngModelWarningConfig = _ngModelWarningConfig;
    this._added = false;
    this.name = null;
    this.update = new EventEmitter();
    this._ngModelWarningSent = false;
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
    this.valueAccessor = selectValueAccessor(this, valueAccessors);
  }
  /** @nodoc */
  ngOnChanges(changes) {
    if (!this._added)
      this._setUpControl();
    if (isPropertyUpdated(changes, this.viewModel)) {
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        _ngModelWarning("formControlName", _FormControlName, this, this._ngModelWarningConfig);
      }
      this.viewModel = this.model;
      this.formDirective.updateModel(this, this.model);
    }
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this.formDirective) {
      this.formDirective.removeControl(this);
    }
  }
  /**
   * @description
   * Sets the new value for the view model and emits an `ngModelChange` event.
   *
   * @param newValue The new value for the view model.
   */
  viewToModelUpdate(newValue) {
    this.viewModel = newValue;
    this.update.emit(newValue);
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
  }
  /**
   * @description
   * The top-level directive for this group if present, otherwise null.
   */
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  _checkParentType() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!(this._parent instanceof FormGroupName) && this._parent instanceof AbstractFormGroupDirective) {
        throw ngModelGroupException();
      } else if (!(this._parent instanceof FormGroupName) && !(this._parent instanceof FormGroupDirective) && !(this._parent instanceof FormArrayName)) {
        throw controlParentException();
      }
    }
  }
  _setUpControl() {
    this._checkParentType();
    this.control = this.formDirective.addControl(this);
    this._added = true;
  }
};
_FormControlName._ngModelWarningSentOnce = false;
_FormControlName.ɵfac = function FormControlName_Factory(t) {
  return new (t || _FormControlName)(ɵɵdirectiveInject(ControlContainer, 13), ɵɵdirectiveInject(NG_VALIDATORS, 10), ɵɵdirectiveInject(NG_ASYNC_VALIDATORS, 10), ɵɵdirectiveInject(NG_VALUE_ACCESSOR, 10), ɵɵdirectiveInject(NG_MODEL_WITH_FORM_CONTROL_WARNING, 8));
};
_FormControlName.ɵdir = ɵɵdefineDirective({
  type: _FormControlName,
  selectors: [["", "formControlName", ""]],
  inputs: {
    name: ["formControlName", "name"],
    isDisabled: ["disabled", "isDisabled"],
    model: ["ngModel", "model"]
  },
  outputs: {
    update: "ngModelChange"
  },
  features: [ɵɵProvidersFeature([controlNameBinding]), ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature]
});
var FormControlName = _FormControlName;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormControlName, [{
    type: Directive,
    args: [{
      selector: "[formControlName]",
      providers: [controlNameBinding]
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
    }]
  }], {
    name: [{
      type: Input,
      args: ["formControlName"]
    }],
    isDisabled: [{
      type: Input,
      args: ["disabled"]
    }],
    model: [{
      type: Input,
      args: ["ngModel"]
    }],
    update: [{
      type: Output,
      args: ["ngModelChange"]
    }]
  });
})();
var SELECT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectControlValueAccessor),
  multi: true
};
function _buildValueString$1(id, value) {
  if (id == null)
    return `${value}`;
  if (value && typeof value === "object")
    value = "Object";
  return `${id}: ${value}`.slice(0, 50);
}
function _extractId$1(valueString) {
  return valueString.split(":")[0];
}
var _SelectControlValueAccessor = class _SelectControlValueAccessor extends BuiltInControlValueAccessor {
  constructor() {
    super(...arguments);
    this._optionMap = /* @__PURE__ */ new Map();
    this._idCounter = 0;
    this._compareWith = Object.is;
  }
  /**
   * @description
   * Tracks the option comparison algorithm for tracking identities when
   * checking for changes.
   */
  set compareWith(fn) {
    if (typeof fn !== "function" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw new RuntimeError(1201, `compareWith must be a function, but received ${JSON.stringify(fn)}`);
    }
    this._compareWith = fn;
  }
  /**
   * Sets the "value" property on the select element.
   * @nodoc
   */
  writeValue(value) {
    this.value = value;
    const id = this._getOptionId(value);
    const valueString = _buildValueString$1(id, value);
    this.setProperty("value", valueString);
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn) {
    this.onChange = (valueString) => {
      this.value = this._getOptionValue(valueString);
      fn(this.value);
    };
  }
  /** @internal */
  _registerOption() {
    return (this._idCounter++).toString();
  }
  /** @internal */
  _getOptionId(value) {
    for (const id of this._optionMap.keys()) {
      if (this._compareWith(this._optionMap.get(id), value))
        return id;
    }
    return null;
  }
  /** @internal */
  _getOptionValue(valueString) {
    const id = _extractId$1(valueString);
    return this._optionMap.has(id) ? this._optionMap.get(id) : valueString;
  }
};
_SelectControlValueAccessor.ɵfac = (() => {
  let ɵSelectControlValueAccessor_BaseFactory;
  return function SelectControlValueAccessor_Factory(t) {
    return (ɵSelectControlValueAccessor_BaseFactory || (ɵSelectControlValueAccessor_BaseFactory = ɵɵgetInheritedFactory(_SelectControlValueAccessor)))(t || _SelectControlValueAccessor);
  };
})();
_SelectControlValueAccessor.ɵdir = ɵɵdefineDirective({
  type: _SelectControlValueAccessor,
  selectors: [["select", "formControlName", "", 3, "multiple", ""], ["select", "formControl", "", 3, "multiple", ""], ["select", "ngModel", "", 3, "multiple", ""]],
  hostBindings: function SelectControlValueAccessor_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("change", function SelectControlValueAccessor_change_HostBindingHandler($event) {
        return ctx.onChange($event.target.value);
      })("blur", function SelectControlValueAccessor_blur_HostBindingHandler() {
        return ctx.onTouched();
      });
    }
  },
  inputs: {
    compareWith: "compareWith"
  },
  features: [ɵɵProvidersFeature([SELECT_VALUE_ACCESSOR]), ɵɵInheritDefinitionFeature]
});
var SelectControlValueAccessor = _SelectControlValueAccessor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]",
      host: {
        "(change)": "onChange($event.target.value)",
        "(blur)": "onTouched()"
      },
      providers: [SELECT_VALUE_ACCESSOR]
    }]
  }], null, {
    compareWith: [{
      type: Input
    }]
  });
})();
var _NgSelectOption = class _NgSelectOption {
  constructor(_element, _renderer, _select) {
    this._element = _element;
    this._renderer = _renderer;
    this._select = _select;
    if (this._select)
      this.id = this._select._registerOption();
  }
  /**
   * @description
   * Tracks the value bound to the option element. Unlike the value binding,
   * ngValue supports binding to objects.
   */
  set ngValue(value) {
    if (this._select == null)
      return;
    this._select._optionMap.set(this.id, value);
    this._setElementValue(_buildValueString$1(this.id, value));
    this._select.writeValue(this._select.value);
  }
  /**
   * @description
   * Tracks simple string values bound to the option element.
   * For objects, use the `ngValue` input binding.
   */
  set value(value) {
    this._setElementValue(value);
    if (this._select)
      this._select.writeValue(this._select.value);
  }
  /** @internal */
  _setElementValue(value) {
    this._renderer.setProperty(this._element.nativeElement, "value", value);
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this._select) {
      this._select._optionMap.delete(this.id);
      this._select.writeValue(this._select.value);
    }
  }
};
_NgSelectOption.ɵfac = function NgSelectOption_Factory(t) {
  return new (t || _NgSelectOption)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(SelectControlValueAccessor, 9));
};
_NgSelectOption.ɵdir = ɵɵdefineDirective({
  type: _NgSelectOption,
  selectors: [["option"]],
  inputs: {
    ngValue: "ngValue",
    value: "value"
  }
});
var NgSelectOption = _NgSelectOption;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgSelectOption, [{
    type: Directive,
    args: [{
      selector: "option"
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: SelectControlValueAccessor,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }], {
    ngValue: [{
      type: Input,
      args: ["ngValue"]
    }],
    value: [{
      type: Input,
      args: ["value"]
    }]
  });
})();
var SELECT_MULTIPLE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectMultipleControlValueAccessor),
  multi: true
};
function _buildValueString(id, value) {
  if (id == null)
    return `${value}`;
  if (typeof value === "string")
    value = `'${value}'`;
  if (value && typeof value === "object")
    value = "Object";
  return `${id}: ${value}`.slice(0, 50);
}
function _extractId(valueString) {
  return valueString.split(":")[0];
}
var _SelectMultipleControlValueAccessor = class _SelectMultipleControlValueAccessor extends BuiltInControlValueAccessor {
  constructor() {
    super(...arguments);
    this._optionMap = /* @__PURE__ */ new Map();
    this._idCounter = 0;
    this._compareWith = Object.is;
  }
  /**
   * @description
   * Tracks the option comparison algorithm for tracking identities when
   * checking for changes.
   */
  set compareWith(fn) {
    if (typeof fn !== "function" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw new RuntimeError(1201, `compareWith must be a function, but received ${JSON.stringify(fn)}`);
    }
    this._compareWith = fn;
  }
  /**
   * Sets the "value" property on one or of more of the select's options.
   * @nodoc
   */
  writeValue(value) {
    this.value = value;
    let optionSelectedStateSetter;
    if (Array.isArray(value)) {
      const ids = value.map((v) => this._getOptionId(v));
      optionSelectedStateSetter = (opt, o) => {
        opt._setSelected(ids.indexOf(o.toString()) > -1);
      };
    } else {
      optionSelectedStateSetter = (opt, o) => {
        opt._setSelected(false);
      };
    }
    this._optionMap.forEach(optionSelectedStateSetter);
  }
  /**
   * Registers a function called when the control value changes
   * and writes an array of the selected options.
   * @nodoc
   */
  registerOnChange(fn) {
    this.onChange = (element) => {
      const selected = [];
      const selectedOptions = element.selectedOptions;
      if (selectedOptions !== void 0) {
        const options = selectedOptions;
        for (let i = 0; i < options.length; i++) {
          const opt = options[i];
          const val = this._getOptionValue(opt.value);
          selected.push(val);
        }
      } else {
        const options = element.options;
        for (let i = 0; i < options.length; i++) {
          const opt = options[i];
          if (opt.selected) {
            const val = this._getOptionValue(opt.value);
            selected.push(val);
          }
        }
      }
      this.value = selected;
      fn(selected);
    };
  }
  /** @internal */
  _registerOption(value) {
    const id = (this._idCounter++).toString();
    this._optionMap.set(id, value);
    return id;
  }
  /** @internal */
  _getOptionId(value) {
    for (const id of this._optionMap.keys()) {
      if (this._compareWith(this._optionMap.get(id)._value, value))
        return id;
    }
    return null;
  }
  /** @internal */
  _getOptionValue(valueString) {
    const id = _extractId(valueString);
    return this._optionMap.has(id) ? this._optionMap.get(id)._value : valueString;
  }
};
_SelectMultipleControlValueAccessor.ɵfac = (() => {
  let ɵSelectMultipleControlValueAccessor_BaseFactory;
  return function SelectMultipleControlValueAccessor_Factory(t) {
    return (ɵSelectMultipleControlValueAccessor_BaseFactory || (ɵSelectMultipleControlValueAccessor_BaseFactory = ɵɵgetInheritedFactory(_SelectMultipleControlValueAccessor)))(t || _SelectMultipleControlValueAccessor);
  };
})();
_SelectMultipleControlValueAccessor.ɵdir = ɵɵdefineDirective({
  type: _SelectMultipleControlValueAccessor,
  selectors: [["select", "multiple", "", "formControlName", ""], ["select", "multiple", "", "formControl", ""], ["select", "multiple", "", "ngModel", ""]],
  hostBindings: function SelectMultipleControlValueAccessor_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("change", function SelectMultipleControlValueAccessor_change_HostBindingHandler($event) {
        return ctx.onChange($event.target);
      })("blur", function SelectMultipleControlValueAccessor_blur_HostBindingHandler() {
        return ctx.onTouched();
      });
    }
  },
  inputs: {
    compareWith: "compareWith"
  },
  features: [ɵɵProvidersFeature([SELECT_MULTIPLE_VALUE_ACCESSOR]), ɵɵInheritDefinitionFeature]
});
var SelectMultipleControlValueAccessor = _SelectMultipleControlValueAccessor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectMultipleControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]",
      host: {
        "(change)": "onChange($event.target)",
        "(blur)": "onTouched()"
      },
      providers: [SELECT_MULTIPLE_VALUE_ACCESSOR]
    }]
  }], null, {
    compareWith: [{
      type: Input
    }]
  });
})();
var _ɵNgSelectMultipleOption = class _ɵNgSelectMultipleOption {
  constructor(_element, _renderer, _select) {
    this._element = _element;
    this._renderer = _renderer;
    this._select = _select;
    if (this._select) {
      this.id = this._select._registerOption(this);
    }
  }
  /**
   * @description
   * Tracks the value bound to the option element. Unlike the value binding,
   * ngValue supports binding to objects.
   */
  set ngValue(value) {
    if (this._select == null)
      return;
    this._value = value;
    this._setElementValue(_buildValueString(this.id, value));
    this._select.writeValue(this._select.value);
  }
  /**
   * @description
   * Tracks simple string values bound to the option element.
   * For objects, use the `ngValue` input binding.
   */
  set value(value) {
    if (this._select) {
      this._value = value;
      this._setElementValue(_buildValueString(this.id, value));
      this._select.writeValue(this._select.value);
    } else {
      this._setElementValue(value);
    }
  }
  /** @internal */
  _setElementValue(value) {
    this._renderer.setProperty(this._element.nativeElement, "value", value);
  }
  /** @internal */
  _setSelected(selected) {
    this._renderer.setProperty(this._element.nativeElement, "selected", selected);
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this._select) {
      this._select._optionMap.delete(this.id);
      this._select.writeValue(this._select.value);
    }
  }
};
_ɵNgSelectMultipleOption.ɵfac = function ɵNgSelectMultipleOption_Factory(t) {
  return new (t || _ɵNgSelectMultipleOption)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(SelectMultipleControlValueAccessor, 9));
};
_ɵNgSelectMultipleOption.ɵdir = ɵɵdefineDirective({
  type: _ɵNgSelectMultipleOption,
  selectors: [["option"]],
  inputs: {
    ngValue: "ngValue",
    value: "value"
  }
});
var ɵNgSelectMultipleOption = _ɵNgSelectMultipleOption;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ɵNgSelectMultipleOption, [{
    type: Directive,
    args: [{
      selector: "option"
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: SelectMultipleControlValueAccessor,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }], {
    ngValue: [{
      type: Input,
      args: ["ngValue"]
    }],
    value: [{
      type: Input,
      args: ["value"]
    }]
  });
})();
function toInteger(value) {
  return typeof value === "number" ? value : parseInt(value, 10);
}
function toFloat(value) {
  return typeof value === "number" ? value : parseFloat(value);
}
var _AbstractValidatorDirective = class _AbstractValidatorDirective {
  constructor() {
    this._validator = nullValidator;
  }
  /** @nodoc */
  ngOnChanges(changes) {
    if (this.inputName in changes) {
      const input = this.normalizeInput(changes[this.inputName].currentValue);
      this._enabled = this.enabled(input);
      this._validator = this._enabled ? this.createValidator(input) : nullValidator;
      if (this._onChange) {
        this._onChange();
      }
    }
  }
  /** @nodoc */
  validate(control) {
    return this._validator(control);
  }
  /** @nodoc */
  registerOnValidatorChange(fn) {
    this._onChange = fn;
  }
  /**
   * @description
   * Determines whether this validator should be active or not based on an input.
   * Base class implementation checks whether an input is defined (if the value is different from
   * `null` and `undefined`). Validator classes that extend this base class can override this
   * function with the logic specific to a particular validator directive.
   */
  enabled(input) {
    return input != null;
  }
};
_AbstractValidatorDirective.ɵfac = function AbstractValidatorDirective_Factory(t) {
  return new (t || _AbstractValidatorDirective)();
};
_AbstractValidatorDirective.ɵdir = ɵɵdefineDirective({
  type: _AbstractValidatorDirective,
  features: [ɵɵNgOnChangesFeature]
});
var AbstractValidatorDirective = _AbstractValidatorDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractValidatorDirective, [{
    type: Directive
  }], null, null);
})();
var MAX_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MaxValidator),
  multi: true
};
var _MaxValidator = class _MaxValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "max";
    this.normalizeInput = (input) => toFloat(input);
    this.createValidator = (max) => maxValidator(max);
  }
};
_MaxValidator.ɵfac = (() => {
  let ɵMaxValidator_BaseFactory;
  return function MaxValidator_Factory(t) {
    return (ɵMaxValidator_BaseFactory || (ɵMaxValidator_BaseFactory = ɵɵgetInheritedFactory(_MaxValidator)))(t || _MaxValidator);
  };
})();
_MaxValidator.ɵdir = ɵɵdefineDirective({
  type: _MaxValidator,
  selectors: [["input", "type", "number", "max", "", "formControlName", ""], ["input", "type", "number", "max", "", "formControl", ""], ["input", "type", "number", "max", "", "ngModel", ""]],
  hostVars: 1,
  hostBindings: function MaxValidator_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("max", ctx._enabled ? ctx.max : null);
    }
  },
  inputs: {
    max: "max"
  },
  features: [ɵɵProvidersFeature([MAX_VALIDATOR]), ɵɵInheritDefinitionFeature]
});
var MaxValidator = _MaxValidator;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaxValidator, [{
    type: Directive,
    args: [{
      selector: "input[type=number][max][formControlName],input[type=number][max][formControl],input[type=number][max][ngModel]",
      providers: [MAX_VALIDATOR],
      host: {
        "[attr.max]": "_enabled ? max : null"
      }
    }]
  }], null, {
    max: [{
      type: Input
    }]
  });
})();
var MIN_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MinValidator),
  multi: true
};
var _MinValidator = class _MinValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "min";
    this.normalizeInput = (input) => toFloat(input);
    this.createValidator = (min) => minValidator(min);
  }
};
_MinValidator.ɵfac = (() => {
  let ɵMinValidator_BaseFactory;
  return function MinValidator_Factory(t) {
    return (ɵMinValidator_BaseFactory || (ɵMinValidator_BaseFactory = ɵɵgetInheritedFactory(_MinValidator)))(t || _MinValidator);
  };
})();
_MinValidator.ɵdir = ɵɵdefineDirective({
  type: _MinValidator,
  selectors: [["input", "type", "number", "min", "", "formControlName", ""], ["input", "type", "number", "min", "", "formControl", ""], ["input", "type", "number", "min", "", "ngModel", ""]],
  hostVars: 1,
  hostBindings: function MinValidator_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("min", ctx._enabled ? ctx.min : null);
    }
  },
  inputs: {
    min: "min"
  },
  features: [ɵɵProvidersFeature([MIN_VALIDATOR]), ɵɵInheritDefinitionFeature]
});
var MinValidator = _MinValidator;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MinValidator, [{
    type: Directive,
    args: [{
      selector: "input[type=number][min][formControlName],input[type=number][min][formControl],input[type=number][min][ngModel]",
      providers: [MIN_VALIDATOR],
      host: {
        "[attr.min]": "_enabled ? min : null"
      }
    }]
  }], null, {
    min: [{
      type: Input
    }]
  });
})();
var REQUIRED_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => RequiredValidator),
  multi: true
};
var CHECKBOX_REQUIRED_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => CheckboxRequiredValidator),
  multi: true
};
var _RequiredValidator = class _RequiredValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "required";
    this.normalizeInput = booleanAttribute;
    this.createValidator = (input) => requiredValidator;
  }
  /** @nodoc */
  enabled(input) {
    return input;
  }
};
_RequiredValidator.ɵfac = (() => {
  let ɵRequiredValidator_BaseFactory;
  return function RequiredValidator_Factory(t) {
    return (ɵRequiredValidator_BaseFactory || (ɵRequiredValidator_BaseFactory = ɵɵgetInheritedFactory(_RequiredValidator)))(t || _RequiredValidator);
  };
})();
_RequiredValidator.ɵdir = ɵɵdefineDirective({
  type: _RequiredValidator,
  selectors: [["", "required", "", "formControlName", "", 3, "type", "checkbox"], ["", "required", "", "formControl", "", 3, "type", "checkbox"], ["", "required", "", "ngModel", "", 3, "type", "checkbox"]],
  hostVars: 1,
  hostBindings: function RequiredValidator_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("required", ctx._enabled ? "" : null);
    }
  },
  inputs: {
    required: "required"
  },
  features: [ɵɵProvidersFeature([REQUIRED_VALIDATOR]), ɵɵInheritDefinitionFeature]
});
var RequiredValidator = _RequiredValidator;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RequiredValidator, [{
    type: Directive,
    args: [{
      selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]",
      providers: [REQUIRED_VALIDATOR],
      host: {
        "[attr.required]": '_enabled ? "" : null'
      }
    }]
  }], null, {
    required: [{
      type: Input
    }]
  });
})();
var _CheckboxRequiredValidator = class _CheckboxRequiredValidator extends RequiredValidator {
  constructor() {
    super(...arguments);
    this.createValidator = (input) => requiredTrueValidator;
  }
};
_CheckboxRequiredValidator.ɵfac = (() => {
  let ɵCheckboxRequiredValidator_BaseFactory;
  return function CheckboxRequiredValidator_Factory(t) {
    return (ɵCheckboxRequiredValidator_BaseFactory || (ɵCheckboxRequiredValidator_BaseFactory = ɵɵgetInheritedFactory(_CheckboxRequiredValidator)))(t || _CheckboxRequiredValidator);
  };
})();
_CheckboxRequiredValidator.ɵdir = ɵɵdefineDirective({
  type: _CheckboxRequiredValidator,
  selectors: [["input", "type", "checkbox", "required", "", "formControlName", ""], ["input", "type", "checkbox", "required", "", "formControl", ""], ["input", "type", "checkbox", "required", "", "ngModel", ""]],
  hostVars: 1,
  hostBindings: function CheckboxRequiredValidator_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("required", ctx._enabled ? "" : null);
    }
  },
  features: [ɵɵProvidersFeature([CHECKBOX_REQUIRED_VALIDATOR]), ɵɵInheritDefinitionFeature]
});
var CheckboxRequiredValidator = _CheckboxRequiredValidator;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckboxRequiredValidator, [{
    type: Directive,
    args: [{
      selector: "input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]",
      providers: [CHECKBOX_REQUIRED_VALIDATOR],
      host: {
        "[attr.required]": '_enabled ? "" : null'
      }
    }]
  }], null, null);
})();
var EMAIL_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => EmailValidator),
  multi: true
};
var _EmailValidator = class _EmailValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "email";
    this.normalizeInput = booleanAttribute;
    this.createValidator = (input) => emailValidator;
  }
  /** @nodoc */
  enabled(input) {
    return input;
  }
};
_EmailValidator.ɵfac = (() => {
  let ɵEmailValidator_BaseFactory;
  return function EmailValidator_Factory(t) {
    return (ɵEmailValidator_BaseFactory || (ɵEmailValidator_BaseFactory = ɵɵgetInheritedFactory(_EmailValidator)))(t || _EmailValidator);
  };
})();
_EmailValidator.ɵdir = ɵɵdefineDirective({
  type: _EmailValidator,
  selectors: [["", "email", "", "formControlName", ""], ["", "email", "", "formControl", ""], ["", "email", "", "ngModel", ""]],
  inputs: {
    email: "email"
  },
  features: [ɵɵProvidersFeature([EMAIL_VALIDATOR]), ɵɵInheritDefinitionFeature]
});
var EmailValidator = _EmailValidator;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmailValidator, [{
    type: Directive,
    args: [{
      selector: "[email][formControlName],[email][formControl],[email][ngModel]",
      providers: [EMAIL_VALIDATOR]
    }]
  }], null, {
    email: [{
      type: Input
    }]
  });
})();
var MIN_LENGTH_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MinLengthValidator),
  multi: true
};
var _MinLengthValidator = class _MinLengthValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "minlength";
    this.normalizeInput = (input) => toInteger(input);
    this.createValidator = (minlength) => minLengthValidator(minlength);
  }
};
_MinLengthValidator.ɵfac = (() => {
  let ɵMinLengthValidator_BaseFactory;
  return function MinLengthValidator_Factory(t) {
    return (ɵMinLengthValidator_BaseFactory || (ɵMinLengthValidator_BaseFactory = ɵɵgetInheritedFactory(_MinLengthValidator)))(t || _MinLengthValidator);
  };
})();
_MinLengthValidator.ɵdir = ɵɵdefineDirective({
  type: _MinLengthValidator,
  selectors: [["", "minlength", "", "formControlName", ""], ["", "minlength", "", "formControl", ""], ["", "minlength", "", "ngModel", ""]],
  hostVars: 1,
  hostBindings: function MinLengthValidator_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("minlength", ctx._enabled ? ctx.minlength : null);
    }
  },
  inputs: {
    minlength: "minlength"
  },
  features: [ɵɵProvidersFeature([MIN_LENGTH_VALIDATOR]), ɵɵInheritDefinitionFeature]
});
var MinLengthValidator = _MinLengthValidator;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MinLengthValidator, [{
    type: Directive,
    args: [{
      selector: "[minlength][formControlName],[minlength][formControl],[minlength][ngModel]",
      providers: [MIN_LENGTH_VALIDATOR],
      host: {
        "[attr.minlength]": "_enabled ? minlength : null"
      }
    }]
  }], null, {
    minlength: [{
      type: Input
    }]
  });
})();
var MAX_LENGTH_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MaxLengthValidator),
  multi: true
};
var _MaxLengthValidator = class _MaxLengthValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "maxlength";
    this.normalizeInput = (input) => toInteger(input);
    this.createValidator = (maxlength) => maxLengthValidator(maxlength);
  }
};
_MaxLengthValidator.ɵfac = (() => {
  let ɵMaxLengthValidator_BaseFactory;
  return function MaxLengthValidator_Factory(t) {
    return (ɵMaxLengthValidator_BaseFactory || (ɵMaxLengthValidator_BaseFactory = ɵɵgetInheritedFactory(_MaxLengthValidator)))(t || _MaxLengthValidator);
  };
})();
_MaxLengthValidator.ɵdir = ɵɵdefineDirective({
  type: _MaxLengthValidator,
  selectors: [["", "maxlength", "", "formControlName", ""], ["", "maxlength", "", "formControl", ""], ["", "maxlength", "", "ngModel", ""]],
  hostVars: 1,
  hostBindings: function MaxLengthValidator_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("maxlength", ctx._enabled ? ctx.maxlength : null);
    }
  },
  inputs: {
    maxlength: "maxlength"
  },
  features: [ɵɵProvidersFeature([MAX_LENGTH_VALIDATOR]), ɵɵInheritDefinitionFeature]
});
var MaxLengthValidator = _MaxLengthValidator;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaxLengthValidator, [{
    type: Directive,
    args: [{
      selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]",
      providers: [MAX_LENGTH_VALIDATOR],
      host: {
        "[attr.maxlength]": "_enabled ? maxlength : null"
      }
    }]
  }], null, {
    maxlength: [{
      type: Input
    }]
  });
})();
var PATTERN_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => PatternValidator),
  multi: true
};
var _PatternValidator = class _PatternValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "pattern";
    this.normalizeInput = (input) => input;
    this.createValidator = (input) => patternValidator(input);
  }
};
_PatternValidator.ɵfac = (() => {
  let ɵPatternValidator_BaseFactory;
  return function PatternValidator_Factory(t) {
    return (ɵPatternValidator_BaseFactory || (ɵPatternValidator_BaseFactory = ɵɵgetInheritedFactory(_PatternValidator)))(t || _PatternValidator);
  };
})();
_PatternValidator.ɵdir = ɵɵdefineDirective({
  type: _PatternValidator,
  selectors: [["", "pattern", "", "formControlName", ""], ["", "pattern", "", "formControl", ""], ["", "pattern", "", "ngModel", ""]],
  hostVars: 1,
  hostBindings: function PatternValidator_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("pattern", ctx._enabled ? ctx.pattern : null);
    }
  },
  inputs: {
    pattern: "pattern"
  },
  features: [ɵɵProvidersFeature([PATTERN_VALIDATOR]), ɵɵInheritDefinitionFeature]
});
var PatternValidator = _PatternValidator;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PatternValidator, [{
    type: Directive,
    args: [{
      selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]",
      providers: [PATTERN_VALIDATOR],
      host: {
        "[attr.pattern]": "_enabled ? pattern : null"
      }
    }]
  }], null, {
    pattern: [{
      type: Input
    }]
  });
})();
var SHARED_FORM_DIRECTIVES = [ɵNgNoValidate, NgSelectOption, ɵNgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator, MinValidator, MaxValidator];
var TEMPLATE_DRIVEN_DIRECTIVES = [NgModel, NgModelGroup, NgForm];
var REACTIVE_DRIVEN_DIRECTIVES = [FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName];
var _ɵInternalFormsSharedModule = class _ɵInternalFormsSharedModule {
};
_ɵInternalFormsSharedModule.ɵfac = function ɵInternalFormsSharedModule_Factory(t) {
  return new (t || _ɵInternalFormsSharedModule)();
};
_ɵInternalFormsSharedModule.ɵmod = ɵɵdefineNgModule({
  type: _ɵInternalFormsSharedModule,
  declarations: [ɵNgNoValidate, NgSelectOption, ɵNgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator, MinValidator, MaxValidator],
  imports: [RadioControlRegistryModule],
  exports: [ɵNgNoValidate, NgSelectOption, ɵNgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator, MinValidator, MaxValidator]
});
_ɵInternalFormsSharedModule.ɵinj = ɵɵdefineInjector({
  imports: [RadioControlRegistryModule]
});
var ɵInternalFormsSharedModule = _ɵInternalFormsSharedModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ɵInternalFormsSharedModule, [{
    type: NgModule,
    args: [{
      declarations: SHARED_FORM_DIRECTIVES,
      imports: [RadioControlRegistryModule],
      exports: SHARED_FORM_DIRECTIVES
    }]
  }], null, null);
})();
var FormArray = class extends AbstractControl {
  /**
   * Creates a new `FormArray` instance.
   *
   * @param controls An array of child controls. Each child control is given an index
   * where it is registered.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of
   * such functions, or an `AbstractControlOptions` object that contains validation functions
   * and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator functions
   *
   */
  constructor(controls, validatorOrOpts, asyncValidator) {
    super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    this.controls = controls;
    this._initObservables();
    this._setUpdateStrategy(validatorOrOpts);
    this._setUpControls();
    this.updateValueAndValidity({
      onlySelf: true,
      // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
      // `VALID` or `INVALID`.
      // The status should be broadcasted via the `statusChanges` observable, so we set `emitEvent`
      // to `true` to allow that during the control creation process.
      emitEvent: !!this.asyncValidator
    });
  }
  /**
   * Get the `AbstractControl` at the given `index` in the array.
   *
   * @param index Index in the array to retrieve the control. If `index` is negative, it will wrap
   *     around from the back, and if index is greatly negative (less than `-length`), the result is
   * undefined. This behavior is the same as `Array.at(index)`.
   */
  at(index) {
    return this.controls[this._adjustIndex(index)];
  }
  /**
   * Insert a new `AbstractControl` at the end of the array.
   *
   * @param control Form control to be inserted
   * @param options Specifies whether this FormArray instance should emit events after a new
   *     control is added.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * inserted. When false, no events are emitted.
   */
  push(control, options = {}) {
    this.controls.push(control);
    this._registerControl(control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  /**
   * Insert a new `AbstractControl` at the given `index` in the array.
   *
   * @param index Index in the array to insert the control. If `index` is negative, wraps around
   *     from the back. If `index` is greatly negative (less than `-length`), prepends to the array.
   * This behavior is the same as `Array.splice(index, 0, control)`.
   * @param control Form control to be inserted
   * @param options Specifies whether this FormArray instance should emit events after a new
   *     control is inserted.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * inserted. When false, no events are emitted.
   */
  insert(index, control, options = {}) {
    this.controls.splice(index, 0, control);
    this._registerControl(control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
  }
  /**
   * Remove the control at the given `index` in the array.
   *
   * @param index Index in the array to remove the control.  If `index` is negative, wraps around
   *     from the back. If `index` is greatly negative (less than `-length`), removes the first
   *     element. This behavior is the same as `Array.splice(index, 1)`.
   * @param options Specifies whether this FormArray instance should emit events after a
   *     control is removed.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * removed. When false, no events are emitted.
   */
  removeAt(index, options = {}) {
    let adjustedIndex = this._adjustIndex(index);
    if (adjustedIndex < 0)
      adjustedIndex = 0;
    if (this.controls[adjustedIndex])
      this.controls[adjustedIndex]._registerOnCollectionChange(() => {
      });
    this.controls.splice(adjustedIndex, 1);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
  }
  /**
   * Replace an existing control.
   *
   * @param index Index in the array to replace the control. If `index` is negative, wraps around
   *     from the back. If `index` is greatly negative (less than `-length`), replaces the first
   *     element. This behavior is the same as `Array.splice(index, 1, control)`.
   * @param control The `AbstractControl` control to replace the existing control
   * @param options Specifies whether this FormArray instance should emit events after an
   *     existing control is replaced with a new one.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * replaced with a new one. When false, no events are emitted.
   */
  setControl(index, control, options = {}) {
    let adjustedIndex = this._adjustIndex(index);
    if (adjustedIndex < 0)
      adjustedIndex = 0;
    if (this.controls[adjustedIndex])
      this.controls[adjustedIndex]._registerOnCollectionChange(() => {
      });
    this.controls.splice(adjustedIndex, 1);
    if (control) {
      this.controls.splice(adjustedIndex, 0, control);
      this._registerControl(control);
    }
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  /**
   * Length of the control array.
   */
  get length() {
    return this.controls.length;
  }
  /**
   * Sets the value of the `FormArray`. It accepts an array that matches
   * the structure of the control.
   *
   * This method performs strict checks, and throws an error if you try
   * to set the value of a control that doesn't exist or if you exclude the
   * value of a control.
   *
   * @usageNotes
   * ### Set the values for the controls in the form array
   *
   * ```
   * const arr = new FormArray([
   *   new FormControl(),
   *   new FormControl()
   * ]);
   * console.log(arr.value);   // [null, null]
   *
   * arr.setValue(['Nancy', 'Drew']);
   * console.log(arr.value);   // ['Nancy', 'Drew']
   * ```
   *
   * @param value Array of values for the controls
   * @param options Configure options that determine how the control propagates changes and
   * emits events after the value changes
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
   * is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control value is updated.
   * When false, no events are emitted.
   * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   */
  setValue(value, options = {}) {
    assertAllValuesPresent(this, false, value);
    value.forEach((newValue, index) => {
      assertControlPresent(this, false, index);
      this.at(index).setValue(newValue, {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this.updateValueAndValidity(options);
  }
  /**
   * Patches the value of the `FormArray`. It accepts an array that matches the
   * structure of the control, and does its best to match the values to the correct
   * controls in the group.
   *
   * It accepts both super-sets and sub-sets of the array without throwing an error.
   *
   * @usageNotes
   * ### Patch the values for controls in a form array
   *
   * ```
   * const arr = new FormArray([
   *    new FormControl(),
   *    new FormControl()
   * ]);
   * console.log(arr.value);   // [null, null]
   *
   * arr.patchValue(['Nancy']);
   * console.log(arr.value);   // ['Nancy', null]
   * ```
   *
   * @param value Array of latest values for the controls
   * @param options Configure options that determine how the control propagates changes and
   * emits events after the value changes
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
   * is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control
   * value is updated. When false, no events are emitted. The configuration options are passed to
   * the {@link AbstractControl#updateValueAndValidity updateValueAndValidity} method.
   */
  patchValue(value, options = {}) {
    if (value == null)
      return;
    value.forEach((newValue, index) => {
      if (this.at(index)) {
        this.at(index).patchValue(newValue, {
          onlySelf: true,
          emitEvent: options.emitEvent
        });
      }
    });
    this.updateValueAndValidity(options);
  }
  /**
   * Resets the `FormArray` and all descendants are marked `pristine` and `untouched`, and the
   * value of all descendants to null or null maps.
   *
   * You reset to a specific form state by passing in an array of states
   * that matches the structure of the control. The state is a standalone value
   * or a form state object with both a value and a disabled status.
   *
   * @usageNotes
   * ### Reset the values in a form array
   *
   * ```ts
   * const arr = new FormArray([
   *    new FormControl(),
   *    new FormControl()
   * ]);
   * arr.reset(['name', 'last name']);
   *
   * console.log(arr.value);  // ['name', 'last name']
   * ```
   *
   * ### Reset the values in a form array and the disabled status for the first control
   *
   * ```
   * arr.reset([
   *   {value: 'name', disabled: true},
   *   'last'
   * ]);
   *
   * console.log(arr.value);  // ['last']
   * console.log(arr.at(0).status);  // 'DISABLED'
   * ```
   *
   * @param value Array of values for the controls
   * @param options Configure options that determine how the control propagates changes and
   * emits events after the value changes
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
   * is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control is reset.
   * When false, no events are emitted.
   * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   */
  reset(value = [], options = {}) {
    this._forEachChild((control, index) => {
      control.reset(value[index], {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this._updatePristine(options);
    this._updateTouched(options);
    this.updateValueAndValidity(options);
  }
  /**
   * The aggregate value of the array, including any disabled controls.
   *
   * Reports all values regardless of disabled status.
   */
  getRawValue() {
    return this.controls.map((control) => control.getRawValue());
  }
  /**
   * Remove all controls in the `FormArray`.
   *
   * @param options Specifies whether this FormArray instance should emit events after all
   *     controls are removed.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when all controls
   * in this FormArray instance are removed. When false, no events are emitted.
   *
   * @usageNotes
   * ### Remove all elements from a FormArray
   *
   * ```ts
   * const arr = new FormArray([
   *    new FormControl(),
   *    new FormControl()
   * ]);
   * console.log(arr.length);  // 2
   *
   * arr.clear();
   * console.log(arr.length);  // 0
   * ```
   *
   * It's a simpler and more efficient alternative to removing all elements one by one:
   *
   * ```ts
   * const arr = new FormArray([
   *    new FormControl(),
   *    new FormControl()
   * ]);
   *
   * while (arr.length) {
   *    arr.removeAt(0);
   * }
   * ```
   */
  clear(options = {}) {
    if (this.controls.length < 1)
      return;
    this._forEachChild((control) => control._registerOnCollectionChange(() => {
    }));
    this.controls.splice(0);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
  }
  /**
   * Adjusts a negative index by summing it with the length of the array. For very negative
   * indices, the result may remain negative.
   * @internal
   */
  _adjustIndex(index) {
    return index < 0 ? index + this.length : index;
  }
  /** @internal */
  _syncPendingControls() {
    let subtreeUpdated = this.controls.reduce((updated, child) => {
      return child._syncPendingControls() ? true : updated;
    }, false);
    if (subtreeUpdated)
      this.updateValueAndValidity({
        onlySelf: true
      });
    return subtreeUpdated;
  }
  /** @internal */
  _forEachChild(cb) {
    this.controls.forEach((control, index) => {
      cb(control, index);
    });
  }
  /** @internal */
  _updateValue() {
    this.value = this.controls.filter((control) => control.enabled || this.disabled).map((control) => control.value);
  }
  /** @internal */
  _anyControls(condition) {
    return this.controls.some((control) => control.enabled && condition(control));
  }
  /** @internal */
  _setUpControls() {
    this._forEachChild((control) => this._registerControl(control));
  }
  /** @internal */
  _allControlsDisabled() {
    for (const control of this.controls) {
      if (control.enabled)
        return false;
    }
    return this.controls.length > 0 || this.disabled;
  }
  _registerControl(control) {
    control.setParent(this);
    control._registerOnCollectionChange(this._onCollectionChange);
  }
  /** @internal */
  _find(name) {
    return this.at(name) ?? null;
  }
};
function isAbstractControlOptions(options) {
  return !!options && (options.asyncValidators !== void 0 || options.validators !== void 0 || options.updateOn !== void 0);
}
var _FormBuilder = class _FormBuilder {
  constructor() {
    this.useNonNullable = false;
  }
  /**
   * @description
   * Returns a FormBuilder in which automatically constructed `FormControl` elements
   * have `{nonNullable: true}` and are non-nullable.
   *
   * **Constructing non-nullable controls**
   *
   * When constructing a control, it will be non-nullable, and will reset to its initial value.
   *
   * ```ts
   * let nnfb = new FormBuilder().nonNullable;
   * let name = nnfb.control('Alex'); // FormControl<string>
   * name.reset();
   * console.log(name); // 'Alex'
   * ```
   *
   * **Constructing non-nullable groups or arrays**
   *
   * When constructing a group or array, all automatically created inner controls will be
   * non-nullable, and will reset to their initial values.
   *
   * ```ts
   * let nnfb = new FormBuilder().nonNullable;
   * let name = nnfb.group({who: 'Alex'}); // FormGroup<{who: FormControl<string>}>
   * name.reset();
   * console.log(name); // {who: 'Alex'}
   * ```
   * **Constructing *nullable* fields on groups or arrays**
   *
   * It is still possible to have a nullable field. In particular, any `FormControl` which is
   * *already* constructed will not be altered. For example:
   *
   * ```ts
   * let nnfb = new FormBuilder().nonNullable;
   * // FormGroup<{who: FormControl<string|null>}>
   * let name = nnfb.group({who: new FormControl('Alex')});
   * name.reset(); console.log(name); // {who: null}
   * ```
   *
   * Because the inner control is constructed explicitly by the caller, the builder has
   * no control over how it is created, and cannot exclude the `null`.
   */
  get nonNullable() {
    const nnfb = new _FormBuilder();
    nnfb.useNonNullable = true;
    return nnfb;
  }
  group(controls, options = null) {
    const reducedControls = this._reduceControls(controls);
    let newOptions = {};
    if (isAbstractControlOptions(options)) {
      newOptions = options;
    } else if (options !== null) {
      newOptions.validators = options.validator;
      newOptions.asyncValidators = options.asyncValidator;
    }
    return new FormGroup(reducedControls, newOptions);
  }
  /**
   * @description
   * Constructs a new `FormRecord` instance. Accepts a single generic argument, which is an object
   * containing all the keys and corresponding inner control types.
   *
   * @param controls A collection of child controls. The key for each child is the name
   * under which it is registered.
   *
   * @param options Configuration options object for the `FormRecord`. The object should have the
   * `AbstractControlOptions` type and might contain the following fields:
   * * `validators`: A synchronous validator function, or an array of validator functions.
   * * `asyncValidators`: A single async validator or array of async validator functions.
   * * `updateOn`: The event upon which the control should be updated (options: 'change' | 'blur'
   * | submit').
   */
  record(controls, options = null) {
    const reducedControls = this._reduceControls(controls);
    return new FormRecord(reducedControls, options);
  }
  /**
   * @description
   * Constructs a new `FormControl` with the given state, validators and options. Sets
   * `{nonNullable: true}` in the options to get a non-nullable control. Otherwise, the
   * control will be nullable. Accepts a single generic argument, which is the type  of the
   * control's value.
   *
   * @param formState Initializes the control with an initial state value, or
   * with an object that contains both a value and a disabled status.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of
   * such functions, or a `FormControlOptions` object that contains
   * validation functions and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator
   * functions.
   *
   * @usageNotes
   *
   * ### Initialize a control as disabled
   *
   * The following example returns a control with an initial value in a disabled state.
   *
   * <code-example path="forms/ts/formBuilder/form_builder_example.ts" region="disabled-control">
   * </code-example>
   */
  control(formState, validatorOrOpts, asyncValidator) {
    let newOptions = {};
    if (!this.useNonNullable) {
      return new FormControl(formState, validatorOrOpts, asyncValidator);
    }
    if (isAbstractControlOptions(validatorOrOpts)) {
      newOptions = validatorOrOpts;
    } else {
      newOptions.validators = validatorOrOpts;
      newOptions.asyncValidators = asyncValidator;
    }
    return new FormControl(formState, __spreadProps(__spreadValues({}, newOptions), {
      nonNullable: true
    }));
  }
  /**
   * Constructs a new `FormArray` from the given array of configurations,
   * validators and options. Accepts a single generic argument, which is the type of each control
   * inside the array.
   *
   * @param controls An array of child controls or control configs. Each child control is given an
   *     index when it is registered.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of such functions, or an
   *     `AbstractControlOptions` object that contains
   * validation functions and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator functions.
   */
  array(controls, validatorOrOpts, asyncValidator) {
    const createdControls = controls.map((c) => this._createControl(c));
    return new FormArray(createdControls, validatorOrOpts, asyncValidator);
  }
  /** @internal */
  _reduceControls(controls) {
    const createdControls = {};
    Object.keys(controls).forEach((controlName) => {
      createdControls[controlName] = this._createControl(controls[controlName]);
    });
    return createdControls;
  }
  /** @internal */
  _createControl(controls) {
    if (controls instanceof FormControl) {
      return controls;
    } else if (controls instanceof AbstractControl) {
      return controls;
    } else if (Array.isArray(controls)) {
      const value = controls[0];
      const validator = controls.length > 1 ? controls[1] : null;
      const asyncValidator = controls.length > 2 ? controls[2] : null;
      return this.control(value, validator, asyncValidator);
    } else {
      return this.control(controls);
    }
  }
};
_FormBuilder.ɵfac = function FormBuilder_Factory(t) {
  return new (t || _FormBuilder)();
};
_FormBuilder.ɵprov = ɵɵdefineInjectable({
  token: _FormBuilder,
  factory: _FormBuilder.ɵfac,
  providedIn: "root"
});
var FormBuilder = _FormBuilder;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _NonNullableFormBuilder = class _NonNullableFormBuilder {
};
_NonNullableFormBuilder.ɵfac = function NonNullableFormBuilder_Factory(t) {
  return new (t || _NonNullableFormBuilder)();
};
_NonNullableFormBuilder.ɵprov = ɵɵdefineInjectable({
  token: _NonNullableFormBuilder,
  factory: () => (() => inject(FormBuilder).nonNullable)(),
  providedIn: "root"
});
var NonNullableFormBuilder = _NonNullableFormBuilder;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NonNullableFormBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => inject(FormBuilder).nonNullable
    }]
  }], null, null);
})();
var _UntypedFormBuilder = class _UntypedFormBuilder extends FormBuilder {
  group(controlsConfig, options = null) {
    return super.group(controlsConfig, options);
  }
  /**
   * Like `FormBuilder#control`, except the resulting control is untyped.
   */
  control(formState, validatorOrOpts, asyncValidator) {
    return super.control(formState, validatorOrOpts, asyncValidator);
  }
  /**
   * Like `FormBuilder#array`, except the resulting array is untyped.
   */
  array(controlsConfig, validatorOrOpts, asyncValidator) {
    return super.array(controlsConfig, validatorOrOpts, asyncValidator);
  }
};
_UntypedFormBuilder.ɵfac = (() => {
  let ɵUntypedFormBuilder_BaseFactory;
  return function UntypedFormBuilder_Factory(t) {
    return (ɵUntypedFormBuilder_BaseFactory || (ɵUntypedFormBuilder_BaseFactory = ɵɵgetInheritedFactory(_UntypedFormBuilder)))(t || _UntypedFormBuilder);
  };
})();
_UntypedFormBuilder.ɵprov = ɵɵdefineInjectable({
  token: _UntypedFormBuilder,
  factory: _UntypedFormBuilder.ɵfac,
  providedIn: "root"
});
var UntypedFormBuilder = _UntypedFormBuilder;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UntypedFormBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var VERSION = new Version("17.0.3");
var _FormsModule = class _FormsModule {
  /**
   * @description
   * Provides options for configuring the forms module.
   *
   * @param opts An object of configuration options
   * * `callSetDisabledState` Configures whether to `always` call `setDisabledState`, which is more
   * correct, or to only call it `whenDisabled`, which is the legacy behavior.
   */
  static withConfig(opts) {
    return {
      ngModule: _FormsModule,
      providers: [{
        provide: CALL_SET_DISABLED_STATE,
        useValue: opts.callSetDisabledState ?? setDisabledStateDefault
      }]
    };
  }
};
_FormsModule.ɵfac = function FormsModule_Factory(t) {
  return new (t || _FormsModule)();
};
_FormsModule.ɵmod = ɵɵdefineNgModule({
  type: _FormsModule,
  declarations: [NgModel, NgModelGroup, NgForm],
  exports: [ɵInternalFormsSharedModule, NgModel, NgModelGroup, NgForm]
});
_FormsModule.ɵinj = ɵɵdefineInjector({
  imports: [ɵInternalFormsSharedModule]
});
var FormsModule = _FormsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormsModule, [{
    type: NgModule,
    args: [{
      declarations: TEMPLATE_DRIVEN_DIRECTIVES,
      exports: [ɵInternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
    }]
  }], null, null);
})();
var _ReactiveFormsModule = class _ReactiveFormsModule {
  /**
   * @description
   * Provides options for configuring the reactive forms module.
   *
   * @param opts An object of configuration options
   * * `warnOnNgModelWithFormControl` Configures when to emit a warning when an `ngModel`
   * binding is used with reactive form directives.
   * * `callSetDisabledState` Configures whether to `always` call `setDisabledState`, which is more
   * correct, or to only call it `whenDisabled`, which is the legacy behavior.
   */
  static withConfig(opts) {
    return {
      ngModule: _ReactiveFormsModule,
      providers: [{
        provide: NG_MODEL_WITH_FORM_CONTROL_WARNING,
        useValue: opts.warnOnNgModelWithFormControl ?? "always"
      }, {
        provide: CALL_SET_DISABLED_STATE,
        useValue: opts.callSetDisabledState ?? setDisabledStateDefault
      }]
    };
  }
};
_ReactiveFormsModule.ɵfac = function ReactiveFormsModule_Factory(t) {
  return new (t || _ReactiveFormsModule)();
};
_ReactiveFormsModule.ɵmod = ɵɵdefineNgModule({
  type: _ReactiveFormsModule,
  declarations: [FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName],
  exports: [ɵInternalFormsSharedModule, FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName]
});
_ReactiveFormsModule.ɵinj = ɵɵdefineInjector({
  imports: [ɵInternalFormsSharedModule]
});
var ReactiveFormsModule = _ReactiveFormsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReactiveFormsModule, [{
    type: NgModule,
    args: [{
      declarations: [REACTIVE_DRIVEN_DIRECTIVES],
      exports: [ɵInternalFormsSharedModule, REACTIVE_DRIVEN_DIRECTIVES]
    }]
  }], null, null);
})();

// node_modules/survey-angular-ui/fesm2015/survey-angular-ui.js
var _c0 = ["template"];
var _c1 = ["actionContent"];
function ActionComponent_ng_template_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "div", 5);
    ɵɵelementContainerEnd();
  }
}
function ActionComponent_ng_template_0_ng_template_3_Template(rf, ctx) {
}
var _c2 = (a0) => ({
  model: a0
});
var _c3 = (a0, a1) => ({
  name: a0,
  data: a1,
  default: "sv-action-bar-item"
});
function ActionComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1)(1, "div", 2);
    ɵɵtemplate(2, ActionComponent_ng_template_0_ng_container_2_Template, 2, 0, "ng-container", 3)(3, ActionComponent_ng_template_0_ng_template_3_Template, 0, 0, "ng-template", 4);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.model.getActionRootCss());
    ɵɵproperty("id", ctx_r0.id);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r0.model.needSeparator);
    ɵɵadvance(1);
    ɵɵproperty("component", ɵɵpureFunction2(7, _c3, ctx_r0.model.component, ɵɵpureFunction1(5, _c2, ctx_r0.model)));
  }
}
var _c4 = ["container"];
function ActionBarComponent_ng_template_0_div_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "sv-ng-action", 5);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const action_r5 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵproperty("model", action_r5);
  }
}
function ActionBarComponent_ng_template_0_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 2, 3);
    ɵɵlistener("click", function ActionBarComponent_ng_template_0_div_0_Template_div_click_0_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r6 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r6.onClick($event));
    });
    ɵɵtemplate(2, ActionBarComponent_ng_template_0_div_0_ng_container_2_Template, 2, 1, "ng-container", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r2.model.getRootCss());
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r2.model.renderedActions);
  }
}
function ActionBarComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ActionBarComponent_ng_template_0_div_0_Template, 3, 3, "div", 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r0.model.hasActions);
  }
}
function PopupBaseContainerComponent_ng_container_3_ng_template_1_Template(rf, ctx) {
}
var _c5 = (a0, a1) => ({
  name: a0,
  data: a1
});
function PopupBaseContainerComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PopupBaseContainerComponent_ng_container_3_ng_template_1_Template, 0, 0, "ng-template", 8);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("component", ɵɵpureFunction2(3, _c5, ctx_r0.model.popupHeaderTemplate, ɵɵpureFunction1(1, _c2, ctx_r0.model)));
  }
}
function PopupBaseContainerComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 10);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r1.model.title);
  }
}
function PopupBaseContainerComponent_ng_template_8_Template(rf, ctx) {
}
function PopupBaseContainerComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 11);
    ɵɵelement(1, "sv-ng-action-bar", 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("model", ctx_r3.model.footerToolbar);
  }
}
var _c6 = (a0, a1, a2, a3, a4) => ({
  left: a0,
  top: a1,
  height: a2,
  minWidth: a3,
  width: a4
});
function DynamicHeadComponent_ng_template_0_h1_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function DynamicHeadComponent_ng_template_0_h1_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "h1");
    ɵɵtemplate(1, DynamicHeadComponent_ng_template_0_h1_1_ng_container_1_Template, 1, 0, "ng-container", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵnextContext();
    const _r9 = ɵɵreference(8);
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMap(ctx_r2.element.cssTitle);
    ɵɵattribute("id", ctx_r2.element.ariaTitleId)("tabindex", ctx_r2.element.titleTabIndex)("aria-expanded", ctx_r2.element.titleAriaExpanded)("role", ctx_r2.element.titleAriaRole)("aria-label", ctx_r2.ariaLabel);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r9);
  }
}
function DynamicHeadComponent_ng_template_0_h2_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function DynamicHeadComponent_ng_template_0_h2_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "h2");
    ɵɵtemplate(1, DynamicHeadComponent_ng_template_0_h2_2_ng_container_1_Template, 1, 0, "ng-container", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵnextContext();
    const _r9 = ɵɵreference(8);
    const ctx_r3 = ɵɵnextContext();
    ɵɵclassMap(ctx_r3.element.cssTitle);
    ɵɵattribute("id", ctx_r3.element.ariaTitleId)("tabindex", ctx_r3.element.titleTabIndex)("aria-expanded", ctx_r3.element.titleAriaExpanded)("role", ctx_r3.element.titleAriaRole)("aria-label", ctx_r3.ariaLabel);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r9);
  }
}
function DynamicHeadComponent_ng_template_0_h3_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function DynamicHeadComponent_ng_template_0_h3_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "h3");
    ɵɵtemplate(1, DynamicHeadComponent_ng_template_0_h3_3_ng_container_1_Template, 1, 0, "ng-container", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵnextContext();
    const _r9 = ɵɵreference(8);
    const ctx_r4 = ɵɵnextContext();
    ɵɵclassMap(ctx_r4.element.cssTitle);
    ɵɵattribute("id", ctx_r4.element.ariaTitleId)("tabindex", ctx_r4.element.titleTabIndex)("aria-expanded", ctx_r4.element.titleAriaExpanded)("role", ctx_r4.element.titleAriaRole)("aria-label", ctx_r4.ariaLabel);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r9);
  }
}
function DynamicHeadComponent_ng_template_0_h4_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function DynamicHeadComponent_ng_template_0_h4_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "h4");
    ɵɵtemplate(1, DynamicHeadComponent_ng_template_0_h4_4_ng_container_1_Template, 1, 0, "ng-container", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵnextContext();
    const _r9 = ɵɵreference(8);
    const ctx_r5 = ɵɵnextContext();
    ɵɵclassMap(ctx_r5.element.cssTitle);
    ɵɵattribute("id", ctx_r5.element.ariaTitleId)("tabindex", ctx_r5.element.titleTabIndex)("aria-expanded", ctx_r5.element.titleAriaExpanded)("role", ctx_r5.element.titleAriaRole)("aria-label", ctx_r5.ariaLabel);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r9);
  }
}
function DynamicHeadComponent_ng_template_0_h5_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function DynamicHeadComponent_ng_template_0_h5_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "h5");
    ɵɵtemplate(1, DynamicHeadComponent_ng_template_0_h5_5_ng_container_1_Template, 1, 0, "ng-container", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵnextContext();
    const _r9 = ɵɵreference(8);
    const ctx_r6 = ɵɵnextContext();
    ɵɵclassMap(ctx_r6.element.cssTitle);
    ɵɵattribute("id", ctx_r6.element.ariaTitleId)("tabindex", ctx_r6.element.titleTabIndex)("aria-expanded", ctx_r6.element.titleAriaExpanded)("role", ctx_r6.element.titleAriaRole)("aria-label", ctx_r6.ariaLabel);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r9);
  }
}
function DynamicHeadComponent_ng_template_0_h6_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function DynamicHeadComponent_ng_template_0_h6_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "h6");
    ɵɵtemplate(1, DynamicHeadComponent_ng_template_0_h6_6_ng_container_1_Template, 1, 0, "ng-container", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵnextContext();
    const _r9 = ɵɵreference(8);
    const ctx_r7 = ɵɵnextContext();
    ɵɵclassMap(ctx_r7.element.cssTitle);
    ɵɵattribute("id", ctx_r7.element.ariaTitleId)("tabindex", ctx_r7.element.titleTabIndex)("aria-expanded", ctx_r7.element.titleAriaExpanded)("role", ctx_r7.element.titleAriaRole)("aria-label", ctx_r7.ariaLabel);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r9);
  }
}
function DynamicHeadComponent_ng_template_0_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
  }
}
function DynamicHeadComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0, 1);
    ɵɵtemplate(1, DynamicHeadComponent_ng_template_0_h1_1_Template, 2, 8, "h1", 2)(2, DynamicHeadComponent_ng_template_0_h2_2_Template, 2, 8, "h2", 2)(3, DynamicHeadComponent_ng_template_0_h3_3_Template, 2, 8, "h3", 2)(4, DynamicHeadComponent_ng_template_0_h4_4_Template, 2, 8, "h4", 2)(5, DynamicHeadComponent_ng_template_0_h5_5_Template, 2, 8, "h5", 2)(6, DynamicHeadComponent_ng_template_0_h6_6_Template, 2, 8, "h6", 2);
    ɵɵelementContainerEnd();
    ɵɵtemplate(7, DynamicHeadComponent_ng_template_0_ng_template_7_Template, 1, 0, "ng-template", null, 3, ɵɵtemplateRefExtractor);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngSwitch", ctx_r0.tagName);
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "h1");
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "h2");
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "h3");
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "h4");
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "h5");
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "h6");
  }
}
var _c7 = ["*"];
function SurveyStringComponent_ng_template_0_Template(rf, ctx) {
}
function ElementTitleActionsComponent_ng_template_0_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function ElementTitleActionsComponent_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ElementTitleActionsComponent_ng_template_0_ng_container_0_ng_container_1_Template, 1, 0, "ng-container", 3);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵnextContext();
    const _r5 = ɵɵreference(3);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r5);
  }
}
function ElementTitleActionsComponent_ng_template_0_ng_container_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function ElementTitleActionsComponent_ng_template_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 4)(2, "span", 5);
    ɵɵtemplate(3, ElementTitleActionsComponent_ng_template_0_ng_container_1_ng_container_3_Template, 1, 0, "ng-container", 3);
    ɵɵelementEnd();
    ɵɵelement(4, "sv-ng-action-bar", 6);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵnextContext();
    const _r5 = ɵɵreference(3);
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵproperty("ngTemplateOutlet", _r5);
    ɵɵadvance(1);
    ɵɵproperty("model", ctx_r3.element.getTitleToolbar());
  }
}
function ElementTitleActionsComponent_ng_template_0_ng_template_2_sv_ng_string_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "sv-ng-string", 6);
  }
  if (rf & 2) {
    const ctx_r8 = ɵɵnextContext(3);
    ɵɵproperty("model", ctx_r8.element.locTitle);
  }
}
function ElementTitleActionsComponent_ng_template_0_ng_template_2_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r10 = ɵɵnextContext(4);
    ɵɵclassMap(ctx_r10.element.cssClasses.requiredText);
    ɵɵattribute("aria-hidden", true);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r10.element.requiredText);
  }
}
function ElementTitleActionsComponent_ng_template_0_ng_template_2_ng_container_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 10);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r11 = ɵɵnextContext(4);
    ɵɵclassMap(ctx_r11.element.cssTitleNumber);
    ɵɵattribute("aria-hidden", true);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r11.element.no);
  }
}
function ElementTitleActionsComponent_ng_template_0_ng_template_2_ng_container_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1, " ");
    ɵɵelementEnd();
  }
}
function ElementTitleActionsComponent_ng_template_0_ng_template_2_ng_container_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r13 = ɵɵnextContext(4);
    ɵɵclassMap(ctx_r13.element.cssClasses.requiredText);
    ɵɵattribute("aria-hidden", true);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r13.element.requiredText);
  }
}
function ElementTitleActionsComponent_ng_template_0_ng_template_2_ng_container_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1, " ");
    ɵɵelementEnd();
  }
}
function ElementTitleActionsComponent_ng_template_0_ng_template_2_ng_container_1_span_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1, " ");
    ɵɵelementEnd();
  }
}
function ElementTitleActionsComponent_ng_template_0_ng_template_2_ng_container_1_span_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r16 = ɵɵnextContext(4);
    ɵɵclassMap(ctx_r16.element.cssClasses.requiredText);
    ɵɵattribute("aria-hidden", true);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r16.element.requiredText);
  }
}
function ElementTitleActionsComponent_ng_template_0_ng_template_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ElementTitleActionsComponent_ng_template_0_ng_template_2_ng_container_1_span_1_Template, 2, 4, "span", 8)(2, ElementTitleActionsComponent_ng_template_0_ng_template_2_ng_container_1_span_2_Template, 2, 4, "span", 9)(3, ElementTitleActionsComponent_ng_template_0_ng_template_2_ng_container_1_span_3_Template, 2, 0, "span", 1)(4, ElementTitleActionsComponent_ng_template_0_ng_template_2_ng_container_1_span_4_Template, 2, 4, "span", 8)(5, ElementTitleActionsComponent_ng_template_0_ng_template_2_ng_container_1_span_5_Template, 2, 0, "span", 1);
    ɵɵelement(6, "sv-ng-string", 6);
    ɵɵtemplate(7, ElementTitleActionsComponent_ng_template_0_ng_template_2_ng_container_1_span_7_Template, 2, 0, "span", 1)(8, ElementTitleActionsComponent_ng_template_0_ng_template_2_ng_container_1_span_8_Template, 2, 4, "span", 8);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r9 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r9.element.isRequireTextOnStart);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r9.element.no);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r9.element.no);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r9.element.isRequireTextBeforeTitle);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r9.element.isRequireTextBeforeTitle);
    ɵɵadvance(1);
    ɵɵproperty("model", ctx_r9.element.locTitle);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r9.element.isRequireTextAfterTitle);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r9.element.isRequireTextAfterTitle);
  }
}
function ElementTitleActionsComponent_ng_template_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ElementTitleActionsComponent_ng_template_0_ng_template_2_sv_ng_string_0_Template, 1, 1, "sv-ng-string", 7)(1, ElementTitleActionsComponent_ng_template_0_ng_template_2_ng_container_1_Template, 9, 8, "ng-container", 1);
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵproperty("ngIf", ctx_r4.element.isTitleRenderedAsString);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r4.element.isTitleRenderedAsString);
  }
}
function ElementTitleActionsComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ElementTitleActionsComponent_ng_template_0_ng_container_0_Template, 2, 1, "ng-container", 1)(1, ElementTitleActionsComponent_ng_template_0_ng_container_1_Template, 5, 2, "ng-container", 1)(2, ElementTitleActionsComponent_ng_template_0_ng_template_2_Template, 2, 2, "ng-template", null, 2, ɵɵtemplateRefExtractor);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngIf", !ctx_r0.element.hasTitleActions);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.element.hasTitleActions);
  }
}
function ElementTitleComponent_ng_template_0_sv_ng_dynamic_head_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "sv-ng-dynamic-head", 2);
    ɵɵelement(1, "sv-ng-element-title-actions", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("tagName", ctx_r2.element.titleTagName)("element", ctx_r2.element);
    ɵɵadvance(1);
    ɵɵproperty("element", ctx_r2.element);
  }
}
function ElementTitleComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ElementTitleComponent_ng_template_0_sv_ng_dynamic_head_0_Template, 2, 3, "sv-ng-dynamic-head", 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r0.element.hasTitle);
  }
}
var _c8 = ["sv-ng-survey-header", ""];
function SurveyHeaderComponent_div_0_ng_template_1_Template(rf, ctx) {
}
var _c9 = (a0) => ({
  data: a0
});
function SurveyHeaderComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, SurveyHeaderComponent_div_0_ng_template_1_Template, 0, 0, "ng-template", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.survey.logoClassNames);
    ɵɵadvance(1);
    ɵɵproperty("component", ɵɵpureFunction2(5, _c5, ctx_r0.survey.getElementWrapperComponentName(ctx_r0.survey, "logo-image"), ɵɵpureFunction1(3, _c9, ctx_r0.survey.getElementWrapperComponentData(ctx_r0.survey, "logo-image"))));
  }
}
function SurveyHeaderComponent_div_1_h5_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "h5", 5);
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r4.survey.css.description);
    ɵɵproperty("model", ctx_r4.survey.locDescription);
  }
}
function SurveyHeaderComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵelement(1, "sv-ng-element-title", 3);
    ɵɵtemplate(2, SurveyHeaderComponent_div_1_h5_2_Template, 1, 3, "h5", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.survey.css.headerText);
    ɵɵstyleProp("max-width", ctx_r1.survey.titleMaxWidth);
    ɵɵadvance(1);
    ɵɵproperty("element", ctx_r1.survey);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1.survey.renderedHasDescription);
  }
}
function SurveyHeaderComponent_div_2_ng_template_1_Template(rf, ctx) {
}
function SurveyHeaderComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, SurveyHeaderComponent_div_2_ng_template_1_Template, 0, 0, "ng-template", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMap(ctx_r2.survey.logoClassNames);
    ɵɵadvance(1);
    ɵɵproperty("component", ɵɵpureFunction2(5, _c5, ctx_r2.survey.getElementWrapperComponentName(ctx_r2.survey, "logo-image"), ɵɵpureFunction1(3, _c9, ctx_r2.survey.getElementWrapperComponentData(ctx_r2.survey, "logo-image"))));
  }
}
function ElementComponent_ng_template_0_div_0_ng_template_1_Template(rf, ctx) {
}
function ElementComponent_ng_template_0_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 2);
    ɵɵlistener("focusin", function ElementComponent_ng_template_0_div_0_Template_div_focusin_0_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r4 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r4.model.focusIn());
    });
    ɵɵtemplate(1, ElementComponent_ng_template_0_div_0_ng_template_1_Template, 0, 0, "ng-template", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵstyleMap(ctx_r2.rootStyle);
    ɵɵclassMap(ctx_r2.model.cssClasses.questionWrapper);
    ɵɵadvance(1);
    ɵɵproperty("component", ɵɵpureFunction2(5, _c5, ctx_r2.componentName, ctx_r2.componentData));
  }
}
function ElementComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ElementComponent_ng_template_0_div_0_Template, 2, 8, "div", 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngIf", !!ctx_r0.model);
  }
}
function RowComponent_ng_template_0_div_0_ng_container_2_sv_ng_element_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "sv-ng-element", 6);
  }
  if (rf & 2) {
    const element_r5 = ɵɵnextContext().$implicit;
    ɵɵproperty("model", element_r5);
  }
}
function RowComponent_ng_template_0_div_0_ng_container_2_2_ng_template_0_Template(rf, ctx) {
}
var _c10 = (a0) => ({
  element: a0
});
function RowComponent_ng_template_0_div_0_ng_container_2_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, RowComponent_ng_template_0_div_0_ng_container_2_2_ng_template_0_Template, 0, 0, "ng-template", 7);
  }
  if (rf & 2) {
    const element_r5 = ɵɵnextContext().$implicit;
    ɵɵproperty("component", ɵɵpureFunction2(3, _c5, element_r5.skeletonComponentName, ɵɵpureFunction1(1, _c10, element_r5)));
  }
}
function RowComponent_ng_template_0_div_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, RowComponent_ng_template_0_div_0_ng_container_2_sv_ng_element_1_Template, 1, 1, "sv-ng-element", 4)(2, RowComponent_ng_template_0_div_0_ng_container_2_2_Template, 1, 6, null, 5);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const element_r5 = ctx.$implicit;
    const ctx_r4 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r4.row.isNeedRender);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r4.row.isNeedRender && element_r5.skeletonComponentName);
  }
}
function RowComponent_ng_template_0_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", null, 2);
    ɵɵtemplate(2, RowComponent_ng_template_0_div_0_ng_container_2_Template, 3, 2, "ng-container", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r2.row.getRowCss());
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r2.row.visibleElements)("ngForTrackBy", ctx_r2.trackElementBy);
  }
}
function RowComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, RowComponent_ng_template_0_div_0_Template, 3, 4, "div", 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r0.row.visible);
  }
}
var _c11 = ["pageContainer"];
function PageComponent_ng_template_0_ng_container_0_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵelement(1, "sv-ng-string", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r4.model.cssClasses.page.description);
    ɵɵadvance(1);
    ɵɵproperty("model", ctx_r4.model.locDescription);
  }
}
function PageComponent_ng_template_0_ng_container_0_ng_container_5_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "sv-ng-row", 8);
  }
  if (rf & 2) {
    const row_r6 = ɵɵnextContext().$implicit;
    ɵɵproperty("row", row_r6);
  }
}
var _c12 = (a0) => ({
  componentData: a0
});
function PageComponent_ng_template_0_ng_container_0_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PageComponent_ng_template_0_ng_container_0_ng_container_5_ng_template_1_Template, 1, 1, "ng-template", 7);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    const ctx_r5 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("component", ɵɵpureFunction2(3, _c5, ctx_r5.model.survey.getRowWrapperComponentName(row_r6), ɵɵpureFunction1(1, _c12, ctx_r5.model.survey.getRowWrapperComponentData(row_r6))));
  }
}
function PageComponent_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", null, 2);
    ɵɵelement(3, "sv-ng-element-title", 3);
    ɵɵtemplate(4, PageComponent_ng_template_0_ng_container_0_div_4_Template, 2, 3, "div", 4)(5, PageComponent_ng_template_0_ng_container_0_ng_container_5_Template, 2, 6, "ng-container", 5);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵclassMap(ctx_r2.model.cssRoot);
    ɵɵadvance(2);
    ɵɵproperty("element", ctx_r2.model);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2.model._showDescription);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r2.model.rows);
  }
}
function PageComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PageComponent_ng_template_0_ng_container_0_Template, 6, 5, "ng-container", 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngIf", !!ctx_r0.survey && !!ctx_r0.model && ctx_r0.model.isVisible && !!ctx_r0.model.survey);
  }
}
var _c13 = (a0) => ({
  visibility: a0
});
function NotifierComponent_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 2)(2, "span");
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelement(4, "sv-action-bar", 3);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵstyleMap(ɵɵpureFunction1(6, _c13, ctx_r2.notifier.active ? "visible" : "hidden"));
    ɵɵclassMap(ctx_r2.notifier.css);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r2.notifier.message);
    ɵɵadvance(1);
    ɵɵproperty("model", ctx_r2.notifier.actionBar);
  }
}
function NotifierComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NotifierComponent_ng_template_0_ng_container_0_Template, 5, 8, "ng-container", 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r0.notifier.isDisplayed);
  }
}
var _c14 = ["surveyContainer"];
function SurveyContentComponent_ng_template_0_div_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div");
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(3);
    ɵɵstyleMap(ctx_r4.model.backgroundImageStyle);
    ɵɵclassMap(ctx_r4.model.css.rootBackgroundImage);
  }
}
function SurveyContentComponent_ng_template_0_div_0_div_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 11);
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r5.model.css.header);
    ɵɵproperty("survey", ctx_r5.model);
  }
}
function SurveyContentComponent_ng_template_0_div_0_ng_template_8_Template(rf, ctx) {
}
function SurveyContentComponent_ng_template_0_div_0_div_9_ng_template_1_Template(rf, ctx) {
}
function SurveyContentComponent_ng_template_0_div_0_div_9_ng_template_3_Template(rf, ctx) {
}
function SurveyContentComponent_ng_template_0_div_0_div_9_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "sv-ng-page", 13);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r17 = ɵɵnextContext(4);
    ɵɵadvance(1);
    ɵɵproperty("model", ctx_r17.model.activePage)("survey", ctx_r17.model);
  }
}
function SurveyContentComponent_ng_template_0_div_0_div_9_ng_template_5_Template(rf, ctx) {
}
function SurveyContentComponent_ng_template_0_div_0_div_9_ng_template_6_Template(rf, ctx) {
}
var _c15 = (a0) => ({
  survey: a0,
  container: "left"
});
var _c16 = (a1) => ({
  name: "sv-components-container",
  data: a1
});
var _c17 = (a0) => ({
  survey: a0,
  container: "contentTop"
});
var _c18 = (a0) => ({
  survey: a0,
  container: "contentBottom"
});
var _c19 = (a0) => ({
  survey: a0,
  container: "right"
});
function SurveyContentComponent_ng_template_0_div_0_div_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, SurveyContentComponent_ng_template_0_div_0_div_9_ng_template_1_Template, 0, 0, "ng-template", 6);
    ɵɵelementStart(2, "div", 12);
    ɵɵtemplate(3, SurveyContentComponent_ng_template_0_div_0_div_9_ng_template_3_Template, 0, 0, "ng-template", 6)(4, SurveyContentComponent_ng_template_0_div_0_div_9_ng_container_4_Template, 2, 2, "ng-container", 9)(5, SurveyContentComponent_ng_template_0_div_0_div_9_ng_template_5_Template, 0, 0, "ng-template", 6);
    ɵɵelementEnd();
    ɵɵtemplate(6, SurveyContentComponent_ng_template_0_div_0_div_9_ng_template_6_Template, 0, 0, "ng-template", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r7.model.bodyContainerCss);
    ɵɵadvance(1);
    ɵɵproperty("component", ɵɵpureFunction1(14, _c16, ɵɵpureFunction1(12, _c15, ctx_r7.model)));
    ɵɵadvance(1);
    ɵɵclassMap(ctx_r7.model.bodyCss);
    ɵɵstyleProp("max-width", ctx_r7.model.renderedWidth);
    ɵɵproperty("id", ctx_r7.model.activePage ? ctx_r7.model.activePage.id : "");
    ɵɵadvance(1);
    ɵɵproperty("component", ɵɵpureFunction1(18, _c16, ɵɵpureFunction1(16, _c17, ctx_r7.model)));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r7.model.activePage);
    ɵɵadvance(1);
    ɵɵproperty("component", ɵɵpureFunction1(22, _c16, ɵɵpureFunction1(20, _c18, ctx_r7.model)));
    ɵɵadvance(1);
    ɵɵproperty("component", ɵɵpureFunction1(26, _c16, ɵɵpureFunction1(24, _c19, ctx_r7.model)));
  }
}
function SurveyContentComponent_ng_template_0_div_0_ng_template_10_Template(rf, ctx) {
}
function SurveyContentComponent_ng_template_0_div_0_div_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 14);
    ɵɵpipe(1, "safeHtml");
  }
  if (rf & 2) {
    const ctx_r9 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r9.model.completedCss);
    ɵɵproperty("innerHtml", ɵɵpipeBind1(1, 3, ctx_r9.model.processedCompletedHtml), ɵɵsanitizeHtml);
  }
}
function SurveyContentComponent_ng_template_0_div_0_12_ng_template_0_Template(rf, ctx) {
}
var _c20 = (a0) => ({
  survey: a0,
  container: "completePage"
});
function SurveyContentComponent_ng_template_0_div_0_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, SurveyContentComponent_ng_template_0_div_0_12_ng_template_0_Template, 0, 0, "ng-template", 6);
  }
  if (rf & 2) {
    const ctx_r10 = ɵɵnextContext(3);
    ɵɵproperty("component", ɵɵpureFunction1(3, _c16, ɵɵpureFunction1(1, _c20, ctx_r10.model)));
  }
}
function SurveyContentComponent_ng_template_0_div_0_div_13_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 14);
    ɵɵpipe(1, "safeHtml");
  }
  if (rf & 2) {
    const ctx_r11 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r11.model.completedBeforeCss);
    ɵɵproperty("innerHtml", ɵɵpipeBind1(1, 3, ctx_r11.model.processedCompletedBeforeHtml), ɵɵsanitizeHtml);
  }
}
function SurveyContentComponent_ng_template_0_div_0_div_14_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 14);
  }
  if (rf & 2) {
    const ctx_r12 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r12.model.loadingBodyCss);
    ɵɵproperty("innerHtml", ctx_r12.model.processedLoadingHtml, ɵɵsanitizeHtml);
  }
}
function SurveyContentComponent_ng_template_0_div_0_div_15_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r13 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r13.model.css.bodyEmpty);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r13.model.emptySurveyText);
  }
}
function SurveyContentComponent_ng_template_0_div_0_sv_brand_info_16_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "sv-brand-info");
  }
}
var _c21 = (a0) => ({
  survey: a0,
  container: "header",
  needRenderWrapper: false
});
var _c22 = (a0) => ({
  survey: a0,
  container: "footer",
  needRenderWrapper: false
});
function SurveyContentComponent_ng_template_0_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", null, 2)(2, "div");
    ɵɵtemplate(3, SurveyContentComponent_ng_template_0_div_0_div_3_Template, 1, 4, "div", 1);
    ɵɵelementStart(4, "form", 3);
    ɵɵelement(5, "div", 4);
    ɵɵelementStart(6, "div");
    ɵɵtemplate(7, SurveyContentComponent_ng_template_0_div_0_div_7_Template, 1, 3, "div", 5)(8, SurveyContentComponent_ng_template_0_div_0_ng_template_8_Template, 0, 0, "ng-template", 6)(9, SurveyContentComponent_ng_template_0_div_0_div_9_Template, 7, 28, "div", 7)(10, SurveyContentComponent_ng_template_0_div_0_ng_template_10_Template, 0, 0, "ng-template", 6)(11, SurveyContentComponent_ng_template_0_div_0_div_11_Template, 2, 5, "div", 8)(12, SurveyContentComponent_ng_template_0_div_0_12_Template, 1, 5, null, 9)(13, SurveyContentComponent_ng_template_0_div_0_div_13_Template, 2, 5, "div", 8)(14, SurveyContentComponent_ng_template_0_div_0_div_14_Template, 1, 3, "div", 8)(15, SurveyContentComponent_ng_template_0_div_0_div_15_Template, 2, 3, "div", 7);
    ɵɵelementEnd()();
    ɵɵtemplate(16, SurveyContentComponent_ng_template_0_div_0_sv_brand_info_16_Template, 1, 0, "sv-brand-info", 9);
    ɵɵelement(17, "sv-notifier", 10);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵstyleMap(ctx_r2.model.themeVariables);
    ɵɵclassMap(ctx_r2.model.getRootCss());
    ɵɵadvance(2);
    ɵɵclassMap(ctx_r2.model.wrapperFormCss);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !!ctx_r2.model.renderBackgroundImage);
    ɵɵadvance(2);
    ɵɵproperty("hidden", ctx_r2.model.hasLogo);
    ɵɵadvance(1);
    ɵɵclassMap(ctx_r2.model.css.container);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2.model.headerView === "basic" && ctx_r2.model.renderedHasHeader);
    ɵɵadvance(1);
    ɵɵproperty("component", ɵɵpureFunction1(23, _c16, ɵɵpureFunction1(21, _c21, ctx_r2.model)));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2.model.isShowingPage);
    ɵɵadvance(1);
    ɵɵproperty("component", ɵɵpureFunction1(27, _c16, ɵɵpureFunction1(25, _c22, ctx_r2.model)));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2.model.state === "completed" && ctx_r2.model.showCompletedPage);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2.model.state === "completed" && ctx_r2.model.showCompletedPage);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2.model.state === "completedbefore");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2.model.state === "loading");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2.model.state === "empty");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2.model.showBrandInfo);
    ɵɵadvance(1);
    ɵɵproperty("notifier", ctx_r2.model.notifier);
  }
}
function SurveyContentComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, SurveyContentComponent_ng_template_0_div_0_Template, 18, 29, "div", 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngIf", !!ctx_r0.model);
  }
}
var _c23 = ["sv-ng-svg-icon", ""];
function PopupSurveyComponent_div_0_span_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 8);
    ɵɵlistener("click", function PopupSurveyComponent_div_0_span_6_Template_span_click_0_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r4 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r4.popup.hide());
    });
    ɵɵnamespaceSVG();
    ɵɵelement(1, "svg", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r1.popup.cssHeaderButton);
    ɵɵadvance(1);
    ɵɵproperty("iconName", "icon-expanddetail")("size", 16);
  }
}
function PopupSurveyComponent_div_0_span_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 10);
    ɵɵlistener("click", function PopupSurveyComponent_div_0_span_7_Template_span_click_0_listener() {
      ɵɵrestoreView(_r7);
      const ctx_r6 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r6.popup.changeExpandCollapse());
    });
    ɵɵnamespaceSVG();
    ɵɵelement(1, "svg", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r2.popup.cssHeaderButton);
    ɵɵadvance(1);
    ɵɵproperty("iconName", "icon-collapsedetail")("size", 16);
  }
}
function PopupSurveyComponent_div_0_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 11);
    ɵɵlistener("scroll", function PopupSurveyComponent_div_0_div_8_Template_div_scroll_0_listener() {
      ɵɵrestoreView(_r9);
      const ctx_r8 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r8.popup.onScroll());
    });
    ɵɵelement(1, "survey", 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r3.popup.cssBody);
    ɵɵadvance(1);
    ɵɵproperty("model", ctx_r3.popup.survey);
  }
}
function PopupSurveyComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 1)(1, "div")(2, "span", 2);
    ɵɵlistener("click", function PopupSurveyComponent_div_0_Template_span_click_2_listener() {
      ɵɵrestoreView(_r11);
      const ctx_r10 = ɵɵnextContext();
      return ɵɵresetView(ctx_r10.popup.changeExpandCollapse());
    });
    ɵɵelementStart(3, "span", 3);
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelement(5, "span", 4);
    ɵɵelementEnd();
    ɵɵtemplate(6, PopupSurveyComponent_div_0_span_6_Template, 2, 4, "span", 5)(7, PopupSurveyComponent_div_0_span_7_Template, 2, 4, "span", 6);
    ɵɵelementEnd();
    ɵɵtemplate(8, PopupSurveyComponent_div_0_div_8_Template, 2, 3, "div", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.popup.cssRoot);
    ɵɵstyleProp("width", ctx_r0.popup.renderedWidth)("max-width", ctx_r0.popup.renderedWidth);
    ɵɵadvance(1);
    ɵɵclassMap(ctx_r0.popup.cssHeaderRoot);
    ɵɵadvance(2);
    ɵɵclassMap(ctx_r0.popup.cssHeaderTitle);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r0.popup.locTitle.renderedHtml);
    ɵɵadvance(1);
    ɵɵclassMap(ctx_r0.popup.cssButton);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.popup.allowClose);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.popup.isExpanded);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.popup.isExpanded);
  }
}
var _c24 = ["contentElement"];
var _c25 = ["sv-ng-errors", ""];
function ErrorsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵelement(1, "span", 1)(2, "span", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const error_r1 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵclassMap(ctx_r0.element.cssClasses ? ctx_r0.element.cssClasses.error.icon : "panel-error-icon");
    ɵɵadvance(1);
    ɵɵclassMap(ctx_r0.element.cssClasses ? ctx_r0.element.cssClasses.error.item : "panel-error-item");
    ɵɵproperty("model", error_r1.locText);
  }
}
var _c26 = ["sv-ng-element-header", ""];
function ElementHeaderComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 3);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.element.cssDescription);
    ɵɵstyleProp("display", ctx_r0.element.hasDescription ? "" : "none");
    ɵɵproperty("model", ctx_r0.element.locDescription);
  }
}
function ElementHeaderComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "sv-ng-action-bar", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("model", ctx_r1.element.additionalTitleToolbar);
  }
}
function SurveyCommentComponent_textarea_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "textarea", 2);
    ɵɵlistener("change", function SurveyCommentComponent_textarea_0_Template_textarea_change_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.question.onCommentChange($event));
    })("input", function SurveyCommentComponent_textarea_0_Template_textarea_input_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r4 = ɵɵnextContext();
      return ɵɵresetView(ctx_r4.question.onCommentInput($event));
    })("compositionupdate", function SurveyCommentComponent_textarea_0_Template_textarea_compositionupdate_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r5 = ɵɵnextContext();
      return ɵɵresetView(ctx_r5.question.onCompositionUpdateComment($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.question.cssClasses.other);
    ɵɵstyleProp("resize", ctx_r0.question.resizeStyle);
    ɵɵproperty("id", ctx_r0.question.commentId)("value", ctx_r0.comment)("disabled", ctx_r0.question.isInputReadOnly);
    ɵɵattribute("maxlength", ctx_r0.question.getOthersMaxLength())("aria-required", ctx_r0.question.ariaRequired || ctx_r0.question.a11y_input_ariaRequired)("aria-label", ctx_r0.question.ariaLabel || ctx_r0.question.a11y_input_ariaLabel)("placeholder", ctx_r0.question.renderedCommentPlaceholder);
  }
}
function SurveyCommentComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r1.question.comment);
  }
}
var _c27 = ["elementContainer"];
function QuestionComponent_ng_template_0_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 10);
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(3);
    ɵɵproperty("element", ctx_r4.model);
  }
}
function QuestionComponent_ng_template_0_div_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 11);
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(3);
    ɵɵproperty("element", ctx_r5.model);
  }
}
function QuestionComponent_ng_template_0_div_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 10);
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext(3);
    ɵɵproperty("element", ctx_r6.model);
  }
}
function QuestionComponent_ng_template_0_div_0_ng_template_6_Template(rf, ctx) {
}
function QuestionComponent_ng_template_0_div_0_div_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵelement(1, "div", 12)(2, "sv-ng-comment", 13);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r8 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r8.model.getCommentAreaCss(false));
    ɵɵadvance(1);
    ɵɵproperty("model", ctx_r8.model.locCommentText);
    ɵɵadvance(1);
    ɵɵproperty("question", ctx_r8.model);
  }
}
function QuestionComponent_ng_template_0_div_0_div_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 10);
  }
  if (rf & 2) {
    const ctx_r9 = ɵɵnextContext(3);
    ɵɵproperty("element", ctx_r9.model);
  }
}
function QuestionComponent_ng_template_0_div_0_div_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 12);
  }
  if (rf & 2) {
    const ctx_r10 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r10.model.cssDescription);
    ɵɵproperty("model", ctx_r10.model.locDescription);
  }
}
function QuestionComponent_ng_template_0_div_0_div_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 11);
  }
  if (rf & 2) {
    const ctx_r11 = ɵɵnextContext(3);
    ɵɵproperty("element", ctx_r11.model);
  }
}
function QuestionComponent_ng_template_0_div_0_div_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 10);
  }
  if (rf & 2) {
    const ctx_r12 = ɵɵnextContext(3);
    ɵɵproperty("element", ctx_r12.model);
  }
}
var _c28 = (a0, a1) => ({
  name: a0,
  data: a1,
  default: "skeleton-question"
});
function QuestionComponent_ng_template_0_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2, 3);
    ɵɵtemplate(2, QuestionComponent_ng_template_0_div_0_div_2_Template, 1, 1, "div", 4)(3, QuestionComponent_ng_template_0_div_0_div_3_Template, 1, 1, "div", 5);
    ɵɵelementStart(4, "div", 6);
    ɵɵtemplate(5, QuestionComponent_ng_template_0_div_0_div_5_Template, 1, 1, "div", 4)(6, QuestionComponent_ng_template_0_div_0_ng_template_6_Template, 0, 0, "ng-template", 7)(7, QuestionComponent_ng_template_0_div_0_div_7_Template, 3, 4, "div", 8)(8, QuestionComponent_ng_template_0_div_0_div_8_Template, 1, 1, "div", 4)(9, QuestionComponent_ng_template_0_div_0_div_9_Template, 1, 3, "div", 9);
    ɵɵelementEnd();
    ɵɵtemplate(10, QuestionComponent_ng_template_0_div_0_div_10_Template, 1, 1, "div", 5)(11, QuestionComponent_ng_template_0_div_0_div_11_Template, 1, 1, "div", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵstyleMap(ctx_r2.model.getRootStyle());
    ɵɵclassMap(ctx_r2.model.getRootCss());
    ɵɵproperty("id", ctx_r2.model.id);
    ɵɵattribute("data-name", ctx_r2.model.name)("role", ctx_r2.model.ariaRole)("aria-required", ctx_r2.model.ariaRequired)("aria-invalid", ctx_r2.model.ariaInvalid)("aria-labelledby", ctx_r2.model.ariaLabelledBy)("aria-expanded", ctx_r2.model.ariaExpanded);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r2.model.showErrorsAboveQuestion && ctx_r2.model.hasVisibleErrors);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2.model.hasTitleOnLeftTop);
    ɵɵadvance(1);
    ɵɵclassMap(ctx_r2.model.cssContent);
    ɵɵproperty("visible", !ctx_r2.model.isCollapsed);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2.model.showErrorOnTop && ctx_r2.model.hasVisibleErrors);
    ɵɵadvance(1);
    ɵɵproperty("component", ɵɵpureFunction2(23, _c28, ctx_r2.getQuestionContentWrapperComponentName(), ctx_r2.getQuestionContentWrapperComponentData()));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2.model.hasComment);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2.model.showErrorOnBottom && ctx_r2.model.hasVisibleErrors);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2.model.hasDescriptionUnderInput);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2.model.hasTitleOnBottom);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2.model.showErrorsBelowQuestion && ctx_r2.model.hasVisibleErrors);
  }
}
function QuestionComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, QuestionComponent_ng_template_0_div_0_Template, 12, 26, "div", 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngIf", !!ctx_r0.model);
  }
}
function StringViewerComponent_span_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 2);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r0.model.renderedHtml);
  }
}
function StringViewerComponent_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 3);
    ɵɵpipe(1, "safeHtml");
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("innerHtml", ɵɵpipeBind1(1, 1, ctx_r1.model.renderedHtml), ɵɵsanitizeHtml);
  }
}
var _c29 = (a0, a1) => ({
  left: a0,
  top: a1
});
var _c30 = ["containerRef"];
var _c31 = ["inputElement"];
function DropdownComponent_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div")(1, "span");
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r4.model.cssClasses.hintPrefix);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r4.dropdownModel.hintStringPrefix);
  }
}
function DropdownComponent_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div")(1, "span", 12);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "span");
    ɵɵtext(4);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r5.model.cssClasses.hintSuffix);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r5.dropdownModel.inputStringRendered);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r5.dropdownModel.hintStringSuffix);
  }
}
function DropdownComponent_div_1_ng_container_4_ng_template_1_Template(rf, ctx) {
}
var _c32 = (a0, a1) => ({
  model: a0,
  question: a1
});
function DropdownComponent_div_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, DropdownComponent_div_1_ng_container_4_ng_template_1_Template, 0, 0, "ng-template", 13);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("component", ɵɵpureFunction2(4, _c5, ctx_r6.model.inputFieldComponentName, ɵɵpureFunction2(1, _c32, ctx_r6.dropdownModel.getSelectedAction(), ctx_r6.model)));
  }
}
function DropdownComponent_div_1_sv_ng_string_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "sv-ng-string", 14);
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(2);
    ɵɵproperty("model", ctx_r7.model.selectedItemLocText);
  }
}
function DropdownComponent_div_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 15);
    ɵɵlistener("click", function DropdownComponent_div_1_div_8_Template_div_click_0_listener($event) {
      ɵɵrestoreView(_r12);
      const ctx_r11 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r11.clear($event));
    });
    ɵɵnamespaceSVG();
    ɵɵelement(1, "svg", 16);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r9 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r9.model.cssClasses.cleanButton);
    ɵɵproperty("visible", ctx_r9.model.showClearButton);
    ɵɵattribute("tabindex", ctx_r9.model.showClearButton ? 0 : -1);
    ɵɵadvance(1);
    ɵɵproperty("iconName", ctx_r9.model.cssClasses.cleanButtonIconId)("partCss", ctx_r9.model.cssClasses.cleanButtonSvg)("title", ctx_r9.model.clearCaption)("size", "auto");
  }
}
function DropdownComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 5);
    ɵɵlistener("blur", function DropdownComponent_div_1_Template_div_blur_0_listener($event) {
      ɵɵrestoreView(_r14);
      const ctx_r13 = ɵɵnextContext();
      return ɵɵresetView(ctx_r13.blur($event));
    })("keydown", function DropdownComponent_div_1_Template_div_keydown_0_listener($event) {
      ɵɵrestoreView(_r14);
      const ctx_r15 = ɵɵnextContext();
      return ɵɵresetView(ctx_r15.keyhandler($event));
    });
    ɵɵtemplate(1, DropdownComponent_div_1_div_1_Template, 3, 3, "div", 6);
    ɵɵelementStart(2, "div");
    ɵɵtemplate(3, DropdownComponent_div_1_div_3_Template, 5, 4, "div", 6)(4, DropdownComponent_div_1_ng_container_4_Template, 2, 7, "ng-container", 7)(5, DropdownComponent_div_1_sv_ng_string_5_Template, 1, 1, "sv-ng-string", 8);
    ɵɵelementStart(6, "input", 9, 10);
    ɵɵlistener("ngModelChange", function DropdownComponent_div_1_Template_input_ngModelChange_6_listener($event) {
      ɵɵrestoreView(_r14);
      const ctx_r16 = ɵɵnextContext();
      return ɵɵresetView(ctx_r16.dropdownModel.inputStringRendered = $event);
    })("change", function DropdownComponent_div_1_Template_input_change_6_listener($event) {
      ɵɵrestoreView(_r14);
      const ctx_r17 = ɵɵnextContext();
      return ɵɵresetView(ctx_r17.inputChange($event));
    })("blur", function DropdownComponent_div_1_Template_input_blur_6_listener($event) {
      ɵɵrestoreView(_r14);
      const ctx_r18 = ɵɵnextContext();
      return ɵɵresetView(ctx_r18.blur($event));
    })("focus", function DropdownComponent_div_1_Template_input_focus_6_listener($event) {
      ɵɵrestoreView(_r14);
      const ctx_r19 = ɵɵnextContext();
      return ɵɵresetView(ctx_r19.focus($event));
    });
    ɵɵelementEnd()();
    ɵɵtemplate(8, DropdownComponent_div_1_div_8_Template, 2, 8, "div", 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.model.getControlClass());
    ɵɵattribute("tabindex", ctx_r0.dropdownModel.noTabIndex ? null : 0)("disabled", ctx_r0.model.isInputReadOnly ? true : null)("id", ctx_r0.model.inputId)("aria-required", ctx_r0.model.ariaRequired)("aria-label", ctx_r0.model.ariaLabel)("aria-invalid", ctx_r0.model.ariaInvalid)("aria-describedby", ctx_r0.model.ariaDescribedBy)("role", ctx_r0.model.ariaRole)("aria-controls", ctx_r0.dropdownModel.listElementId)("aria-expanded", ctx_r0.model.ariaExpanded)("aria-activedescendant", ctx_r0.dropdownModel.ariaActivedescendant);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.dropdownModel.showHintPrefix);
    ɵɵadvance(1);
    ɵɵclassMap(ctx_r0.model.cssClasses.controlValue);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.dropdownModel.showHintString);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.dropdownModel.showInputFieldComponent);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.model.showSelectedItemLocText);
    ɵɵadvance(1);
    ɵɵclassMap(ctx_r0.model.cssClasses.filterStringInput);
    ɵɵproperty("ngModel", ctx_r0.dropdownModel.inputStringRendered);
    ɵɵattribute("role", ctx_r0.dropdownModel.filterStringEnabled ? ctx_r0.model.ariaRole : null)("id", ctx_r0.model.getInputId())("inputmode", ctx_r0.dropdownModel.inputMode)("tabindex", ctx_r0.dropdownModel.noTabIndex ? null : -1)("disabled", ctx_r0.model.isInputReadOnly ? true : null)("aria-controls", ctx_r0.dropdownModel.listElementId)("aria-label", ctx_r0.model.a11y_input_ariaLabel)("aria-labelledby", ctx_r0.model.a11y_input_ariaLabelledBy)("aria-expanded", ctx_r0.model.ariaExpanded)("aria-activedescendant", ctx_r0.dropdownModel.ariaActivedescendant)("placeholder", ctx_r0.dropdownModel.placeholderRendered)("readonly", ctx_r0.dropdownModel.filterReadOnly ? true : null);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r0.model.allowClear && ctx_r0.model.cssClasses.cleanButtonIconId);
  }
}
function DropdownComponent_sv_ng_popup_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "sv-ng-popup", 17);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("popupModel", ctx_r1.dropdownModel.popupModel);
  }
}
function DropdownComponent_div_3_sv_ng_string_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "sv-ng-string", 14);
  }
  if (rf & 2) {
    const ctx_r20 = ɵɵnextContext(2);
    ɵɵproperty("model", ctx_r20.model.selectedItemLocText);
  }
}
function DropdownComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 18);
    ɵɵtemplate(1, DropdownComponent_div_3_sv_ng_string_1_Template, 1, 1, "sv-ng-string", 8);
    ɵɵelementStart(2, "div");
    ɵɵtext(3);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMap(ctx_r2.model.getControlClass());
    ɵɵattribute("id", ctx_r2.model.inputId);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2.model.selectedItemLocText);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r2.model.readOnlyText);
  }
}
function DropdownComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 19);
    ɵɵlistener("pointerdown", function DropdownComponent_div_4_Template_div_pointerdown_0_listener($event) {
      ɵɵrestoreView(_r22);
      const ctx_r21 = ɵɵnextContext();
      return ɵɵresetView(ctx_r21.chevronPointerDown($event));
    });
    ɵɵnamespaceSVG();
    ɵɵelement(1, "svg", 20);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵclassMap(ctx_r3.model.cssClasses.chevronButton);
    ɵɵadvance(1);
    ɵɵproperty("iconName", ctx_r3.model.cssClasses.chevronButtonIconId)("partCss", ctx_r3.model.cssClasses.chevronButtonSvg)("size", "auto");
  }
}
function TagboxFilterComponent_ng_template_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div")(1, "span");
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r2.question.cssClasses.hintPrefix);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r2.model.hintStringPrefix);
  }
}
function TagboxFilterComponent_ng_template_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div")(1, "span", 3);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "span");
    ɵɵtext(4);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r3.question.cssClasses.hintSuffix);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r3.model.inputStringRendered);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r3.model.hintStringSuffix);
  }
}
function TagboxFilterComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, TagboxFilterComponent_ng_template_0_div_1_Template, 3, 3, "div", 1);
    ɵɵelementStart(2, "div");
    ɵɵtemplate(3, TagboxFilterComponent_ng_template_0_div_3_Template, 5, 4, "div", 1);
    ɵɵelementStart(4, "input", 2);
    ɵɵlistener("ngModelChange", function TagboxFilterComponent_ng_template_0_Template_input_ngModelChange_4_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r4 = ɵɵnextContext();
      return ɵɵresetView(ctx_r4.model.inputStringRendered = $event);
    })("keydown", function TagboxFilterComponent_ng_template_0_Template_input_keydown_4_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r6 = ɵɵnextContext();
      return ɵɵresetView(ctx_r6.model.inputKeyHandler($event));
    })("blur", function TagboxFilterComponent_ng_template_0_Template_input_blur_4_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r7 = ɵɵnextContext();
      return ɵɵresetView(ctx_r7.model.onBlur($event));
    })("focus", function TagboxFilterComponent_ng_template_0_Template_input_focus_4_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r8 = ɵɵnextContext();
      return ɵɵresetView(ctx_r8.model.onFocus($event));
    });
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.question.cssClasses.hint);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.model.showHintPrefix);
    ɵɵadvance(1);
    ɵɵclassMap(ctx_r0.question.cssClasses.hintSuffixWrapper);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.model.showHintString);
    ɵɵadvance(1);
    ɵɵclassMap(ctx_r0.question.cssClasses.filterStringInput);
    ɵɵproperty("ngModel", ctx_r0.model.inputStringRendered);
    ɵɵattribute("id", ctx_r0.question.getInputId())("inputmode", ctx_r0.model.inputMode)("role", ctx_r0.model.filterStringEnabled ? ctx_r0.question.ariaRole : null)("readonly", ctx_r0.model.filterReadOnly ? true : null)("disabled", ctx_r0.question.isInputReadOnly ? true : null)("size", !ctx_r0.model.inputStringRendered ? 1 : null)("aria-label", ctx_r0.question.a11y_input_ariaLabel)("aria-labelledby", ctx_r0.question.a11y_input_ariaLabelledBy)("aria-controls", ctx_r0.model.listElementId)("aria-expanded", ctx_r0.question.ariaExpanded)("aria-activedescendant", ctx_r0.model.ariaActivedescendant)("placeholder", ctx_r0.model.filterStringPlaceholder);
  }
}
function TagboxComponent_div_1_ng_container_2_sv_ng_tagbox_item_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "sv-ng-tagbox-item", 10);
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r7 = ɵɵnextContext(3);
    ɵɵproperty("item", item_r8)("question", ctx_r7.model);
  }
}
function TagboxComponent_div_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TagboxComponent_div_1_ng_container_2_sv_ng_tagbox_item_1_Template, 1, 2, "sv-ng-tagbox-item", 9);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r4.model.selectedChoices);
  }
}
function TagboxComponent_div_1_ng_template_3_Template(rf, ctx) {
}
function TagboxComponent_div_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 11);
    ɵɵlistener("click", function TagboxComponent_div_1_div_4_Template_div_click_0_listener($event) {
      ɵɵrestoreView(_r10);
      const ctx_r9 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r9.clear($event));
    });
    ɵɵnamespaceSVG();
    ɵɵelement(1, "svg", 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r6.model.cssClasses.cleanButton);
    ɵɵproperty("visible", ctx_r6.model.showClearButton);
    ɵɵattribute("tabindex", ctx_r6.model.showClearButton ? 0 : -1);
    ɵɵadvance(1);
    ɵɵproperty("iconName", ctx_r6.model.cssClasses.cleanButtonIconId)("partCss", ctx_r6.model.cssClasses.cleanButtonSvg)("title", ctx_r6.model.clearCaption)("size", "auto");
  }
}
var _c33 = (a1) => ({
  name: "sv-tagbox-filter",
  data: a1
});
function TagboxComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 5);
    ɵɵlistener("blur", function TagboxComponent_div_1_Template_div_blur_0_listener($event) {
      ɵɵrestoreView(_r12);
      const ctx_r11 = ɵɵnextContext();
      return ɵɵresetView(ctx_r11.blur($event));
    })("keydown", function TagboxComponent_div_1_Template_div_keydown_0_listener($event) {
      ɵɵrestoreView(_r12);
      const ctx_r13 = ɵɵnextContext();
      return ɵɵresetView(ctx_r13.keyhandler($event));
    });
    ɵɵelementStart(1, "div");
    ɵɵtemplate(2, TagboxComponent_div_1_ng_container_2_Template, 2, 1, "ng-container", 6)(3, TagboxComponent_div_1_ng_template_3_Template, 0, 0, "ng-template", 7);
    ɵɵelementEnd();
    ɵɵtemplate(4, TagboxComponent_div_1_div_4_Template, 2, 8, "div", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.model.getControlClass());
    ɵɵattribute("tabindex", ctx_r0.dropdownModel.noTabIndex ? null : 0)("disabled", ctx_r0.model.isInputReadOnly ? true : null)("id", ctx_r0.model.inputId)("aria-required", ctx_r0.model.ariaRequired)("aria-label", ctx_r0.model.ariaLabel)("aria-invalid", ctx_r0.model.ariaInvalid)("aria-describedby", ctx_r0.model.ariaDescribedBy)("role", ctx_r0.model.ariaRole)("aria-controls", ctx_r0.dropdownModel.listElementId)("aria-expanded", ctx_r0.model.ariaExpanded)("aria-activedescendant", ctx_r0.dropdownModel.ariaActivedescendant);
    ɵɵadvance(1);
    ɵɵclassMap(ctx_r0.model.cssClasses.controlValue);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r0.model.isEmpty());
    ɵɵadvance(1);
    ɵɵproperty("component", ɵɵpureFunction1(21, _c33, ɵɵpureFunction2(18, _c32, ctx_r0.dropdownModel, ctx_r0.model)));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.model.allowClear && ctx_r0.model.cssClasses.cleanButtonIconId);
  }
}
function TagboxComponent_sv_ng_popup_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "sv-ng-popup", 13);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("popupModel", ctx_r1.model.popupModel);
  }
}
function TagboxComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 14)(1, "div");
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMap(ctx_r2.model.getControlClass());
    ɵɵattribute("id", ctx_r2.model.inputId);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r2.model.readOnlyText);
  }
}
function TagboxComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 15);
    ɵɵlistener("pointerdown", function TagboxComponent_div_4_Template_div_pointerdown_0_listener($event) {
      ɵɵrestoreView(_r15);
      const ctx_r14 = ɵɵnextContext();
      return ɵɵresetView(ctx_r14.chevronPointerDown($event));
    });
    ɵɵnamespaceSVG();
    ɵɵelement(1, "svg", 16);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵclassMap(ctx_r3.model.cssClasses.chevronButton);
    ɵɵadvance(1);
    ɵɵproperty("iconName", ctx_r3.model.cssClasses.chevronButtonIconId)("partCss", ctx_r3.model.cssClasses.chevronButtonSvg)("size", "auto");
  }
}
function DropdownOptionItemComponent_ng_template_0_ng_template_2_Template(rf, ctx) {
}
function DropdownOptionItemComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "option", 1);
    ɵɵtext(1);
    ɵɵelementEnd();
    ɵɵtemplate(2, DropdownOptionItemComponent_ng_template_0_ng_template_2_Template, 0, 0, "ng-template");
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("value", ctx_r0.item.value)("disabled", !ctx_r0.item.isEnabled);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r0.item.text);
  }
}
function SurveyCommentOtherComponent_textarea_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "textarea", 2);
    ɵɵlistener("change", function SurveyCommentOtherComponent_textarea_0_Template_textarea_change_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onOtherValueChange($event));
    })("input", function SurveyCommentOtherComponent_textarea_0_Template_textarea_input_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r4 = ɵɵnextContext();
      return ɵɵresetView(ctx_r4.onOtherValueInput($event));
    })("compositionupdate", function SurveyCommentOtherComponent_textarea_0_Template_textarea_compositionupdate_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r5 = ɵɵnextContext();
      return ɵɵresetView(ctx_r5.onCompositionUpdateOtherValue($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.question.cssClasses.other);
    ɵɵstyleProp("resize", ctx_r0.question.resizeStyle);
    ɵɵproperty("id", ctx_r0.otherId)("value", ctx_r0.otherValue)("disabled", ctx_r0.question.isInputReadOnly);
    ɵɵattribute("maxlength", ctx_r0.question.getOthersMaxLength())("aria-required", ctx_r0.question.ariaRequired || ctx_r0.question.a11y_input_ariaRequired)("aria-label", ctx_r0.question.ariaLabel || ctx_r0.question.a11y_input_ariaLabel)("placeholder", ctx_r0.otherPlaceholder);
  }
}
function SurveyCommentOtherComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r1.otherValue);
  }
}
function DropdownSelectComponent_select_2_option_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "option", 7);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r4.model.placeholder);
  }
}
function DropdownSelectComponent_select_2_2_ng_template_0_Template(rf, ctx) {
}
var _c34 = (a0) => ({
  item: a0
});
var _c35 = (a1) => ({
  name: "sv-dropdown-option-item",
  data: a1
});
function DropdownSelectComponent_select_2_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DropdownSelectComponent_select_2_2_ng_template_0_Template, 0, 0, "ng-template", 8);
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    ɵɵproperty("component", ɵɵpureFunction1(3, _c35, ɵɵpureFunction1(1, _c34, item_r6)));
  }
}
function DropdownSelectComponent_select_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "select", 4);
    ɵɵlistener("ngModelChange", function DropdownSelectComponent_select_2_Template_select_ngModelChange_0_listener($event) {
      ɵɵrestoreView(_r9);
      const ctx_r8 = ɵɵnextContext();
      return ɵɵresetView(ctx_r8.editableValue = $event);
    })("click", function DropdownSelectComponent_select_2_Template_select_click_0_listener($event) {
      ɵɵrestoreView(_r9);
      const ctx_r10 = ɵɵnextContext();
      return ɵɵresetView(ctx_r10.click($event));
    })("keyup", function DropdownSelectComponent_select_2_Template_select_keyup_0_listener($event) {
      ɵɵrestoreView(_r9);
      const ctx_r11 = ɵɵnextContext();
      return ɵɵresetView(ctx_r11.keyup($event));
    });
    ɵɵtemplate(1, DropdownSelectComponent_select_2_option_1_Template, 2, 1, "option", 5)(2, DropdownSelectComponent_select_2_2_Template, 1, 5, null, 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.model.getControlClass());
    ɵɵproperty("ngModel", ctx_r0.editableValue)("disabled", ctx_r0.model.isInputReadOnly)("required", ctx_r0.model.isRequired);
    ɵɵattribute("id", ctx_r0.model.inputId)("autocomplete", ctx_r0.model.autocomplete)("aria-required", ctx_r0.model.ariaRequired)("aria-label", ctx_r0.model.ariaLabel)("aria-invalid", ctx_r0.model.ariaInvalid)("aria-describedby", ctx_r0.model.ariaDescribedBy);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.model.allowClear);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r0.model.visibleChoices);
  }
}
function DropdownSelectComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 9);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.model.getControlClass());
    ɵɵattribute("id", ctx_r1.model.inputId);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r1.model.readOnlyText);
  }
}
function DropdownSelectComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵnamespaceSVG();
    ɵɵelement(1, "svg", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMap(ctx_r2.model.cssClasses.chevronButton);
    ɵɵadvance(1);
    ɵɵproperty("iconName", ctx_r2.model.cssClasses.chevronButtonIconId)("partCss", ctx_r2.model.cssClasses.chevronButtonSvg)("size", "auto");
  }
}
function DropdownSelectComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 11);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵclassMap(ctx_r3.model.getCommentAreaCss(true));
    ɵɵstyleProp("display", ctx_r3.model.isFlowLayout ? "inline" : "");
    ɵɵproperty("question", ctx_r3.model);
  }
}
function LogoImageComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "img");
    ɵɵpipe(1, "safeUrl");
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.survey.css.logoImage);
    ɵɵstyleProp("width", ctx_r0.survey.renderedStyleLogoWidth)("height", ctx_r0.survey.renderedStyleLogoHeight)("object-fit", ctx_r0.survey.logoFit);
    ɵɵattribute("src", ɵɵpipeBind1(1, 12, ctx_r0.survey.locLogo.renderedHtml), ɵɵsanitizeUrl)("width", ctx_r0.survey.renderedLogoWidth)("height", ctx_r0.survey.renderedLogoHeight)("alt", ctx_r0.survey.locTitle.renderedHtml);
  }
}
function CharacterCounterComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.remainingCharacterCounter);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r0.counter.remainingCharacterCounter);
  }
}
function TextQuestionComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 3);
  }
  if (rf & 2) {
    ɵɵnextContext();
    const _r4 = ɵɵreference(4);
    ɵɵproperty("ngTemplateOutlet", _r4);
  }
}
function TextQuestionComponent_div_1_option_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "option", 6);
  }
  if (rf & 2) {
    const dataListItem_r6 = ctx.$implicit;
    ɵɵproperty("value", dataListItem_r6);
  }
}
function TextQuestionComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵelementContainer(1, 3);
    ɵɵelementStart(2, "datalist", 4);
    ɵɵtemplate(3, TextQuestionComponent_div_1_option_3_Template, 1, 1, "option", 5);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    const _r4 = ɵɵreference(4);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r4);
    ɵɵadvance(1);
    ɵɵproperty("id", ctx_r1.model.dataListId);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r1.model.dataList);
  }
}
function TextQuestionComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", null, 7);
    ɵɵtext(2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r2.model.value);
  }
}
function TextQuestionComponent_ng_template_3_sv_ng_character_counter_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "sv-ng-character-counter", 10);
  }
  if (rf & 2) {
    const ctx_r9 = ɵɵnextContext(2);
    ɵɵproperty("counter", ctx_r9.model.characterCounter)("remainingCharacterCounter", ctx_r9.model.cssClasses.remainingCharacterCounter);
  }
}
function TextQuestionComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "input", 8, 7);
    ɵɵlistener("change", function TextQuestionComponent_ng_template_3_Template_input_change_0_listener($event) {
      ɵɵrestoreView(_r11);
      const ctx_r10 = ɵɵnextContext();
      return ɵɵresetView(ctx_r10.model.onChange($event));
    })("keyup", function TextQuestionComponent_ng_template_3_Template_input_keyup_0_listener($event) {
      ɵɵrestoreView(_r11);
      const ctx_r12 = ɵɵnextContext();
      return ɵɵresetView(ctx_r12.model.onKeyUp($event));
    })("keydown", function TextQuestionComponent_ng_template_3_Template_input_keydown_0_listener($event) {
      ɵɵrestoreView(_r11);
      const ctx_r13 = ɵɵnextContext();
      return ɵɵresetView(ctx_r13.model.onKeyDown($event));
    })("blur", function TextQuestionComponent_ng_template_3_Template_input_blur_0_listener($event) {
      ɵɵrestoreView(_r11);
      const ctx_r14 = ɵɵnextContext();
      return ɵɵresetView(ctx_r14.model.onBlur($event));
    })("focus", function TextQuestionComponent_ng_template_3_Template_input_focus_0_listener($event) {
      ɵɵrestoreView(_r11);
      const ctx_r15 = ɵɵnextContext();
      return ɵɵresetView(ctx_r15.model.onFocus($event));
    })("compositionupdate", function TextQuestionComponent_ng_template_3_Template_input_compositionupdate_0_listener($event) {
      ɵɵrestoreView(_r11);
      const ctx_r16 = ɵɵnextContext();
      return ɵɵresetView(ctx_r16.model.onCompositionUpdate($event));
    });
    ɵɵelementEnd();
    ɵɵtemplate(2, TextQuestionComponent_ng_template_3_sv_ng_character_counter_2_Template, 1, 2, "sv-ng-character-counter", 9);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵstyleMap(ctx_r3.model.inputStyle);
    ɵɵclassMap(ctx_r3.model.getControlClass());
    ɵɵproperty("value", ctx_r3.value)("disabled", ctx_r3.model.isInputReadOnly)("type", ctx_r3.model.inputType)("id", ctx_r3.model.inputId);
    ɵɵattribute("list", ctx_r3.model.dataListId)("placeholder", ctx_r3.model.renderedPlaceholder || "")("size", ctx_r3.model.renderedInputSize)("maxlength", ctx_r3.model.getMaxLength())("min", ctx_r3.model.renderedMin)("max", ctx_r3.model.renderedMax)("step", ctx_r3.model.renderedStep)("max", ctx_r3.model.renderedMax)("aria-required", ctx_r3.model.a11y_input_ariaRequired)("aria-label", ctx_r3.model.a11y_input_ariaLabel)("aria-labelledby", ctx_r3.model.a11y_input_ariaLabelledBy)("aria-invalid", ctx_r3.model.a11y_input_ariaInvalid)("aria-describedby", ctx_r3.model.a11y_input_ariaDescribedBy)("autocomplete", ctx_r3.model.autocomplete);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r3.model.getMaxLength());
  }
}
function SelectBaseComponent_legend_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "legend", 5);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r1.model.locTitle.renderedHtml);
  }
}
function SelectBaseComponent_ng_container_3_ng_container_1_ng_template_1_Template(rf, ctx) {
}
function SelectBaseComponent_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, SelectBaseComponent_ng_container_3_ng_container_1_ng_template_1_Template, 0, 0, "ng-template", 7);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const ctx_r9 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("component", ɵɵpureFunction2(1, _c5, ctx_r9.getItemValueComponentName(item_r10), ctx_r9.getItemValueComponentData(item_r10)));
  }
}
function SelectBaseComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, SelectBaseComponent_ng_container_3_ng_container_1_Template, 2, 4, "ng-container", 6);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r2.model.headItems)("ngForTrackBy", ctx_r2.trackItemBy);
  }
}
function SelectBaseComponent_ng_container_4_ng_container_1_ng_template_1_Template(rf, ctx) {
}
function SelectBaseComponent_ng_container_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, SelectBaseComponent_ng_container_4_ng_container_1_ng_template_1_Template, 0, 0, "ng-template", 7);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r13 = ctx.$implicit;
    const ctx_r12 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("component", ɵɵpureFunction2(1, _c5, ctx_r12.getItemValueComponentName(item_r13), ctx_r12.getItemValueComponentData(item_r13)));
  }
}
function SelectBaseComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, SelectBaseComponent_ng_container_4_ng_container_1_Template, 2, 4, "ng-container", 6);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r3.model.bodyItems)("ngForTrackBy", ctx_r3.trackItemBy);
  }
}
function SelectBaseComponent_div_5_ng_container_1_ng_template_1_Template(rf, ctx) {
}
function SelectBaseComponent_div_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, SelectBaseComponent_div_5_ng_container_1_ng_template_1_Template, 0, 0, "ng-template", 7);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r16 = ctx.$implicit;
    const ctx_r15 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("component", ɵɵpureFunction2(1, _c5, ctx_r15.getItemValueComponentName(item_r16), ctx_r15.getItemValueComponentData(item_r16)));
  }
}
function SelectBaseComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, SelectBaseComponent_div_5_ng_container_1_Template, 2, 4, "ng-container", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵclassMap(ctx_r4.model.cssClasses.rootRow);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r4.model.dataChoices)("ngForTrackBy", ctx_r4.trackItemBy);
  }
}
function SelectBaseComponent_ng_container_6_div_2_ng_container_1_ng_template_1_Template(rf, ctx) {
}
function SelectBaseComponent_ng_container_6_div_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, SelectBaseComponent_ng_container_6_div_2_ng_container_1_ng_template_1_Template, 0, 0, "ng-template", 7);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r21 = ctx.$implicit;
    const ctx_r20 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("component", ɵɵpureFunction2(1, _c5, ctx_r20.getItemValueComponentName(item_r21), ctx_r20.getItemValueComponentData(item_r21)));
  }
}
function SelectBaseComponent_ng_container_6_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 9);
    ɵɵtemplate(1, SelectBaseComponent_ng_container_6_div_2_ng_container_1_Template, 2, 4, "ng-container", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const column_r19 = ctx.$implicit;
    const ctx_r18 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r18.model.getColumnClass());
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", column_r19)("ngForTrackBy", ctx_r18.trackItemBy);
  }
}
function SelectBaseComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div");
    ɵɵtemplate(2, SelectBaseComponent_ng_container_6_div_2_Template, 2, 4, "div", 8);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵclassMap(ctx_r5.model.cssClasses.rootMultiColumn);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r5.model.columns)("ngForTrackBy", ctx_r5.trackColumnBy);
  }
}
function SelectBaseComponent_ng_container_7_ng_container_1_ng_template_1_Template(rf, ctx) {
}
function SelectBaseComponent_ng_container_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, SelectBaseComponent_ng_container_7_ng_container_1_ng_template_1_Template, 0, 0, "ng-template", 7);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r24 = ctx.$implicit;
    const ctx_r23 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("component", ɵɵpureFunction2(1, _c5, ctx_r23.getItemValueComponentName(item_r24), ctx_r23.getItemValueComponentData(item_r24)));
  }
}
function SelectBaseComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, SelectBaseComponent_ng_container_7_ng_container_1_Template, 2, 4, "ng-container", 6);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r6.model.footItems)("ngForTrackBy", ctx_r6.trackItemBy);
  }
}
function SelectBaseComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 10);
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext();
    ɵɵclassMap(ctx_r7.model.getCommentAreaCss(true));
    ɵɵproperty("question", ctx_r7.model);
  }
}
function SelectBaseComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div")(1, "input", 11);
    ɵɵlistener("click", function SelectBaseComponent_div_9_Template_input_click_1_listener() {
      ɵɵrestoreView(_r27);
      const ctx_r26 = ɵɵnextContext();
      return ɵɵresetView(ctx_r26.model.clearValue());
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r8 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵclassMap(ctx_r8.model.cssClasses.clearButton);
    ɵɵproperty("value", ctx_r8.model.clearButtonCaption);
  }
}
function RadiogroupComponent_legend_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "legend", 5);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r1.model.locTitle.renderedHtml);
  }
}
function RadiogroupComponent_ng_container_3_ng_container_1_ng_template_1_Template(rf, ctx) {
}
function RadiogroupComponent_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, RadiogroupComponent_ng_container_3_ng_container_1_ng_template_1_Template, 0, 0, "ng-template", 7);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const ctx_r9 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("component", ɵɵpureFunction2(1, _c5, ctx_r9.getItemValueComponentName(item_r10), ctx_r9.getItemValueComponentData(item_r10)));
  }
}
function RadiogroupComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, RadiogroupComponent_ng_container_3_ng_container_1_Template, 2, 4, "ng-container", 6);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r2.model.headItems)("ngForTrackBy", ctx_r2.trackItemBy);
  }
}
function RadiogroupComponent_ng_container_4_ng_container_1_ng_template_1_Template(rf, ctx) {
}
function RadiogroupComponent_ng_container_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, RadiogroupComponent_ng_container_4_ng_container_1_ng_template_1_Template, 0, 0, "ng-template", 7);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r13 = ctx.$implicit;
    const ctx_r12 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("component", ɵɵpureFunction2(1, _c5, ctx_r12.getItemValueComponentName(item_r13), ctx_r12.getItemValueComponentData(item_r13)));
  }
}
function RadiogroupComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, RadiogroupComponent_ng_container_4_ng_container_1_Template, 2, 4, "ng-container", 6);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r3.model.bodyItems)("ngForTrackBy", ctx_r3.trackItemBy);
  }
}
function RadiogroupComponent_div_5_ng_container_1_ng_template_1_Template(rf, ctx) {
}
function RadiogroupComponent_div_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, RadiogroupComponent_div_5_ng_container_1_ng_template_1_Template, 0, 0, "ng-template", 7);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r16 = ctx.$implicit;
    const ctx_r15 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("component", ɵɵpureFunction2(1, _c5, ctx_r15.getItemValueComponentName(item_r16), ctx_r15.getItemValueComponentData(item_r16)));
  }
}
function RadiogroupComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, RadiogroupComponent_div_5_ng_container_1_Template, 2, 4, "ng-container", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵclassMap(ctx_r4.model.cssClasses.rootRow);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r4.model.dataChoices)("ngForTrackBy", ctx_r4.trackItemBy);
  }
}
function RadiogroupComponent_ng_container_6_div_2_ng_container_1_ng_template_1_Template(rf, ctx) {
}
function RadiogroupComponent_ng_container_6_div_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, RadiogroupComponent_ng_container_6_div_2_ng_container_1_ng_template_1_Template, 0, 0, "ng-template", 7);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r21 = ctx.$implicit;
    const ctx_r20 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("component", ɵɵpureFunction2(1, _c5, ctx_r20.getItemValueComponentName(item_r21), ctx_r20.getItemValueComponentData(item_r21)));
  }
}
function RadiogroupComponent_ng_container_6_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 9);
    ɵɵtemplate(1, RadiogroupComponent_ng_container_6_div_2_ng_container_1_Template, 2, 4, "ng-container", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const column_r19 = ctx.$implicit;
    const ctx_r18 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r18.model.getColumnClass());
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", column_r19)("ngForTrackBy", ctx_r18.trackItemBy);
  }
}
function RadiogroupComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div");
    ɵɵtemplate(2, RadiogroupComponent_ng_container_6_div_2_Template, 2, 4, "div", 8);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵclassMap(ctx_r5.model.cssClasses.rootMultiColumn);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r5.model.columns)("ngForTrackBy", ctx_r5.trackColumnBy);
  }
}
function RadiogroupComponent_ng_container_7_ng_container_1_ng_template_1_Template(rf, ctx) {
}
function RadiogroupComponent_ng_container_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, RadiogroupComponent_ng_container_7_ng_container_1_ng_template_1_Template, 0, 0, "ng-template", 7);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r24 = ctx.$implicit;
    const ctx_r23 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("component", ɵɵpureFunction2(1, _c5, ctx_r23.getItemValueComponentName(item_r24), ctx_r23.getItemValueComponentData(item_r24)));
  }
}
function RadiogroupComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, RadiogroupComponent_ng_container_7_ng_container_1_Template, 2, 4, "ng-container", 6);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r6.model.footItems)("ngForTrackBy", ctx_r6.trackItemBy);
  }
}
function RadiogroupComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 10);
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext();
    ɵɵclassMap(ctx_r7.model.getCommentAreaCss(true));
    ɵɵproperty("question", ctx_r7.model);
  }
}
function RadiogroupComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div")(1, "input", 11);
    ɵɵlistener("click", function RadiogroupComponent_div_9_Template_input_click_1_listener() {
      ɵɵrestoreView(_r27);
      const ctx_r26 = ɵɵnextContext();
      return ɵɵresetView(ctx_r26.model.clearValue());
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r8 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵclassMap(ctx_r8.model.cssClasses.clearButton);
    ɵɵproperty("value", ctx_r8.model.clearButtonCaption);
  }
}
function CheckboxComponent_legend_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "legend", 5);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r1.model.locTitle.renderedHtml);
  }
}
function CheckboxComponent_ng_container_3_ng_container_1_ng_template_1_Template(rf, ctx) {
}
function CheckboxComponent_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, CheckboxComponent_ng_container_3_ng_container_1_ng_template_1_Template, 0, 0, "ng-template", 7);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const ctx_r9 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("component", ɵɵpureFunction2(1, _c5, ctx_r9.getItemValueComponentName(item_r10), ctx_r9.getItemValueComponentData(item_r10)));
  }
}
function CheckboxComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, CheckboxComponent_ng_container_3_ng_container_1_Template, 2, 4, "ng-container", 6);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r2.model.headItems)("ngForTrackBy", ctx_r2.trackItemBy);
  }
}
function CheckboxComponent_ng_container_4_ng_container_1_ng_template_1_Template(rf, ctx) {
}
function CheckboxComponent_ng_container_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, CheckboxComponent_ng_container_4_ng_container_1_ng_template_1_Template, 0, 0, "ng-template", 7);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r13 = ctx.$implicit;
    const ctx_r12 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("component", ɵɵpureFunction2(1, _c5, ctx_r12.getItemValueComponentName(item_r13), ctx_r12.getItemValueComponentData(item_r13)));
  }
}
function CheckboxComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, CheckboxComponent_ng_container_4_ng_container_1_Template, 2, 4, "ng-container", 6);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r3.model.bodyItems)("ngForTrackBy", ctx_r3.trackItemBy);
  }
}
function CheckboxComponent_div_5_ng_container_1_ng_template_1_Template(rf, ctx) {
}
function CheckboxComponent_div_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, CheckboxComponent_div_5_ng_container_1_ng_template_1_Template, 0, 0, "ng-template", 7);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r16 = ctx.$implicit;
    const ctx_r15 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("component", ɵɵpureFunction2(1, _c5, ctx_r15.getItemValueComponentName(item_r16), ctx_r15.getItemValueComponentData(item_r16)));
  }
}
function CheckboxComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, CheckboxComponent_div_5_ng_container_1_Template, 2, 4, "ng-container", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵclassMap(ctx_r4.model.cssClasses.rootRow);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r4.model.dataChoices)("ngForTrackBy", ctx_r4.trackItemBy);
  }
}
function CheckboxComponent_ng_container_6_div_2_ng_container_1_ng_template_1_Template(rf, ctx) {
}
function CheckboxComponent_ng_container_6_div_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, CheckboxComponent_ng_container_6_div_2_ng_container_1_ng_template_1_Template, 0, 0, "ng-template", 7);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r21 = ctx.$implicit;
    const ctx_r20 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("component", ɵɵpureFunction2(1, _c5, ctx_r20.getItemValueComponentName(item_r21), ctx_r20.getItemValueComponentData(item_r21)));
  }
}
function CheckboxComponent_ng_container_6_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 9);
    ɵɵtemplate(1, CheckboxComponent_ng_container_6_div_2_ng_container_1_Template, 2, 4, "ng-container", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const column_r19 = ctx.$implicit;
    const ctx_r18 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r18.model.getColumnClass());
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", column_r19)("ngForTrackBy", ctx_r18.trackItemBy);
  }
}
function CheckboxComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div");
    ɵɵtemplate(2, CheckboxComponent_ng_container_6_div_2_Template, 2, 4, "div", 8);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵclassMap(ctx_r5.model.cssClasses.rootMultiColumn);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r5.model.columns)("ngForTrackBy", ctx_r5.trackColumnBy);
  }
}
function CheckboxComponent_ng_container_7_ng_container_1_ng_template_1_Template(rf, ctx) {
}
function CheckboxComponent_ng_container_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, CheckboxComponent_ng_container_7_ng_container_1_ng_template_1_Template, 0, 0, "ng-template", 7);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r24 = ctx.$implicit;
    const ctx_r23 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("component", ɵɵpureFunction2(1, _c5, ctx_r23.getItemValueComponentName(item_r24), ctx_r23.getItemValueComponentData(item_r24)));
  }
}
function CheckboxComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, CheckboxComponent_ng_container_7_ng_container_1_Template, 2, 4, "ng-container", 6);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r6.model.footItems)("ngForTrackBy", ctx_r6.trackItemBy);
  }
}
function CheckboxComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 10);
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext();
    ɵɵclassMap(ctx_r7.model.getCommentAreaCss(true));
    ɵɵproperty("question", ctx_r7.model);
  }
}
function CheckboxComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div")(1, "input", 11);
    ɵɵlistener("click", function CheckboxComponent_div_9_Template_input_click_1_listener() {
      ɵɵrestoreView(_r27);
      const ctx_r26 = ɵɵnextContext();
      return ɵɵresetView(ctx_r26.model.clearValue());
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r8 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵclassMap(ctx_r8.model.cssClasses.clearButton);
    ɵɵproperty("value", ctx_r8.model.clearButtonCaption);
  }
}
function CheckboxItemComponent_input_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "input", 1);
    ɵɵlistener("change", function CheckboxItemComponent_input_0_Template_input_change_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onSelectAllChange($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.question.cssClasses.itemControl);
    ɵɵproperty("name", ctx_r0.question.name + ctx_r0.model.value)("id", ctx_r0.question.getItemId(ctx_r0.model))("disabled", !ctx_r0.question.getItemEnabled(ctx_r0.model))("checked", ctx_r0.question.isAllSelected)("value", "");
  }
}
function CheckboxItemComponent_input_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "input", 1);
    ɵɵlistener("change", function CheckboxItemComponent_input_1_Template_input_change_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r4 = ɵɵnextContext();
      return ɵɵresetView(ctx_r4.onChange($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.question.cssClasses.itemControl);
    ɵɵproperty("name", ctx_r1.question.name + ctx_r1.model.value)("id", ctx_r1.question.getItemId(ctx_r1.model))("disabled", !ctx_r1.question.getItemEnabled(ctx_r1.model))("checked", ctx_r1.question.isItemSelected(ctx_r1.model))("value", ctx_r1.model.value);
  }
}
function DropdownQuestionComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 3);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.model.getCommentAreaCss(true));
    ɵɵproperty("question", ctx_r1.model);
  }
}
function TagboxQuestionComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 3);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.model.getCommentAreaCss(true));
    ɵɵproperty("question", ctx_r1.model);
  }
}
function RatingQuestionComponent_span_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 5);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.model.cssClasses.minText);
    ɵɵproperty("model", ctx_r1.model.locMinRateDescription);
  }
}
function RatingQuestionComponent_5_ng_template_0_Template(rf, ctx) {
}
var _c36 = (a0, a1, a2) => ({
  model: a0,
  item: a1,
  index: a2
});
function RatingQuestionComponent_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, RatingQuestionComponent_5_ng_template_0_Template, 0, 0, "ng-template", 6);
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const index_r5 = ctx.index;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("component", ɵɵpureFunction2(5, _c5, ctx_r2.model.itemComponent, ɵɵpureFunction3(1, _c36, ctx_r2.model, item_r4, index_r5)));
  }
}
function RatingQuestionComponent_span_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 5);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵclassMap(ctx_r3.model.cssClasses.maxText);
    ɵɵproperty("model", ctx_r3.model.locMaxRateDescription);
  }
}
function BooleanQuestionComponent_span_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 4);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.model.cssClasses.sliderText);
    ɵɵproperty("model", ctx_r1.model.getCheckedLabel());
  }
}
function ImagePickerItemComponent_ng_template_0_span_5__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 8);
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r7.question.cssClasses.checkedItemSvgIcon);
    ɵɵproperty("iconName", ctx_r7.question.cssClasses.checkedItemSvgIconId)("size", "auto");
  }
}
function ImagePickerItemComponent_ng_template_0_span_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtemplate(1, ImagePickerItemComponent_ng_template_0_span_5__svg_svg_1_Template, 1, 4, "svg", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r2.question.cssClasses.checkedItemDecorator);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2.question.cssClasses.checkedItemSvgIconId);
  }
}
function ImagePickerItemComponent_ng_template_0_img_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "img", 9);
    ɵɵlistener("load", function ImagePickerItemComponent_ng_template_0_img_6_Template_img_load_0_listener($event) {
      ɵɵrestoreView(_r9);
      const ctx_r8 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r8.question.onContentLoaded(ctx_r8.model, $event));
    })("error", function ImagePickerItemComponent_ng_template_0_img_6_Template_img_error_0_listener() {
      ɵɵrestoreView(_r9);
      const ctx_r10 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r10.model.onErrorHandler());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r3.question.cssClasses.image);
    ɵɵstyleProp("object-fit", ctx_r3.question.imageFit);
    ɵɵattribute("src", ctx_r3.model.locImageLink.renderedHtml, ɵɵsanitizeUrl)("width", ctx_r3.question.renderedImageWidth)("height", ctx_r3.question.renderedImageHeight)("alt", ctx_r3.model.locText.renderedHtml);
  }
}
function ImagePickerItemComponent_ng_template_0_video_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "video", 10);
    ɵɵlistener("loadedmetadata", function ImagePickerItemComponent_ng_template_0_video_7_Template_video_loadedmetadata_0_listener($event) {
      ɵɵrestoreView(_r12);
      const ctx_r11 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r11.question.onContentLoaded(ctx_r11.model, $event));
    })("error", function ImagePickerItemComponent_ng_template_0_video_7_Template_video_error_0_listener() {
      ɵɵrestoreView(_r12);
      const ctx_r13 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r13.model.onErrorHandler());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r4.question.cssClasses.image);
    ɵɵstyleProp("object-fit", ctx_r4.question.imageFit);
    ɵɵattribute("src", ctx_r4.model.locImageLink.renderedHtml, ɵɵsanitizeUrl)("width", ctx_r4.question.renderedImageWidth)("height", ctx_r4.question.renderedImageHeight);
  }
}
function ImagePickerItemComponent_ng_template_0_div_8__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 8);
  }
  if (rf & 2) {
    const ctx_r14 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r14.question.cssClasses.itemNoImageSvgIcon);
    ɵɵproperty("iconName", ctx_r14.question.cssClasses.itemNoImageSvgIconId)("size", 48);
  }
}
function ImagePickerItemComponent_ng_template_0_div_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, ImagePickerItemComponent_ng_template_0_div_8__svg_svg_1_Template, 1, 4, "svg", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r5.question.cssClasses.itemNoImage);
    ɵɵstyleProp("width", ctx_r5.question.renderedImageWidth + "px")("height", ctx_r5.question.renderedImageHeight + "px")("object-fit", ctx_r5.question.imageFit);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r5.question.cssClasses.itemNoImageSvgIconId);
  }
}
function ImagePickerItemComponent_ng_template_0_span_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 11);
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r6.question.cssClasses.itemText);
    ɵɵproperty("model", ctx_r6.model.locText);
  }
}
function ImagePickerItemComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div")(1, "label")(2, "input", 1);
    ɵɵlistener("change", function ImagePickerItemComponent_ng_template_0_Template_input_change_2_listener($event) {
      ɵɵrestoreView(_r16);
      const ctx_r15 = ɵɵnextContext();
      return ɵɵresetView(ctx_r15.onChange($event));
    });
    ɵɵelementEnd();
    ɵɵelementStart(3, "div")(4, "div");
    ɵɵtemplate(5, ImagePickerItemComponent_ng_template_0_span_5_Template, 2, 3, "span", 2)(6, ImagePickerItemComponent_ng_template_0_img_6_Template, 1, 8, "img", 3)(7, ImagePickerItemComponent_ng_template_0_video_7_Template, 1, 7, "video", 4)(8, ImagePickerItemComponent_ng_template_0_div_8_Template, 2, 9, "div", 5);
    ɵɵelementEnd();
    ɵɵtemplate(9, ImagePickerItemComponent_ng_template_0_span_9_Template, 1, 3, "span", 6);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.question.getItemClass(ctx_r0.model));
    ɵɵadvance(1);
    ɵɵclassMap(ctx_r0.question.cssClasses.label);
    ɵɵadvance(1);
    ɵɵclassMap(ctx_r0.question.cssClasses.itemControl);
    ɵɵproperty("type", ctx_r0.question.inputType)("id", ctx_r0.question.getItemId(ctx_r0.model))("checked", ctx_r0.question.isItemSelected(ctx_r0.model))("disabled", !ctx_r0.question.getItemEnabled(ctx_r0.model));
    ɵɵattribute("name", ctx_r0.question.questionName)("value", ctx_r0.model.value)("aria-required", ctx_r0.question.ariaRequired)("aria-label", ctx_r0.question.ariaLabel)("aria-invalid", ctx_r0.question.ariaInvalid)("aria-describedby", ctx_r0.question.ariaDescribedBy);
    ɵɵadvance(1);
    ɵɵclassMap(ctx_r0.question.cssClasses.itemDecorator);
    ɵɵadvance(1);
    ɵɵclassMap(ctx_r0.question.cssClasses.imageContainer);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.question.cssClasses.checkedItemDecorator);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.model.locImageLink.renderedHtml && !ctx_r0.model.contentNotLoaded && ctx_r0.question.contentMode === "image");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.model.locImageLink.renderedHtml && !ctx_r0.model.contentNotLoaded && ctx_r0.question.contentMode === "video");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r0.model.locImageLink.renderedHtml || ctx_r0.model.contentNotLoaded);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.question.showLabel);
  }
}
function ImagePickerQuestionComponent_ng_container_4_ng_container_1_ng_template_1_Template(rf, ctx) {
}
function ImagePickerQuestionComponent_ng_container_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ImagePickerQuestionComponent_ng_container_4_ng_container_1_ng_template_1_Template, 0, 0, "ng-template", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("component", ɵɵpureFunction2(1, _c5, ctx_r3.getItemValueComponentName(item_r4), ctx_r3.getItemValueComponentData(item_r4)));
  }
}
function ImagePickerQuestionComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ImagePickerQuestionComponent_ng_container_4_ng_container_1_Template, 2, 4, "ng-container", 3);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r1.model.visibleChoices);
  }
}
function ImagePickerQuestionComponent_ng_container_5_div_1_ng_container_1_ng_template_1_Template(rf, ctx) {
}
function ImagePickerQuestionComponent_ng_container_5_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ImagePickerQuestionComponent_ng_container_5_div_1_ng_container_1_ng_template_1_Template, 0, 0, "ng-template", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const ctx_r8 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("component", ɵɵpureFunction2(1, _c5, ctx_r8.getItemValueComponentName(item_r9), ctx_r8.getItemValueComponentData(item_r9)));
  }
}
function ImagePickerQuestionComponent_ng_container_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 6);
    ɵɵtemplate(1, ImagePickerQuestionComponent_ng_container_5_div_1_ng_container_1_Template, 2, 4, "ng-container", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const column_r7 = ctx.$implicit;
    const ctx_r6 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r6.model.getColumnClass());
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", column_r7);
  }
}
function ImagePickerQuestionComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ImagePickerQuestionComponent_ng_container_5_div_1_Template, 2, 3, "div", 5);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r2.model.columns);
  }
}
function ButtonGroupItemComponent_ng_template_0__svg_svg_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 6);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r2.model.css.icon);
    ɵɵproperty("iconName", ctx_r2.model.iconName)("size", ctx_r2.model.iconSize);
  }
}
function ButtonGroupItemComponent_ng_template_0_span_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 7);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r3.model.css.caption);
    ɵɵproperty("model", ctx_r3.model.caption);
    ɵɵattribute("title", ctx_r3.model.caption.renderedHtml);
  }
}
function ButtonGroupItemComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "label", 1)(1, "input", 2);
    ɵɵlistener("ngModelChange", function ButtonGroupItemComponent_ng_template_0_Template_input_ngModelChange_1_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r4 = ɵɵnextContext();
      return ɵɵresetView(ctx_r4.question.renderedValue = $event);
    });
    ɵɵelementEnd();
    ɵɵelementStart(2, "div", 3);
    ɵɵtemplate(3, ButtonGroupItemComponent_ng_template_0__svg_svg_3_Template, 1, 4, "svg", 4)(4, ButtonGroupItemComponent_ng_template_0_span_4_Template, 1, 4, "span", 5);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.model.css.label);
    ɵɵattribute("title", ctx_r0.model.caption.renderedHtml);
    ɵɵadvance(1);
    ɵɵclassMap(ctx_r0.model.css.control);
    ɵɵproperty("disabled", ctx_r0.model.readOnly)("ngModel", ctx_r0.question.renderedValue)("value", ctx_r0.model.value);
    ɵɵattribute("name", ctx_r0.model.name)("id", ctx_r0.model.id)("aria-required", ctx_r0.model.isRequired)("aria-label", ctx_r0.model.caption.renderedHtml)("aria-invalid", ctx_r0.model.hasErrors)("aria-describedby", ctx_r0.model.describedBy)("value", ctx_r0.model.value);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r0.model.iconName);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.model.showCaption);
  }
}
function ButtonGroupQuestionComponent_sv_button_group_item_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "sv-button-group-item", 2);
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const index_r2 = ctx.index;
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("question", ctx_r0.model)("item", item_r1)("index", index_r2);
  }
}
function ComponentsContainerComponent_ng_template_0_ng_container_0_div_1_ng_container_1_ng_template_1_Template(rf, ctx) {
}
var _c37 = (a0, a1, a2) => ({
  survey: a0,
  container: a1,
  model: a2
});
function ComponentsContainerComponent_ng_template_0_ng_container_0_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ComponentsContainerComponent_ng_template_0_ng_container_0_div_1_ng_container_1_ng_template_1_Template, 0, 0, "ng-template", 5);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const component_r6 = ctx.$implicit;
    const ctx_r5 = ɵɵnextContext(4);
    ɵɵadvance(1);
    ɵɵproperty("component", ɵɵpureFunction2(5, _c5, component_r6.component, ɵɵpureFunction3(1, _c37, ctx_r5.survey, ctx_r5.container, component_r6.data)));
  }
}
function ComponentsContainerComponent_ng_template_0_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 3);
    ɵɵtemplate(1, ComponentsContainerComponent_ng_template_0_ng_container_0_div_1_ng_container_1_Template, 2, 8, "ng-container", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r4.components);
  }
}
function ComponentsContainerComponent_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ComponentsContainerComponent_ng_template_0_ng_container_0_div_1_Template, 2, 1, "div", 2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2.components.length > 0);
  }
}
function ComponentsContainerComponent_ng_template_0_ng_container_1_ng_container_1_ng_template_1_Template(rf, ctx) {
}
function ComponentsContainerComponent_ng_template_0_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ComponentsContainerComponent_ng_template_0_ng_container_1_ng_container_1_ng_template_1_Template, 0, 0, "ng-template", 5);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const component_r9 = ctx.$implicit;
    const ctx_r8 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("component", ɵɵpureFunction2(5, _c5, component_r9.component, ɵɵpureFunction3(1, _c37, ctx_r8.survey, ctx_r8.container, component_r9.data)));
  }
}
function ComponentsContainerComponent_ng_template_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ComponentsContainerComponent_ng_template_0_ng_container_1_ng_container_1_Template, 2, 8, "ng-container", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r3.components);
  }
}
function ComponentsContainerComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ComponentsContainerComponent_ng_template_0_ng_container_0_Template, 2, 1, "ng-container", 1)(1, ComponentsContainerComponent_ng_template_0_ng_container_1_Template, 2, 1, "ng-container", 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r0.isNeedRenderWrapper);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r0.isNeedRenderWrapper && ctx_r0.components.length > 0);
  }
}
function ActionBarItemComponent_ng_template_0__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 4);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r2.model.cssClasses.itemIcon);
    ɵɵproperty("iconName", ctx_r2.model.iconName)("size", ctx_r2.model.iconSize)("title", ctx_r2.model.tooltip || ctx_r2.model.title);
  }
}
function ActionBarItemComponent_ng_template_0_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r3.model.getActionBarItemTitleCss());
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r3.model.title);
  }
}
function ActionBarItemComponent_ng_template_0_ng_template_3_Template(rf, ctx) {
}
var _c38 = (a1) => ({
  processEsc: false,
  disableTabStop: a1
});
function ActionBarItemComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 1);
    ɵɵlistener("click", function ActionBarItemComponent_ng_template_0_Template_button_click_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r5 = ɵɵnextContext();
      return ɵɵresetView(ctx_r5.model.action(ctx_r5.model, ctx_r5.model.getIsTrusted($event)));
    });
    ɵɵtemplate(1, ActionBarItemComponent_ng_template_0__svg_svg_1_Template, 1, 5, "svg", 2)(2, ActionBarItemComponent_ng_template_0_span_2_Template, 2, 3, "span", 3);
    ɵɵelementEnd();
    ɵɵtemplate(3, ActionBarItemComponent_ng_template_0_ng_template_3_Template, 0, 0, "ng-template");
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.model.getActionBarItemCss());
    ɵɵproperty("key2click", ɵɵpureFunction1(10, _c38, ctx_r0.model.disableTabStop))("disabled", ctx_r0.model.disabled);
    ɵɵattribute("title", ctx_r0.model.tooltip || ctx_r0.model.title)("aria-checked", ctx_r0.model.ariaChecked)("aria-expanded", ctx_r0.model.ariaExpanded)("role", ctx_r0.model.ariaRole);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.model.iconName);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.model.hasTitle);
  }
}
function ActionBarItemDropdownComponent_ng_template_0__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 5);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r2.model.cssClasses.itemIcon);
    ɵɵproperty("iconName", ctx_r2.model.iconName)("size", ctx_r2.model.iconSize)("title", ctx_r2.model.tooltip || ctx_r2.model.title);
  }
}
function ActionBarItemDropdownComponent_ng_template_0_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r3.model.getActionBarItemTitleCss());
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r3.model.title);
  }
}
function ActionBarItemDropdownComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 1);
    ɵɵlistener("click", function ActionBarItemDropdownComponent_ng_template_0_Template_button_click_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r4 = ɵɵnextContext();
      return ɵɵresetView(ctx_r4.model.action(ctx_r4.model, ctx_r4.model.getIsTrusted($event)));
    });
    ɵɵtemplate(1, ActionBarItemDropdownComponent_ng_template_0__svg_svg_1_Template, 1, 5, "svg", 2)(2, ActionBarItemDropdownComponent_ng_template_0_span_2_Template, 2, 3, "span", 3);
    ɵɵelementEnd();
    ɵɵelement(3, "sv-ng-popup", 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.model.getActionBarItemCss());
    ɵɵproperty("key2click", ɵɵpureFunction1(10, _c38, ctx_r0.model.disableTabStop))("title", ctx_r0.model.tooltip || ctx_r0.model.title)("disabled", ctx_r0.model.disabled);
    ɵɵattribute("role", ctx_r0.model.ariaRole);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.model.iconName);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.model.hasTitle);
    ɵɵadvance(1);
    ɵɵproperty("popupModel", ctx_r0.model.popupModel)("getTarget", ctx_r0.getTarget);
  }
}
function SelectBaseItemComponent_ng_template_0_label_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function SelectBaseItemComponent_ng_template_0_label_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "label", 6);
    ɵɵtemplate(1, SelectBaseItemComponent_ng_template_0_label_2_ng_container_1_Template, 1, 0, "ng-container", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵnextContext();
    const _r5 = ɵɵreference(5);
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMap(ctx_r2.question.getLabelClass(ctx_r2.model));
    ɵɵproperty("model", ctx_r2.model)("question", ctx_r2.question);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r5);
  }
}
function SelectBaseItemComponent_ng_template_0_label_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function SelectBaseItemComponent_ng_template_0_label_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "label", 8);
    ɵɵlistener("mousedown", function SelectBaseItemComponent_ng_template_0_label_3_Template_label_mousedown_0_listener() {
      ɵɵrestoreView(_r9);
      const ctx_r8 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r8.question.onMouseDown());
    });
    ɵɵtemplate(1, SelectBaseItemComponent_ng_template_0_label_3_ng_container_1_Template, 1, 0, "ng-container", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵnextContext();
    const _r5 = ɵɵreference(5);
    const ctx_r3 = ɵɵnextContext();
    ɵɵclassMap(ctx_r3.question.getLabelClass(ctx_r3.model));
    ɵɵproperty("model", ctx_r3.model)("question", ctx_r3.question);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r5);
  }
}
function SelectBaseItemComponent_ng_template_0_ng_template_4_span_0__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "svg");
    ɵɵelement(1, "use");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r12 = ɵɵnextContext(4);
    ɵɵclassMap(ctx_r12.question.cssClasses.itemDecorator);
    ɵɵadvance(1);
    ɵɵattribute("href", ctx_r12.question.itemSvgIcon, null, "xlink");
  }
}
function SelectBaseItemComponent_ng_template_0_ng_template_4_span_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtemplate(1, SelectBaseItemComponent_ng_template_0_ng_template_4_span_0__svg_svg_1_Template, 2, 3, "svg", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r10 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r10.question.cssClasses.materialDecorator);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r10.question.itemSvgIcon);
  }
}
function SelectBaseItemComponent_ng_template_0_ng_template_4_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵelement(1, "sv-ng-string", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r11 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r11.question.getControlLabelClass(ctx_r11.model));
    ɵɵadvance(1);
    ɵɵproperty("model", ctx_r11.model.locText);
  }
}
function SelectBaseItemComponent_ng_template_0_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, SelectBaseItemComponent_ng_template_0_ng_template_4_span_0_Template, 2, 3, "span", 9)(1, SelectBaseItemComponent_ng_template_0_ng_template_4_span_1_Template, 2, 3, "span", 9);
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵproperty("ngIf", ctx_r4.question.cssClasses.materialDecorator);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r4.model.hideCaption);
  }
}
function SelectBaseItemComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵelementContainerStart(1, 2);
    ɵɵtemplate(2, SelectBaseItemComponent_ng_template_0_label_2_Template, 2, 5, "label", 3)(3, SelectBaseItemComponent_ng_template_0_label_3_Template, 2, 5, "label", 4);
    ɵɵelementContainerEnd();
    ɵɵtemplate(4, SelectBaseItemComponent_ng_template_0_ng_template_4_Template, 2, 2, "ng-template", null, 5, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.question.getItemClass(ctx_r0.model));
    ɵɵadvance(1);
    ɵɵproperty("ngSwitch", ctx_r0.inputType);
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "checkbox");
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "radio");
  }
}
function SkeletonComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("id", ctx_r0.element.id);
  }
}
function TimerPanelComponent_div_0__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 2);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r2.model.getProgressCss());
    ɵɵstyleProp("stroke-dasharray", ctx_r2.circleLength)("stroke-dashoffset", ctx_r2.progress);
    ɵɵproperty("size", "auto")("iconName", "icon-timercircle");
  }
}
function TimerPanelComponent_div_0_span_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r3.model.minorTextCss);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r3.model.clockMinorText);
  }
}
function TimerPanelComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, TimerPanelComponent_div_0__svg_svg_1_Template, 1, 8, "svg", 1);
    ɵɵelementStart(2, "div")(3, "span");
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵtemplate(5, TimerPanelComponent_div_0_span_5_Template, 2, 3, "span", 0);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.model.rootCss);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.model.showProgress);
    ɵɵadvance(1);
    ɵɵclassMap(ctx_r0.model.textContainerCss);
    ɵɵadvance(1);
    ɵɵclassMap(ctx_r0.model.majorTextCss);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r0.model.clockMajorText);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.model.clockMinorText);
  }
}
function TimerPanelComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.model.survey.getCss().timerRoot);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r1.model.text);
  }
}
function ListItemComponent_ng_template_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "div");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵclassMap(ctx_r2.listModel.cssClasses.itemSeparator);
  }
}
function ListItemComponent_ng_template_0_ng_container_3__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 5);
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r5.listModel.cssClasses.itemIcon);
    ɵɵproperty("iconName", ctx_r5.model.iconName)("size", ctx_r5.model.iconSize);
  }
}
function ListItemComponent_ng_template_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ListItemComponent_ng_template_0_ng_container_3__svg_svg_1_Template, 1, 4, "svg", 3);
    ɵɵelement(2, "sv-ng-string", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r3.model.iconName);
    ɵɵadvance(1);
    ɵɵproperty("model", ctx_r3.model.locTitle);
  }
}
function ListItemComponent_ng_template_0_ng_container_4_ng_template_1_Template(rf, ctx) {
}
function ListItemComponent_ng_template_0_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ListItemComponent_ng_template_0_ng_container_4_ng_template_1_Template, 0, 0, "ng-template", 6);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("component", ɵɵpureFunction2(3, _c5, ctx_r4.model.component, ɵɵpureFunction1(1, _c2, ctx_r4.model)));
  }
}
function ListItemComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 1);
    ɵɵlistener("click", function ListItemComponent_ng_template_0_Template_li_click_0_listener($event) {
      ɵɵrestoreView(_r8);
      const ctx_r7 = ɵɵnextContext();
      return ɵɵresetView(ctx_r7.click($event));
    })("pointerdown", function ListItemComponent_ng_template_0_Template_li_pointerdown_0_listener($event) {
      ɵɵrestoreView(_r8);
      const ctx_r9 = ɵɵnextContext();
      return ɵɵresetView(ctx_r9.pointerdown($event));
    });
    ɵɵtemplate(1, ListItemComponent_ng_template_0_ng_container_1_Template, 2, 2, "ng-container", 2);
    ɵɵelementStart(2, "div");
    ɵɵtemplate(3, ListItemComponent_ng_template_0_ng_container_3_Template, 3, 2, "ng-container", 2)(4, ListItemComponent_ng_template_0_ng_container_4_Template, 2, 6, "ng-container", 2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.class);
    ɵɵproperty("visible", ctx_r0.listModel.isItemVisible(ctx_r0.model));
    ɵɵattribute("id", ctx_r0.elementId)("aria-selected", ctx_r0.ariaSelected ? "true" : "false");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.model.needSeparator);
    ɵɵadvance(1);
    ɵɵclassMap(ctx_r0.listModel.cssClasses.itemBody);
    ɵɵstyleProp("padding-inline-start", ctx_r0.paddingLeft);
    ɵɵattribute("title", ctx_r0.model.locTitle.calculatedText);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r0.model.component);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.model.component);
  }
}
var _c39 = ["listContainerElement"];
function ListComponent_ng_template_0_div_2_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 8);
    ɵɵlistener("click", function ListComponent_ng_template_0_div_2_button_4_Template_button_click_0_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r6 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r6.model.onClickSearchClearButton($event));
    });
    ɵɵnamespaceSVG();
    ɵɵelement(1, "svg", 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r5.model.cssClasses.searchClearButtonIcon);
    ɵɵadvance(1);
    ɵɵproperty("iconName", "icon-searchclear")("size", "auto");
  }
}
function ListComponent_ng_template_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div")(1, "div");
    ɵɵnamespaceSVG();
    ɵɵelement(2, "svg", 5);
    ɵɵelementEnd();
    ɵɵnamespaceHTML();
    ɵɵelementStart(3, "input", 6);
    ɵɵlistener("ngModelChange", function ListComponent_ng_template_0_div_2_Template_input_ngModelChange_3_listener($event) {
      ɵɵrestoreView(_r9);
      const ctx_r8 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r8.model.filterString = $event);
    })("keyup", function ListComponent_ng_template_0_div_2_Template_input_keyup_3_listener($event) {
      ɵɵrestoreView(_r9);
      const ctx_r10 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r10.onGoToItems($event));
    });
    ɵɵelementEnd();
    ɵɵtemplate(4, ListComponent_ng_template_0_div_2_button_4_Template, 2, 4, "button", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r3.model.cssClasses.filter);
    ɵɵadvance(1);
    ɵɵclassMap(ctx_r3.model.cssClasses.filterIcon);
    ɵɵadvance(1);
    ɵɵproperty("iconName", "icon-search")("size", "auto");
    ɵɵadvance(1);
    ɵɵclassMap(ctx_r3.model.cssClasses.filterInput);
    ɵɵproperty("ngModel", ctx_r3.model.filterString);
    ɵɵattribute("aria-label", ctx_r3.model.filterStringPlaceholder || "")("placeholder", ctx_r3.model.filterStringPlaceholder || "");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r3.model.showSearchClearButton && !!ctx_r3.model.filterString);
  }
}
function ListComponent_ng_template_0_ul_6_sv_ng_list_item_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "sv-ng-list-item", 11);
  }
  if (rf & 2) {
    const item_r12 = ctx.$implicit;
    const ctx_r11 = ɵɵnextContext(3);
    ɵɵproperty("listModel", ctx_r11.model)("model", item_r12);
  }
}
function ListComponent_ng_template_0_ul_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ul", 9);
    ɵɵlistener("mousedown", function ListComponent_ng_template_0_ul_6_Template_ul_mousedown_0_listener($event) {
      ɵɵrestoreView(_r14);
      const ctx_r13 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r13.onMouseDown($event));
    })("keydown", function ListComponent_ng_template_0_ul_6_Template_ul_keydown_0_listener($event) {
      ɵɵrestoreView(_r14);
      const ctx_r15 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r15.onKeyDown($event));
    })("mousemove", function ListComponent_ng_template_0_ul_6_Template_ul_mousemove_0_listener($event) {
      ɵɵrestoreView(_r14);
      const ctx_r16 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r16.onMouseMove($event));
    });
    ɵɵtemplate(1, ListComponent_ng_template_0_ul_6_sv_ng_list_item_1_Template, 1, 2, "sv-ng-list-item", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r4.model.getListClass());
    ɵɵproperty("visible", !ctx_r4.model.isEmpty);
    ɵɵattribute("id", ctx_r4.model.elementId);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r4.model.renderedActions)("ngForTrackBy", ctx_r4.trackItemBy);
  }
}
function ListComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", null, 1);
    ɵɵtemplate(2, ListComponent_ng_template_0_div_2_Template, 5, 12, "div", 2);
    ɵɵelementStart(3, "div", 3)(4, "div");
    ɵɵtext(5);
    ɵɵelementEnd()();
    ɵɵtemplate(6, ListComponent_ng_template_0_ul_6_Template, 2, 6, "ul", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.model.cssClasses.root);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r0.model.showFilter);
    ɵɵadvance(1);
    ɵɵclassMap(ctx_r0.model.cssClasses.emptyContainer);
    ɵɵproperty("visible", ctx_r0.model.isEmpty);
    ɵɵadvance(1);
    ɵɵclassMap(ctx_r0.model.cssClasses.emptyText);
    ɵɵattribute("aria-label", ctx_r0.model.emptyMessage || "");
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r0.model.emptyMessage);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.model.renderElements);
  }
}
function RatingItemComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "label", 1);
    ɵɵlistener("mousedown", function RatingItemComponent_ng_template_0_Template_label_mousedown_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.model.onMouseDown());
    });
    ɵɵelementStart(1, "input", 2);
    ɵɵlistener("click", function RatingItemComponent_ng_template_0_Template_input_click_1_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r4 = ɵɵnextContext();
      return ɵɵresetView(ctx_r4.onClick($event));
    });
    ɵɵelementEnd();
    ɵɵelement(2, "span", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.model.getItemClassByText(ctx_r0.item.itemValue, ctx_r0.item.text));
    ɵɵadvance(1);
    ɵɵproperty("value", ctx_r0.item.value)("disabled", ctx_r0.model.isInputReadOnly)("checked", ctx_r0.model.value === ctx_r0.item.value);
    ɵɵattribute("name", ctx_r0.model.name)("id", ctx_r0.model.getInputId(ctx_r0.index))("aria-required", ctx_r0.model.ariaRequired)("aria-label", ctx_r0.model.ariaLabel)("aria-invalid", ctx_r0.model.ariaInvalid)("aria-describedby", ctx_r0.model.ariaDescribedBy);
    ɵɵadvance(1);
    ɵɵclassMap(ctx_r0.model.cssClasses.itemText);
    ɵɵproperty("model", ctx_r0.item.locText);
  }
}
function RatingItemStarComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "label", 1);
    ɵɵlistener("mouseover", function RatingItemStarComponent_ng_template_0_Template_label_mouseover_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.model.onItemMouseIn(ctx_r2.item));
    })("mouseout", function RatingItemStarComponent_ng_template_0_Template_label_mouseout_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r4 = ɵɵnextContext();
      return ɵɵresetView(ctx_r4.model.onItemMouseOut(ctx_r4.item));
    })("mousedown", function RatingItemStarComponent_ng_template_0_Template_label_mousedown_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r5 = ɵɵnextContext();
      return ɵɵresetView(ctx_r5.model.onMouseDown());
    });
    ɵɵelementStart(1, "input", 2);
    ɵɵlistener("click", function RatingItemStarComponent_ng_template_0_Template_input_click_1_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r6 = ɵɵnextContext();
      return ɵɵresetView(ctx_r6.onClick($event));
    });
    ɵɵelementEnd();
    ɵɵnamespaceSVG();
    ɵɵelement(2, "svg", 3)(3, "svg", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.model.getItemClass(ctx_r0.item.itemValue, ctx_r0.item.highlight));
    ɵɵadvance(1);
    ɵɵproperty("value", ctx_r0.item.value)("disabled", ctx_r0.model.isInputReadOnly)("checked", ctx_r0.model.value === ctx_r0.item.value);
    ɵɵattribute("name", ctx_r0.model.name)("id", ctx_r0.model.getInputId(ctx_r0.index))("aria-required", ctx_r0.model.ariaRequired)("aria-label", ctx_r0.model.ariaLabel)("aria-invalid", ctx_r0.model.ariaInvalid)("aria-describedby", ctx_r0.model.ariaDescribedBy);
    ɵɵadvance(1);
    ɵɵclassMap("sv-star");
    ɵɵproperty("iconName", ctx_r0.model.itemStarIcon)("size", "auto")("title", ctx_r0.item.text);
    ɵɵadvance(1);
    ɵɵclassMap("sv-star-2");
    ɵɵproperty("iconName", ctx_r0.model.itemStarIconAlt)("size", "auto")("title", ctx_r0.item.text);
  }
}
function RatingItemSmileyComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "label", 1);
    ɵɵlistener("mouseover", function RatingItemSmileyComponent_ng_template_0_Template_label_mouseover_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.model.onItemMouseIn(ctx_r2.item));
    })("mouseout", function RatingItemSmileyComponent_ng_template_0_Template_label_mouseout_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r4 = ɵɵnextContext();
      return ɵɵresetView(ctx_r4.model.onItemMouseOut(ctx_r4.item));
    })("mousedown", function RatingItemSmileyComponent_ng_template_0_Template_label_mousedown_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r5 = ɵɵnextContext();
      return ɵɵresetView(ctx_r5.model.onMouseDown());
    });
    ɵɵelementStart(1, "input", 2);
    ɵɵlistener("click", function RatingItemSmileyComponent_ng_template_0_Template_input_click_1_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r6 = ɵɵnextContext();
      return ɵɵresetView(ctx_r6.onClick($event));
    });
    ɵɵelementEnd();
    ɵɵnamespaceSVG();
    ɵɵelement(2, "svg", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵstyleMap(ctx_r0.model.getItemStyle(ctx_r0.item.itemValue, ctx_r0.item.highlight));
    ɵɵclassMap(ctx_r0.model.getItemClass(ctx_r0.item.itemValue, ctx_r0.item.highlight));
    ɵɵadvance(1);
    ɵɵproperty("value", ctx_r0.item.value)("disabled", ctx_r0.model.isInputReadOnly)("checked", ctx_r0.model.value === ctx_r0.item.value);
    ɵɵattribute("name", ctx_r0.model.name)("id", ctx_r0.model.getInputId(ctx_r0.index))("aria-required", ctx_r0.model.ariaRequired)("aria-label", ctx_r0.model.ariaLabel)("aria-invalid", ctx_r0.model.ariaInvalid)("aria-describedby", ctx_r0.model.ariaDescribedBy);
    ɵɵadvance(1);
    ɵɵproperty("iconName", ctx_r0.model.getItemSmileyIconName(ctx_r0.item.itemValue))("size", "auto")("title", ctx_r0.item.text);
  }
}
function BooleanCheckboxComponent__svg_svg_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "svg");
    ɵɵelement(1, "use");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.model.cssClasses.checkboxItemDecorator);
    ɵɵadvance(1);
    ɵɵattribute("href", ctx_r0.model.svgIcon, null, "xlink");
  }
}
function BooleanCheckboxComponent_span_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 5);
    ɵɵelement(1, "sv-ng-element-title-actions", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.model.cssClasses.checkboxControlLabel);
    ɵɵproperty("id", ctx_r1.model.labelRenderedAriaID);
    ɵɵadvance(1);
    ɵɵproperty("element", ctx_r1.model);
  }
}
function BooleanCheckboxComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 7);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMap(ctx_r2.model.cssDescription);
    ɵɵproperty("model", ctx_r2.model.locDescription);
  }
}
function BooleanRadioItemComponent_span_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span");
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.question.cssClasses.materialRadioDecorator);
  }
}
function ProgressDefaultComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div")(1, "div", 1)(2, "span");
    ɵɵtext(3);
    ɵɵelementEnd()();
    ɵɵelementStart(4, "span");
    ɵɵtext(5);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.model.getProgressCssClasses(ctx_r0.container));
    ɵɵadvance(1);
    ɵɵclassMap(ctx_r0.model.css.progressBar);
    ɵɵstyleProp("width", ctx_r0.model.progressValue + "%");
    ɵɵadvance(1);
    ɵɵclassMap(ctx_r0.getProgressTextInBarCss(ctx_r0.model.css));
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r0.model.progressText, " ");
    ɵɵadvance(1);
    ɵɵclassMap(ctx_r0.getProgressTextUnderBarCss(ctx_r0.model.css));
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r0.model.progressText, " ");
  }
}
var _c40 = ["progressButtonsListContainer"];
function ProgressButtonsComponent_li_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 3);
    ɵɵlistener("click", function ProgressButtonsComponent_li_6_Template_li_click_0_listener() {
      const restoredCtx = ɵɵrestoreView(_r5);
      const index_r3 = restoredCtx.index;
      const ctx_r4 = ɵɵnextContext();
      return ɵɵresetView(ctx_r4.isListElementClickable(index_r3) ? ctx_r4.clickListElement(index_r3) : null);
    });
    ɵɵelementStart(1, "div", 4);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "div", 4);
    ɵɵtext(4);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const page_r2 = ctx.$implicit;
    const index_r3 = ctx.index;
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.getListElementCss(index_r3));
    ɵɵadvance(1);
    ɵɵclassMap(ctx_r1.model.css.progressButtonsPageTitle);
    ɵɵproperty("title", page_r2.renderedNavigationTitle);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", page_r2.renderedNavigationTitle, " ");
    ɵɵadvance(1);
    ɵɵclassMap(ctx_r1.model.css.progressButtonsPageDescription);
    ɵɵproperty("title", page_r2.locNavigationDescription.renderedHtml);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", page_r2.locNavigationDescription.renderedHtml, " ");
  }
}
function ProgressTocComponent_ng_template_0_sv_ng_list_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "sv-ng-list", 3);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("model", ctx_r2.tocModel.listModel);
  }
}
function ProgressTocComponent_ng_template_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 4);
    ɵɵlistener("click", function ProgressTocComponent_ng_template_0_div_2_Template_div_click_0_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r4 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r4.tocModel.togglePopup());
    });
    ɵɵnamespaceSVG();
    ɵɵelement(1, "svg", 5);
    ɵɵnamespaceHTML();
    ɵɵelement(2, "sv-ng-popup", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("iconName", ctx_r3.tocModel.icon)("size", 24);
    ɵɵadvance(1);
    ɵɵproperty("popupModel", ctx_r3.tocModel.popupModel);
  }
}
function ProgressTocComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, ProgressTocComponent_ng_template_0_sv_ng_list_1_Template, 1, 1, "sv-ng-list", 1)(2, ProgressTocComponent_ng_template_0_div_2_Template, 3, 3, "div", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.tocModel.containerCss);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r0.tocModel.isMobile);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.tocModel.isMobile);
  }
}
var _c41 = ["panelContainer"];
function PanelComponent_ng_template_0_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 7);
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(3);
    ɵɵproperty("element", ctx_r4.model);
  }
}
function PanelComponent_ng_template_0_div_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 8);
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(3);
    ɵɵproperty("element", ctx_r5.model);
  }
}
function PanelComponent_ng_template_0_div_0_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 7);
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext(3);
    ɵɵproperty("element", ctx_r6.model);
  }
}
function PanelComponent_ng_template_0_div_0_div_5_ng_container_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "sv-ng-row", 12);
  }
  if (rf & 2) {
    const row_r9 = ɵɵnextContext().$implicit;
    ɵɵproperty("row", row_r9);
  }
}
function PanelComponent_ng_template_0_div_0_div_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PanelComponent_ng_template_0_div_0_div_5_ng_container_1_ng_template_1_Template, 1, 1, "ng-template", 11);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const row_r9 = ctx.$implicit;
    const ctx_r8 = ɵɵnextContext(4);
    ɵɵadvance(1);
    ɵɵproperty("component", ɵɵpureFunction2(3, _c5, ctx_r8.model.survey.getRowWrapperComponentName(row_r9), ɵɵpureFunction1(1, _c12, ctx_r8.model.survey.getRowWrapperComponentData(row_r9))));
  }
}
function PanelComponent_ng_template_0_div_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, PanelComponent_ng_template_0_div_0_div_5_ng_container_1_Template, 2, 6, "ng-container", 9);
    ɵɵelement(2, "sv-ng-action-bar", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r7.model.cssClasses.panel.content);
    ɵɵstyleProp("padding-left", ctx_r7.model.innerPaddingLeft);
    ɵɵattribute("id", ctx_r7.model.contentId);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r7.model.rows)("ngForTrackBy", ctx_r7.trackRowBy);
    ɵɵadvance(1);
    ɵɵproperty("model", ctx_r7.model.getFooterToolbar());
  }
}
function PanelComponent_ng_template_0_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 2, 3);
    ɵɵlistener("focusin", function PanelComponent_ng_template_0_div_0_Template_div_focusin_0_listener() {
      ɵɵrestoreView(_r13);
      const ctx_r12 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r12.model.focusIn());
    });
    ɵɵtemplate(2, PanelComponent_ng_template_0_div_0_div_2_Template, 1, 1, "div", 4)(3, PanelComponent_ng_template_0_div_0_div_3_Template, 1, 1, "div", 5)(4, PanelComponent_ng_template_0_div_0_div_4_Template, 1, 1, "div", 4)(5, PanelComponent_ng_template_0_div_0_div_5_Template, 3, 8, "div", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r2.model.getContainerCss());
    ɵɵattribute("id", ctx_r2.model.id);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r2.model.showErrorsAbovePanel && ctx_r2.model.hasVisibleErrors);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2.model.hasDescription || ctx_r2.model.hasTitle);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r2.model.showErrorsAbovePanel && ctx_r2.model.hasVisibleErrors);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r2.model.isCollapsed);
  }
}
function PanelComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PanelComponent_ng_template_0_div_0_Template, 6, 7, "div", 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngIf", !!ctx_r0.model && ctx_r0.model.isVisible);
  }
}
function SurveyNavigationButton_input_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "input", 1);
    ɵɵlistener("mousedown", function SurveyNavigationButton_input_0_Template_input_mousedown_0_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.buttonMouseDown());
    })("click", function SurveyNavigationButton_input_0_Template_input_click_0_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.model.action());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.model.innerCss);
    ɵɵproperty("value", ctx_r0.model.title)("disabled", ctx_r0.model.disabled);
    ɵɵattribute("title", ctx_r0.model.getTooltip());
  }
}
function FilePreviewComponent_ng_template_0_ng_container_0_span_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div")(1, "a", 8);
    ɵɵlistener("click", function FilePreviewComponent_ng_template_0_ng_container_0_span_2_div_1_Template_a_click_1_listener($event) {
      ɵɵrestoreView(_r13);
      const val_r4 = ɵɵnextContext().$implicit;
      const ctx_r11 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r11.question.doDownloadFile($event, val_r4));
    });
    ɵɵpipe(2, "safeUrl");
    ɵɵtext(3);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const val_r4 = ɵɵnextContext().$implicit;
    const ctx_r6 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r6.question.cssClasses.fileSign);
    ɵɵadvance(1);
    ɵɵstyleProp("width", ctx_r6.question.imageWidth);
    ɵɵattribute("href", ɵɵpipeBind1(2, 8, val_r4.content), ɵɵsanitizeUrl)("title", val_r4.name)("download", val_r4.name);
    ɵɵadvance(2);
    ɵɵtextInterpolate(val_r4.name);
  }
}
function FilePreviewComponent_ng_template_0_ng_container_0_span_2_img_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "img", 9);
    ɵɵpipe(1, "safeUrl");
  }
  if (rf & 2) {
    const val_r4 = ɵɵnextContext().$implicit;
    const ctx_r7 = ɵɵnextContext(3);
    ɵɵstyleProp("height", ctx_r7.question.imageHeight)("width", ctx_r7.question.imageWidth);
    ɵɵattribute("src", ɵɵpipeBind1(1, 5, val_r4.content), ɵɵsanitizeUrl);
  }
}
function FilePreviewComponent_ng_template_0_ng_container_0_span_2__svg_svg_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 10);
  }
  if (rf & 2) {
    const ctx_r8 = ɵɵnextContext(4);
    ɵɵproperty("iconName", ctx_r8.question.cssClasses.defaultImageIconId)("partCss", ctx_r8.question.cssClasses.defaultImage)("size", "auto");
  }
}
function FilePreviewComponent_ng_template_0_ng_container_0_span_2_div_5__svg_svg_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 12);
  }
  if (rf & 2) {
    const ctx_r16 = ɵɵnextContext(5);
    ɵɵproperty("title", ctx_r16.question.removeFileCaption)("partCss", ctx_r16.question.cssClasses.removeFileSvg)("iconName", ctx_r16.question.cssClasses.removeFileSvgIconId)("size", "auto");
  }
}
function FilePreviewComponent_ng_template_0_ng_container_0_span_2_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 8);
    ɵɵlistener("click", function FilePreviewComponent_ng_template_0_ng_container_0_span_2_div_5_Template_div_click_0_listener() {
      ɵɵrestoreView(_r19);
      const val_r4 = ɵɵnextContext().$implicit;
      const ctx_r17 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r17.question.doRemoveFile(val_r4));
    });
    ɵɵelementStart(1, "span");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵtemplate(3, FilePreviewComponent_ng_template_0_ng_container_0_span_2_div_5__svg_svg_3_Template, 1, 4, "svg", 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r9 = ɵɵnextContext(4);
    ɵɵclassMap(ctx_r9.question.getRemoveButtonCss());
    ɵɵadvance(1);
    ɵɵclassMap(ctx_r9.question.cssClasses.removeFile);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r9.question.removeFileCaption);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r9.question.cssClasses.removeFileSvgIconId);
  }
}
function FilePreviewComponent_ng_template_0_ng_container_0_span_2_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div")(1, "a", 8);
    ɵɵlistener("click", function FilePreviewComponent_ng_template_0_ng_container_0_span_2_div_6_Template_a_click_1_listener($event) {
      ɵɵrestoreView(_r22);
      const val_r4 = ɵɵnextContext().$implicit;
      const ctx_r20 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r20.question.doDownloadFile($event, val_r4));
    });
    ɵɵpipe(2, "safeUrl");
    ɵɵtext(3);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const val_r4 = ɵɵnextContext().$implicit;
    const ctx_r10 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r10.question.cssClasses.fileSignBottom);
    ɵɵadvance(1);
    ɵɵstyleProp("width", ctx_r10.question.imageWidth);
    ɵɵattribute("href", ɵɵpipeBind1(2, 8, val_r4.content), ɵɵsanitizeUrl)("title", val_r4.name)("download", val_r4.name);
    ɵɵadvance(2);
    ɵɵtextInterpolate(val_r4.name);
  }
}
function FilePreviewComponent_ng_template_0_ng_container_0_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 3);
    ɵɵtemplate(1, FilePreviewComponent_ng_template_0_ng_container_0_span_2_div_1_Template, 4, 10, "div", 4);
    ɵɵelementStart(2, "div");
    ɵɵtemplate(3, FilePreviewComponent_ng_template_0_ng_container_0_span_2_img_3_Template, 2, 7, "img", 5)(4, FilePreviewComponent_ng_template_0_ng_container_0_span_2__svg_svg_4_Template, 1, 3, "svg", 6)(5, FilePreviewComponent_ng_template_0_ng_container_0_span_2_div_5_Template, 4, 6, "div", 7);
    ɵɵelementEnd();
    ɵɵtemplate(6, FilePreviewComponent_ng_template_0_ng_container_0_span_2_div_6_Template, 4, 10, "div", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const val_r4 = ctx.$implicit;
    const index_r5 = ctx.index;
    const ctx_r3 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r3.question.cssClasses.preview);
    ɵɵproperty("visible", val_r4 && ctx_r3.question.isPreviewVisible(index_r5));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", val_r4.name && ctx_r3.question.cssClasses.fileSign);
    ɵɵadvance(1);
    ɵɵclassMap(ctx_r3.question.getImageWrapperCss(val_r4));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r3.question.canPreviewImage(val_r4));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r3.question.defaultImage(val_r4));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", val_r4.name && !ctx_r3.question.isReadOnly);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", val_r4.name && ctx_r3.question.cssClasses.fileSignBottom);
  }
}
function FilePreviewComponent_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div");
    ɵɵtemplate(2, FilePreviewComponent_ng_template_0_ng_container_0_span_2_Template, 7, 10, "span", 2);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵclassMap(ctx_r2.question.cssClasses.fileList || void 0);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r2.question.previewValue)("ngForTrackBy", ctx_r2.trackFilesFn);
  }
}
function FilePreviewComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, FilePreviewComponent_ng_template_0_ng_container_0_Template, 3, 4, "ng-container", 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r0.question.showPreviewContainer);
  }
}
function MatrixQuestionComponent_ng_template_0_thead_6_td_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "td");
  }
}
function MatrixQuestionComponent_ng_template_0_thead_6_th_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "sv-ng-string", 7);
  }
  if (rf & 2) {
    const column_r7 = ɵɵnextContext().$implicit;
    ɵɵproperty("model", column_r7.locText);
  }
}
var _c42 = (a0, a1) => ({
  minWidth: a0,
  width: a1
});
function MatrixQuestionComponent_ng_template_0_thead_6_th_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "th");
    ɵɵtemplate(1, MatrixQuestionComponent_ng_template_0_thead_6_th_3_ng_template_1_Template, 1, 1, "ng-template", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const column_r7 = ctx.$implicit;
    const ctx_r6 = ɵɵnextContext(3);
    ɵɵstyleMap(ɵɵpureFunction2(5, _c42, ctx_r6.model.columnMinWidth, ctx_r6.model.columnMinWidth));
    ɵɵclassMap(ctx_r6.model.cssClasses.headerCell);
    ɵɵadvance(1);
    ɵɵproperty("component", ɵɵpureFunction2(10, _c5, ctx_r6.model.getColumnHeaderWrapperComponentName(column_r7), ɵɵpureFunction1(8, _c12, ctx_r6.model.getColumnHeaderWrapperComponentData(column_r7))));
  }
}
function MatrixQuestionComponent_ng_template_0_thead_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "thead")(1, "tr");
    ɵɵtemplate(2, MatrixQuestionComponent_ng_template_0_thead_6_td_2_Template, 1, 0, "td", 3)(3, MatrixQuestionComponent_ng_template_0_thead_6_th_3_Template, 2, 13, "th", 5);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r3.model.hasRows);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r3.model.visibleColumns);
  }
}
function MatrixQuestionComponent_ng_template_0_tr_8_td_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "sv-ng-string", 7);
  }
  if (rf & 2) {
    const row_r10 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("model", row_r10.locText);
  }
}
function MatrixQuestionComponent_ng_template_0_tr_8_td_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td");
    ɵɵtemplate(1, MatrixQuestionComponent_ng_template_0_tr_8_td_1_ng_template_1_Template, 1, 1, "ng-template", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const row_r10 = ɵɵnextContext().$implicit;
    const ctx_r11 = ɵɵnextContext(2);
    ɵɵstyleMap(ɵɵpureFunction2(5, _c42, ctx_r11.model.rowTitleWidth, ctx_r11.model.rowTitleWidth));
    ɵɵclassMap(ctx_r11.model.cssClasses.rowTextCell);
    ɵɵadvance(1);
    ɵɵproperty("component", ɵɵpureFunction2(10, _c5, ctx_r11.model.getRowHeaderWrapperComponentName(row_r10), ɵɵpureFunction1(8, _c12, ctx_r11.model.getRowHeaderWrapperComponentData(row_r10))));
  }
}
function MatrixQuestionComponent_ng_template_0_tr_8_ng_container_2_td_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "td", 10);
    ɵɵlistener("click", function MatrixQuestionComponent_ng_template_0_tr_8_ng_container_2_td_1_Template_td_click_0_listener() {
      const restoredCtx = ɵɵrestoreView(_r21);
      const column_r18 = restoredCtx.$implicit;
      const row_r10 = ɵɵnextContext(2).$implicit;
      const ctx_r19 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r19.onChange(row_r10, column_r18));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const column_r18 = ctx.$implicit;
    const row_r10 = ɵɵnextContext(2).$implicit;
    const ctx_r17 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r17.model.getItemClass(row_r10, column_r18));
    ɵɵproperty("model", ctx_r17.model.getCellDisplayLocText(row_r10.name, column_r18));
  }
}
function MatrixQuestionComponent_ng_template_0_tr_8_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, MatrixQuestionComponent_ng_template_0_tr_8_ng_container_2_td_1_Template, 1, 3, "td", 9);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r12 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r12.model.visibleColumns);
  }
}
function MatrixQuestionComponent_ng_template_0_tr_8_ng_container_3_td_1__svg_svg_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "svg");
    ɵɵelement(1, "use");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r26 = ɵɵnextContext(5);
    ɵɵclassMap(ctx_r26.model.cssClasses.itemDecorator);
    ɵɵadvance(1);
    ɵɵattribute("href", ctx_r26.model.itemSvgIcon, null, "xlink");
  }
}
function MatrixQuestionComponent_ng_template_0_tr_8_ng_container_3_td_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "td")(1, "label", 11);
    ɵɵlistener("mousedown", function MatrixQuestionComponent_ng_template_0_tr_8_ng_container_3_td_1_Template_label_mousedown_1_listener() {
      ɵɵrestoreView(_r28);
      const ctx_r27 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r27.model.onMouseDown());
    });
    ɵɵelementStart(2, "input", 12);
    ɵɵlistener("change", function MatrixQuestionComponent_ng_template_0_tr_8_ng_container_3_td_1_Template_input_change_2_listener() {
      const restoredCtx = ɵɵrestoreView(_r28);
      const column_r24 = restoredCtx.$implicit;
      const row_r10 = ɵɵnextContext(2).$implicit;
      const ctx_r29 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r29.onChange(row_r10, column_r24));
    });
    ɵɵelementEnd();
    ɵɵelementStart(3, "span");
    ɵɵtemplate(4, MatrixQuestionComponent_ng_template_0_tr_8_ng_container_3_td_1__svg_svg_4_Template, 2, 3, "svg", 13);
    ɵɵelementEnd();
    ɵɵelement(5, "span", 14);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const column_r24 = ctx.$implicit;
    const columnIndex_r25 = ctx.index;
    const row_r10 = ɵɵnextContext(2).$implicit;
    const ctx_r23 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r23.model.cssClasses.cell);
    ɵɵattribute("data-responsive-title", column_r24.locText.renderedHtml);
    ɵɵadvance(1);
    ɵɵclassMap(ctx_r23.model.getItemClass(row_r10, column_r24));
    ɵɵadvance(1);
    ɵɵclassMap(ctx_r23.model.cssClasses.itemValue);
    ɵɵproperty("name", row_r10.fullName)("value", column_r24.value)("checked", row_r10.value === column_r24.value)("disabled", ctx_r23.model.isInputReadOnly);
    ɵɵattribute("id", ctx_r23.model.inputId + "_" + row_r10.name + "_" + columnIndex_r25)("aria-required", ctx_r23.model.ariaRequired)("aria-label", ctx_r23.model.getCellAriaLabel(row_r10.locText.renderedHtml, column_r24.locText.renderedHtml))("aria-invalid", ctx_r23.model.ariaInvalid)("aria-describedby", ctx_r23.model.ariaDescribedBy);
    ɵɵadvance(1);
    ɵɵclassMap(ctx_r23.model.cssClasses.materialDecorator);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r23.model.itemSvgIcon);
    ɵɵadvance(1);
    ɵɵclassMap(ctx_r23.model.cssClasses.cellResponsiveTitle);
    ɵɵproperty("visible", ctx_r23.model.isMobile)("model", column_r24.locText);
  }
}
function MatrixQuestionComponent_ng_template_0_tr_8_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, MatrixQuestionComponent_ng_template_0_tr_8_ng_container_3_td_1_Template, 6, 23, "td", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r13 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r13.model.visibleColumns)("ngForTrackBy", ctx_r13.trackColumnByFn);
  }
}
function MatrixQuestionComponent_ng_template_0_tr_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tr");
    ɵɵtemplate(1, MatrixQuestionComponent_ng_template_0_tr_8_td_1_Template, 2, 13, "td", 8)(2, MatrixQuestionComponent_ng_template_0_tr_8_ng_container_2_Template, 2, 1, "ng-container", 3)(3, MatrixQuestionComponent_ng_template_0_tr_8_ng_container_3_Template, 2, 2, "ng-container", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const row_r10 = ctx.$implicit;
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵclassMap(row_r10.rowClasses || void 0);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r4.model.hasRows);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r4.model.hasCellText);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r4.model.hasCellText);
  }
}
function MatrixQuestionComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", null, 1)(2, "fieldset")(3, "legend", 2);
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementStart(5, "table");
    ɵɵtemplate(6, MatrixQuestionComponent_ng_template_0_thead_6_Template, 4, 2, "thead", 3);
    ɵɵelementStart(7, "tbody");
    ɵɵtemplate(8, MatrixQuestionComponent_ng_template_0_tr_8_Template, 4, 5, "tr", 4);
    ɵɵelementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.model.cssClasses.tableWrapper);
    ɵɵadvance(4);
    ɵɵtextInterpolate(ctx_r0.model.locTitle.renderedHtml);
    ɵɵadvance(1);
    ɵɵclassMap(ctx_r0.model.getTableCss());
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.model.showHeader);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r0.model.visibleRows)("ngForTrackBy", ctx_r0.trackRowByFn);
  }
}
function ChooseFileBtn_ng_template_0__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 3);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("title", ctx_r2.question.chooseButtonText)("iconName", ctx_r2.question.cssClasses.chooseFileIconId)("size", "auto");
  }
}
function ChooseFileBtn_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "label", 1);
    ɵɵtemplate(1, ChooseFileBtn_ng_template_0__svg_svg_1_Template, 1, 3, "svg", 2);
    ɵɵelementStart(2, "span");
    ɵɵtext(3);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.question.getChooseFileCss());
    ɵɵattribute("for", ctx_r0.question.inputId)("aria-label", ctx_r0.question.chooseButtonText);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.question.cssClasses.chooseFileIconId);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r0.question.chooseButtonText);
  }
}
function LoadingIndicatorComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵnamespaceSVG();
    ɵɵelement(1, "svg", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance(1);
    ɵɵproperty("iconName", "icon-loading")("size", "auto");
  }
}
function FileQuestionComponent_input_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "input", 9);
    ɵɵlistener("change", function FileQuestionComponent_input_2_Template_input_change_0_listener($event) {
      ɵɵrestoreView(_r15);
      const ctx_r14 = ɵɵnextContext();
      return ɵɵresetView(ctx_r14.model.doChange($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.model.cssClasses.fileInput);
    ɵɵattribute("id", ctx_r1.model.inputId)("aria-required", ctx_r1.model.ariaRequired)("aria-label", ctx_r1.model.ariaLabel)("aria-invalid", ctx_r1.model.ariaInvalid)("aria-describedby", ctx_r1.model.ariaDescribedBy)("multiple", ctx_r1.model.multipleRendered)("title", ctx_r1.model.inputTitle)("accept", ctx_r1.model.acceptedTypes)("capture", ctx_r1.model.renderCapture);
  }
}
function FileQuestionComponent_input_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "input", 10);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMap(ctx_r2.model.getReadOnlyFileCss());
    ɵɵattribute("id", ctx_r2.model.inputId)("multiple", ctx_r2.model.multipleRendered)("placeholder", ctx_r2.model.title);
  }
}
var _c43 = (a0) => ({
  question: a0
});
function FileQuestionComponent_div_5_sv_ng_choose_file_btn_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "sv-ng-choose-file-btn", 13);
  }
  if (rf & 2) {
    const ctx_r16 = ɵɵnextContext(2);
    ɵɵproperty("data", ɵɵpureFunction1(1, _c43, ctx_r16.model));
  }
}
function FileQuestionComponent_div_5_sv_ng_action_bar_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "sv-ng-action-bar", 14);
  }
  if (rf & 2) {
    const ctx_r17 = ɵɵnextContext(2);
    ɵɵproperty("model", ctx_r17.model.actionsContainer);
  }
}
function FileQuestionComponent_div_5_span_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r18 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r18.model.cssClasses.noFileChosen);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r18.model.noFileChosenCaption);
  }
}
function FileQuestionComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵelement(1, "span", 11);
    ɵɵelementStart(2, "div");
    ɵɵtemplate(3, FileQuestionComponent_div_5_sv_ng_choose_file_btn_3_Template, 1, 3, "sv-ng-choose-file-btn", 12)(4, FileQuestionComponent_div_5_sv_ng_action_bar_4_Template, 1, 1, "sv-ng-action-bar", 6)(5, FileQuestionComponent_div_5_span_5_Template, 2, 3, "span", 4);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵclassMap(ctx_r3.model.getFileDecoratorCss());
    ɵɵadvance(1);
    ɵɵclassMap(ctx_r3.model.cssClasses.dragAreaPlaceholder);
    ɵɵproperty("model", ctx_r3.model.locRenderedPlaceholder);
    ɵɵadvance(1);
    ɵɵclassMap(ctx_r3.model.cssClasses.wrapper);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r3.model.showChooseButton);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r3.model.actionsContainerVisible);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r3.model.isEmpty());
  }
}
function FileQuestionComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div");
    ɵɵelement(2, "sv-ng-loading-indicator");
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵclassMap(ctx_r4.model.cssClasses.loadingIndicator);
  }
}
function FileQuestionComponent_ng_container_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function FileQuestionComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, FileQuestionComponent_ng_container_7_ng_container_1_Template, 1, 0, "ng-container", 15);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵnextContext();
    const _r13 = ɵɵreference(15);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r13);
  }
}
function FileQuestionComponent_ng_container_8_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
var _c44 = (a0) => ({
  css: a0
});
function FileQuestionComponent_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, FileQuestionComponent_ng_container_8_ng_container_1_Template, 1, 0, "ng-container", 16);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext();
    const _r11 = ɵɵreference(13);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r11)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c44, ctx_r6.model.showRemoveButton));
  }
}
function FileQuestionComponent_ng_container_9_ng_template_1_Template(rf, ctx) {
}
var _c45 = (a1) => ({
  name: "sv-file-preview",
  data: a1
});
function FileQuestionComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, FileQuestionComponent_ng_container_9_ng_template_1_Template, 0, 0, "ng-template", 17);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("component", ɵɵpureFunction1(3, _c45, ɵɵpureFunction1(1, _c43, ctx_r7.model)));
  }
}
function FileQuestionComponent_ng_container_10_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function FileQuestionComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, FileQuestionComponent_ng_container_10_ng_container_1_Template, 1, 0, "ng-container", 16);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r8 = ɵɵnextContext();
    const _r11 = ɵɵreference(13);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r11)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c44, ctx_r8.model.showRemoveButtonBottom));
  }
}
function FileQuestionComponent_sv_action_bar_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "sv-action-bar", 14);
  }
  if (rf & 2) {
    const ctx_r9 = ɵɵnextContext();
    ɵɵproperty("model", ctx_r9.model.fileNavigator);
  }
}
function FileQuestionComponent_ng_template_12__svg_svg_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 20);
  }
  if (rf & 2) {
    const ctx_r24 = ɵɵnextContext(2);
    ɵɵproperty("iconName", ctx_r24.model.cssClasses.removeButtonIconId)("size", "auto")("title", ctx_r24.model.clearButtonCaption);
  }
}
function FileQuestionComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 18);
    ɵɵlistener("click", function FileQuestionComponent_ng_template_12_Template_button_click_0_listener() {
      ɵɵrestoreView(_r26);
      const ctx_r25 = ɵɵnextContext();
      return ɵɵresetView(ctx_r25.model.doClean());
    });
    ɵɵelementStart(1, "span");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵtemplate(3, FileQuestionComponent_ng_template_12__svg_svg_3_Template, 1, 3, "svg", 19);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const css_r23 = ctx.css;
    const ctx_r10 = ɵɵnextContext();
    ɵɵclassMap(css_r23);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r10.model.clearButtonCaption);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r10.model.cssClasses.removeButtonIconId);
  }
}
function FileQuestionComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵelement(1, "sv-ng-action", 14)(2, "sv-ng-action", 14)(3, "video", 21)(4, "sv-ng-action", 14);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r12 = ɵɵnextContext();
    ɵɵclassMap(ctx_r12.model.cssClasses.videoContainer);
    ɵɵadvance(1);
    ɵɵproperty("model", ctx_r12.model.changeCameraAction);
    ɵɵadvance(1);
    ɵɵproperty("model", ctx_r12.model.closeCameraAction);
    ɵɵadvance(1);
    ɵɵclassMap(ctx_r12.model.cssClasses.video);
    ɵɵattribute("id", ctx_r12.model.videoId);
    ɵɵadvance(1);
    ɵɵproperty("model", ctx_r12.model.takePictureAction);
  }
}
function CommentQuestionComponent_textarea_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "textarea", 3, 4);
    ɵɵlistener("input", function CommentQuestionComponent_textarea_0_Template_textarea_input_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r4 = ɵɵnextContext();
      return ɵɵresetView(ctx_r4.model.onInput($event));
    })("keydown", function CommentQuestionComponent_textarea_0_Template_textarea_keydown_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r6 = ɵɵnextContext();
      return ɵɵresetView(ctx_r6.model.onKeyDown($event));
    })("change", function CommentQuestionComponent_textarea_0_Template_textarea_change_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r7 = ɵɵnextContext();
      return ɵɵresetView(ctx_r7.onChange($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.model.className);
    ɵɵstyleProp("resize", ctx_r0.model.resizeStyle);
    ɵɵproperty("readonly", ctx_r0.model.isInputReadOnly)("id", ctx_r0.model.inputId)("value", ctx_r0.model.value || null);
    ɵɵattribute("disabled", ctx_r0.model.renderedInputDisabled)("maxlength", ctx_r0.model.getMaxLength())("cols", ctx_r0.model.cols)("rows", ctx_r0.model.rows)("placeholder", ctx_r0.model.renderedPlaceholder)("aria-required", ctx_r0.model.a11y_input_ariaRequired)("aria-label", ctx_r0.model.a11y_input_ariaLabel)("aria-labelledby", ctx_r0.model.a11y_input_ariaLabelledBy)("aria-invalid", ctx_r0.model.a11y_input_ariaInvalid)("aria-describedby", ctx_r0.model.a11y_input_ariaDescribedBy);
  }
}
function CommentQuestionComponent_sv_ng_character_counter_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "sv-ng-character-counter", 5);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("counter", ctx_r1.model.characterCounter)("remainingCharacterCounter", ctx_r1.model.cssClasses.remainingCharacterCounter);
  }
}
function CommentQuestionComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", null, 4);
    ɵɵtext(2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r2.model.value);
  }
}
function SignaturePadQuestionComponent_img_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "img", 8);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.model.cssClasses.backgroundImage);
    ɵɵstyleProp("width", ctx_r1.model.renderedCanvasWidth);
    ɵɵproperty("src", ctx_r1.model.backgroundImage, ɵɵsanitizeUrl);
  }
}
function SignaturePadQuestionComponent_span_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1, "✖");
    ɵɵelementEnd();
  }
}
function SignaturePadQuestionComponent__svg_svg_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 9);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("iconName", ctx_r3.model.cssClasses.clearButtonIconId)("size", "auto");
  }
}
var _c46 = ["sv-ng-multipletext-item", ""];
function MultipleTextItemComponent_ng_container_0_span_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r2.question.cssClasses.requiredText);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r2.item.editor.requiredText);
  }
}
function MultipleTextItemComponent_ng_container_0_span_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1, " ");
    ɵɵelementEnd();
  }
}
function MultipleTextItemComponent_ng_container_0_span_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 5);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r4.question.cssClasses.requiredText);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r4.item.editor.requiredText);
  }
}
function MultipleTextItemComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "label")(2, "span");
    ɵɵtemplate(3, MultipleTextItemComponent_ng_container_0_span_3_Template, 2, 3, "span", 1);
    ɵɵelement(4, "sv-ng-string", 2);
    ɵɵtemplate(5, MultipleTextItemComponent_ng_container_0_span_5_Template, 2, 0, "span", 0)(6, MultipleTextItemComponent_ng_container_0_span_6_Template, 2, 3, "span", 3);
    ɵɵelementEnd();
    ɵɵelementStart(7, "div", 4);
    ɵɵlistener("focusin", function MultipleTextItemComponent_ng_container_0_Template_div_focusin_7_listener() {
      ɵɵrestoreView(_r6);
      const ctx_r5 = ɵɵnextContext();
      return ɵɵresetView(ctx_r5.item.focusIn());
    });
    ɵɵelement(8, "sv-ng-text-question", 2);
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵclassMap(ctx_r0.question.getItemLabelCss(ctx_r0.item));
    ɵɵadvance(1);
    ɵɵclassMap(ctx_r0.question.getItemTitleCss());
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.item.editor.isRequireTextBeforeTitle || ctx_r0.item.editor.isRequireTextOnStart);
    ɵɵadvance(1);
    ɵɵproperty("model", ctx_r0.item.locTitle);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.item.editor.isRequireTextAfterTitle);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.item.editor.isRequireTextAfterTitle);
    ɵɵadvance(1);
    ɵɵclassMap(ctx_r0.question.getItemCss());
    ɵɵadvance(1);
    ɵɵproperty("model", ctx_r0.item.editor);
  }
}
function MultipleTextItemComponent_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 7);
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(2);
    ɵɵproperty("element", ctx_r7.item.editor);
  }
}
function MultipleTextItemComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, MultipleTextItemComponent_ng_container_1_div_1_Template, 1, 1, "div", 6);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1.item.editor.hasVisibleErrors);
  }
}
function MultipleTextRowComponent_ng_template_0_tr_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "td", 3);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const cell_r4 = ctx.$implicit;
    const ctx_r3 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵclassMap(cell_r4.className);
    ɵɵproperty("question", ctx_r3.question)("model", cell_r4);
  }
}
function MultipleTextRowComponent_ng_template_0_tr_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tr");
    ɵɵtemplate(1, MultipleTextRowComponent_ng_template_0_tr_0_ng_container_1_Template, 2, 4, "ng-container", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r2.question.cssClasses.row);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r2.model.cells)("ngForTrackBy", ctx_r2.trackItemBy);
  }
}
function MultipleTextRowComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, MultipleTextRowComponent_ng_template_0_tr_0_Template, 2, 4, "tr", 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r0.model.isVisible);
  }
}
function MultipleTextComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "sv-ng-multipletext-row", 2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const row_r2 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("model", row_r2)("question", ctx_r1.model);
  }
}
function RankingQuestionComponent_div_0_ng_container_2_ng_template_1_Template(rf, ctx) {
}
function RankingQuestionComponent_div_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, RankingQuestionComponent_div_0_ng_container_2_ng_template_1_Template, 0, 0, "ng-template", 3);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const index_r5 = ctx.index;
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("component", ɵɵpureFunction2(1, _c5, ctx_r3.getItemValueComponentName(item_r4), ctx_r3.getItemValueComponentData(item_r4, index_r5)));
  }
}
function RankingQuestionComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", null, 1);
    ɵɵtemplate(2, RankingQuestionComponent_div_0_ng_container_2_Template, 2, 4, "ng-container", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.model.rootClass);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r0.model.rankingChoices)("ngForTrackBy", ctx_r0.trackItemBy);
  }
}
function RankingQuestionComponent_div_1_ng_container_3_ng_template_1_Template(rf, ctx) {
}
function RankingQuestionComponent_div_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, RankingQuestionComponent_div_1_ng_container_3_ng_template_1_Template, 0, 0, "ng-template", 3);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r12 = ctx.$implicit;
    const index_r13 = ctx.index;
    const ctx_r8 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("component", ɵɵpureFunction2(1, _c5, ctx_r8.getItemValueComponentName(item_r12), ctx_r8.getItemValueComponentData(item_r12, index_r13, true)));
  }
}
function RankingQuestionComponent_div_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r9 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r9.model.cssClasses.containerPlaceholder);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r9.model.selectToRankEmptyRankedAreaText);
  }
}
function RankingQuestionComponent_div_1_ng_container_7_ng_template_1_Template(rf, ctx) {
}
function RankingQuestionComponent_div_1_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, RankingQuestionComponent_div_1_ng_container_7_ng_template_1_Template, 0, 0, "ng-template", 3);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r15 = ctx.$implicit;
    const index_r16 = ctx.index;
    const ctx_r10 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("component", ɵɵpureFunction2(1, _c5, ctx_r10.getItemValueComponentName(item_r15), ctx_r10.getItemValueComponentData(item_r15, index_r16)));
  }
}
function RankingQuestionComponent_div_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r11 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r11.model.cssClasses.containerPlaceholder);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r11.model.selectToRankEmptyUnrankedAreaText);
  }
}
function RankingQuestionComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", null, 1)(2, "div", 4);
    ɵɵtemplate(3, RankingQuestionComponent_div_1_ng_container_3_Template, 2, 4, "ng-container", 2)(4, RankingQuestionComponent_div_1_div_4_Template, 2, 3, "div", 0);
    ɵɵelementEnd();
    ɵɵelement(5, "div");
    ɵɵelementStart(6, "div", 5);
    ɵɵtemplate(7, RankingQuestionComponent_div_1_ng_container_7_Template, 2, 4, "ng-container", 2)(8, RankingQuestionComponent_div_1_div_8_Template, 2, 3, "div", 0);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.model.rootClass);
    ɵɵadvance(2);
    ɵɵclassMap(ctx_r1.model.getContainerClasses("from"));
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r1.model.unRankingChoices)("ngForTrackBy", ctx_r1.trackItemBy);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1.model.unRankingChoices.length === 0);
    ɵɵadvance(1);
    ɵɵclassMap(ctx_r1.model.cssClasses.containersDivider);
    ɵɵadvance(1);
    ɵɵclassMap(ctx_r1.model.getContainerClasses("to"));
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r1.model.rankingChoices)("ngForTrackBy", ctx_r1.trackItemBy);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1.model.rankingChoices.length === 0);
  }
}
function RankingItemComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵnamespaceHTML();
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.question.getItemIndexClasses(ctx_r0.model));
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r0.question.getNumberByIndex(ctx_r0.index));
  }
}
function RankingItemComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵnamespaceHTML();
    ɵɵelementStart(0, "div");
    ɵɵnamespaceSVG();
    ɵɵelementStart(1, "svg");
    ɵɵelement(2, "use");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.question.getItemIndexClasses(ctx_r1.model));
    ɵɵadvance(2);
    ɵɵattribute("href", ctx_r1.question.dashSvgIcon, null, "xlink");
  }
}
function StringEditorComponent_span_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 2);
    ɵɵlistener("blur", function StringEditorComponent_span_0_Template_span_blur_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onInput($event));
    })("click", function StringEditorComponent_span_0_Template_span_click_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r4 = ɵɵnextContext();
      return ɵɵresetView(ctx_r4.onClick($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("innerHtml", ctx_r0.model.renderedHtml, ɵɵsanitizeHtml);
  }
}
function StringEditorComponent_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 3);
    ɵɵlistener("blur", function StringEditorComponent_span_1_Template_span_blur_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r5 = ɵɵnextContext();
      return ɵɵresetView(ctx_r5.onInput($event));
    })("click", function StringEditorComponent_span_1_Template_span_click_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r7 = ɵɵnextContext();
      return ɵɵresetView(ctx_r7.onClick($event));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r1.model.renderedHtml);
  }
}
function PanelDynamicAddBtn_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 1);
    ɵɵlistener("click", function PanelDynamicAddBtn_button_0_Template_button_click_0_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.addPanelClick());
    });
    ɵɵelementStart(1, "span");
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.question.getAddButtonCss());
    ɵɵadvance(1);
    ɵɵclassMap(ctx_r0.question.cssClasses.buttonAddText);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r0.question.panelAddText);
  }
}
function PanelDynamicQuestionComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵelement(1, "span", 7)(2, "sv-ng-paneldynamic-add-btn", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.model.cssClasses.noEntriesPlaceholder);
    ɵɵadvance(1);
    ɵɵproperty("model", ctx_r1.model.locNoEntriesText);
    ɵɵadvance(1);
    ɵɵproperty("data", ɵɵpureFunction1(4, _c43, ctx_r1.model));
  }
}
var _c47 = (a0) => ({
  width: a0
});
function PanelDynamicQuestionComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵelement(1, "div", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMap(ctx_r2.model.cssClasses.progress);
    ɵɵadvance(1);
    ɵɵstyleMap(ɵɵpureFunction1(6, _c47, ctx_r2.model.progress));
    ɵɵclassMap(ctx_r2.model.cssClasses.progressBar);
  }
}
function PanelDynamicQuestionComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 10);
  }
  if (rf & 2) {
    ɵɵnextContext();
    const _r11 = ɵɵreference(12);
    ɵɵproperty("ngTemplateOutlet", _r11);
  }
}
function PanelDynamicQuestionComponent_ng_container_5_ng_template_2_Template(rf, ctx) {
}
function PanelDynamicQuestionComponent_ng_container_5_ng_container_3_ng_template_1_Template(rf, ctx) {
}
var _c48 = (a0, a1) => ({
  panel: a0,
  question: a1
});
var _c49 = (a1) => ({
  name: "sv-paneldynamic-remove-btn",
  data: a1
});
function PanelDynamicQuestionComponent_ng_container_5_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PanelDynamicQuestionComponent_ng_container_5_ng_container_3_ng_template_1_Template, 0, 0, "ng-template", 11);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const panel_r12 = ɵɵnextContext().$implicit;
    const ctx_r15 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("component", ɵɵpureFunction1(6, _c49, ɵɵpureFunction1(4, _c9, ɵɵpureFunction2(1, _c48, panel_r12, ctx_r15.model))));
  }
}
function PanelDynamicQuestionComponent_ng_container_5_hr_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "hr");
  }
  if (rf & 2) {
    const ctx_r16 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r16.model.cssClasses.separator);
  }
}
function PanelDynamicQuestionComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div");
    ɵɵtemplate(2, PanelDynamicQuestionComponent_ng_container_5_ng_template_2_Template, 0, 0, "ng-template", 11)(3, PanelDynamicQuestionComponent_ng_container_5_ng_container_3_Template, 2, 8, "ng-container", 12);
    ɵɵelementEnd();
    ɵɵtemplate(4, PanelDynamicQuestionComponent_ng_container_5_hr_4_Template, 1, 2, "hr", 1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const panel_r12 = ctx.$implicit;
    const index_r13 = ctx.index;
    const ctx_r4 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵclassMap(ctx_r4.model.getPanelWrapperCss());
    ɵɵadvance(1);
    ɵɵproperty("component", ɵɵpureFunction2(5, _c5, ctx_r4.getPanelComponentName(panel_r12), ctx_r4.getPanelComponentData(panel_r12)));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r4.model.panelRemoveButtonLocation === "right" && ctx_r4.model.canRemovePanel && panel_r12.state != "collapsed");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r4.model.showSeparator(index_r13));
  }
}
function PanelDynamicQuestionComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 10);
  }
  if (rf & 2) {
    ɵɵnextContext();
    const _r11 = ɵɵreference(12);
    ɵɵproperty("ngTemplateOutlet", _r11);
  }
}
function PanelDynamicQuestionComponent_sv_ng_paneldynamic_add_btn_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "sv-ng-paneldynamic-add-btn", 8);
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext();
    ɵɵproperty("data", ɵɵpureFunction1(1, _c43, ctx_r6.model));
  }
}
function PanelDynamicQuestionComponent_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 10);
  }
  if (rf & 2) {
    ɵɵnextContext();
    const _r9 = ɵɵreference(10);
    ɵɵproperty("ngTemplateOutlet", _r9);
  }
}
function PanelDynamicQuestionComponent_ng_template_9_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵelement(1, "div", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r20 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r20.model.cssClasses.progress);
    ɵɵadvance(1);
    ɵɵstyleMap(ɵɵpureFunction1(6, _c47, ctx_r20.model.progress));
    ɵɵclassMap(ctx_r20.model.cssClasses.progressBar);
  }
}
function PanelDynamicQuestionComponent_ng_template_9_div_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵelement(1, "sv-ng-action-bar", 13);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r21 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r21.model.cssClasses.footerButtonsContainer);
    ɵɵadvance(1);
    ɵɵproperty("model", ctx_r21.model.footerToolbar);
  }
}
function PanelDynamicQuestionComponent_ng_template_9_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵelement(1, "hr");
    ɵɵtemplate(2, PanelDynamicQuestionComponent_ng_template_9_div_0_div_2_Template, 2, 8, "div", 1)(3, PanelDynamicQuestionComponent_ng_template_9_div_0_div_3_Template, 2, 3, "div", 1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r19 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r19.model.cssClasses.footer);
    ɵɵadvance(1);
    ɵɵclassMap(ctx_r19.model.cssClasses.separator);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r19.model.isRangeShowing && ctx_r19.model.isProgressBottomShowing);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r19.model.footerToolbar.visibleActions.length);
  }
}
function PanelDynamicQuestionComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PanelDynamicQuestionComponent_ng_template_9_div_0_Template, 4, 6, "div", 1);
  }
  if (rf & 2) {
    const ctx_r8 = ɵɵnextContext();
    ɵɵproperty("ngIf", !!ctx_r8.model.cssClasses.footer);
  }
}
function PanelDynamicQuestionComponent_ng_template_11_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵelement(1, "div", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r22 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r22.model.cssClasses.progress);
    ɵɵadvance(1);
    ɵɵstyleMap(ɵɵpureFunction1(6, _c47, ctx_r22.model.progress));
    ɵɵclassMap(ctx_r22.model.cssClasses.progressBar);
  }
}
function PanelDynamicQuestionComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div")(1, "div", 14)(2, "div");
    ɵɵelement(3, "sv-ng-paneldynamic-prev-btn", 8);
    ɵɵtemplate(4, PanelDynamicQuestionComponent_ng_template_11_div_4_Template, 2, 8, "div", 1);
    ɵɵelement(5, "sv-ng-paneldynamic-next-btn", 8);
    ɵɵelementEnd();
    ɵɵelement(6, "sv-ng-paneldynamic-add-btn", 8)(7, "sv-ng-paneldynamic-progress-text", 8);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r10 = ɵɵnextContext();
    ɵɵclassMap(ctx_r10.progressCssClass);
    ɵɵadvance(1);
    ɵɵclassMap(ctx_r10.progressCssClass);
    ɵɵadvance(1);
    ɵɵclassMap(ctx_r10.model.cssClasses.progressContainer);
    ɵɵadvance(1);
    ɵɵproperty("data", ɵɵpureFunction1(11, _c43, ctx_r10.model));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r10.model.isRangeShowing);
    ɵɵadvance(1);
    ɵɵproperty("data", ɵɵpureFunction1(13, _c43, ctx_r10.model));
    ɵɵadvance(1);
    ɵɵproperty("data", ɵɵpureFunction1(15, _c43, ctx_r10.model));
    ɵɵadvance(1);
    ɵɵproperty("data", ɵɵpureFunction1(17, _c43, ctx_r10.model));
  }
}
function TemplateRendererComponent_ng_template_0_ng_container_0_ng_template_1_Template(rf, ctx) {
}
function TemplateRendererComponent_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TemplateRendererComponent_ng_template_0_ng_container_0_ng_template_1_Template, 0, 0, "ng-template", 2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("component", ɵɵpureFunction2(1, _c5, ctx_r2.componentName, ctx_r2.componentData));
  }
}
function TemplateRendererComponent_ng_template_0_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TemplateRendererComponent_ng_template_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TemplateRendererComponent_ng_template_0_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 3);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r3.contentTempl);
  }
}
function TemplateRendererComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TemplateRendererComponent_ng_template_0_ng_container_0_Template, 2, 4, "ng-container", 1)(1, TemplateRendererComponent_ng_template_0_ng_container_1_Template, 2, 1, "ng-container", 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngIf", !!ctx_r0.componentName);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r0.componentName && ctx_r0.contentTempl);
  }
}
var _c50 = ["content"];
function CustomWidgetComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 3);
    ɵɵpipe(1, "safeHtml");
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("innerHTML", ɵɵpipeBind1(1, 1, ctx_r1.customHtml), ɵɵsanitizeHtml);
  }
}
function CustomWidgetComponent_ng_container_3_ng_template_1_Template(rf, ctx) {
}
var _c51 = (a0, a1) => ({
  model: a0,
  css: a1
});
function CustomWidgetComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, CustomWidgetComponent_ng_container_3_ng_template_1_Template, 0, 0, "ng-template", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("component", ɵɵpureFunction2(4, _c5, ctx_r2.componentName, ɵɵpureFunction2(1, _c51, ctx_r2.model, ctx_r2.css)));
  }
}
function MatrixDynamicDragDropIconComponent_ng_template_0__svg_svg_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "svg");
    ɵɵelement(1, "use");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r2.question.cssClasses.dragElementDecorator);
    ɵɵadvance(1);
    ɵɵattribute("href", ctx_r2.question.iconDragElement, null, "xlink");
  }
}
function MatrixDynamicDragDropIconComponent_ng_template_0_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 3);
  }
}
function MatrixDynamicDragDropIconComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, MatrixDynamicDragDropIconComponent_ng_template_0__svg_svg_0_Template, 2, 3, "svg", 1)(1, MatrixDynamicDragDropIconComponent_ng_template_0_span_1_Template, 1, 0, "span", 2);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r0.question.iconDragElement);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r0.question.iconDragElement);
  }
}
var _c52 = ["cellContainer"];
var _c53 = (a0, a1) => ({
  row: a0,
  question: a1
});
function MatrixCellComponent_ng_template_0_sv_ng_matrix_drag_drop_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "sv-ng-matrix-drag-drop-icon", 8);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵproperty("model", ɵɵpureFunction1(4, _c9, ɵɵpureFunction2(1, _c53, ctx_r3.row, ctx_r3.question)));
  }
}
function MatrixCellComponent_ng_template_0_sv_action_bar_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "sv-action-bar", 9);
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵproperty("model", ctx_r4.cell.item.getData())("handleClick", false);
  }
}
function MatrixCellComponent_ng_template_0_ng_container_4_ng_template_1_Template(rf, ctx) {
}
function MatrixCellComponent_ng_template_0_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, MatrixCellComponent_ng_template_0_ng_container_4_ng_template_1_Template, 0, 0, "ng-template", 10);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("component", ɵɵpureFunction2(1, _c5, ctx_r5.panelComponentName, ctx_r5.panelComponentData));
  }
}
function MatrixCellComponent_ng_template_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 11);
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext(2);
    ɵɵproperty("element", ctx_r6.cell.question);
  }
}
function MatrixCellComponent_ng_template_0_div_6_ng_container_1_ng_template_1_ng_template_0_Template(rf, ctx) {
}
function MatrixCellComponent_ng_template_0_div_6_ng_container_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, MatrixCellComponent_ng_template_0_div_6_ng_container_1_ng_template_1_ng_template_0_Template, 0, 0, "ng-template", 10);
  }
  if (rf & 2) {
    const ctx_r14 = ɵɵnextContext(4);
    ɵɵproperty("component", ɵɵpureFunction2(3, _c5, ctx_r14.getComponentName(ctx_r14.cell.question), ɵɵpureFunction1(1, _c2, ctx_r14.cell.question)));
  }
}
function MatrixCellComponent_ng_template_0_div_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, MatrixCellComponent_ng_template_0_div_6_ng_container_1_ng_template_1_Template, 1, 6, "ng-template", 10);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r10 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("component", ɵɵpureFunction2(3, _c5, ctx_r10.question.getCellWrapperComponentName(ctx_r10.cell.cell), ɵɵpureFunction1(1, _c12, ctx_r10.question.getCellWrapperComponentData(ctx_r10.cell.cell))));
  }
}
function MatrixCellComponent_ng_template_0_div_6_2_ng_template_0_Template(rf, ctx) {
}
function MatrixCellComponent_ng_template_0_div_6_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, MatrixCellComponent_ng_template_0_div_6_2_ng_template_0_Template, 0, 0, "ng-template", 10);
  }
  if (rf & 2) {
    const ctx_r11 = ɵɵnextContext(3);
    ɵɵproperty("component", ɵɵpureFunction2(3, _c5, ctx_r11.cell.question.getComponentName(), ɵɵpureFunction1(1, _c2, ctx_r11.cell.question)));
  }
}
function MatrixCellComponent_ng_template_0_div_6_ng_container_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "sv-ng-selebase-item", 14);
  }
  if (rf & 2) {
    const ctx_r17 = ɵɵnextContext(4);
    ɵɵproperty("showLabel", false)("inputType", ctx_r17.cell.isCheckbox ? "checkbox" : "radio")("question", ctx_r17.cell.question)("model", ctx_r17.cell.item);
  }
}
function MatrixCellComponent_ng_template_0_div_6_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, MatrixCellComponent_ng_template_0_div_6_ng_container_3_ng_template_1_Template, 1, 4, "ng-template", 10);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r12 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("component", ɵɵpureFunction2(3, _c5, ctx_r12.question.getCellWrapperComponentName(ctx_r12.cell.cell), ɵɵpureFunction1(1, _c12, ctx_r12.question.getCellWrapperComponentData(ctx_r12.cell.cell))));
  }
}
function MatrixCellComponent_ng_template_0_div_6_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 15);
  }
  if (rf & 2) {
    const ctx_r13 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r13.cell.question.getCommentAreaCss(true));
    ɵɵproperty("question", ctx_r13.cell.question);
  }
}
function MatrixCellComponent_ng_template_0_div_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 12);
    ɵɵtemplate(1, MatrixCellComponent_ng_template_0_div_6_ng_container_1_Template, 2, 6, "ng-container", 5)(2, MatrixCellComponent_ng_template_0_div_6_2_Template, 1, 6, null, 5)(3, MatrixCellComponent_ng_template_0_div_6_ng_container_3_Template, 2, 6, "ng-container", 5)(4, MatrixCellComponent_ng_template_0_div_6_div_4_Template, 1, 3, "div", 13);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r7.question.cssClasses.cellQuestionWrapper);
    ɵɵproperty("visible", ctx_r7.cell.question.isVisible);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r7.cell.isChoice && ctx_r7.cell.question.isDefaultRendering());
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r7.cell.isChoice && !ctx_r7.cell.question.isDefaultRendering());
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r7.cell.isItemChoice);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r7.cell.isOtherChoice);
  }
}
function MatrixCellComponent_ng_template_0_ng_container_7_ng_template_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r19 = ɵɵnextContext(4);
    ɵɵclassMap(ctx_r19.question.cssClasses.cellRequiredText);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r19.cell.requiredText);
  }
}
function MatrixCellComponent_ng_template_0_ng_container_7_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "sv-ng-string", 8);
    ɵɵtemplate(1, MatrixCellComponent_ng_template_0_ng_container_7_ng_template_1_span_1_Template, 2, 3, "span", 16);
  }
  if (rf & 2) {
    const ctx_r18 = ɵɵnextContext(3);
    ɵɵproperty("model", ctx_r18.cell.locTitle);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !!ctx_r18.cell.requiredText);
  }
}
function MatrixCellComponent_ng_template_0_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, MatrixCellComponent_ng_template_0_ng_container_7_ng_template_1_Template, 2, 2, "ng-template", 10);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r8 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("component", ɵɵpureFunction2(3, _c5, ctx_r8.question.getCellWrapperComponentName(ctx_r8.cell), ɵɵpureFunction1(1, _c12, ctx_r8.question.getCellWrapperComponentData(ctx_r8.cell))));
  }
}
function MatrixCellComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "td", 1, 2);
    ɵɵlistener("focusin", function MatrixCellComponent_ng_template_0_Template_td_focusin_0_listener() {
      ɵɵrestoreView(_r21);
      const ctx_r20 = ɵɵnextContext();
      return ɵɵresetView(ctx_r20.cell.focusIn());
    });
    ɵɵtemplate(2, MatrixCellComponent_ng_template_0_sv_ng_matrix_drag_drop_icon_2_Template, 1, 6, "sv-ng-matrix-drag-drop-icon", 3)(3, MatrixCellComponent_ng_template_0_sv_action_bar_3_Template, 1, 2, "sv-action-bar", 4)(4, MatrixCellComponent_ng_template_0_ng_container_4_Template, 2, 4, "ng-container", 5)(5, MatrixCellComponent_ng_template_0_div_5_Template, 1, 1, "div", 6)(6, MatrixCellComponent_ng_template_0_div_6_Template, 5, 7, "div", 7)(7, MatrixCellComponent_ng_template_0_ng_container_7_Template, 2, 6, "ng-container", 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵstyleMap(ctx_r0.getCellStyle());
    ɵɵclassMap(ctx_r0.cell.className);
    ɵɵproperty("title", ctx_r0.cell.getTitle());
    ɵɵattribute("data-responsive-title", ctx_r0.getHeaders())("colspan", ctx_r0.cell.colSpans);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r0.cell.isDragHandlerCell);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.cell.isActionsCell);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.cell.hasPanel);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.cell.isErrorsCell && (ctx_r0.cell.question == null ? null : ctx_r0.cell.question.hasVisibleErrors));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.cell.hasQuestion);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.cell.hasTitle);
  }
}
function MatrixRequiredHeader_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "span");
    ɵɵtext(2, " ");
    ɵɵelementEnd();
    ɵɵelementStart(3, "span");
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance(3);
    ɵɵclassMap(ctx_r2.question.cssClasses.cellRequiredText);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r2.column.requiredText);
  }
}
function MatrixRequiredHeader_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, MatrixRequiredHeader_ng_template_0_ng_container_0_Template, 5, 3, "ng-container", 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r0.column.isRenderedRequired);
  }
}
function MatrixRowComponent_ng_template_0_tr_0_sv_ng_matrix_cell_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "sv-ng-matrix-cell", 4);
  }
  if (rf & 2) {
    const cell_r4 = ctx.$implicit;
    const ctx_r3 = ɵɵnextContext(3);
    ɵɵproperty("cell", cell_r4)("question", ctx_r3.question);
  }
}
function MatrixRowComponent_ng_template_0_tr_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tr", 2);
    ɵɵlistener("pointerdown", function MatrixRowComponent_ng_template_0_tr_0_Template_tr_pointerdown_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r5 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r5.question.onPointerDown($event, ctx_r5.row));
    });
    ɵɵtemplate(1, MatrixRowComponent_ng_template_0_tr_0_sv_ng_matrix_cell_1_Template, 1, 2, "sv-ng-matrix-cell", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r2.model.className);
    ɵɵattribute("data-sv-drop-target-matrix-row", ctx_r2.row && ctx_r2.row.id);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r2.model.cells)("ngForTrackBy", ctx_r2.trackCellBy);
  }
}
function MatrixRowComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, MatrixRowComponent_ng_template_0_tr_0_Template, 2, 5, "tr", 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r0.model.visible);
  }
}
function MatrixTableComponent_thead_3_ng_container_2_th_1_ng_template_1_sv_ng_matrixheaderrequired_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "sv-ng-matrixheaderrequired", 7);
  }
  if (rf & 2) {
    const cell_r5 = ɵɵnextContext(3).$implicit;
    const ctx_r9 = ɵɵnextContext(2);
    ɵɵproperty("column", cell_r5.column)("question", ctx_r9.question);
  }
}
function MatrixTableComponent_thead_3_ng_container_2_th_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "sv-ng-string", 5);
    ɵɵtemplate(1, MatrixTableComponent_thead_3_ng_container_2_th_1_ng_template_1_sv_ng_matrixheaderrequired_1_Template, 1, 2, "sv-ng-matrixheaderrequired", 6);
  }
  if (rf & 2) {
    const cell_r5 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("model", cell_r5.locTitle);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !!cell_r5.column);
  }
}
function MatrixTableComponent_thead_3_ng_container_2_th_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "th");
    ɵɵtemplate(1, MatrixTableComponent_thead_3_ng_container_2_th_1_ng_template_1_Template, 2, 2, "ng-template", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const cell_r5 = ɵɵnextContext().$implicit;
    const ctx_r6 = ɵɵnextContext(2);
    ɵɵstyleMap(ɵɵpureFunction2(5, _c42, cell_r5.minWidth, cell_r5.width));
    ɵɵclassMap(cell_r5.className);
    ɵɵadvance(1);
    ɵɵproperty("component", ɵɵpureFunction2(10, _c5, ctx_r6.question.getColumnHeaderWrapperComponentName(cell_r5), ɵɵpureFunction1(8, _c12, ctx_r6.question.getColumnHeaderWrapperComponentData(cell_r5))));
  }
}
function MatrixTableComponent_thead_3_ng_container_2_td_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "td");
  }
  if (rf & 2) {
    const cell_r5 = ɵɵnextContext().$implicit;
    ɵɵstyleMap(ɵɵpureFunction2(4, _c42, cell_r5.minWidth, cell_r5.width));
    ɵɵclassMap(cell_r5.className);
  }
}
function MatrixTableComponent_thead_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, MatrixTableComponent_thead_3_ng_container_2_th_1_Template, 2, 13, "th", 3)(2, MatrixTableComponent_thead_3_ng_container_2_td_2_Template, 1, 7, "td", 3);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const cell_r5 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", cell_r5.hasTitle);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !cell_r5.hasTitle);
  }
}
function MatrixTableComponent_thead_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "thead")(1, "tr");
    ɵɵtemplate(2, MatrixTableComponent_thead_3_ng_container_2_Template, 3, 2, "ng-container", 2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r1.table.headerRow.cells)("ngForTrackBy", ctx_r1.trackCellBy);
  }
}
function MatrixTableComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "sv-ng-matrix-row", 8);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const row_r14 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("model", row_r14)("question", ctx_r2.question);
  }
}
function MatrixTableComponent_tfoot_6_sv_ng_matrix_cell_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "sv-ng-matrix-cell", 10);
  }
  if (rf & 2) {
    const cell_r16 = ctx.$implicit;
    const ctx_r15 = ɵɵnextContext(2);
    ɵɵproperty("cell", cell_r16)("question", ctx_r15.question);
  }
}
function MatrixTableComponent_tfoot_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tfoot")(1, "tr");
    ɵɵtemplate(2, MatrixTableComponent_tfoot_6_sv_ng_matrix_cell_2_Template, 1, 2, "sv-ng-matrix-cell", 9);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r3.table.footerRow.cells)("ngForTrackBy", ctx_r3.trackCellBy);
  }
}
var _c54 = (a0) => ({
  overflowX: a0
});
function MatrixDropdownComponent_ng_template_0_sv_ng_matrix_table_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "sv-ng-matrix-table", 2);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("question", ctx_r2.model)("table", ctx_r2.model.renderedTable);
  }
}
function MatrixDropdownComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, MatrixDropdownComponent_ng_template_0_sv_ng_matrix_table_0_Template, 1, 2, "sv-ng-matrix-table", 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r0.model.renderedTable == null ? null : ctx_r0.model.renderedTable.showTable);
  }
}
function MatrixDynamicComponent_ng_template_0_div_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function MatrixDynamicComponent_ng_template_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, MatrixDynamicComponent_ng_template_0_div_2_ng_container_1_Template, 1, 0, "ng-container", 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵnextContext();
    const _r8 = ɵɵreference(7);
    const ctx_r3 = ɵɵnextContext();
    ɵɵclassMap(ctx_r3.model.cssClasses.footer);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r8);
  }
}
function MatrixDynamicComponent_ng_template_0_sv_ng_matrix_table_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "sv-ng-matrix-table", 6);
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵproperty("question", ctx_r4.model)("table", ctx_r4.model.renderedTable);
  }
}
function MatrixDynamicComponent_ng_template_0_div_4_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function MatrixDynamicComponent_ng_template_0_div_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, MatrixDynamicComponent_ng_template_0_div_4_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 5);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵnextContext(2);
    const _r8 = ɵɵreference(7);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r8);
  }
}
function MatrixDynamicComponent_ng_template_0_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵelement(1, "div", 7);
    ɵɵtemplate(2, MatrixDynamicComponent_ng_template_0_div_4_ng_container_2_Template, 2, 1, "ng-container", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r5.model.cssClasses.emptyRowsSection);
    ɵɵadvance(1);
    ɵɵclassMap(ctx_r5.model.cssClasses.emptyRowsText);
    ɵɵproperty("model", ctx_r5.model.locEmptyRowsText);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r5.model.renderedTable.showAddRow);
  }
}
function MatrixDynamicComponent_ng_template_0_div_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function MatrixDynamicComponent_ng_template_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, MatrixDynamicComponent_ng_template_0_div_5_ng_container_1_Template, 1, 0, "ng-container", 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵnextContext();
    const _r8 = ɵɵreference(7);
    const ctx_r6 = ɵɵnextContext();
    ɵɵclassMap(ctx_r6.model.cssClasses.footer);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r8);
  }
}
function MatrixDynamicComponent_ng_template_0_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 9);
    ɵɵlistener("click", function MatrixDynamicComponent_ng_template_0_ng_template_6_Template_button_click_0_listener() {
      ɵɵrestoreView(_r14);
      const ctx_r13 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r13.model.addRowUI());
    });
    ɵɵelement(1, "sv-ng-string", 10)(2, "span");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r7.model.getAddRowButtonCss(true));
    ɵɵadvance(1);
    ɵɵproperty("model", ctx_r7.model.locAddRowText);
    ɵɵadvance(1);
    ɵɵclassMap(ctx_r7.model.cssClasses.iconAdd);
  }
}
function MatrixDynamicComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", null, 1);
    ɵɵtemplate(2, MatrixDynamicComponent_ng_template_0_div_2_Template, 2, 3, "div", 2)(3, MatrixDynamicComponent_ng_template_0_sv_ng_matrix_table_3_Template, 1, 2, "sv-ng-matrix-table", 3)(4, MatrixDynamicComponent_ng_template_0_div_4_Template, 3, 6, "div", 2)(5, MatrixDynamicComponent_ng_template_0_div_5_Template, 2, 3, "div", 2);
    ɵɵelementEnd();
    ɵɵtemplate(6, MatrixDynamicComponent_ng_template_0_ng_template_6_Template, 3, 5, "ng-template", null, 4, ɵɵtemplateRefExtractor);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r0.model.renderedTable.showAddRowOnTop);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.model.renderedTable == null ? null : ctx_r0.model.renderedTable.showTable);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r0.model.renderedTable.showTable);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.model.renderedTable.showAddRowOnBottom);
  }
}
var _c55 = (a0, a1, a2) => ({
  objectFit: a0,
  width: a1,
  height: a2
});
function ImageQuestionComponent_img_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "img", 5);
    ɵɵlistener("load", function ImageQuestionComponent_img_2_Template_img_load_0_listener() {
      ɵɵrestoreView(_r6);
      const ctx_r5 = ɵɵnextContext();
      return ɵɵresetView(ctx_r5.model.onLoadHandler());
    })("error", function ImageQuestionComponent_img_2_Template_img_error_0_listener() {
      ɵɵrestoreView(_r6);
      const ctx_r7 = ɵɵnextContext();
      return ɵɵresetView(ctx_r7.model.onErrorHandler());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵstyleMap(ɵɵpureFunction3(9, _c55, ctx_r1.model.imageFit, ctx_r1.model.renderedStyleWidth, ctx_r1.model.renderedStyleHeight));
    ɵɵclassMap(ctx_r1.model.getImageCss());
    ɵɵproperty("visible", !!ctx_r1.model.locImageLink.renderedHtml && !ctx_r1.model.contentNotLoaded);
    ɵɵattribute("src", ctx_r1.model.locImageLink.renderedHtml, ɵɵsanitizeUrl)("alt", ctx_r1.model.altText || ctx_r1.model.title)("width", ctx_r1.model.renderedWidth)("height", ctx_r1.model.renderedHeight);
  }
}
function ImageQuestionComponent_video_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "video", 6);
    ɵɵlistener("loadedmetadata", function ImageQuestionComponent_video_3_Template_video_loadedmetadata_0_listener() {
      ɵɵrestoreView(_r9);
      const ctx_r8 = ɵɵnextContext();
      return ɵɵresetView(ctx_r8.model.onLoadHandler());
    })("error", function ImageQuestionComponent_video_3_Template_video_error_0_listener() {
      ɵɵrestoreView(_r9);
      const ctx_r10 = ɵɵnextContext();
      return ɵɵresetView(ctx_r10.model.onErrorHandler());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵstyleMap(ɵɵpureFunction3(8, _c55, ctx_r2.model.imageFit, ctx_r2.model.renderedStyleWidth, ctx_r2.model.renderedStyleHeight));
    ɵɵclassMap(ctx_r2.model.getImageCss());
    ɵɵproperty("visible", !!ctx_r2.model.locImageLink.renderedHtml && !ctx_r2.model.contentNotLoaded);
    ɵɵattribute("src", ctx_r2.model.locImageLink.renderedHtml, ɵɵsanitizeUrl)("width", ctx_r2.model.renderedWidth)("height", ctx_r2.model.renderedHeight);
  }
}
function ImageQuestionComponent_iframe_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "iframe");
    ɵɵpipe(1, "safeResourceUrl");
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵstyleMap(ɵɵpureFunction3(9, _c55, ctx_r3.model.imageFit, ctx_r3.model.renderedStyleWidth, ctx_r3.model.renderedStyleHeight));
    ɵɵclassMap(ctx_r3.model.getImageCss());
    ɵɵattribute("src", ɵɵpipeBind1(1, 7, ctx_r3.model.locImageLink.renderedHtml), ɵɵsanitizeResourceUrl)("width", ctx_r3.model.renderedWidth)("height", ctx_r3.model.renderedHeight);
  }
}
function ImageQuestionComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵnamespaceSVG();
    ɵɵelement(1, "svg", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵclassMap(ctx_r4.model.cssClasses.noImage);
    ɵɵadvance(1);
    ɵɵproperty("iconName", ctx_r4.model.cssClasses.noImageSvgIconId)("size", 48);
  }
}
function CustomQuestionComponent_ng_template_0_Template(rf, ctx) {
}
function HeaderCellComponent_ng_template_0_div_2_ng_template_2_Template(rf, ctx) {
}
function HeaderCellComponent_ng_template_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5)(1, "div");
    ɵɵtemplate(2, HeaderCellComponent_ng_template_0_div_2_ng_template_2_Template, 0, 0, "ng-template", 6);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵclassMap(ctx_r2.model.survey.logoClassNames);
    ɵɵadvance(1);
    ɵɵproperty("component", ɵɵpureFunction2(5, _c5, ctx_r2.model.survey.getElementWrapperComponentName(ctx_r2.model.survey, "logo-image"), ɵɵpureFunction1(3, _c9, ctx_r2.model.survey.getElementWrapperComponentData(ctx_r2.model.survey, "logo-image"))));
  }
}
var _c56 = (a0) => ({
  maxWidth: a0
});
function HeaderCellComponent_ng_template_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 7);
    ɵɵelement(1, "sv-ng-element-title", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵstyleMap(ɵɵpureFunction1(3, _c56, ctx_r3.model.textAreaWidth));
    ɵɵadvance(1);
    ɵɵproperty("element", ctx_r3.model.survey);
  }
}
function HeaderCellComponent_ng_template_0_div_4_h5_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "h5", 11);
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r6.model.survey.css.description);
    ɵɵproperty("model", ctx_r6.model.survey.locDescription);
  }
}
function HeaderCellComponent_ng_template_0_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 9);
    ɵɵtemplate(1, HeaderCellComponent_ng_template_0_div_4_h5_1_Template, 1, 3, "h5", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵstyleMap(ɵɵpureFunction1(3, _c56, ctx_r4.model.textAreaWidth));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r4.model.survey.renderedHasDescription);
  }
}
function HeaderCellComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div")(1, "div", 1);
    ɵɵtemplate(2, HeaderCellComponent_ng_template_0_div_2_Template, 3, 8, "div", 2)(3, HeaderCellComponent_ng_template_0_div_3_Template, 2, 5, "div", 3)(4, HeaderCellComponent_ng_template_0_div_4_Template, 2, 5, "div", 4);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵstyleMap(ctx_r0.model.style);
    ɵɵclassMap(ctx_r0.model.css);
    ɵɵadvance(1);
    ɵɵstyleMap(ctx_r0.model.contentStyle);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.model.showLogo);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.model.showTitle);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.model.showDescription);
  }
}
function HeaderMobileComponent_ng_template_0_div_1_ng_template_2_Template(rf, ctx) {
}
function HeaderMobileComponent_ng_template_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5)(1, "div");
    ɵɵtemplate(2, HeaderMobileComponent_ng_template_0_div_1_ng_template_2_Template, 0, 0, "ng-template", 6);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵclassMap(ctx_r2.model.survey.logoClassNames);
    ɵɵadvance(1);
    ɵɵproperty("component", ɵɵpureFunction2(5, _c5, ctx_r2.model.survey.getElementWrapperComponentName(ctx_r2.model.survey, "logo-image"), ɵɵpureFunction1(3, _c9, ctx_r2.model.survey.getElementWrapperComponentData(ctx_r2.model.survey, "logo-image"))));
  }
}
function HeaderMobileComponent_ng_template_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 7);
    ɵɵelement(1, "sv-ng-element-title", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵstyleMap(ɵɵpureFunction1(3, _c56, ctx_r3.model.textAreaWidth));
    ɵɵadvance(1);
    ɵɵproperty("element", ctx_r3.model.survey);
  }
}
function HeaderMobileComponent_ng_template_0_div_3_h5_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "h5", 11);
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r6.model.survey.css.description);
    ɵɵproperty("model", ctx_r6.model.survey.locDescription);
  }
}
function HeaderMobileComponent_ng_template_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 9);
    ɵɵtemplate(1, HeaderMobileComponent_ng_template_0_div_3_h5_1_Template, 1, 3, "h5", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵstyleMap(ɵɵpureFunction1(3, _c56, ctx_r4.model.textAreaWidth));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r4.model.survey.renderedHasDescription);
  }
}
function HeaderMobileComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵtemplate(1, HeaderMobileComponent_ng_template_0_div_1_Template, 3, 8, "div", 2)(2, HeaderMobileComponent_ng_template_0_div_2_Template, 2, 5, "div", 3)(3, HeaderMobileComponent_ng_template_0_div_3_Template, 2, 5, "div", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.model.survey.hasLogo);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.model.survey.hasTitle);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.model.survey.renderedHasDescription);
  }
}
function HeaderComponent_ng_template_0_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div");
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(3);
    ɵɵstyleMap(ctx_r3.model.backgroundImageStyle);
    ɵɵclassMap(ctx_r3.model.backgroundImageClasses);
  }
}
function HeaderComponent_ng_template_0_div_0_div_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "sv-ng-header-cell", 6);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const cell_r7 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵproperty("model", cell_r7);
  }
}
function HeaderComponent_ng_template_0_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, HeaderComponent_ng_template_0_div_0_div_2_ng_container_1_Template, 2, 1, "ng-container", 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r4.model.contentClasses);
    ɵɵstyleProp("width", ctx_r4.model.maxWidth);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r4.model.cells);
  }
}
function HeaderComponent_ng_template_0_div_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵelement(1, "sv-ng-header-mobile", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("model", ctx_r5.model);
  }
}
var _c57 = (a0) => ({
  height: a0
});
function HeaderComponent_ng_template_0_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, HeaderComponent_ng_template_0_div_0_div_1_Template, 1, 4, "div", 2)(2, HeaderComponent_ng_template_0_div_0_div_2_Template, 2, 5, "div", 3)(3, HeaderComponent_ng_template_0_div_0_div_3_Template, 2, 1, "div", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵstyleMap(ɵɵpureFunction1(7, _c57, ctx_r2.model.renderedHeight));
    ɵɵclassMap(ctx_r2.model.headerClasses);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !!ctx_r2.model.backgroundImage);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r2.survey.isMobile);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2.survey.isMobile);
  }
}
function HeaderComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, HeaderComponent_ng_template_0_div_0_Template, 4, 9, "div", 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r0.survey.headerView === "advanced" && ctx_r0.survey.renderedHasHeader);
  }
}
var EmbeddedViewContentComponent = class {
  constructor(viewContainerRef) {
    this.viewContainerRef = viewContainerRef;
  }
  ngOnInit() {
    var _a;
    if (!!this.templateRef) {
      this.embeddedView = (_a = this.viewContainerRef) === null || _a === void 0 ? void 0 : _a.createEmbeddedView(this.templateRef);
    }
  }
};
EmbeddedViewContentComponent.ɵfac = function EmbeddedViewContentComponent_Factory(t) {
  return new (t || EmbeddedViewContentComponent)(ɵɵdirectiveInject(ViewContainerRef));
};
EmbeddedViewContentComponent.ɵcmp = ɵɵdefineComponent({
  type: EmbeddedViewContentComponent,
  selectors: [["ng-component"]],
  viewQuery: function EmbeddedViewContentComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 7, TemplateRef);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templateRef = _t.first);
    }
  },
  decls: 0,
  vars: 0,
  template: function EmbeddedViewContentComponent_Template(rf, ctx) {
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmbeddedViewContentComponent, [{
    type: Component,
    args: [{
      template: ""
    }]
  }], function() {
    return [{
      type: ViewContainerRef
    }];
  }, {
    templateRef: [{
      type: ViewChild,
      args: ["template", {
        read: TemplateRef,
        static: true
      }]
    }]
  });
})();
var BaseAngular = class extends EmbeddedViewContentComponent {
  constructor(changeDetectorRef, viewContainerRef) {
    super(viewContainerRef);
    this.changeDetectorRef = changeDetectorRef;
    this.isModelSubsribed = false;
    this.isDestroyed = false;
  }
  get surveyModel() {
    return this.getModel().getSurvey();
  }
  ngDoCheck() {
    if (this.previousModel !== this.getModel()) {
      this.unMakeBaseElementAngular(this.previousModel);
      this.makeBaseElementAngular(this.getModel());
      this.onModelChanged();
      this.previousModel = this.getModel();
    }
    this.setIsRendering(true);
  }
  onModelChanged() {
  }
  setIsRendering(val) {
    const model = this.getModel();
    if (!!model) {
      model.isRendering = val;
    }
  }
  getIsRendering() {
    const model = this.getModel();
    return !!model && !!model.isRendering;
  }
  ngOnDestroy() {
    this.isDestroyed = true;
    this.unMakeBaseElementAngular(this.getModel());
    this.previousModel = void 0;
  }
  makeBaseElementAngular(stateElement) {
    if (!!stateElement && !stateElement.__ngImplemented) {
      this.isModelSubsribed = true;
      stateElement.__ngImplemented = true;
      stateElement.iteratePropertiesHash((hash, key) => {
        var val = hash[key];
        if (Array.isArray(val)) {
          var val = val;
          val["onArrayChanged"] = (arrayChanges) => {
            this.update(key);
          };
        }
      });
      stateElement.setPropertyValueCoreHandler = (hash, key, val) => {
        if (hash[key] !== val) {
          hash[key] = val;
          this.update(key);
        }
      };
    }
  }
  unMakeBaseElementAngular(stateElement) {
    if (!!stateElement && this.isModelSubsribed) {
      this.isModelSubsribed = false;
      stateElement.__ngImplemented = false;
      stateElement.setPropertyValueCoreHandler = void 0;
      stateElement.iteratePropertiesHash((hash, key) => {
        var val = hash[key];
        if (Array.isArray(val)) {
          var val = val;
          val["onArrayChanged"] = () => {
          };
        }
      });
    }
  }
  update(key) {
    if (this.getIsRendering())
      return;
    this.beforeUpdate();
    if (key && this.getPropertiesToUpdateSync().indexOf(key) > -1) {
      this.detectChanges();
      this.afterUpdate(true);
    } else {
      queueMicrotask(() => {
        if (!this.isDestroyed) {
          this.setIsRendering(true);
          this.detectChanges();
        }
        this.afterUpdate();
      });
    }
  }
  getChangeDetectorRef() {
    return this.embeddedView ? this.embeddedView : this.changeDetectorRef;
  }
  getPropertiesToUpdateSync() {
    return [];
  }
  detectChanges() {
    this.getChangeDetectorRef().detectChanges();
  }
  getShouldReattachChangeDetector() {
    return true;
  }
  beforeUpdate() {
    if (this.getShouldReattachChangeDetector()) {
      this.getChangeDetectorRef().detach();
    }
    this.setIsRendering(true);
  }
  afterUpdate(isSync = false) {
    if (this.getShouldReattachChangeDetector()) {
      this.getChangeDetectorRef().reattach();
    }
    this.setIsRendering(false);
  }
  ngAfterViewChecked() {
    this.setIsRendering(false);
  }
};
BaseAngular.ɵfac = function BaseAngular_Factory(t) {
  return new (t || BaseAngular)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ViewContainerRef));
};
BaseAngular.ɵcmp = ɵɵdefineComponent({
  type: BaseAngular,
  selectors: [["ng-component"]],
  features: [ɵɵInheritDefinitionFeature],
  decls: 0,
  vars: 0,
  template: function BaseAngular_Template(rf, ctx) {
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseAngular, [{
    type: Component,
    args: [{
      template: ""
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ViewContainerRef
    }];
  }, null);
})();
var AngularComponentFactory = class {
  constructor() {
    this.creatorHash = {};
  }
  registerComponent(typeName, componentType) {
    this.creatorHash[typeName] = componentType;
  }
  getAllTypes() {
    var result = new Array();
    for (var key in this.creatorHash) {
      result.push(key);
    }
    return result.sort();
  }
  isComponentRegistered(elementType) {
    return !!this.creatorHash[elementType];
  }
  create(containerRef, elementType, resolver) {
    var componentType = this.creatorHash[elementType];
    if (!componentType)
      return null;
    return containerRef.createComponent(resolver.resolveComponentFactory(componentType));
  }
};
AngularComponentFactory.Instance = new AngularComponentFactory();
var DynamicComponentDirective = class {
  constructor(containerRef, templateRef, resolver) {
    this.containerRef = containerRef;
    this.templateRef = templateRef;
    this.resolver = resolver;
  }
  ngOnChanges(changes) {
    var _a;
    const componentChanges = changes["component"];
    if (componentChanges.currentValue.name !== ((_a = componentChanges.previousValue) === null || _a === void 0 ? void 0 : _a.name) || componentChanges.currentValue.name === void 0 && componentChanges.previousValue === void 0 && !this.componentInstance) {
      this.createComponent();
    } else {
      this.updateComponentData();
    }
  }
  createComponent() {
    this.containerRef.clear();
    if (AngularComponentFactory.Instance.isComponentRegistered(this.component.name)) {
      this.componentInstance = AngularComponentFactory.Instance.create(this.containerRef, this.component.name, this.resolver).instance;
    } else if (this.component.default) {
      this.componentInstance = AngularComponentFactory.Instance.create(this.containerRef, this.component.default, this.resolver).instance;
    }
    if (!this.componentInstance) {
      throw new Error(`Can't create component with name: ${this.component.name} and default: ${this.component.default}`);
    } else {
      this.componentInstance.contentTempl = this.templateRef;
    }
    this.updateComponentData();
  }
  updateComponentData() {
    const data = this.component.data;
    Object.keys(data).forEach((key) => {
      this.componentInstance[key] = data[key];
    });
  }
};
DynamicComponentDirective.ɵfac = function DynamicComponentDirective_Factory(t) {
  return new (t || DynamicComponentDirective)(ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(TemplateRef), ɵɵdirectiveInject(ComponentFactoryResolver$1));
};
DynamicComponentDirective.ɵdir = ɵɵdefineDirective({
  type: DynamicComponentDirective,
  selectors: [["", "component", ""]],
  inputs: {
    component: "component"
  },
  features: [ɵɵNgOnChangesFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DynamicComponentDirective, [{
    type: Directive,
    args: [{
      selector: "[component]"
    }]
  }], function() {
    return [{
      type: ViewContainerRef
    }, {
      type: TemplateRef
    }, {
      type: ComponentFactoryResolver$1
    }];
  }, {
    component: [{
      type: Input
    }]
  });
})();
var ActionComponent = class extends BaseAngular {
  getModel() {
    return this.model;
  }
  getPropertiesToUpdateSync() {
    return ["mode"];
  }
  get id() {
    return this.model.id || "";
  }
};
ActionComponent.ɵfac = (() => {
  let ɵActionComponent_BaseFactory;
  return function ActionComponent_Factory(t) {
    return (ɵActionComponent_BaseFactory || (ɵActionComponent_BaseFactory = ɵɵgetInheritedFactory(ActionComponent)))(t || ActionComponent);
  };
})();
ActionComponent.ɵcmp = ɵɵdefineComponent({
  type: ActionComponent,
  selectors: [["sv-ng-action"]],
  viewQuery: function ActionComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c1, 7, ViewContainerRef);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.actionContent = _t.first);
    }
  },
  inputs: {
    model: "model"
  },
  features: [ɵɵInheritDefinitionFeature],
  decls: 2,
  vars: 0,
  consts: [["template", ""], [3, "id"], [1, "sv-action__content"], [4, "ngIf"], [3, "component"], [1, "sv-action-bar-separator"]],
  template: function ActionComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, ActionComponent_ng_template_0_Template, 4, 10, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    }
  },
  dependencies: [NgIf, DynamicComponentDirective],
  styles: ["[_nghost-%COMP%] { display: none; }"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActionComponent, [{
    type: Component,
    args: [{
      selector: "sv-ng-action",
      templateUrl: "./action.component.html",
      styles: [":host { display: none; }"]
    }]
  }], null, {
    model: [{
      type: Input
    }],
    actionContent: [{
      type: ViewChild,
      args: ["actionContent", {
        read: ViewContainerRef,
        static: true
      }]
    }]
  });
})();
AngularComponentFactory.Instance.registerComponent("sv-action", ActionComponent);
var ActionBarComponent = class extends BaseAngular {
  getModel() {
    return this.model;
  }
  get allowOnClick() {
    return this.handleClick !== void 0 ? this.handleClick : true;
  }
  onClick(event) {
    if (this.allowOnClick) {
      event.stopPropagation();
    }
  }
  ngAfterViewInit() {
    if (!!this.model.hasActions) {
      this.model.initResponsivityManager(this.container.nativeElement);
    }
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this.model.resetResponsivityManager();
  }
};
ActionBarComponent.ɵfac = (() => {
  let ɵActionBarComponent_BaseFactory;
  return function ActionBarComponent_Factory(t) {
    return (ɵActionBarComponent_BaseFactory || (ɵActionBarComponent_BaseFactory = ɵɵgetInheritedFactory(ActionBarComponent)))(t || ActionBarComponent);
  };
})();
ActionBarComponent.ɵcmp = ɵɵdefineComponent({
  type: ActionBarComponent,
  selectors: [["sv-action-bar"], ["sv-ng-action-bar"]],
  viewQuery: function ActionBarComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c4, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.container = _t.first);
    }
  },
  inputs: {
    model: "model",
    handleClick: "handleClick"
  },
  features: [ɵɵInheritDefinitionFeature],
  decls: 2,
  vars: 0,
  consts: [["template", ""], [3, "class", "click", 4, "ngIf"], [3, "click"], ["container", ""], [4, "ngFor", "ngForOf"], [3, "model"]],
  template: function ActionBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, ActionBarComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    }
  },
  dependencies: [ActionComponent, NgIf, NgForOf],
  styles: ["[_nghost-%COMP%] { display: none }"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActionBarComponent, [{
    type: Component,
    args: [{
      selector: "sv-action-bar, sv-ng-action-bar",
      templateUrl: "./action-bar.component.html",
      styles: [":host { display: none }"]
    }]
  }], null, {
    model: [{
      type: Input
    }],
    handleClick: [{
      type: Input
    }],
    container: [{
      type: ViewChild,
      args: ["container"]
    }]
  });
})();
AngularComponentFactory.Instance.registerComponent("sv-action-bar", ActionBarComponent);
var VisibleDirective = class {
  constructor(el) {
    this.el = el;
  }
  ngOnChanges(changes) {
    changes["visible"].currentValue ? this.show() : this.hide();
  }
  hide() {
    this.el.nativeElement.style.display = "none";
  }
  show() {
    this.el.nativeElement.style.display = "";
  }
};
VisibleDirective.ɵfac = function VisibleDirective_Factory(t) {
  return new (t || VisibleDirective)(ɵɵdirectiveInject(ElementRef));
};
VisibleDirective.ɵdir = ɵɵdefineDirective({
  type: VisibleDirective,
  selectors: [["", "visible", ""]],
  inputs: {
    visible: "visible"
  },
  features: [ɵɵNgOnChangesFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VisibleDirective, [{
    type: Directive,
    args: [{
      selector: "[visible]"
    }]
  }], function() {
    return [{
      type: ElementRef
    }];
  }, {
    visible: [{
      type: Input
    }]
  });
})();
var PopupBaseContainerComponent = class extends BaseAngular {
  constructor(changeDetectorRef) {
    super(changeDetectorRef);
    this.prevIsVisible = false;
    this.changeDetectorRef.detach();
  }
  getModel() {
    return this.model;
  }
  get applyButtonText() {
    const popupModalModel = this.model;
    if (!popupModalModel)
      return null;
    return popupModalModel.applyButtonText;
  }
  apply() {
    const popupModalModel = this.model;
    if (!popupModalModel)
      return;
    popupModalModel.apply();
  }
  getPropertiesToUpdateSync() {
    return ["height"];
  }
  getShouldReattachChangeDetector() {
    return false;
  }
  onModelChanged() {
    this.changeDetectorRef.detectChanges();
  }
  afterUpdate(isSync = false) {
    super.afterUpdate(isSync);
    if (!isSync) {
      if (!this.prevIsVisible && this.model.isVisible) {
        this.model.updateOnShowing();
      }
      if (this.prevIsVisible !== this.model.isVisible) {
        this.prevIsVisible = this.model.isVisible;
      }
    }
  }
  clickInside(event) {
    event.stopPropagation();
  }
};
PopupBaseContainerComponent.ɵfac = function PopupBaseContainerComponent_Factory(t) {
  return new (t || PopupBaseContainerComponent)(ɵɵdirectiveInject(ChangeDetectorRef));
};
PopupBaseContainerComponent.ɵcmp = ɵɵdefineComponent({
  type: PopupBaseContainerComponent,
  selectors: [["sv-ng-popup-container"], ["", "sv-ng-popup-container", ""]],
  inputs: {
    model: "model"
  },
  features: [ɵɵInheritDefinitionFeature],
  decls: 10,
  vars: 18,
  consts: [["tabindex", "-1", 1, "sv-popup", 3, "visible", "click", "keydown"], [1, "sv-popup__container", 3, "click"], [1, "sv-popup__shadow"], [4, "ngIf"], [1, "sv-popup__body-content"], ["class", "sv-popup__body-header", 4, "ngIf"], [1, "sv-popup__scrolling-content"], [1, "sv-popup__content"], [3, "component"], ["class", "sv-popup__body-footer", 4, "ngIf"], [1, "sv-popup__body-header"], [1, "sv-popup__body-footer"], [3, "model"]],
  template: function PopupBaseContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0);
      ɵɵlistener("click", function PopupBaseContainerComponent_Template_div_click_0_listener($event) {
        return ctx.model.clickOutside($event);
      })("keydown", function PopupBaseContainerComponent_Template_div_keydown_0_listener($event) {
        return ctx.model.onKeyDown($event);
      });
      ɵɵelementStart(1, "div", 1);
      ɵɵlistener("click", function PopupBaseContainerComponent_Template_div_click_1_listener($event) {
        return ctx.clickInside($event);
      });
      ɵɵelementStart(2, "div", 2);
      ɵɵtemplate(3, PopupBaseContainerComponent_ng_container_3_Template, 2, 6, "ng-container", 3);
      ɵɵelementStart(4, "div", 4);
      ɵɵtemplate(5, PopupBaseContainerComponent_div_5_Template, 2, 1, "div", 5);
      ɵɵelementStart(6, "div", 6)(7, "div", 7);
      ɵɵtemplate(8, PopupBaseContainerComponent_ng_template_8_Template, 0, 0, "ng-template", 8);
      ɵɵelementEnd()();
      ɵɵtemplate(9, PopupBaseContainerComponent_div_9_Template, 2, 1, "div", 9);
      ɵɵelementEnd()()()();
    }
    if (rf & 2) {
      ɵɵclassMap(ctx.model.styleClass);
      ɵɵproperty("visible", ctx.model.isVisible);
      ɵɵadvance(1);
      ɵɵstyleMap(ɵɵpureFunction5(9, _c6, ctx.model.left, ctx.model.top, ctx.model.height, ctx.model.minWidth, ctx.model.width));
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.model.showHeader);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.model.title);
      ɵɵadvance(3);
      ɵɵproperty("component", ɵɵpureFunction2(15, _c5, ctx.model.contentComponentName, ctx.model.contentComponentData));
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.model.showFooter);
    }
  },
  dependencies: [ActionBarComponent, VisibleDirective, NgIf, DynamicComponentDirective],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PopupBaseContainerComponent, [{
    type: Component,
    args: [{
      selector: "sv-ng-popup-container, '[sv-ng-popup-container]'",
      templateUrl: "./popup-container.component.html"
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }];
  }, {
    model: [{
      type: Input
    }]
  });
})();
var PopupService = class {
  constructor(injector, applicationRef, componentFactoryResolver) {
    this.injector = injector;
    this.applicationRef = applicationRef;
    this.componentFactoryResolver = componentFactoryResolver;
  }
  createComponent(popupViewModel) {
    const portalHost = new DomPortalOutlet(popupViewModel.container, this.componentFactoryResolver, this.applicationRef, this.injector);
    const portal = new ComponentPortal(PopupBaseContainerComponent);
    const componentRef = portalHost.attach(portal);
    popupViewModel.setComponentElement(popupViewModel.container.children[0]);
    componentRef.instance.model = popupViewModel;
    componentRef.changeDetectorRef.detectChanges();
    return portalHost;
  }
};
PopupService.ɵfac = function PopupService_Factory(t) {
  return new (t || PopupService)(ɵɵinject(Injector), ɵɵinject(ApplicationRef), ɵɵinject(ComponentFactoryResolver$1));
};
PopupService.ɵprov = ɵɵdefineInjectable({
  token: PopupService,
  factory: PopupService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PopupService, [{
    type: Injectable
  }], function() {
    return [{
      type: Injector
    }, {
      type: ApplicationRef
    }, {
      type: ComponentFactoryResolver$1
    }];
  }, null);
})();
var ModalComponent = class {
  constructor(popupService) {
    this.popupService = popupService;
    this.functionDefined = false;
  }
  showDialog(dialogOptions, rootElement) {
    this.model = (0, import_survey_core.createPopupModalViewModel)(dialogOptions, rootElement);
    this.model.model.onHide = () => {
      this.portalHost.detach();
      this.model.dispose();
    };
    this.portalHost = this.popupService.createComponent(this.model);
    this.model.model.isVisible = true;
    return this.model;
  }
  ngOnInit() {
    if (!!import_survey_core.settings.showModal)
      return;
    this.functionDefined = true;
    import_survey_core.settings.showModal = (componentName, data, onApply, onCancel, cssClass, title, displayMode = "popup") => {
      const options = (0, import_survey_core.createDialogOptions)(componentName, data, onApply, onCancel, void 0, void 0, cssClass, title, displayMode);
      return this.showDialog(options);
    };
    import_survey_core.settings.showDialog = (dialogOptions, rootElement) => {
      return this.showDialog(dialogOptions, rootElement);
    };
  }
  ngOnDestroy() {
    var _a, _b;
    (_a = this.portalHost) === null || _a === void 0 ? void 0 : _a.detach();
    (_b = this.model) === null || _b === void 0 ? void 0 : _b.dispose();
    if (this.functionDefined) {
      import_survey_core.settings.showModal = void 0;
      import_survey_core.settings.showDialog = void 0;
    }
  }
};
ModalComponent.ɵfac = function ModalComponent_Factory(t) {
  return new (t || ModalComponent)(ɵɵdirectiveInject(PopupService));
};
ModalComponent.ɵcmp = ɵɵdefineComponent({
  type: ModalComponent,
  selectors: [["sv-ng-modal-container"]],
  decls: 0,
  vars: 0,
  template: function ModalComponent_Template(rf, ctx) {
  },
  styles: ["[_nghost-%COMP%]{display:none}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModalComponent, [{
    type: Component,
    args: [{
      selector: "sv-ng-modal-container",
      template: "",
      styleUrls: ["../../hide-host.scss"]
    }]
  }], function() {
    return [{
      type: PopupService
    }];
  }, null);
})();
var DynamicHeadComponent = class extends EmbeddedViewContentComponent {
  get ariaLabel() {
    return this.element.titleAriaLabel;
  }
};
DynamicHeadComponent.ɵfac = (() => {
  let ɵDynamicHeadComponent_BaseFactory;
  return function DynamicHeadComponent_Factory(t) {
    return (ɵDynamicHeadComponent_BaseFactory || (ɵDynamicHeadComponent_BaseFactory = ɵɵgetInheritedFactory(DynamicHeadComponent)))(t || DynamicHeadComponent);
  };
})();
DynamicHeadComponent.ɵcmp = ɵɵdefineComponent({
  type: DynamicHeadComponent,
  selectors: [["sv-ng-dynamic-head"]],
  inputs: {
    tagName: "tagName",
    element: "element"
  },
  features: [ɵɵInheritDefinitionFeature],
  ngContentSelectors: _c7,
  decls: 2,
  vars: 0,
  consts: [["template", ""], [3, "ngSwitch"], [3, "class", 4, "ngSwitchCase"], ["titleContent", ""], [4, "ngTemplateOutlet"]],
  template: function DynamicHeadComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, DynamicHeadComponent_ng_template_0_Template, 9, 7, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    }
  },
  dependencies: [NgSwitch, NgSwitchCase, NgTemplateOutlet],
  styles: ["[_nghost-%COMP%]{display:none}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DynamicHeadComponent, [{
    type: Component,
    args: [{
      selector: "sv-ng-dynamic-head",
      templateUrl: "./dynamic-head.component.html",
      styleUrls: ["../../hide-host.scss"]
    }]
  }], null, {
    tagName: [{
      type: Input
    }],
    element: [{
      type: Input
    }]
  });
})();
var SurveyStringComponent = class {
};
SurveyStringComponent.ɵfac = function SurveyStringComponent_Factory(t) {
  return new (t || SurveyStringComponent)();
};
SurveyStringComponent.ɵcmp = ɵɵdefineComponent({
  type: SurveyStringComponent,
  selectors: [["sv-ng-string"], ["", "sv-ng-string", ""]],
  inputs: {
    model: "model"
  },
  decls: 1,
  vars: 6,
  consts: [[3, "component"]],
  template: function SurveyStringComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, SurveyStringComponent_ng_template_0_Template, 0, 0, "ng-template", 0);
    }
    if (rf & 2) {
      ɵɵproperty("component", ɵɵpureFunction2(3, _c5, ctx.model.renderAs, ɵɵpureFunction1(1, _c2, ctx.model.renderAsData)));
    }
  },
  dependencies: [DynamicComponentDirective],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SurveyStringComponent, [{
    type: Component,
    args: [{
      selector: "sv-ng-string, '[sv-ng-string]'",
      template: "<ng-template [component]='{ name: model.renderAs, data: { model: model.renderAsData } }'></ng-template>"
    }]
  }], null, {
    model: [{
      type: Input
    }]
  });
})();
var ElementTitleActionsComponent = class extends EmbeddedViewContentComponent {
};
ElementTitleActionsComponent.ɵfac = (() => {
  let ɵElementTitleActionsComponent_BaseFactory;
  return function ElementTitleActionsComponent_Factory(t) {
    return (ɵElementTitleActionsComponent_BaseFactory || (ɵElementTitleActionsComponent_BaseFactory = ɵɵgetInheritedFactory(ElementTitleActionsComponent)))(t || ElementTitleActionsComponent);
  };
})();
ElementTitleActionsComponent.ɵcmp = ɵɵdefineComponent({
  type: ElementTitleActionsComponent,
  selectors: [["sv-ng-element-title-actions"]],
  inputs: {
    element: "element"
  },
  features: [ɵɵInheritDefinitionFeature],
  decls: 2,
  vars: 0,
  consts: [["template", ""], [4, "ngIf"], ["elementTitleContent", ""], [4, "ngTemplateOutlet"], [1, "sv-title-actions"], [1, "sv-title-actions__title"], [3, "model"], [3, "model", 4, "ngIf"], [3, "class", 4, "ngIf"], ["style", "position: static", 3, "class", 4, "ngIf"], [2, "position", "static"]],
  template: function ElementTitleActionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, ElementTitleActionsComponent_ng_template_0_Template, 4, 2, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    }
  },
  dependencies: [ActionBarComponent, SurveyStringComponent, NgIf, NgTemplateOutlet],
  styles: ["[_nghost-%COMP%]{display:none}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ElementTitleActionsComponent, [{
    type: Component,
    args: [{
      selector: "sv-ng-element-title-actions",
      templateUrl: "./title-actions.component.html",
      styleUrls: ["../../hide-host.scss"]
    }]
  }], null, {
    element: [{
      type: Input
    }]
  });
})();
var ElementTitleComponent = class extends EmbeddedViewContentComponent {
};
ElementTitleComponent.ɵfac = (() => {
  let ɵElementTitleComponent_BaseFactory;
  return function ElementTitleComponent_Factory(t) {
    return (ɵElementTitleComponent_BaseFactory || (ɵElementTitleComponent_BaseFactory = ɵɵgetInheritedFactory(ElementTitleComponent)))(t || ElementTitleComponent);
  };
})();
ElementTitleComponent.ɵcmp = ɵɵdefineComponent({
  type: ElementTitleComponent,
  selectors: [["sv-ng-element-title"]],
  inputs: {
    element: "element"
  },
  features: [ɵɵInheritDefinitionFeature],
  decls: 2,
  vars: 0,
  consts: [["template", ""], [3, "tagName", "element", 4, "ngIf"], [3, "tagName", "element"], [3, "element"]],
  template: function ElementTitleComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, ElementTitleComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    }
  },
  dependencies: [DynamicHeadComponent, ElementTitleActionsComponent, NgIf],
  styles: ["[_nghost-%COMP%]{display:none}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ElementTitleComponent, [{
    type: Component,
    args: [{
      selector: "sv-ng-element-title",
      templateUrl: "./element-title.component.html",
      styleUrls: ["../../hide-host.scss"]
    }]
  }], null, {
    element: [{
      type: Input
    }]
  });
})();
var SurveyHeaderComponent = class {
  constructor(viewContainerRef, changeDetectorRef) {
    this.viewContainerRef = viewContainerRef;
    this.changeDetectorRef = changeDetectorRef;
  }
  ngAfterViewInit() {
    this.survey.afterRenderHeader(this.viewContainerRef.element.nativeElement);
    this.survey.locLogo.onChanged = () => {
      this.changeDetectorRef.detectChanges();
    };
  }
  ngOnDestroy() {
    this.survey.locLogo.onChanged = () => {
    };
  }
};
SurveyHeaderComponent.ɵfac = function SurveyHeaderComponent_Factory(t) {
  return new (t || SurveyHeaderComponent)(ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(ChangeDetectorRef));
};
SurveyHeaderComponent.ɵcmp = ɵɵdefineComponent({
  type: SurveyHeaderComponent,
  selectors: [["", "sv-ng-survey-header", ""]],
  inputs: {
    survey: "survey"
  },
  attrs: _c8,
  decls: 4,
  vars: 5,
  consts: [[3, "class", 4, "ngIf"], [3, "class", "maxWidth", 4, "ngIf"], [3, "component"], [3, "element"], ["sv-ng-string", "", 3, "class", "model", 4, "ngIf"], ["sv-ng-string", "", 3, "model"]],
  template: function SurveyHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, SurveyHeaderComponent_div_0_Template, 2, 8, "div", 0)(1, SurveyHeaderComponent_div_1_Template, 3, 6, "div", 1)(2, SurveyHeaderComponent_div_2_Template, 2, 8, "div", 0);
      ɵɵelement(3, "div");
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.survey.isLogoBefore);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.survey.renderedHasTitle);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.survey.isLogoAfter);
      ɵɵadvance(1);
      ɵɵclassMap(ctx.survey.css.headerClose);
    }
  },
  dependencies: [ElementTitleComponent, SurveyStringComponent, NgIf, DynamicComponentDirective],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SurveyHeaderComponent, [{
    type: Component,
    args: [{
      selector: "'[sv-ng-survey-header]'",
      templateUrl: "survey-header.component.html"
    }]
  }], function() {
    return [{
      type: ViewContainerRef
    }, {
      type: ChangeDetectorRef
    }];
  }, {
    survey: [{
      type: Input
    }]
  });
})();
var ElementComponent = class extends BaseAngular {
  getModel() {
    return this.model;
  }
  get elementComponentName() {
    return this.model.isPanel ? "panel" : "question";
  }
  get componentName() {
    const survey = this.surveyModel;
    if (!!survey) {
      const name = survey.getElementWrapperComponentName(this.model);
      if (!!name) {
        return name;
      }
    }
    return this.elementComponentName;
  }
  get rootStyle() {
    if (!!this.model.cssClasses) {
      return this.model.rootStyle;
    } else {
      return {};
    }
  }
  get componentData() {
    const survey = this.surveyModel;
    let data;
    if (!!survey) {
      data = survey.getElementWrapperComponentData(this.model);
    }
    return {
      componentName: this.elementComponentName,
      componentData: {
        model: this.model,
        data
      }
    };
  }
};
ElementComponent.ɵfac = (() => {
  let ɵElementComponent_BaseFactory;
  return function ElementComponent_Factory(t) {
    return (ɵElementComponent_BaseFactory || (ɵElementComponent_BaseFactory = ɵɵgetInheritedFactory(ElementComponent)))(t || ElementComponent);
  };
})();
ElementComponent.ɵcmp = ɵɵdefineComponent({
  type: ElementComponent,
  selectors: [["sv-ng-element"]],
  inputs: {
    model: "model"
  },
  features: [ɵɵInheritDefinitionFeature],
  decls: 2,
  vars: 0,
  consts: [["template", ""], [3, "class", "style", "focusin", 4, "ngIf"], [3, "focusin"], [3, "component"]],
  template: function ElementComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, ElementComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    }
  },
  dependencies: [NgIf, DynamicComponentDirective],
  styles: ["[_nghost-%COMP%]{display:none}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ElementComponent, [{
    type: Component,
    args: [{
      selector: "sv-ng-element",
      templateUrl: "./element.component.html",
      styleUrls: ["./hide-host.scss"]
    }]
  }], null, {
    model: [{
      type: Input
    }]
  });
})();
var RowComponent = class extends BaseAngular {
  constructor(cdr, vcr, ngZone) {
    super(cdr, vcr);
    this.ngZone = ngZone;
  }
  getModel() {
    return this.row;
  }
  trackElementBy(index, element) {
    return element.name + index;
  }
  ngAfterViewInit() {
    var _a;
    const el = (_a = this.container) === null || _a === void 0 ? void 0 : _a.nativeElement;
    if (!!el && !this.row.isNeedRender) {
      this.ngZone.runOutsideAngular(() => {
        setTimeout(() => {
          this.row.startLazyRendering(el);
        }, 10);
      });
    }
  }
  onModelChanged() {
    super.onModelChanged();
    if (!this.previousModel) {
      return;
    } else {
      this.row.isNeedRender = this.previousModel.isNeedRender;
      this.stopLazyRendering();
    }
  }
  stopLazyRendering() {
    this.row.stopLazyRendering();
    this.row.isNeedRender = !this.row.isLazyRendering();
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this.stopLazyRendering();
  }
};
RowComponent.ɵfac = function RowComponent_Factory(t) {
  return new (t || RowComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(NgZone));
};
RowComponent.ɵcmp = ɵɵdefineComponent({
  type: RowComponent,
  selectors: [["sv-ng-row"]],
  viewQuery: function RowComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c4, 5, ElementRef);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.container = _t.first);
    }
  },
  inputs: {
    row: "row"
  },
  features: [ɵɵInheritDefinitionFeature],
  decls: 2,
  vars: 0,
  consts: [["template", ""], [3, "class", 4, "ngIf"], ["container", ""], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "model", 4, "ngIf"], [4, "ngIf"], [3, "model"], [3, "component"]],
  template: function RowComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, RowComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    }
  },
  dependencies: [ElementComponent, NgIf, NgForOf, DynamicComponentDirective],
  styles: ["[_nghost-%COMP%]{display:none}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RowComponent, [{
    type: Component,
    args: [{
      selector: "sv-ng-row",
      templateUrl: "./row.component.html",
      styleUrls: ["./hide-host.scss"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ViewContainerRef
    }, {
      type: NgZone
    }];
  }, {
    row: [{
      type: Input
    }],
    container: [{
      type: ViewChild,
      args: ["container", {
        read: ElementRef
      }]
    }]
  });
})();
var PageComponent = class extends BaseAngular {
  getModel() {
    return this.model;
  }
  onModelChanged() {
    if (!!this.pageContainerRef && this.pageContainerRef.nativeElement) {
      this.model.survey.afterRenderPage(this.pageContainerRef.nativeElement);
    }
  }
  ngAfterViewInit() {
    var _a, _b;
    (_a = this.model.survey) === null || _a === void 0 ? void 0 : _a.afterRenderPage((_b = this.pageContainerRef) === null || _b === void 0 ? void 0 : _b.nativeElement);
  }
};
PageComponent.ɵfac = (() => {
  let ɵPageComponent_BaseFactory;
  return function PageComponent_Factory(t) {
    return (ɵPageComponent_BaseFactory || (ɵPageComponent_BaseFactory = ɵɵgetInheritedFactory(PageComponent)))(t || PageComponent);
  };
})();
PageComponent.ɵcmp = ɵɵdefineComponent({
  type: PageComponent,
  selectors: [["page"], ["sv-ng-page"]],
  viewQuery: function PageComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c11, 5, ElementRef);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.pageContainerRef = _t.first);
    }
  },
  inputs: {
    model: "model",
    survey: "survey"
  },
  features: [ɵɵInheritDefinitionFeature],
  decls: 2,
  vars: 0,
  consts: [["template", ""], [4, "ngIf"], ["pageContainer", ""], [3, "element"], [3, "class", 4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "model"], [3, "component"], [3, "row"]],
  template: function PageComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, PageComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    }
  },
  dependencies: [ElementTitleComponent, SurveyStringComponent, RowComponent, NgIf, NgForOf, DynamicComponentDirective],
  styles: ["[_nghost-%COMP%]{display:none}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PageComponent, [{
    type: Component,
    args: [{
      selector: "page, sv-ng-page",
      templateUrl: "./page.component.html",
      styleUrls: ["./hide-host.scss"]
    }]
  }], null, {
    model: [{
      type: Input
    }],
    survey: [{
      type: Input
    }],
    pageContainerRef: [{
      type: ViewChild,
      args: ["pageContainer", {
        static: false,
        read: ElementRef
      }]
    }]
  });
})();
var BrandInfoComponent = class {
};
BrandInfoComponent.ɵfac = function BrandInfoComponent_Factory(t) {
  return new (t || BrandInfoComponent)();
};
BrandInfoComponent.ɵcmp = ɵɵdefineComponent({
  type: BrandInfoComponent,
  selectors: [["sv-brand-info"]],
  decls: 10,
  vars: 0,
  consts: [[1, "sv-brand-info"], ["href", "https://surveyjs.io/?utm_source=built-in_links&utm_medium=online_survey_tool&utm_campaign=landing_page", 1, "sv-brand-info__logo"], ["src", "https://surveyjs.io/Content/Images/poweredby.svg"], [1, "sv-brand-info__text"], ["href", "https://surveyjs.io/create-survey?utm_source=built-in_links&utm_medium=online_survey_tool&utm_campaign=create_survey"], [1, "sv-brand-info__terms"], ["href", "https://surveyjs.io/TermsOfUse"]],
  template: function BrandInfoComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0)(1, "a", 1);
      ɵɵelement(2, "img", 2);
      ɵɵelementEnd();
      ɵɵelementStart(3, "div", 3);
      ɵɵtext(4, "Try and see how easy it is to ");
      ɵɵelementStart(5, "a", 4);
      ɵɵtext(6, "create a survey");
      ɵɵelementEnd()();
      ɵɵelementStart(7, "div", 5)(8, "a", 6);
      ɵɵtext(9, "Terms of Use & Privacy Statement");
      ɵɵelementEnd()()();
    }
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrandInfoComponent, [{
    type: Component,
    args: [{
      selector: "sv-brand-info",
      templateUrl: "./brand-info.component.html"
    }]
  }], null, null);
})();
AngularComponentFactory.Instance.registerComponent("sv-brand-info", BrandInfoComponent);
var NotifierComponent = class extends BaseAngular {
  getStateElement() {
    return this.notifier;
  }
  getModel() {
    return this.notifier;
  }
};
NotifierComponent.ɵfac = (() => {
  let ɵNotifierComponent_BaseFactory;
  return function NotifierComponent_Factory(t) {
    return (ɵNotifierComponent_BaseFactory || (ɵNotifierComponent_BaseFactory = ɵɵgetInheritedFactory(NotifierComponent)))(t || NotifierComponent);
  };
})();
NotifierComponent.ɵcmp = ɵɵdefineComponent({
  type: NotifierComponent,
  selectors: [["sv-notifier"]],
  inputs: {
    notifier: "notifier"
  },
  features: [ɵɵInheritDefinitionFeature],
  decls: 2,
  vars: 0,
  consts: [["template", ""], [4, "ngIf"], ["role", "alert", "aria-live", "polite"], [3, "model"]],
  template: function NotifierComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, NotifierComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    }
  },
  dependencies: [ActionBarComponent, NgIf],
  styles: ["[_nghost-%COMP%] { display: none; }"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotifierComponent, [{
    type: Component,
    args: [{
      selector: "sv-notifier",
      templateUrl: "./notifier.component.html",
      styles: [":host { display: none; }"]
    }]
  }], null, {
    notifier: [{
      type: Input
    }]
  });
})();
var SafeHtmlPipe = class {
  constructor(domSanitizer) {
    this.domSanitizer = domSanitizer;
  }
  transform(url) {
    return this.domSanitizer.bypassSecurityTrustHtml(url);
  }
};
SafeHtmlPipe.ɵfac = function SafeHtmlPipe_Factory(t) {
  return new (t || SafeHtmlPipe)(ɵɵdirectiveInject(DomSanitizer, 16));
};
SafeHtmlPipe.ɵpipe = ɵɵdefinePipe({
  name: "safeHtml",
  type: SafeHtmlPipe,
  pure: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SafeHtmlPipe, [{
    type: Pipe,
    args: [{
      name: "safeHtml"
    }]
  }], function() {
    return [{
      type: DomSanitizer
    }];
  }, null);
})();
var SurveyContentComponent = class extends BaseAngular {
  constructor() {
    super(...arguments);
    this.isSurveyUpdated = false;
  }
  getModel() {
    return this.model;
  }
  onModelChanged() {
    if (!!this.previousModel) {
      this.previousModel.destroyResizeObserver();
      this.previousModel.renderCallback = void 0;
    }
    if (!!this.model) {
      this.model.renderCallback = () => {
        this.detectChanges();
      };
    }
    this.isSurveyUpdated = true;
  }
  ngOnInit() {
    super.ngOnInit();
    if (!!this.model && this.model["needRenderIcons"]) {
      import_survey_core.SvgRegistry.renderIcons();
    }
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    if (!!this.model) {
      this.model.rootElement = void 0;
      this.model.destroyResizeObserver();
      this.model.renderCallback = void 0;
    }
  }
  ngAfterViewInit() {
    this.isSurveyUpdated = true;
  }
  ngAfterViewChecked() {
    if (!!this.model && this.isSurveyUpdated) {
      this.model.afterRenderSurvey(this.rootEl.nativeElement);
      this.model.startTimerFromUI();
    }
    super.ngAfterViewChecked();
  }
};
SurveyContentComponent.ɵfac = (() => {
  let ɵSurveyContentComponent_BaseFactory;
  return function SurveyContentComponent_Factory(t) {
    return (ɵSurveyContentComponent_BaseFactory || (ɵSurveyContentComponent_BaseFactory = ɵɵgetInheritedFactory(SurveyContentComponent)))(t || SurveyContentComponent);
  };
})();
SurveyContentComponent.ɵcmp = ɵɵdefineComponent({
  type: SurveyContentComponent,
  selectors: [["survey-content"]],
  viewQuery: function SurveyContentComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c14, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.rootEl = _t.first);
    }
  },
  inputs: {
    model: "model"
  },
  features: [ɵɵInheritDefinitionFeature],
  decls: 2,
  vars: 0,
  consts: [["template", ""], [3, "class", "style", 4, "ngIf"], ["surveyContainer", ""], ["onsubmit", "return false;"], [1, "sv_custom_header", 3, "hidden"], ["sv-ng-survey-header", "", 3, "class", "survey", 4, "ngIf"], [3, "component"], [3, "class", 4, "ngIf"], [3, "class", "innerHtml", 4, "ngIf"], [4, "ngIf"], [3, "notifier"], ["sv-ng-survey-header", "", 3, "survey"], [3, "id"], [3, "model", "survey"], [3, "innerHtml"]],
  template: function SurveyContentComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, SurveyContentComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    }
  },
  dependencies: [SurveyHeaderComponent, PageComponent, BrandInfoComponent, NotifierComponent, NgIf, ɵNgNoValidate, NgControlStatusGroup, NgForm, DynamicComponentDirective, SafeHtmlPipe],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SurveyContentComponent, [{
    type: Component,
    args: [{
      selector: "survey-content",
      templateUrl: "./survey-content.component.html"
    }]
  }], null, {
    model: [{
      type: Input
    }],
    rootEl: [{
      type: ViewChild,
      args: ["surveyContainer", {
        static: false
      }]
    }]
  });
})();
AngularComponentFactory.Instance.registerComponent("survey", SurveyContentComponent);
var SurveyComponent = class extends BaseAngular {
  constructor(changeDetectorRef) {
    super(changeDetectorRef);
    changeDetectorRef.detach();
  }
  getModel() {
    return this.model;
  }
  getShouldReattachChangeDetector() {
    return false;
  }
  onModelChanged() {
    this.changeDetectorRef.detectChanges();
  }
};
SurveyComponent.ɵfac = function SurveyComponent_Factory(t) {
  return new (t || SurveyComponent)(ɵɵdirectiveInject(ChangeDetectorRef));
};
SurveyComponent.ɵcmp = ɵɵdefineComponent({
  type: SurveyComponent,
  selectors: [["survey"]],
  inputs: {
    model: "model"
  },
  features: [ɵɵInheritDefinitionFeature],
  decls: 2,
  vars: 1,
  consts: [[3, "model"]],
  template: function SurveyComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelement(0, "sv-ng-modal-container")(1, "survey-content", 0);
    }
    if (rf & 2) {
      ɵɵadvance(1);
      ɵɵproperty("model", ctx.model);
    }
  },
  dependencies: [ModalComponent, SurveyContentComponent],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SurveyComponent, [{
    type: Component,
    args: [{
      selector: "survey",
      template: "<sv-ng-modal-container></sv-ng-modal-container><survey-content [model]='model'></survey-content>"
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }];
  }, {
    model: [{
      type: Input
    }]
  });
})();
var SvgIconComponent = class {
  constructor(viewContaierRef) {
    this.viewContaierRef = viewContaierRef;
  }
  createSvg() {
    if (!!this.iconName) {
      Survey.createSvg(this.size, this.width, this.height, this.iconName, this.viewContaierRef.element.nativeElement, this.title);
    }
  }
  get rootClass() {
    let className = "sv-svg-icon";
    if (!this.css && !!this.partCss) {
      className += " " + this.partCss;
    } else if (!!this.css) {
      className = this.css;
    }
    return className;
  }
  get rootRole() {
    return "img";
  }
  ngOnChanges() {
    const el = this.viewContaierRef.element.nativeElement;
    el.innerHTML = "";
    el.appendChild(document.createElementNS("http://www.w3.org/2000/svg", "use"));
    this.createSvg();
  }
};
SvgIconComponent.ɵfac = function SvgIconComponent_Factory(t) {
  return new (t || SvgIconComponent)(ɵɵdirectiveInject(ViewContainerRef));
};
SvgIconComponent.ɵcmp = ɵɵdefineComponent({
  type: SvgIconComponent,
  selectors: [["", "sv-ng-svg-icon", ""]],
  hostVars: 3,
  hostBindings: function SvgIconComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("role", ctx.rootRole);
      ɵɵclassMap(ctx.rootClass);
    }
  },
  inputs: {
    size: "size",
    width: "width",
    height: "height",
    iconName: "iconName",
    partCss: "partCss",
    css: "css",
    title: "title"
  },
  features: [ɵɵNgOnChangesFeature],
  attrs: _c23,
  decls: 0,
  vars: 0,
  template: function SvgIconComponent_Template(rf, ctx) {
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SvgIconComponent, [{
    type: Component,
    args: [{
      selector: "'[sv-ng-svg-icon]'",
      template: ""
    }]
  }], function() {
    return [{
      type: ViewContainerRef
    }];
  }, {
    size: [{
      type: Input
    }],
    width: [{
      type: Input
    }],
    height: [{
      type: Input
    }],
    iconName: [{
      type: Input
    }],
    partCss: [{
      type: Input
    }],
    css: [{
      type: Input
    }],
    title: [{
      type: Input
    }],
    rootClass: [{
      type: HostBinding,
      args: ["class"]
    }],
    rootRole: [{
      type: HostBinding,
      args: ["[attr.role]"]
    }]
  });
})();
var PopupSurveyComponent = class extends BaseAngular {
  constructor(changeDetectorRef) {
    super(changeDetectorRef);
    changeDetectorRef.detach();
  }
  getModel() {
    return this.popup;
  }
  getShouldReattachChangeDetector() {
    return false;
  }
  ngOnChanges(changes) {
    var _a, _b;
    if (((_a = changes["model"]) === null || _a === void 0 ? void 0 : _a.currentValue) !== ((_b = changes["model"]) === null || _b === void 0 ? void 0 : _b.previousValue)) {
      this.popup = new import_survey_core.PopupSurveyModel(null, this.model);
    }
    if (this.isExpanded !== void 0) {
      this.popup.isExpanded = this.isExpanded;
    }
    if (this.allowClose !== void 0) {
      this.popup.allowClose = this.allowClose;
    }
    if (this.closeOnCompleteTimeout !== void 0) {
      this.popup.closeOnCompleteTimeout = this.closeOnCompleteTimeout;
    }
    this.popup.isShowing = true;
    this.changeDetectorRef.detectChanges();
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this.popup.dispose();
  }
};
PopupSurveyComponent.ɵfac = function PopupSurveyComponent_Factory(t) {
  return new (t || PopupSurveyComponent)(ɵɵdirectiveInject(ChangeDetectorRef));
};
PopupSurveyComponent.ɵcmp = ɵɵdefineComponent({
  type: PopupSurveyComponent,
  selectors: [["popup-survey"]],
  inputs: {
    model: "model",
    isExpanded: "isExpanded",
    allowClose: "allowClose",
    closeOnCompleteTimeout: "closeOnCompleteTimeout"
  },
  features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature],
  decls: 1,
  vars: 1,
  consts: [["style", "position: fixed; bottom: 3px; right: 10px;", 3, "class", "width", "maxWidth", 4, "ngIf"], [2, "position", "fixed", "bottom", "3px", "right", "10px"], [2, "width", "100%", "cursor", "pointer", 3, "click"], [2, "padding-right", "10px"], ["aria-hidden", "true"], ["style", "float: right; cursor: pointer; width: 24px; height: 24px; transform: rotate(45deg);", 3, "class", "click", 4, "ngIf"], ["style", "float: right; cursor: pointer; width: 24px; height: 24px;", 3, "class", "click", 4, "ngIf"], [3, "class", "scroll", 4, "ngIf"], [2, "float", "right", "cursor", "pointer", "width", "24px", "height", "24px", "transform", "rotate(45deg)", 3, "click"], ["sv-ng-svg-icon", "", 3, "iconName", "size"], [2, "float", "right", "cursor", "pointer", "width", "24px", "height", "24px", 3, "click"], [3, "scroll"], [3, "model"]],
  template: function PopupSurveyComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, PopupSurveyComponent_div_0_Template, 9, 16, "div", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", !!ctx.popup && ctx.popup.isShowing);
    }
  },
  dependencies: [SvgIconComponent, SurveyComponent, NgIf]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PopupSurveyComponent, [{
    type: Component,
    args: [{
      selector: "popup-survey",
      templateUrl: "./popup.survey.component.html",
      styleUrls: ["./popup.survey.component.scss"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }];
  }, {
    model: [{
      type: Input
    }],
    isExpanded: [{
      type: Input
    }],
    allowClose: [{
      type: Input
    }],
    closeOnCompleteTimeout: [{
      type: Input
    }]
  });
})();
var QuestionAngular = class extends BaseAngular {
  getModel() {
    return this.model;
  }
  ngAfterViewInit() {
    var _a;
    if (!!this.model) {
      this.model.afterRenderQuestionElement((_a = this.elementContentRef) === null || _a === void 0 ? void 0 : _a.nativeElement);
    }
  }
  ngOnDestroy() {
    var _a;
    if (!!this.model) {
      this.model.beforeDestroyQuestionElement((_a = this.elementContentRef) === null || _a === void 0 ? void 0 : _a.nativeElement);
    }
    super.ngOnDestroy();
  }
};
QuestionAngular.ɵfac = (() => {
  let ɵQuestionAngular_BaseFactory;
  return function QuestionAngular_Factory(t) {
    return (ɵQuestionAngular_BaseFactory || (ɵQuestionAngular_BaseFactory = ɵɵgetInheritedFactory(QuestionAngular)))(t || QuestionAngular);
  };
})();
QuestionAngular.ɵcmp = ɵɵdefineComponent({
  type: QuestionAngular,
  selectors: [["ng-component"]],
  viewQuery: function QuestionAngular_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c24, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.elementContentRef = _t.first);
    }
  },
  inputs: {
    model: "model"
  },
  features: [ɵɵInheritDefinitionFeature],
  decls: 0,
  vars: 0,
  template: function QuestionAngular_Template(rf, ctx) {
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuestionAngular, [{
    type: Component,
    args: [{
      template: ""
    }]
  }], null, {
    model: [{
      type: Input
    }],
    elementContentRef: [{
      type: ViewChild,
      args: ["contentElement"]
    }]
  });
})();
function getComponentName(question) {
  if (question.customWidget)
    return "survey-customwidget";
  if (question.isDefaultRendering()) {
    return question.getTemplate() + "-question";
  }
  return question.getComponentName();
}
var ErrorsComponent = class {
  constructor() {
  }
  get role() {
    return "alert";
  }
  get id() {
    return this.element.id + "_errors";
  }
  get ariaLive() {
    return "polite";
  }
  get class() {
    return this.element.cssError;
  }
};
ErrorsComponent.ɵfac = function ErrorsComponent_Factory(t) {
  return new (t || ErrorsComponent)();
};
ErrorsComponent.ɵcmp = ɵɵdefineComponent({
  type: ErrorsComponent,
  selectors: [["", "sv-ng-errors", ""]],
  hostVars: 5,
  hostBindings: function ErrorsComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵhostProperty("id", ctx.id);
      ɵɵattribute("role", ctx.role)("aria-live", ctx.ariaLive);
      ɵɵclassMap(ctx.class);
    }
  },
  inputs: {
    element: "element",
    location: "location"
  },
  attrs: _c25,
  decls: 1,
  vars: 1,
  consts: [[4, "ngFor", "ngForOf"], ["aria-hidden", "true"], ["sv-ng-string", "", 3, "model"]],
  template: function ErrorsComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, ErrorsComponent_div_0_Template, 3, 5, "div", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngForOf", ctx.element.errors);
    }
  },
  dependencies: [SurveyStringComponent, NgForOf],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ErrorsComponent, [{
    type: Component,
    args: [{
      templateUrl: "./errors.component.html",
      selector: "'[sv-ng-errors]'"
    }]
  }], function() {
    return [];
  }, {
    element: [{
      type: Input
    }],
    location: [{
      type: Input
    }],
    role: [{
      type: HostBinding,
      args: ["attr.role"]
    }],
    id: [{
      type: HostBinding,
      args: ["id"]
    }],
    ariaLive: [{
      type: HostBinding,
      args: ["attr.aria-live"]
    }],
    class: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var ElementHeaderComponent = class {
  constructor() {
  }
  get rootClass() {
    return this.element.cssHeader;
  }
  click(e) {
    if (this.element.clickTitleFunction !== void 0) {
      this.element.clickTitleFunction(e);
    }
  }
};
ElementHeaderComponent.ɵfac = function ElementHeaderComponent_Factory(t) {
  return new (t || ElementHeaderComponent)();
};
ElementHeaderComponent.ɵcmp = ɵɵdefineComponent({
  type: ElementHeaderComponent,
  selectors: [["", "sv-ng-element-header", ""]],
  hostVars: 2,
  hostBindings: function ElementHeaderComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function ElementHeaderComponent_click_HostBindingHandler($event) {
        return ctx.click($event);
      });
    }
    if (rf & 2) {
      ɵɵclassMap(ctx.rootClass);
    }
  },
  inputs: {
    element: "element"
  },
  attrs: _c26,
  decls: 3,
  vars: 3,
  consts: [[3, "element"], ["sv-ng-string", "", 3, "class", "model", "display", 4, "ngIf"], [4, "ngIf"], ["sv-ng-string", "", 3, "model"], [3, "model"]],
  template: function ElementHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelement(0, "sv-ng-element-title", 0);
      ɵɵtemplate(1, ElementHeaderComponent_div_1_Template, 1, 5, "div", 1)(2, ElementHeaderComponent_ng_container_2_Template, 2, 1, "ng-container", 2);
    }
    if (rf & 2) {
      ɵɵproperty("element", ctx.element);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.element.hasDescriptionUnderTitle);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", !!ctx.element.additionalTitleToolbar);
    }
  },
  dependencies: [ElementTitleComponent, SurveyStringComponent, ActionBarComponent, NgIf],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ElementHeaderComponent, [{
    type: Component,
    args: [{
      selector: "'[sv-ng-element-header]'",
      templateUrl: "./element-header.component.html"
    }]
  }], function() {
    return [];
  }, {
    element: [{
      type: Input
    }],
    rootClass: [{
      type: HostBinding,
      args: ["class"]
    }],
    click: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var SurveyCommentComponent = class {
  constructor() {
  }
  get comment() {
    if (!this.question.comment)
      return "";
    return this.question.comment;
  }
};
SurveyCommentComponent.ɵfac = function SurveyCommentComponent_Factory(t) {
  return new (t || SurveyCommentComponent)();
};
SurveyCommentComponent.ɵcmp = ɵɵdefineComponent({
  type: SurveyCommentComponent,
  selectors: [["sv-ng-comment"], ["", "sv-ng-comment", ""]],
  inputs: {
    question: "question"
  },
  decls: 2,
  vars: 2,
  consts: [[3, "id", "value", "resize", "disabled", "class", "change", "input", "compositionupdate", 4, "ngIf"], [4, "ngIf"], [3, "id", "value", "disabled", "change", "input", "compositionupdate"]],
  template: function SurveyCommentComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, SurveyCommentComponent_textarea_0_Template, 1, 11, "textarea", 0)(1, SurveyCommentComponent_div_1_Template, 2, 1, "div", 1);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", !ctx.question.isReadOnlyRenderDiv());
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.question.isReadOnlyRenderDiv());
    }
  },
  dependencies: [NgIf],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SurveyCommentComponent, [{
    type: Component,
    args: [{
      selector: "sv-ng-comment, '[sv-ng-comment]'",
      templateUrl: "./comment.component.html"
    }]
  }], function() {
    return [];
  }, {
    question: [{
      type: Input
    }]
  });
})();
var QuestionComponent = class extends EmbeddedViewContentComponent {
  getModel() {
    return this.model;
  }
  ngAfterViewInit() {
    var _a, _b;
    if (!!((_a = this.rootEl) === null || _a === void 0 ? void 0 : _a.nativeElement)) {
      this.model.afterRender((_b = this.rootEl) === null || _b === void 0 ? void 0 : _b.nativeElement);
    }
  }
  ngOnDestroy() {
    if (!!this.model) {
      this.model.destroyResizeObserver();
    }
  }
  getComponentName() {
    return getComponentName(this.model);
  }
  getQuestionContentWrapperComponentName() {
    return this.model.survey.getQuestionContentWrapperComponentName(this.model) || this.getComponentName();
  }
  getQuestionContentWrapperComponentData() {
    return {
      componentName: this.getComponentName(),
      componentData: {
        model: this.model,
        data: this.model.survey.getElementWrapperComponentData(this.model)
      }
    };
  }
};
QuestionComponent.ɵfac = (() => {
  let ɵQuestionComponent_BaseFactory;
  return function QuestionComponent_Factory(t) {
    return (ɵQuestionComponent_BaseFactory || (ɵQuestionComponent_BaseFactory = ɵɵgetInheritedFactory(QuestionComponent)))(t || QuestionComponent);
  };
})();
QuestionComponent.ɵcmp = ɵɵdefineComponent({
  type: QuestionComponent,
  selectors: [["sv-ng-question"]],
  viewQuery: function QuestionComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c27, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.rootEl = _t.first);
    }
  },
  inputs: {
    model: "model"
  },
  features: [ɵɵInheritDefinitionFeature],
  decls: 2,
  vars: 0,
  consts: [["template", ""], [3, "class", "style", "id", 4, "ngIf"], [3, "id"], ["elementContainer", ""], ["sv-ng-errors", "", 3, "element", 4, "ngIf"], ["sv-ng-element-header", "", 3, "element", 4, "ngIf"], ["role", "presentation", 3, "visible"], [3, "component"], [3, "class", 4, "ngIf"], ["sv-ng-string", "", 3, "class", "model", 4, "ngIf"], ["sv-ng-errors", "", 3, "element"], ["sv-ng-element-header", "", 3, "element"], ["sv-ng-string", "", 3, "model"], [3, "question"]],
  template: function QuestionComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, QuestionComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    }
  },
  dependencies: [ErrorsComponent, ElementHeaderComponent, SurveyStringComponent, SurveyCommentComponent, NgIf, VisibleDirective, DynamicComponentDirective],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuestionComponent, [{
    type: Component,
    args: [{
      selector: "sv-ng-question",
      templateUrl: "./question.component.html"
    }]
  }], null, {
    model: [{
      type: Input
    }],
    rootEl: [{
      type: ViewChild,
      args: ["elementContainer"]
    }]
  });
})();
AngularComponentFactory.Instance.registerComponent("question", QuestionComponent);
var StringViewerComponent = class {
  constructor(changeDetectorRef) {
    this.changeDetectorRef = changeDetectorRef;
  }
  ngDoCheck() {
    if (this.model !== this.previousModel) {
      if (!!this.previousModel) {
        this.clearOnChanged(this.previousModel);
      }
      if (!!this.model) {
        this.model.onChanged = () => {
          this.changeDetectorRef.detectChanges();
        };
      }
      this.previousModel = this.model;
    }
  }
  clearOnChanged(model) {
    model.onChanged = () => {
    };
  }
  ngOnDestroy() {
    !!this.model && this.clearOnChanged(this.model);
  }
};
StringViewerComponent.ɵfac = function StringViewerComponent_Factory(t) {
  return new (t || StringViewerComponent)(ɵɵdirectiveInject(ChangeDetectorRef));
};
StringViewerComponent.ɵcmp = ɵɵdefineComponent({
  type: StringViewerComponent,
  selectors: [["sv-ng-string-viewer"], ["string-viewer"], ["", "sv-ng-string-viewer", ""]],
  inputs: {
    model: "model"
  },
  decls: 2,
  vars: 2,
  consts: [["class", "sv-string-viewer", 4, "ngIf"], ["class", "sv-string-viewer", 3, "innerHtml", 4, "ngIf"], [1, "sv-string-viewer"], [1, "sv-string-viewer", 3, "innerHtml"]],
  template: function StringViewerComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, StringViewerComponent_span_0_Template, 2, 1, "span", 0)(1, StringViewerComponent_span_1_Template, 2, 3, "span", 1);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", !ctx.model.hasHtml);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.model.hasHtml);
    }
  },
  dependencies: [NgIf, SafeHtmlPipe]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StringViewerComponent, [{
    type: Component,
    args: [{
      selector: "sv-ng-string-viewer, string-viewer, '[sv-ng-string-viewer]'",
      templateUrl: "./string-viewer.component.html",
      styleUrls: ["./string-viewer.component.scss"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }];
  }, {
    model: [{
      type: Input
    }]
  });
})();
AngularComponentFactory.Instance.registerComponent(import_survey_core.LocalizableString.defaultRenderer, StringViewerComponent);
var PopupPointerComponent = class extends BaseAngular {
  get popupModel() {
    return this.model;
  }
  getModel() {
    return this.model;
  }
};
PopupPointerComponent.ɵfac = (() => {
  let ɵPopupPointerComponent_BaseFactory;
  return function PopupPointerComponent_Factory(t) {
    return (ɵPopupPointerComponent_BaseFactory || (ɵPopupPointerComponent_BaseFactory = ɵɵgetInheritedFactory(PopupPointerComponent)))(t || PopupPointerComponent);
  };
})();
PopupPointerComponent.ɵcmp = ɵɵdefineComponent({
  type: PopupPointerComponent,
  selectors: [["sv-ng-popup-pointer"], ["", "sv-ng-popup-pointer", ""]],
  inputs: {
    model: "model"
  },
  features: [ɵɵInheritDefinitionFeature],
  decls: 1,
  vars: 5,
  consts: [[1, "sv-popup__pointer"]],
  template: function PopupPointerComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelement(0, "span", 0);
    }
    if (rf & 2) {
      ɵɵstyleMap(ɵɵpureFunction2(2, _c29, ctx.popupModel.pointerTarget.left, ctx.popupModel.pointerTarget.top));
    }
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PopupPointerComponent, [{
    type: Component,
    args: [{
      selector: "sv-ng-popup-pointer, '[sv-ng-popup-pointer]'",
      templateUrl: "./popup-pointer.component.html"
    }]
  }], null, {
    model: [{
      type: Input
    }]
  });
})();
AngularComponentFactory.Instance.registerComponent("popup-pointer", PopupPointerComponent);
var PopupComponent = class extends BaseAngular {
  constructor(viewContainerRef, changeDetectorRef) {
    super(changeDetectorRef, viewContainerRef);
  }
  getModel() {
    return this.popupModel;
  }
  onModelChanged() {
    var _a;
    if (this.model) {
      this.model.resetComponentElement();
      this.model.dispose();
    }
    this.model = (0, import_survey_core.createPopupViewModel)(this.popupModel, (_a = this.viewContainerRef) === null || _a === void 0 ? void 0 : _a.element.nativeElement);
  }
  ngAfterViewInit() {
    var _a, _b;
    if (!!((_a = this.containerRef) === null || _a === void 0 ? void 0 : _a.nativeElement)) {
      const container = this.containerRef.nativeElement;
      this.model.setComponentElement(container, this.getTarget ? this.getTarget(container.parentElement) : (_b = container === null || container === void 0 ? void 0 : container.parentElement) === null || _b === void 0 ? void 0 : _b.parentElement);
    }
  }
  ngOnInit() {
    this.onModelChanged();
  }
  ngOnDestroy() {
    this.model.resetComponentElement();
    this.model.dispose();
    super.ngOnDestroy();
  }
};
PopupComponent.ɵfac = function PopupComponent_Factory(t) {
  return new (t || PopupComponent)(ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(ChangeDetectorRef));
};
PopupComponent.ɵcmp = ɵɵdefineComponent({
  type: PopupComponent,
  selectors: [["sv-ng-popup"], ["", "sv-ng-popup", ""]],
  viewQuery: function PopupComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c30, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.containerRef = _t.first);
    }
  },
  inputs: {
    popupModel: "popupModel",
    getTarget: "getTarget"
  },
  features: [ɵɵInheritDefinitionFeature],
  decls: 3,
  vars: 1,
  consts: [["containerRef", ""], [3, "model"]],
  template: function PopupComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", null, 0);
      ɵɵelement(2, "sv-ng-popup-container", 1);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵadvance(2);
      ɵɵproperty("model", ctx.model);
    }
  },
  dependencies: [PopupBaseContainerComponent],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PopupComponent, [{
    type: Component,
    args: [{
      selector: "sv-ng-popup, '[sv-ng-popup]'",
      template: "<div #containerRef><sv-ng-popup-container [model]='model' ></sv-ng-popup-container></div>"
    }]
  }], function() {
    return [{
      type: ViewContainerRef
    }, {
      type: ChangeDetectorRef
    }];
  }, {
    popupModel: [{
      type: Input
    }],
    getTarget: [{
      type: Input
    }],
    containerRef: [{
      type: ViewChild,
      args: ["containerRef"]
    }]
  });
})();
var QuestionSkeletonComponent = class {
};
QuestionSkeletonComponent.ɵfac = function QuestionSkeletonComponent_Factory(t) {
  return new (t || QuestionSkeletonComponent)();
};
QuestionSkeletonComponent.ɵcmp = ɵɵdefineComponent({
  type: QuestionSkeletonComponent,
  selectors: [["question-skeleton"]],
  inputs: {
    model: "model"
  },
  decls: 5,
  vars: 2,
  consts: [[1, "sv-skeleton--not-implemented"]],
  template: function QuestionSkeletonComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0)(1, "div");
      ɵɵtext(2);
      ɵɵelementEnd();
      ɵɵelementStart(3, "div");
      ɵɵtext(4);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵadvance(2);
      ɵɵtextInterpolate(ctx.model.getType() + " question type renderer is not implemented yet.");
      ɵɵadvance(2);
      ɵɵtextInterpolate(ctx.model.value);
    }
  },
  styles: [".sv-skeleton--not-implemented[_ngcontent-%COMP%]{width:100%;min-width:300px;min-height:40px;border:1px solid red;text-align:center}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuestionSkeletonComponent, [{
    type: Component,
    args: [{
      selector: "question-skeleton",
      templateUrl: "./skeleton.component.html",
      styleUrls: ["./skeleton.component.scss"]
    }]
  }], null, {
    model: [{
      type: Input
    }]
  });
})();
AngularComponentFactory.Instance.registerComponent("skeleton-question", QuestionSkeletonComponent);
var DropdownComponent = class extends BaseAngular {
  get dropdownModel() {
    var _a;
    return (_a = this.model) === null || _a === void 0 ? void 0 : _a.dropdownListModel;
  }
  getModel() {
    return this.model.dropdownListModel;
  }
  ngOnInit() {
    super.ngOnInit();
    if (!this.model.dropdownListModel) {
      this.model.dropdownListModel = new import_survey_core.DropdownListModel(this.model);
    }
  }
  click(event) {
    var _a;
    (_a = this.dropdownModel) === null || _a === void 0 ? void 0 : _a.onClick(event);
  }
  chevronPointerDown(event) {
    var _a;
    (_a = this.dropdownModel) === null || _a === void 0 ? void 0 : _a.chevronPointerDown(event);
  }
  clear(event) {
    var _a;
    (_a = this.dropdownModel) === null || _a === void 0 ? void 0 : _a.onClear(event);
  }
  keyhandler(event) {
    var _a;
    (_a = this.dropdownModel) === null || _a === void 0 ? void 0 : _a.keyHandler(event);
  }
  blur(event) {
    var _a;
    (_a = this.dropdownModel) === null || _a === void 0 ? void 0 : _a.onBlur(event);
    this.updateInputDomElement();
  }
  focus(event) {
    var _a;
    (_a = this.dropdownModel) === null || _a === void 0 ? void 0 : _a.onFocus(event);
  }
  inputChange(event) {
    this.detectChanges();
  }
  updateInputDomElement() {
    var _a;
    if (!!((_a = this.inputElementRef) === null || _a === void 0 ? void 0 : _a.nativeElement)) {
      const control = this.inputElementRef.nativeElement;
      const newValue = this.model.inputStringRendered;
      if (!import_survey_core.Helpers.isTwoValueEquals(newValue, control.value, false, true, false)) {
        control.value = this.model.inputStringRendered || "";
      }
    }
  }
};
DropdownComponent.ɵfac = (() => {
  let ɵDropdownComponent_BaseFactory;
  return function DropdownComponent_Factory(t) {
    return (ɵDropdownComponent_BaseFactory || (ɵDropdownComponent_BaseFactory = ɵɵgetInheritedFactory(DropdownComponent)))(t || DropdownComponent);
  };
})();
DropdownComponent.ɵcmp = ɵɵdefineComponent({
  type: DropdownComponent,
  selectors: [["sv-ng-dropdown"], ["", "sv-ng-dropdown", ""]],
  viewQuery: function DropdownComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c31, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.inputElementRef = _t.first);
    }
  },
  inputs: {
    model: "model"
  },
  features: [ɵɵInheritDefinitionFeature],
  decls: 5,
  vars: 6,
  consts: [[3, "click"], [3, "class", "blur", "keydown", 4, "ngIf"], [3, "popupModel", 4, "ngIf"], ["disabled", "", 3, "class", 4, "ngIf"], ["aria-hidden", "true", 3, "class", "pointerdown", 4, "ngIf"], [3, "blur", "keydown"], [3, "class", 4, "ngIf"], [4, "ngIf"], [3, "model", 4, "ngIf"], ["type", "text", "autocomplete", "off", 3, "ngModel", "ngModelChange", "change", "blur", "focus"], ["inputElement", ""], [3, "class", "visible", "click", 4, "ngIf"], [2, "visibility", "hidden"], [3, "component"], [3, "model"], [3, "visible", "click"], ["sv-ng-svg-icon", "", 3, "iconName", "partCss", "title", "size"], [3, "popupModel"], ["disabled", ""], ["aria-hidden", "true", 3, "pointerdown"], ["sv-ng-svg-icon", "", 3, "iconName", "partCss", "size"]],
  template: function DropdownComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0);
      ɵɵlistener("click", function DropdownComponent_Template_div_click_0_listener($event) {
        return ctx.click($event);
      });
      ɵɵtemplate(1, DropdownComponent_div_1_Template, 9, 35, "div", 1)(2, DropdownComponent_sv_ng_popup_2_Template, 1, 1, "sv-ng-popup", 2)(3, DropdownComponent_div_3_Template, 4, 5, "div", 3)(4, DropdownComponent_div_4_Template, 2, 5, "div", 4);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵclassMap(ctx.model.cssClasses.selectWrapper);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", !ctx.model.isReadOnly);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", !ctx.model.isReadOnly);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.model.isReadOnly);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.model.cssClasses.chevronButtonIconId);
    }
  },
  dependencies: [SurveyStringComponent, SvgIconComponent, PopupComponent, NgIf, DynamicComponentDirective, DefaultValueAccessor, NgControlStatus, NgModel, VisibleDirective],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropdownComponent, [{
    type: Component,
    args: [{
      selector: "sv-ng-dropdown, '[sv-ng-dropdown]'",
      templateUrl: "./dropdown.component.html"
    }]
  }], null, {
    model: [{
      type: Input
    }],
    inputElementRef: [{
      type: ViewChild,
      args: ["inputElement"]
    }]
  });
})();
var TagboxFilterComponent = class extends BaseAngular {
  getModel() {
    return this.model;
  }
};
TagboxFilterComponent.ɵfac = (() => {
  let ɵTagboxFilterComponent_BaseFactory;
  return function TagboxFilterComponent_Factory(t) {
    return (ɵTagboxFilterComponent_BaseFactory || (ɵTagboxFilterComponent_BaseFactory = ɵɵgetInheritedFactory(TagboxFilterComponent)))(t || TagboxFilterComponent);
  };
})();
TagboxFilterComponent.ɵcmp = ɵɵdefineComponent({
  type: TagboxFilterComponent,
  selectors: [["sv-tagbox-filter"]],
  inputs: {
    model: "model",
    question: "question"
  },
  features: [ɵɵInheritDefinitionFeature],
  decls: 2,
  vars: 0,
  consts: [["template", ""], [3, "class", 4, "ngIf"], ["type", "text", "autocomplete", "off", 3, "ngModel", "ngModelChange", "keydown", "blur", "focus"], [2, "visibility", "hidden"]],
  template: function TagboxFilterComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, TagboxFilterComponent_ng_template_0_Template, 5, 21, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    }
  },
  dependencies: [NgIf, DefaultValueAccessor, NgControlStatus, NgModel],
  styles: ["[_nghost-%COMP%]{display:none}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TagboxFilterComponent, [{
    type: Component,
    args: [{
      selector: "sv-tagbox-filter",
      templateUrl: "./tagbox-filter.component.html",
      styleUrls: ["../../hide-host.scss"]
    }]
  }], null, {
    model: [{
      type: Input
    }],
    question: [{
      type: Input
    }]
  });
})();
AngularComponentFactory.Instance.registerComponent("sv-tagbox-filter", TagboxFilterComponent);
var TagboxItemComponent = class extends BaseAngular {
  removeItem(event) {
    this.question.dropdownListModel.deselectItem(this.item.value);
    event.stopPropagation();
  }
  getModel() {
    return this.item;
  }
};
TagboxItemComponent.ɵfac = (() => {
  let ɵTagboxItemComponent_BaseFactory;
  return function TagboxItemComponent_Factory(t) {
    return (ɵTagboxItemComponent_BaseFactory || (ɵTagboxItemComponent_BaseFactory = ɵɵgetInheritedFactory(TagboxItemComponent)))(t || TagboxItemComponent);
  };
})();
TagboxItemComponent.ɵcmp = ɵɵdefineComponent({
  type: TagboxItemComponent,
  selectors: [["sv-ng-tagbox-item"], ["", "sv-ng-tagbox-item", ""]],
  inputs: {
    item: "item",
    question: "question"
  },
  features: [ɵɵInheritDefinitionFeature],
  decls: 4,
  vars: 6,
  consts: [[1, "sv-tagbox__item"], ["sv-ng-string", "", 1, "sv-tagbox__item-text", 3, "model"], [3, "click"], ["sv-ng-svg-icon", "", 3, "iconName", "partCss", "size"]],
  template: function TagboxItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0);
      ɵɵelement(1, "div", 1);
      ɵɵelementStart(2, "div", 2);
      ɵɵlistener("click", function TagboxItemComponent_Template_div_click_2_listener($event) {
        return ctx.removeItem($event);
      });
      ɵɵnamespaceSVG();
      ɵɵelement(3, "svg", 3);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵadvance(1);
      ɵɵproperty("model", ctx.item.locText);
      ɵɵadvance(1);
      ɵɵclassMap(ctx.question.cssClasses.cleanItemButton);
      ɵɵadvance(1);
      ɵɵproperty("iconName", ctx.question.cssClasses.cleanItemButtonIconId)("partCss", ctx.question.cssClasses.cleanItemButtonSvg)("size", "auto");
    }
  },
  dependencies: [SurveyStringComponent, SvgIconComponent],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TagboxItemComponent, [{
    type: Component,
    args: [{
      selector: "sv-ng-tagbox-item, '[sv-ng-tagbox-item]'",
      templateUrl: "./tagbox-item.component.html"
    }]
  }], null, {
    item: [{
      type: Input
    }],
    question: [{
      type: Input
    }]
  });
})();
AngularComponentFactory.Instance.registerComponent("sv-tagbox-item", TagboxItemComponent);
var TagboxComponent = class {
  get dropdownModel() {
    var _a;
    return (_a = this.model) === null || _a === void 0 ? void 0 : _a.dropdownListModel;
  }
  getModel() {
    return this.model;
  }
  ngOnInit() {
    if (!this.model.dropdownListModel) {
      this.model.dropdownListModel = new import_survey_core.DropdownMultiSelectListModel(this.model);
    }
  }
  click(event) {
    var _a;
    (_a = this.dropdownModel) === null || _a === void 0 ? void 0 : _a.onClick(event);
  }
  chevronPointerDown(event) {
    var _a;
    (_a = this.dropdownModel) === null || _a === void 0 ? void 0 : _a.chevronPointerDown(event);
  }
  clear(event) {
    var _a;
    (_a = this.dropdownModel) === null || _a === void 0 ? void 0 : _a.onClear(event);
  }
  keyhandler(event) {
    var _a;
    (_a = this.dropdownModel) === null || _a === void 0 ? void 0 : _a.keyHandler(event);
  }
  blur(event) {
    var _a;
    (_a = this.dropdownModel) === null || _a === void 0 ? void 0 : _a.onBlur(event);
  }
};
TagboxComponent.ɵfac = function TagboxComponent_Factory(t) {
  return new (t || TagboxComponent)();
};
TagboxComponent.ɵcmp = ɵɵdefineComponent({
  type: TagboxComponent,
  selectors: [["sv-ng-tagbox"], ["", "sv-ng-tagbox", ""]],
  inputs: {
    model: "model"
  },
  decls: 5,
  vars: 6,
  consts: [[3, "click"], [3, "class", "blur", "keydown", 4, "ngIf"], [3, "popupModel", 4, "ngIf"], ["disabled", "", 3, "class", 4, "ngIf"], [3, "class", "pointerdown", 4, "ngIf"], [3, "blur", "keydown"], [4, "ngIf"], [3, "component"], [3, "class", "visible", "click", 4, "ngIf"], [3, "item", "question", 4, "ngFor", "ngForOf"], [3, "item", "question"], [3, "visible", "click"], ["sv-ng-svg-icon", "", 3, "iconName", "partCss", "title", "size"], [3, "popupModel"], ["disabled", ""], [3, "pointerdown"], ["sv-ng-svg-icon", "", 3, "iconName", "partCss", "size"]],
  template: function TagboxComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0);
      ɵɵlistener("click", function TagboxComponent_Template_div_click_0_listener($event) {
        return ctx.click($event);
      });
      ɵɵtemplate(1, TagboxComponent_div_1_Template, 5, 23, "div", 1)(2, TagboxComponent_sv_ng_popup_2_Template, 1, 1, "sv-ng-popup", 2)(3, TagboxComponent_div_3_Template, 3, 4, "div", 3)(4, TagboxComponent_div_4_Template, 2, 5, "div", 4);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵclassMap(ctx.model.cssClasses.selectWrapper);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", !ctx.model.isReadOnly);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", !ctx.model.isReadOnly);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.model.isReadOnly);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.model.cssClasses.chevronButtonIconId);
    }
  },
  dependencies: [TagboxItemComponent, SvgIconComponent, PopupComponent, NgIf, NgForOf, DynamicComponentDirective, VisibleDirective],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TagboxComponent, [{
    type: Component,
    args: [{
      selector: "sv-ng-tagbox, '[sv-ng-tagbox]'",
      templateUrl: "./tagbox.component.html"
    }]
  }], null, {
    model: [{
      type: Input
    }]
  });
})();
var DropdownOptionItemComponent = class extends BaseAngular {
  onModelChanged() {
    if (!this.item.locText)
      return;
    this.item.locText.onChanged = () => {
      this.detectChanges();
    };
  }
  getModel() {
    return this.item;
  }
};
DropdownOptionItemComponent.ɵfac = (() => {
  let ɵDropdownOptionItemComponent_BaseFactory;
  return function DropdownOptionItemComponent_Factory(t) {
    return (ɵDropdownOptionItemComponent_BaseFactory || (ɵDropdownOptionItemComponent_BaseFactory = ɵɵgetInheritedFactory(DropdownOptionItemComponent)))(t || DropdownOptionItemComponent);
  };
})();
DropdownOptionItemComponent.ɵcmp = ɵɵdefineComponent({
  type: DropdownOptionItemComponent,
  selectors: [["sv-ng-dropdown-option-item"], ["", "sv-ng-dropdown-option-item", ""]],
  inputs: {
    item: "item"
  },
  features: [ɵɵInheritDefinitionFeature],
  decls: 2,
  vars: 0,
  consts: [["template", ""], [3, "value", "disabled"]],
  template: function DropdownOptionItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, DropdownOptionItemComponent_ng_template_0_Template, 3, 3, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    }
  },
  dependencies: [NgSelectOption, ɵNgSelectMultipleOption],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropdownOptionItemComponent, [{
    type: Component,
    args: [{
      selector: "sv-ng-dropdown-option-item, '[sv-ng-dropdown-option-item]'",
      template: '<ng-template #template><option [value]="item.value" [disabled]="!item.isEnabled">{{ item.text }}</option><ng-template>'
    }]
  }], null, {
    item: [{
      type: Input
    }]
  });
})();
AngularComponentFactory.Instance.registerComponent("sv-dropdown-option-item", DropdownOptionItemComponent);
var SurveyCommentOtherComponent = class {
  constructor() {
  }
  get otherValue() {
    const val = this.question.otherValue;
    return !!val ? val : "";
  }
  onOtherValueChange(event) {
    this.question.onOtherValueChange(event);
  }
  onOtherValueInput(event) {
    this.question.onOtherValueInput(event);
  }
  onCompositionUpdateOtherValue(event) {
    this.question.onCompositionUpdateOtherValue(event);
  }
  get otherId() {
    return this.question.otherId;
  }
  get otherPlaceholder() {
    return this.question.otherPlaceholder;
  }
};
SurveyCommentOtherComponent.ɵfac = function SurveyCommentOtherComponent_Factory(t) {
  return new (t || SurveyCommentOtherComponent)();
};
SurveyCommentOtherComponent.ɵcmp = ɵɵdefineComponent({
  type: SurveyCommentOtherComponent,
  selectors: [["sv-ng-comment-other"], ["", "sv-ng-comment-other", ""]],
  inputs: {
    question: "question"
  },
  decls: 2,
  vars: 2,
  consts: [[3, "id", "value", "resize", "disabled", "class", "change", "input", "compositionupdate", 4, "ngIf"], [4, "ngIf"], [3, "id", "value", "disabled", "change", "input", "compositionupdate"]],
  template: function SurveyCommentOtherComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, SurveyCommentOtherComponent_textarea_0_Template, 1, 11, "textarea", 0)(1, SurveyCommentOtherComponent_div_1_Template, 2, 1, "div", 1);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", !ctx.question.isReadOnlyRenderDiv());
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.question.isReadOnlyRenderDiv());
    }
  },
  dependencies: [NgIf],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SurveyCommentOtherComponent, [{
    type: Component,
    args: [{
      selector: "sv-ng-comment-other, '[sv-ng-comment-other]'",
      templateUrl: "./comment-other.component.html"
    }]
  }], function() {
    return [];
  }, {
    question: [{
      type: Input
    }]
  });
})();
var DropdownSelectComponent = class {
  get editableValue() {
    return this.model.renderedValue || "";
  }
  set editableValue(newValue) {
    if (newValue === "") {
      this.model.renderedValue = void 0;
    } else {
      this.model.renderedValue = newValue;
    }
  }
  click(event) {
    this.model.onClick(event);
  }
  keyup(event) {
    this.model.onKeyUp(event);
  }
};
DropdownSelectComponent.ɵfac = function DropdownSelectComponent_Factory(t) {
  return new (t || DropdownSelectComponent)();
};
DropdownSelectComponent.ɵcmp = ɵɵdefineComponent({
  type: DropdownSelectComponent,
  selectors: [["sv-ng-dropdown-select-question"]],
  inputs: {
    model: "model"
  },
  decls: 6,
  vars: 8,
  consts: [[3, "ngModel", "disabled", "class", "required", "ngModelChange", "click", "keyup", 4, "ngIf"], ["disabled", "", 3, "class", 4, "ngIf"], [3, "class", 4, "ngIf"], ["sv-ng-comment-other", "", 3, "class", "display", "question", 4, "ngIf"], [3, "ngModel", "disabled", "required", "ngModelChange", "click", "keyup"], ["value", "", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["value", ""], [3, "component"], ["disabled", ""], ["sv-ng-svg-icon", "", 3, "iconName", "partCss", "size"], ["sv-ng-comment-other", "", 3, "question"]],
  template: function DropdownSelectComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div")(1, "div");
      ɵɵtemplate(2, DropdownSelectComponent_select_2_Template, 3, 13, "select", 0)(3, DropdownSelectComponent_div_3_Template, 2, 4, "div", 1)(4, DropdownSelectComponent_div_4_Template, 2, 5, "div", 2);
      ɵɵelementEnd();
      ɵɵtemplate(5, DropdownSelectComponent_div_5_Template, 1, 5, "div", 3);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵclassMap(ctx.model.renderCssRoot);
      ɵɵadvance(1);
      ɵɵclassMap(ctx.model.cssClasses.selectWrapper);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", !ctx.model.isReadOnly);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.model.isReadOnly);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.model.cssClasses.chevronButtonIconId);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.model.isOtherSelected);
    }
  },
  dependencies: [SvgIconComponent, SurveyCommentOtherComponent, NgIf, SelectControlValueAccessor, NgControlStatus, NgModel, RequiredValidator, NgSelectOption, ɵNgSelectMultipleOption, NgForOf, DynamicComponentDirective],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropdownSelectComponent, [{
    type: Component,
    args: [{
      selector: "sv-ng-dropdown-select-question",
      templateUrl: "./dropdown-select.component.html"
    }]
  }], null, {
    model: [{
      type: Input
    }]
  });
})();
AngularComponentFactory.Instance.registerComponent("dropdown-select-question", DropdownSelectComponent);
import_survey_core.RendererFactory.Instance.registerRenderer("dropdown", "select", "dropdown-select-question");
var SafeUrlPipe = class {
  constructor(domSanitizer) {
    this.domSanitizer = domSanitizer;
  }
  transform(url) {
    return this.domSanitizer.bypassSecurityTrustUrl(url);
  }
};
SafeUrlPipe.ɵfac = function SafeUrlPipe_Factory(t) {
  return new (t || SafeUrlPipe)(ɵɵdirectiveInject(DomSanitizer, 16));
};
SafeUrlPipe.ɵpipe = ɵɵdefinePipe({
  name: "safeUrl",
  type: SafeUrlPipe,
  pure: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SafeUrlPipe, [{
    type: Pipe,
    args: [{
      name: "safeUrl"
    }]
  }], function() {
    return [{
      type: DomSanitizer
    }];
  }, null);
})();
var SafeResourceUrlPipe = class {
  constructor(domSanitizer) {
    this.domSanitizer = domSanitizer;
  }
  transform(url) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
};
SafeResourceUrlPipe.ɵfac = function SafeResourceUrlPipe_Factory(t) {
  return new (t || SafeResourceUrlPipe)(ɵɵdirectiveInject(DomSanitizer, 16));
};
SafeResourceUrlPipe.ɵpipe = ɵɵdefinePipe({
  name: "safeResourceUrl",
  type: SafeResourceUrlPipe,
  pure: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SafeResourceUrlPipe, [{
    type: Pipe,
    args: [{
      name: "safeResourceUrl"
    }]
  }], function() {
    return [{
      type: DomSanitizer
    }];
  }, null);
})();
var LogoImageComponent = class extends EmbeddedViewContentComponent {
  get survey() {
    return this.data;
  }
};
LogoImageComponent.ɵfac = (() => {
  let ɵLogoImageComponent_BaseFactory;
  return function LogoImageComponent_Factory(t) {
    return (ɵLogoImageComponent_BaseFactory || (ɵLogoImageComponent_BaseFactory = ɵɵgetInheritedFactory(LogoImageComponent)))(t || LogoImageComponent);
  };
})();
LogoImageComponent.ɵcmp = ɵɵdefineComponent({
  type: LogoImageComponent,
  selectors: [["sv-logo-image"]],
  inputs: {
    data: "data"
  },
  features: [ɵɵInheritDefinitionFeature],
  decls: 2,
  vars: 0,
  consts: [["template", ""]],
  template: function LogoImageComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, LogoImageComponent_ng_template_0_Template, 2, 14, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    }
  },
  dependencies: [SafeUrlPipe],
  styles: ["[_nghost-%COMP%]{display:none}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LogoImageComponent, [{
    type: Component,
    args: [{
      selector: "sv-logo-image",
      templateUrl: "./logo-image.component.html",
      styleUrls: ["../../hide-host.scss"]
    }]
  }], null, {
    data: [{
      type: Input
    }]
  });
})();
AngularComponentFactory.Instance.registerComponent("sv-logo-image", LogoImageComponent);
var CharacterCounterComponent = class extends BaseAngular {
  getModel() {
    return this.counter;
  }
};
CharacterCounterComponent.ɵfac = (() => {
  let ɵCharacterCounterComponent_BaseFactory;
  return function CharacterCounterComponent_Factory(t) {
    return (ɵCharacterCounterComponent_BaseFactory || (ɵCharacterCounterComponent_BaseFactory = ɵɵgetInheritedFactory(CharacterCounterComponent)))(t || CharacterCounterComponent);
  };
})();
CharacterCounterComponent.ɵcmp = ɵɵdefineComponent({
  type: CharacterCounterComponent,
  selectors: [["sv-ng-character-counter"]],
  inputs: {
    counter: "counter",
    remainingCharacterCounter: "remainingCharacterCounter"
  },
  features: [ɵɵInheritDefinitionFeature],
  decls: 2,
  vars: 0,
  consts: [["template", ""]],
  template: function CharacterCounterComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, CharacterCounterComponent_ng_template_0_Template, 2, 3, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    }
  },
  styles: ["[_nghost-%COMP%] { display: none; }"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CharacterCounterComponent, [{
    type: Component,
    args: [{
      selector: "sv-ng-character-counter",
      templateUrl: "./character-counter.component.html",
      styles: [":host { display: none; }"]
    }]
  }], null, {
    counter: [{
      type: Input
    }],
    remainingCharacterCounter: [{
      type: Input
    }]
  });
})();
AngularComponentFactory.Instance.registerComponent("character-counter", CharacterCounterComponent);
var TextQuestionComponent = class extends QuestionAngular {
  get value() {
    var _a;
    return (_a = this.model.value) !== null && _a !== void 0 ? _a : "";
  }
};
TextQuestionComponent.ɵfac = (() => {
  let ɵTextQuestionComponent_BaseFactory;
  return function TextQuestionComponent_Factory(t) {
    return (ɵTextQuestionComponent_BaseFactory || (ɵTextQuestionComponent_BaseFactory = ɵɵgetInheritedFactory(TextQuestionComponent)))(t || TextQuestionComponent);
  };
})();
TextQuestionComponent.ɵcmp = ɵɵdefineComponent({
  type: TextQuestionComponent,
  selectors: [["sv-ng-text-question"]],
  features: [ɵɵInheritDefinitionFeature],
  decls: 5,
  vars: 3,
  consts: [[3, "ngTemplateOutlet", 4, "ngIf"], [4, "ngIf"], ["input", ""], [3, "ngTemplateOutlet"], [3, "id"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["contentElement", ""], [3, "value", "disabled", "type", "id", "change", "keyup", "keydown", "blur", "focus", "compositionupdate"], [3, "counter", "remainingCharacterCounter", 4, "ngIf"], [3, "counter", "remainingCharacterCounter"]],
  template: function TextQuestionComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, TextQuestionComponent_ng_container_0_Template, 1, 1, "ng-container", 0)(1, TextQuestionComponent_div_1_Template, 4, 3, "div", 1)(2, TextQuestionComponent_div_2_Template, 3, 1, "div", 1)(3, TextQuestionComponent_ng_template_3_Template, 3, 23, "ng-template", null, 2, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", !ctx.model.dataListId && !ctx.model.isReadOnlyRenderDiv());
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.model.dataListId && !ctx.model.isReadOnlyRenderDiv());
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.model.isReadOnlyRenderDiv());
    }
  },
  dependencies: [CharacterCounterComponent, NgIf, NgTemplateOutlet, NgForOf, NgSelectOption, ɵNgSelectMultipleOption]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextQuestionComponent, [{
    type: Component,
    args: [{
      selector: "sv-ng-text-question",
      templateUrl: "./text.component.html",
      styleUrls: ["./text.component.scss"]
    }]
  }], null, null);
})();
AngularComponentFactory.Instance.registerComponent("text-question", TextQuestionComponent);
var HtmlQuestionComponent = class extends QuestionAngular {
  onModelChanged() {
    super.onModelChanged();
    this.model.locHtml.onChanged = () => {
      this.detectChanges();
    };
  }
  ngOnDestroy() {
    this.model.locHtml.onChanged = () => {
    };
    super.ngOnDestroy();
  }
};
HtmlQuestionComponent.ɵfac = (() => {
  let ɵHtmlQuestionComponent_BaseFactory;
  return function HtmlQuestionComponent_Factory(t) {
    return (ɵHtmlQuestionComponent_BaseFactory || (ɵHtmlQuestionComponent_BaseFactory = ɵɵgetInheritedFactory(HtmlQuestionComponent)))(t || HtmlQuestionComponent);
  };
})();
HtmlQuestionComponent.ɵcmp = ɵɵdefineComponent({
  type: HtmlQuestionComponent,
  selectors: [["sv-ng-html-question"]],
  features: [ɵɵInheritDefinitionFeature],
  decls: 3,
  vars: 5,
  consts: [[3, "innerHTML"], ["contentElement", ""]],
  template: function HtmlQuestionComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelement(0, "div", 0, 1);
      ɵɵpipe(2, "safeHtml");
    }
    if (rf & 2) {
      ɵɵclassMap(ctx.model.renderCssRoot);
      ɵɵproperty("innerHTML", ɵɵpipeBind1(2, 3, ctx.model.locHtml.renderedHtml), ɵɵsanitizeHtml);
    }
  },
  dependencies: [SafeHtmlPipe],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HtmlQuestionComponent, [{
    type: Component,
    args: [{
      selector: "sv-ng-html-question",
      templateUrl: "./html.component.html",
      styleUrls: []
    }]
  }], null, null);
})();
AngularComponentFactory.Instance.registerComponent("html-question", HtmlQuestionComponent);
var SelectBaseComponent = class extends QuestionAngular {
  constructor() {
    super(...arguments);
    this.inputType = "checkbox";
    this.showLegend = true;
  }
  getDefaultComponentName() {
    return "sv-ng-selectbase-item";
  }
  trackItemBy(_, item) {
    return item.value;
  }
  trackColumnBy(index) {
    return index;
  }
  getItemValueComponentName(item) {
    return this.model.getItemValueWrapperComponentName(item) || this.getDefaultComponentName();
  }
  getItemValueComponentData(item) {
    const itemComponentProperty = this.model.getPropertyByName("itemComponent");
    const isDefaultItemComponent = itemComponentProperty.isDefaultValue(this.model.itemComponent);
    const itemComponent = isDefaultItemComponent ? this.getDefaultComponentName() : this.model.itemComponent;
    return {
      componentName: itemComponent,
      componentData: {
        question: this.model,
        model: item,
        inputType: this.inputType,
        data: this.model.getItemValueWrapperComponentData(item)
      }
    };
  }
};
SelectBaseComponent.ɵfac = (() => {
  let ɵSelectBaseComponent_BaseFactory;
  return function SelectBaseComponent_Factory(t) {
    return (ɵSelectBaseComponent_BaseFactory || (ɵSelectBaseComponent_BaseFactory = ɵɵgetInheritedFactory(SelectBaseComponent)))(t || SelectBaseComponent);
  };
})();
SelectBaseComponent.ɵcmp = ɵɵdefineComponent({
  type: SelectBaseComponent,
  selectors: [["sv-ng-selectbase"]],
  inputs: {
    model: "model"
  },
  features: [ɵɵInheritDefinitionFeature],
  decls: 10,
  vars: 16,
  consts: [["contentElement", ""], ["class", "sv-hidden", 4, "ngIf"], [4, "ngIf"], [3, "class", 4, "ngIf"], ["sv-ng-comment-other", "", 3, "class", "question", 4, "ngIf"], [1, "sv-hidden"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "component"], ["role", "presentation", 3, "class", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "presentation"], ["sv-ng-comment-other", "", 3, "question"], ["type", "button", 3, "value", "click"]],
  template: function SelectBaseComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "fieldset", null, 0);
      ɵɵtemplate(2, SelectBaseComponent_legend_2_Template, 2, 1, "legend", 1)(3, SelectBaseComponent_ng_container_3_Template, 2, 2, "ng-container", 2)(4, SelectBaseComponent_ng_container_4_Template, 2, 2, "ng-container", 2)(5, SelectBaseComponent_div_5_Template, 2, 4, "div", 3)(6, SelectBaseComponent_ng_container_6_Template, 3, 4, "ng-container", 2)(7, SelectBaseComponent_ng_container_7_Template, 2, 2, "ng-container", 2)(8, SelectBaseComponent_div_8_Template, 1, 3, "div", 4)(9, SelectBaseComponent_div_9_Template, 2, 3, "div", 2);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵclassMap(ctx.model.getSelectBaseRootCss());
      ɵɵattribute("role", ctx.model.a11y_input_ariaRole)("aria-required", ctx.model.a11y_input_ariaRequired)("aria-label", ctx.model.a11y_input_ariaLabel)("aria-labelledby", ctx.model.a11y_input_ariaLabelledBy)("aria-invalid", ctx.model.a11y_input_ariaInvalid)("aria-describedby", ctx.model.a11y_input_ariaDescribedBy);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.showLegend);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.model.hasHeadItems);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", !ctx.model.hasColumns && !ctx.model.blockedRow);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", !ctx.model.hasColumns && ctx.model.blockedRow);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.model.hasColumns);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.model.hasFootItems);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.model.isOtherSelected);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.model.showClearButtonInContent);
    }
  },
  dependencies: [SurveyCommentOtherComponent, NgIf, NgForOf, DynamicComponentDirective],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectBaseComponent, [{
    type: Component,
    args: [{
      selector: "['sv-ng-selectbase']",
      templateUrl: "./selectbase.component.html"
    }]
  }], null, {
    model: [{
      type: Input
    }]
  });
})();
AngularComponentFactory.Instance.registerComponent("selectbase", SelectBaseComponent);
var RadiogroupComponent = class extends SelectBaseComponent {
  ngOnInit() {
    this.inputType = "radio";
    this.showLegend = false;
    super.ngOnInit();
  }
};
RadiogroupComponent.ɵfac = (() => {
  let ɵRadiogroupComponent_BaseFactory;
  return function RadiogroupComponent_Factory(t) {
    return (ɵRadiogroupComponent_BaseFactory || (ɵRadiogroupComponent_BaseFactory = ɵɵgetInheritedFactory(RadiogroupComponent)))(t || RadiogroupComponent);
  };
})();
RadiogroupComponent.ɵcmp = ɵɵdefineComponent({
  type: RadiogroupComponent,
  selectors: [["sv-ng-radiogroup-question"]],
  features: [ɵɵInheritDefinitionFeature],
  decls: 10,
  vars: 16,
  consts: [["contentElement", ""], ["class", "sv-hidden", 4, "ngIf"], [4, "ngIf"], [3, "class", 4, "ngIf"], ["sv-ng-comment-other", "", 3, "class", "question", 4, "ngIf"], [1, "sv-hidden"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "component"], ["role", "presentation", 3, "class", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "presentation"], ["sv-ng-comment-other", "", 3, "question"], ["type", "button", 3, "value", "click"]],
  template: function RadiogroupComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "fieldset", null, 0);
      ɵɵtemplate(2, RadiogroupComponent_legend_2_Template, 2, 1, "legend", 1)(3, RadiogroupComponent_ng_container_3_Template, 2, 2, "ng-container", 2)(4, RadiogroupComponent_ng_container_4_Template, 2, 2, "ng-container", 2)(5, RadiogroupComponent_div_5_Template, 2, 4, "div", 3)(6, RadiogroupComponent_ng_container_6_Template, 3, 4, "ng-container", 2)(7, RadiogroupComponent_ng_container_7_Template, 2, 2, "ng-container", 2)(8, RadiogroupComponent_div_8_Template, 1, 3, "div", 4)(9, RadiogroupComponent_div_9_Template, 2, 3, "div", 2);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵclassMap(ctx.model.getSelectBaseRootCss());
      ɵɵattribute("role", ctx.model.a11y_input_ariaRole)("aria-required", ctx.model.a11y_input_ariaRequired)("aria-label", ctx.model.a11y_input_ariaLabel)("aria-labelledby", ctx.model.a11y_input_ariaLabelledBy)("aria-invalid", ctx.model.a11y_input_ariaInvalid)("aria-describedby", ctx.model.a11y_input_ariaDescribedBy);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.showLegend);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.model.hasHeadItems);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", !ctx.model.hasColumns && !ctx.model.blockedRow);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", !ctx.model.hasColumns && ctx.model.blockedRow);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.model.hasColumns);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.model.hasFootItems);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.model.isOtherSelected);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.model.showClearButtonInContent);
    }
  },
  dependencies: [SurveyCommentOtherComponent, NgIf, NgForOf, DynamicComponentDirective],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadiogroupComponent, [{
    type: Component,
    args: [{
      selector: "sv-ng-radiogroup-question",
      templateUrl: "./selectbase.component.html"
    }]
  }], null, null);
})();
AngularComponentFactory.Instance.registerComponent("radiogroup-question", RadiogroupComponent);
var RadiogroupItemComponent = class {
  constructor() {
  }
};
RadiogroupItemComponent.ɵfac = function RadiogroupItemComponent_Factory(t) {
  return new (t || RadiogroupItemComponent)();
};
RadiogroupItemComponent.ɵcmp = ɵɵdefineComponent({
  type: RadiogroupItemComponent,
  selectors: [["sv-ng-radiogroup-item"], ["", "sv-ng-radiogroup-item", ""]],
  inputs: {
    question: "question",
    model: "model"
  },
  ngContentSelectors: _c7,
  decls: 2,
  vars: 10,
  consts: [["type", "radio", 3, "name", "id", "disabled", "ngModel", "value", "ngModelChange"]],
  template: function RadiogroupItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "input", 0);
      ɵɵlistener("ngModelChange", function RadiogroupItemComponent_Template_input_ngModelChange_0_listener($event) {
        return ctx.question.renderedValue = $event;
      });
      ɵɵelementEnd();
      ɵɵprojection(1);
    }
    if (rf & 2) {
      ɵɵclassMap(ctx.question.cssClasses.itemControl);
      ɵɵproperty("name", ctx.question.questionName)("id", ctx.question.getItemId(ctx.model))("disabled", !ctx.question.getItemEnabled(ctx.model))("ngModel", ctx.question.renderedValue)("value", ctx.model.value);
      ɵɵattribute("name", ctx.question.questionName)("aria-describedby", ctx.question.ariaDescribedBy)("value", ctx.model.value);
    }
  },
  dependencies: [RadioControlValueAccessor, DefaultValueAccessor, NgControlStatus, NgModel]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadiogroupItemComponent, [{
    type: Component,
    args: [{
      selector: "sv-ng-radiogroup-item, '[sv-ng-radiogroup-item]'",
      templateUrl: "./radiogroup-item.component.html",
      styleUrls: ["./radiogroup-item.component.scss"]
    }]
  }], function() {
    return [];
  }, {
    question: [{
      type: Input
    }],
    model: [{
      type: Input
    }]
  });
})();
var CheckboxComponent = class extends SelectBaseComponent {
};
CheckboxComponent.ɵfac = (() => {
  let ɵCheckboxComponent_BaseFactory;
  return function CheckboxComponent_Factory(t) {
    return (ɵCheckboxComponent_BaseFactory || (ɵCheckboxComponent_BaseFactory = ɵɵgetInheritedFactory(CheckboxComponent)))(t || CheckboxComponent);
  };
})();
CheckboxComponent.ɵcmp = ɵɵdefineComponent({
  type: CheckboxComponent,
  selectors: [["sv-ng-checkbox-question"]],
  features: [ɵɵInheritDefinitionFeature],
  decls: 10,
  vars: 16,
  consts: [["contentElement", ""], ["class", "sv-hidden", 4, "ngIf"], [4, "ngIf"], [3, "class", 4, "ngIf"], ["sv-ng-comment-other", "", 3, "class", "question", 4, "ngIf"], [1, "sv-hidden"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "component"], ["role", "presentation", 3, "class", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "presentation"], ["sv-ng-comment-other", "", 3, "question"], ["type", "button", 3, "value", "click"]],
  template: function CheckboxComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "fieldset", null, 0);
      ɵɵtemplate(2, CheckboxComponent_legend_2_Template, 2, 1, "legend", 1)(3, CheckboxComponent_ng_container_3_Template, 2, 2, "ng-container", 2)(4, CheckboxComponent_ng_container_4_Template, 2, 2, "ng-container", 2)(5, CheckboxComponent_div_5_Template, 2, 4, "div", 3)(6, CheckboxComponent_ng_container_6_Template, 3, 4, "ng-container", 2)(7, CheckboxComponent_ng_container_7_Template, 2, 2, "ng-container", 2)(8, CheckboxComponent_div_8_Template, 1, 3, "div", 4)(9, CheckboxComponent_div_9_Template, 2, 3, "div", 2);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵclassMap(ctx.model.getSelectBaseRootCss());
      ɵɵattribute("role", ctx.model.a11y_input_ariaRole)("aria-required", ctx.model.a11y_input_ariaRequired)("aria-label", ctx.model.a11y_input_ariaLabel)("aria-labelledby", ctx.model.a11y_input_ariaLabelledBy)("aria-invalid", ctx.model.a11y_input_ariaInvalid)("aria-describedby", ctx.model.a11y_input_ariaDescribedBy);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.showLegend);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.model.hasHeadItems);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", !ctx.model.hasColumns && !ctx.model.blockedRow);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", !ctx.model.hasColumns && ctx.model.blockedRow);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.model.hasColumns);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.model.hasFootItems);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.model.isOtherSelected);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.model.showClearButtonInContent);
    }
  },
  dependencies: [SurveyCommentOtherComponent, NgIf, NgForOf, DynamicComponentDirective],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckboxComponent, [{
    type: Component,
    args: [{
      selector: "sv-ng-checkbox-question",
      templateUrl: "./selectbase.component.html"
    }]
  }], null, null);
})();
AngularComponentFactory.Instance.registerComponent("checkbox-question", CheckboxComponent);
var CheckboxItemComponent = class {
  constructor() {
  }
  onChange(event) {
    this.question["clickItemHandler"](this.model, event.target.checked);
  }
  onSelectAllChange(event) {
    this.question.toggleSelectAll();
  }
};
CheckboxItemComponent.ɵfac = function CheckboxItemComponent_Factory(t) {
  return new (t || CheckboxItemComponent)();
};
CheckboxItemComponent.ɵcmp = ɵɵdefineComponent({
  type: CheckboxItemComponent,
  selectors: [["sv-ng-checkbox-item"], ["", "sv-ng-checkbox-item", ""]],
  inputs: {
    question: "question",
    model: "model"
  },
  ngContentSelectors: _c7,
  decls: 3,
  vars: 2,
  consts: [["type", "checkbox", "role", "option", 3, "name", "id", "class", "disabled", "checked", "value", "change", 4, "ngIf"], ["type", "checkbox", "role", "option", 3, "name", "id", "disabled", "checked", "value", "change"]],
  template: function CheckboxItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, CheckboxItemComponent_input_0_Template, 1, 7, "input", 0)(1, CheckboxItemComponent_input_1_Template, 1, 7, "input", 0);
      ɵɵprojection(2);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.model == ctx.question.selectAllItem);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.model != ctx.question.selectAllItem);
    }
  },
  dependencies: [NgIf]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckboxItemComponent, [{
    type: Component,
    args: [{
      selector: "sv-ng-checkbox-item, '[sv-ng-checkbox-item]'",
      templateUrl: "./checkbox-item.component.html",
      styleUrls: ["./checkbox-item.component.scss"]
    }]
  }], function() {
    return [];
  }, {
    question: [{
      type: Input
    }],
    model: [{
      type: Input
    }]
  });
})();
var DropdownQuestionComponent = class extends QuestionAngular {
};
DropdownQuestionComponent.ɵfac = (() => {
  let ɵDropdownQuestionComponent_BaseFactory;
  return function DropdownQuestionComponent_Factory(t) {
    return (ɵDropdownQuestionComponent_BaseFactory || (ɵDropdownQuestionComponent_BaseFactory = ɵɵgetInheritedFactory(DropdownQuestionComponent)))(t || DropdownQuestionComponent);
  };
})();
DropdownQuestionComponent.ɵcmp = ɵɵdefineComponent({
  type: DropdownQuestionComponent,
  selectors: [["sv-ng-dropdown-question"]],
  features: [ɵɵInheritDefinitionFeature],
  decls: 4,
  vars: 4,
  consts: [["contentElement", ""], [3, "model"], ["sv-ng-comment-other", "", 3, "class", "question", 4, "ngIf"], ["sv-ng-comment-other", "", 3, "question"]],
  template: function DropdownQuestionComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", null, 0);
      ɵɵelement(2, "sv-ng-dropdown", 1);
      ɵɵtemplate(3, DropdownQuestionComponent_div_3_Template, 1, 3, "div", 2);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵclassMap(ctx.model.renderCssRoot);
      ɵɵadvance(2);
      ɵɵproperty("model", ctx.model);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.model.isOtherSelected);
    }
  },
  dependencies: [DropdownComponent, SurveyCommentOtherComponent, NgIf],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropdownQuestionComponent, [{
    type: Component,
    args: [{
      selector: "sv-ng-dropdown-question",
      templateUrl: "./dropdown.component.html"
    }]
  }], null, null);
})();
AngularComponentFactory.Instance.registerComponent("dropdown-question", DropdownQuestionComponent);
var TagboxQuestionComponent = class extends QuestionAngular {
};
TagboxQuestionComponent.ɵfac = (() => {
  let ɵTagboxQuestionComponent_BaseFactory;
  return function TagboxQuestionComponent_Factory(t) {
    return (ɵTagboxQuestionComponent_BaseFactory || (ɵTagboxQuestionComponent_BaseFactory = ɵɵgetInheritedFactory(TagboxQuestionComponent)))(t || TagboxQuestionComponent);
  };
})();
TagboxQuestionComponent.ɵcmp = ɵɵdefineComponent({
  type: TagboxQuestionComponent,
  selectors: [["sv-ng-tagbox-question"]],
  features: [ɵɵInheritDefinitionFeature],
  decls: 4,
  vars: 4,
  consts: [["contentElement", ""], [3, "model"], ["sv-ng-comment-other", "", 3, "class", "question", 4, "ngIf"], ["sv-ng-comment-other", "", 3, "question"]],
  template: function TagboxQuestionComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", null, 0);
      ɵɵelement(2, "sv-ng-tagbox", 1);
      ɵɵtemplate(3, TagboxQuestionComponent_div_3_Template, 1, 3, "div", 2);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵclassMap(ctx.model.renderCssRoot);
      ɵɵadvance(2);
      ɵɵproperty("model", ctx.model);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.model.isOtherSelected);
    }
  },
  dependencies: [TagboxComponent, SurveyCommentOtherComponent, NgIf],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TagboxQuestionComponent, [{
    type: Component,
    args: [{
      selector: "sv-ng-tagbox-question",
      templateUrl: "./tagbox.component.html"
    }]
  }], null, null);
})();
AngularComponentFactory.Instance.registerComponent("tagbox-question", TagboxQuestionComponent);
var RatingQuestionComponent = class extends QuestionAngular {
  trackByFn(index) {
    return index;
  }
  onClick(event) {
    event.stopPropagation();
    this.model.setValueFromClick(event.target.value);
  }
};
RatingQuestionComponent.ɵfac = (() => {
  let ɵRatingQuestionComponent_BaseFactory;
  return function RatingQuestionComponent_Factory(t) {
    return (ɵRatingQuestionComponent_BaseFactory || (ɵRatingQuestionComponent_BaseFactory = ɵɵgetInheritedFactory(RatingQuestionComponent)))(t || RatingQuestionComponent);
  };
})();
RatingQuestionComponent.ɵcmp = ɵɵdefineComponent({
  type: RatingQuestionComponent,
  selectors: [["sv-ng-rating-question"]],
  features: [ɵɵInheritDefinitionFeature],
  decls: 7,
  vars: 6,
  consts: [["contentElement", ""], ["role", "radiogroup"], ["role", "presentation", 1, "sv-hidden"], ["sv-ng-string", "", 3, "class", "model", 4, "ngIf"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["sv-ng-string", "", 3, "model"], [3, "component"]],
  template: function RatingQuestionComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", null, 0)(2, "fieldset", 1);
      ɵɵelement(3, "legend", 2);
      ɵɵtemplate(4, RatingQuestionComponent_span_4_Template, 1, 3, "span", 3)(5, RatingQuestionComponent_5_Template, 1, 8, null, 4)(6, RatingQuestionComponent_span_6_Template, 1, 3, "span", 3);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵclassMap(ctx.model.ratingRootCss);
      ɵɵadvance(4);
      ɵɵproperty("ngIf", ctx.model.hasMinLabel);
      ɵɵadvance(1);
      ɵɵproperty("ngForOf", ctx.model.renderedRateItems)("ngForTrackBy", ctx.trackByFn);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.model.hasMaxLabel);
    }
  },
  dependencies: [SurveyStringComponent, NgIf, NgForOf, DynamicComponentDirective],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RatingQuestionComponent, [{
    type: Component,
    args: [{
      selector: "sv-ng-rating-question",
      templateUrl: "./rating.component.html"
    }]
  }], null, null);
})();
AngularComponentFactory.Instance.registerComponent("rating-question", RatingQuestionComponent);
var BooleanQuestionComponent = class extends QuestionAngular {
  onChange(event) {
    this.model.booleanValue = event.target.value;
  }
};
BooleanQuestionComponent.ɵfac = (() => {
  let ɵBooleanQuestionComponent_BaseFactory;
  return function BooleanQuestionComponent_Factory(t) {
    return (ɵBooleanQuestionComponent_BaseFactory || (ɵBooleanQuestionComponent_BaseFactory = ɵɵgetInheritedFactory(BooleanQuestionComponent)))(t || BooleanQuestionComponent);
  };
})();
BooleanQuestionComponent.ɵcmp = ɵɵdefineComponent({
  type: BooleanQuestionComponent,
  selectors: [["sv-ng-boolean-question"]],
  features: [ɵɵInheritDefinitionFeature],
  decls: 11,
  vars: 31,
  consts: [[3, "keydown"], ["contentElement", ""], ["type", "checkbox", 3, "disabled", "indeterminate", "value", "ngModel", "ngModelChange"], [3, "click"], ["sv-ng-string", "", 3, "model"], ["sv-ng-string", "", 3, "class", "model", 4, "ngIf"]],
  template: function BooleanQuestionComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0, 1);
      ɵɵlistener("keydown", function BooleanQuestionComponent_Template_div_keydown_0_listener($event) {
        return ctx.model.onKeyDownCore($event);
      });
      ɵɵelementStart(2, "label")(3, "input", 2);
      ɵɵlistener("ngModelChange", function BooleanQuestionComponent_Template_input_ngModelChange_3_listener($event) {
        return ctx.model.booleanValue = $event;
      });
      ɵɵelementEnd();
      ɵɵelementStart(4, "div", 3);
      ɵɵlistener("click", function BooleanQuestionComponent_Template_div_click_4_listener($event) {
        return ctx.model.onLabelClick($event, false);
      });
      ɵɵelement(5, "span", 4);
      ɵɵelementEnd();
      ɵɵelementStart(6, "div", 3);
      ɵɵlistener("click", function BooleanQuestionComponent_Template_div_click_6_listener($event) {
        return ctx.model.onSwitchClickModel($event);
      });
      ɵɵelementStart(7, "span");
      ɵɵtemplate(8, BooleanQuestionComponent_span_8_Template, 1, 3, "span", 5);
      ɵɵelementEnd()();
      ɵɵelementStart(9, "div", 3);
      ɵɵlistener("click", function BooleanQuestionComponent_Template_div_click_9_listener($event) {
        return ctx.model.onLabelClick($event, true);
      });
      ɵɵelement(10, "span", 4);
      ɵɵelementEnd()()();
    }
    if (rf & 2) {
      ɵɵclassMap(ctx.model.cssClasses.root);
      ɵɵadvance(2);
      ɵɵclassMap(ctx.model.getItemCss());
      ɵɵadvance(1);
      ɵɵclassMap(ctx.model.cssClasses.control);
      ɵɵproperty("disabled", ctx.model.isInputReadOnly)("indeterminate", ctx.model.isIndeterminate)("value", ctx.model.booleanValue)("ngModel", ctx.model.booleanValue);
      ɵɵattribute("name", ctx.model.name)("id", ctx.model.inputId)("aria-required", ctx.model.ariaRequired)("aria-label", ctx.model.ariaLabel)("aria-invalid", ctx.model.ariaInvalid)("aria-describedby", ctx.model.ariaDescribedBy);
      ɵɵadvance(1);
      ɵɵclassMap(ctx.model.cssClasses.sliderGhost);
      ɵɵadvance(1);
      ɵɵclassMap(ctx.model.getLabelCss(false));
      ɵɵproperty("model", ctx.model.locLabelFalse);
      ɵɵadvance(1);
      ɵɵclassMap(ctx.model.cssClasses.switch);
      ɵɵadvance(1);
      ɵɵclassMap(ctx.model.cssClasses.slider);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.model.cssClasses.sliderText && ctx.model.isDeterminated);
      ɵɵadvance(1);
      ɵɵclassMap(ctx.model.cssClasses.sliderGhost);
      ɵɵadvance(1);
      ɵɵclassMap(ctx.model.getLabelCss(true));
      ɵɵproperty("model", ctx.model.locLabelTrue);
    }
  },
  dependencies: [SurveyStringComponent, CheckboxControlValueAccessor, NgControlStatus, NgModel, NgIf],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BooleanQuestionComponent, [{
    type: Component,
    args: [{
      selector: "sv-ng-boolean-question",
      templateUrl: "./boolean.component.html"
    }]
  }], null, null);
})();
AngularComponentFactory.Instance.registerComponent("boolean-question", BooleanQuestionComponent);
var ImagePickerItemComponent = class extends BaseAngular {
  getModel() {
    return this.model;
  }
  onChange(event) {
    if (this.question.multiSelect) {
      if (event.target.checked) {
        this.question.value = this.question.value.concat(event.target.value);
      } else {
        var currValue = this.question.value;
        currValue.splice(this.question.value.indexOf(event.target.value), 1);
        this.question.value = currValue;
      }
    } else {
      this.question.value = event.target.value;
    }
  }
  ngAfterViewInit() {
    this.model.locImageLink.onChanged = () => {
      this.detectChanges();
    };
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this.model.locImageLink.onChanged = () => {
    };
  }
};
ImagePickerItemComponent.ɵfac = (() => {
  let ɵImagePickerItemComponent_BaseFactory;
  return function ImagePickerItemComponent_Factory(t) {
    return (ɵImagePickerItemComponent_BaseFactory || (ɵImagePickerItemComponent_BaseFactory = ɵɵgetInheritedFactory(ImagePickerItemComponent)))(t || ImagePickerItemComponent);
  };
})();
ImagePickerItemComponent.ɵcmp = ɵɵdefineComponent({
  type: ImagePickerItemComponent,
  selectors: [["sv-ng-imagepicker-item"]],
  inputs: {
    question: "question",
    model: "model"
  },
  features: [ɵɵInheritDefinitionFeature],
  decls: 2,
  vars: 0,
  consts: [["template", ""], [3, "type", "id", "checked", "disabled", "change"], [3, "class", 4, "ngIf"], [3, "class", "objectFit", "load", "error", 4, "ngIf"], ["controls", "", 3, "class", "objectFit", "loadedmetadata", "error", 4, "ngIf"], [3, "class", "width", "height", "objectFit", 4, "ngIf"], ["sv-ng-string", "", 3, "class", "model", 4, "ngIf"], ["sv-ng-svg-icon", "", 3, "class", "iconName", "size", 4, "ngIf"], ["sv-ng-svg-icon", "", 3, "iconName", "size"], [3, "load", "error"], ["controls", "", 3, "loadedmetadata", "error"], ["sv-ng-string", "", 3, "model"]],
  template: function ImagePickerItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, ImagePickerItemComponent_ng_template_0_Template, 10, 25, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    }
  },
  dependencies: [SvgIconComponent, SurveyStringComponent, NgIf],
  styles: ["[_nghost-%COMP%] { display: none; }"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImagePickerItemComponent, [{
    type: Component,
    args: [{
      selector: "sv-ng-imagepicker-item",
      templateUrl: "./imagepicker-item.component.html",
      styles: [":host { display: none; }"]
    }]
  }], null, {
    question: [{
      type: Input
    }],
    model: [{
      type: Input
    }]
  });
})();
AngularComponentFactory.Instance.registerComponent("sv-ng-imagepicker-item", ImagePickerItemComponent);
var ImagePickerQuestionComponent = class extends QuestionAngular {
  getItemValueComponentName(item) {
    return this.model.getItemValueWrapperComponentName(item) || "sv-ng-imagepicker-item";
  }
  getItemValueComponentData(item) {
    return {
      componentName: "sv-ng-imagepicker-item",
      componentData: {
        question: this.model,
        model: item,
        data: this.model.getItemValueWrapperComponentData(item)
      }
    };
  }
};
ImagePickerQuestionComponent.ɵfac = (() => {
  let ɵImagePickerQuestionComponent_BaseFactory;
  return function ImagePickerQuestionComponent_Factory(t) {
    return (ɵImagePickerQuestionComponent_BaseFactory || (ɵImagePickerQuestionComponent_BaseFactory = ɵɵgetInheritedFactory(ImagePickerQuestionComponent)))(t || ImagePickerQuestionComponent);
  };
})();
ImagePickerQuestionComponent.ɵcmp = ɵɵdefineComponent({
  type: ImagePickerQuestionComponent,
  selectors: [["sv-ng-imagepicker-question"]],
  features: [ɵɵInheritDefinitionFeature],
  decls: 6,
  vars: 5,
  consts: [["contentElement", ""], [1, "sv-hidden"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "component"], ["role", "presentation", 3, "class", 4, "ngFor", "ngForOf"], ["role", "presentation"]],
  template: function ImagePickerQuestionComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "fieldset", null, 0)(2, "legend", 1);
      ɵɵtext(3);
      ɵɵelementEnd();
      ɵɵtemplate(4, ImagePickerQuestionComponent_ng_container_4_Template, 2, 1, "ng-container", 2)(5, ImagePickerQuestionComponent_ng_container_5_Template, 2, 1, "ng-container", 2);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵclassMap(ctx.model.getSelectBaseRootCss());
      ɵɵadvance(3);
      ɵɵtextInterpolate(ctx.model.locTitle.renderedHtml);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", !ctx.model.hasColumns);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.model.hasColumns);
    }
  },
  dependencies: [NgIf, NgForOf, DynamicComponentDirective],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImagePickerQuestionComponent, [{
    type: Component,
    args: [{
      selector: "sv-ng-imagepicker-question",
      templateUrl: "./imagepicker.component.html"
    }]
  }], null, null);
})();
AngularComponentFactory.Instance.registerComponent("imagepicker-question", ImagePickerQuestionComponent);
var ButtonGroupItemComponent = class extends BaseAngular {
  ngOnChanges() {
    this.model = new import_survey_core.ButtonGroupItemModel(this.question, this.item, this.index);
  }
  getModel() {
    return this.item;
  }
};
ButtonGroupItemComponent.ɵfac = (() => {
  let ɵButtonGroupItemComponent_BaseFactory;
  return function ButtonGroupItemComponent_Factory(t) {
    return (ɵButtonGroupItemComponent_BaseFactory || (ɵButtonGroupItemComponent_BaseFactory = ɵɵgetInheritedFactory(ButtonGroupItemComponent)))(t || ButtonGroupItemComponent);
  };
})();
ButtonGroupItemComponent.ɵcmp = ɵɵdefineComponent({
  type: ButtonGroupItemComponent,
  selectors: [["sv-button-group-item"]],
  inputs: {
    item: "item",
    question: "question",
    index: "index"
  },
  features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature],
  decls: 2,
  vars: 0,
  consts: [["template", ""], ["role", "radio"], ["type", "radio", "role", "radio", 3, "disabled", "ngModel", "value", "ngModelChange"], ["data-bind", "css: model.css.decorator"], ["sv-ng-svg-icon", "", 3, "iconName", "size", "class", 4, "ngIf"], ["sv-ng-string", "", 3, "class", "model", 4, "ngIf"], ["sv-ng-svg-icon", "", 3, "iconName", "size"], ["sv-ng-string", "", 3, "model"]],
  template: function ButtonGroupItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, ButtonGroupItemComponent_ng_template_0_Template, 5, 17, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    }
  },
  dependencies: [SvgIconComponent, SurveyStringComponent, RadioControlValueAccessor, DefaultValueAccessor, NgControlStatus, NgModel, NgIf],
  styles: ["[_nghost-%COMP%]{display:none}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonGroupItemComponent, [{
    type: Component,
    args: [{
      selector: "sv-button-group-item",
      templateUrl: "./button-group-item.component.html",
      styleUrls: ["../../hide-host.scss"]
    }]
  }], null, {
    item: [{
      type: Input
    }],
    question: [{
      type: Input
    }],
    index: [{
      type: Input
    }]
  });
})();
var ButtonGroupQuestionComponent = class extends QuestionAngular {
};
ButtonGroupQuestionComponent.ɵfac = (() => {
  let ɵButtonGroupQuestionComponent_BaseFactory;
  return function ButtonGroupQuestionComponent_Factory(t) {
    return (ɵButtonGroupQuestionComponent_BaseFactory || (ɵButtonGroupQuestionComponent_BaseFactory = ɵɵgetInheritedFactory(ButtonGroupQuestionComponent)))(t || ButtonGroupQuestionComponent);
  };
})();
ButtonGroupQuestionComponent.ɵcmp = ɵɵdefineComponent({
  type: ButtonGroupQuestionComponent,
  selectors: [["sv-ng-buttongroup-question"]],
  features: [ɵɵInheritDefinitionFeature],
  decls: 2,
  vars: 3,
  consts: [["role", "group"], [3, "question", "item", "index", 4, "ngFor", "ngForOf"], [3, "question", "item", "index"]],
  template: function ButtonGroupQuestionComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0);
      ɵɵtemplate(1, ButtonGroupQuestionComponent_sv_button_group_item_1_Template, 1, 3, "sv-button-group-item", 1);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵclassMap(ctx.model.cssClasses.root);
      ɵɵadvance(1);
      ɵɵproperty("ngForOf", ctx.model.visibleChoices);
    }
  },
  dependencies: [ButtonGroupItemComponent, NgForOf],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonGroupQuestionComponent, [{
    type: Component,
    args: [{
      selector: "sv-ng-buttongroup-question",
      templateUrl: "./button-group.component.html"
    }]
  }], null, null);
})();
var ComponentsContainerComponent = class extends EmbeddedViewContentComponent {
  get components() {
    return this.survey.getContainerContent(this.container);
  }
  get isNeedRenderWrapper() {
    return this.needRenderWrapper === false ? false : true;
  }
};
ComponentsContainerComponent.ɵfac = (() => {
  let ɵComponentsContainerComponent_BaseFactory;
  return function ComponentsContainerComponent_Factory(t) {
    return (ɵComponentsContainerComponent_BaseFactory || (ɵComponentsContainerComponent_BaseFactory = ɵɵgetInheritedFactory(ComponentsContainerComponent)))(t || ComponentsContainerComponent);
  };
})();
ComponentsContainerComponent.ɵcmp = ɵɵdefineComponent({
  type: ComponentsContainerComponent,
  selectors: [["sv-components-container"], ["", "sv-components-container", ""], ["sv-ng-components-container"]],
  inputs: {
    survey: "survey",
    container: "container",
    needRenderWrapper: "needRenderWrapper"
  },
  features: [ɵɵInheritDefinitionFeature],
  decls: 2,
  vars: 0,
  consts: [["template", ""], [4, "ngIf"], ["class", "sv-components-column", 4, "ngIf"], [1, "sv-components-column"], [4, "ngFor", "ngForOf"], [3, "component"]],
  template: function ComponentsContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, ComponentsContainerComponent_ng_template_0_Template, 2, 2, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    }
  },
  dependencies: [NgIf, NgForOf, DynamicComponentDirective],
  styles: ["[_nghost-%COMP%]{display:none}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ComponentsContainerComponent, [{
    type: Component,
    args: [{
      selector: "sv-components-container, [sv-components-container], sv-ng-components-container",
      templateUrl: "./components-container.component.html",
      styleUrls: ["./hide-host.scss"]
    }]
  }], null, {
    survey: [{
      type: Input
    }],
    container: [{
      type: Input
    }],
    needRenderWrapper: [{
      type: Input
    }]
  });
})();
AngularComponentFactory.Instance.registerComponent("sv-components-container", ComponentsContainerComponent);
var Key2ClickDirective = class _Key2ClickDirective {
  constructor(el) {
    this.el = el;
    this.isSubscribed = false;
    this.options = Object.assign({}, _Key2ClickDirective.defaultOptions);
    this.onkeyup = (evt) => {
      evt.preventDefault();
      evt.stopPropagation();
      (0, import_survey_core.doKey2ClickUp)(evt, this.options);
      return false;
    };
    this.subscribeEventListeners();
  }
  onkeydown(evt) {
    (0, import_survey_core.doKey2ClickDown)(evt, this.options);
  }
  blur(evt) {
    (0, import_survey_core.doKey2ClickBlur)(evt);
  }
  get element() {
    return this.el.nativeElement;
  }
  subscribeEventListeners() {
    if (this.isSubscribed)
      return;
    this.element.tabIndex = 0;
    this.element.addEventListener("keyup", this.onkeyup.bind(this));
    this.element.addEventListener("keydown", this.onkeydown.bind(this));
    this.element.addEventListener("blur", this.blur);
    this.isSubscribed = true;
  }
  unsubscribeEventListeners() {
    if (!this.isSubscribed)
      return;
    this.element.tabIndex = -1;
    this.element.removeEventListener("keyup", this.onkeyup.bind(this));
    this.element.removeEventListener("keydown", this.onkeydown.bind(this));
    this.element.removeEventListener("blur", this.blur);
    this.isSubscribed = false;
  }
  ngOnChanges(changes) {
    const curValue = changes["key2click"].currentValue;
    if (curValue.disableTabStop) {
      this.unsubscribeEventListeners();
    } else {
      this.subscribeEventListeners();
    }
    this.options = Object.assign({}, _Key2ClickDirective.defaultOptions, curValue);
  }
  ngOnDestroy() {
    this.unsubscribeEventListeners();
  }
};
Key2ClickDirective.defaultOptions = {
  processEsc: true,
  disableTabStop: false
};
Key2ClickDirective.ɵfac = function Key2ClickDirective_Factory(t) {
  return new (t || Key2ClickDirective)(ɵɵdirectiveInject(ElementRef));
};
Key2ClickDirective.ɵdir = ɵɵdefineDirective({
  type: Key2ClickDirective,
  selectors: [["", "key2click", ""]],
  inputs: {
    key2click: "key2click"
  },
  features: [ɵɵNgOnChangesFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Key2ClickDirective, [{
    type: Directive,
    args: [{
      selector: "[key2click]"
    }]
  }], function() {
    return [{
      type: ElementRef
    }];
  }, {
    key2click: [{
      type: Input
    }]
  });
})();
var ActionBarItemComponent = class extends BaseAngular {
  getModel() {
    return this.model;
  }
};
ActionBarItemComponent.ɵfac = (() => {
  let ɵActionBarItemComponent_BaseFactory;
  return function ActionBarItemComponent_Factory(t) {
    return (ɵActionBarItemComponent_BaseFactory || (ɵActionBarItemComponent_BaseFactory = ɵɵgetInheritedFactory(ActionBarItemComponent)))(t || ActionBarItemComponent);
  };
})();
ActionBarItemComponent.ɵcmp = ɵɵdefineComponent({
  type: ActionBarItemComponent,
  selectors: [["sv-action-bar-item"]],
  inputs: {
    model: "model"
  },
  features: [ɵɵInheritDefinitionFeature],
  decls: 2,
  vars: 0,
  consts: [["template", ""], ["type", "button", 3, "key2click", "disabled", "click"], ["sv-ng-svg-icon", "", 3, "iconName", "size", "title", "class", 4, "ngIf"], [3, "class", 4, "ngIf"], ["sv-ng-svg-icon", "", 3, "iconName", "size", "title"]],
  template: function ActionBarItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, ActionBarItemComponent_ng_template_0_Template, 4, 12, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    }
  },
  dependencies: [SvgIconComponent, Key2ClickDirective, NgIf],
  styles: ["[_nghost-%COMP%]{display:none}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActionBarItemComponent, [{
    type: Component,
    args: [{
      selector: "sv-action-bar-item",
      templateUrl: "./action-bar-item.component.html",
      styleUrls: ["../../hide-host.scss"]
    }]
  }], null, {
    model: [{
      type: Input
    }]
  });
})();
AngularComponentFactory.Instance.registerComponent("sv-action-bar-item", ActionBarItemComponent);
var ActionBarItemDropdownComponent = class extends BaseAngular {
  constructor() {
    super(...arguments);
    this.getTarget = import_survey_core.getActionDropdownButtonTarget;
  }
  getModel() {
    return this.model;
  }
  ngOnInit() {
    super.ngOnInit();
    this.viewModel = new import_survey_core.ActionDropdownViewModel(this.model);
  }
  ngOnDestroy() {
    this.viewModel.dispose();
    super.ngOnDestroy();
  }
};
ActionBarItemDropdownComponent.ɵfac = (() => {
  let ɵActionBarItemDropdownComponent_BaseFactory;
  return function ActionBarItemDropdownComponent_Factory(t) {
    return (ɵActionBarItemDropdownComponent_BaseFactory || (ɵActionBarItemDropdownComponent_BaseFactory = ɵɵgetInheritedFactory(ActionBarItemDropdownComponent)))(t || ActionBarItemDropdownComponent);
  };
})();
ActionBarItemDropdownComponent.ɵcmp = ɵɵdefineComponent({
  type: ActionBarItemDropdownComponent,
  selectors: [["sv-action-bar-item-dropdown"]],
  inputs: {
    model: "model"
  },
  features: [ɵɵInheritDefinitionFeature],
  decls: 2,
  vars: 0,
  consts: [["template", ""], ["type", "button", 3, "key2click", "title", "disabled", "click"], ["sv-ng-svg-icon", "", 3, "iconName", "size", "title", "class", 4, "ngIf"], [3, "class", 4, "ngIf"], [3, "popupModel", "getTarget"], ["sv-ng-svg-icon", "", 3, "iconName", "size", "title"]],
  template: function ActionBarItemDropdownComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, ActionBarItemDropdownComponent_ng_template_0_Template, 4, 12, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    }
  },
  dependencies: [SvgIconComponent, PopupComponent, Key2ClickDirective, NgIf],
  styles: ["[_nghost-%COMP%]{display:none}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActionBarItemDropdownComponent, [{
    type: Component,
    args: [{
      selector: "sv-action-bar-item-dropdown",
      templateUrl: "./action-bar-item-dropdown.component.html",
      styleUrls: ["../../hide-host.scss"]
    }]
  }], null, {
    model: [{
      type: Input
    }]
  });
})();
AngularComponentFactory.Instance.registerComponent("sv-action-bar-item-dropdown", ActionBarItemDropdownComponent);
var SelectBaseItemComponent = class extends BaseAngular {
  constructor() {
    super(...arguments);
    this.showLabel = true;
  }
  getModel() {
    return this.model;
  }
};
SelectBaseItemComponent.ɵfac = (() => {
  let ɵSelectBaseItemComponent_BaseFactory;
  return function SelectBaseItemComponent_Factory(t) {
    return (ɵSelectBaseItemComponent_BaseFactory || (ɵSelectBaseItemComponent_BaseFactory = ɵɵgetInheritedFactory(SelectBaseItemComponent)))(t || SelectBaseItemComponent);
  };
})();
SelectBaseItemComponent.ɵcmp = ɵɵdefineComponent({
  type: SelectBaseItemComponent,
  selectors: [["sv-ng-selectbase-item"], ["sv-ng-selebase-item"]],
  inputs: {
    question: "question",
    model: "model",
    inputType: "inputType",
    showLabel: "showLabel"
  },
  features: [ɵɵInheritDefinitionFeature],
  decls: 2,
  vars: 0,
  consts: [["template", ""], ["role", "presentation"], [3, "ngSwitch"], ["sv-ng-checkbox-item", "", 3, "class", "model", "question", 4, "ngSwitchCase"], ["sv-ng-radiogroup-item", "", 3, "class", "model", "question", "mousedown", 4, "ngSwitchCase"], ["itemDecorator", ""], ["sv-ng-checkbox-item", "", 3, "model", "question"], [4, "ngTemplateOutlet"], ["sv-ng-radiogroup-item", "", 3, "model", "question", "mousedown"], [3, "class", 4, "ngIf"], [3, "model"]],
  template: function SelectBaseItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, SelectBaseItemComponent_ng_template_0_Template, 6, 5, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    }
  },
  dependencies: [CheckboxItemComponent, RadiogroupItemComponent, SurveyStringComponent, NgSwitch, NgSwitchCase, NgTemplateOutlet, NgIf],
  styles: ["[_nghost-%COMP%] { display: none; }"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectBaseItemComponent, [{
    type: Component,
    args: [{
      selector: "['sv-ng-selectbase-item'], sv-ng-selebase-item",
      templateUrl: "./selectbase-item.html",
      styles: [":host { display: none; }"]
    }]
  }], null, {
    question: [{
      type: Input
    }],
    model: [{
      type: Input
    }],
    inputType: [{
      type: Input
    }],
    showLabel: [{
      type: Input
    }]
  });
})();
AngularComponentFactory.Instance.registerComponent("sv-ng-selectbase-item", SelectBaseItemComponent);
var SkeletonComponent = class extends EmbeddedViewContentComponent {
};
SkeletonComponent.ɵfac = (() => {
  let ɵSkeletonComponent_BaseFactory;
  return function SkeletonComponent_Factory(t) {
    return (ɵSkeletonComponent_BaseFactory || (ɵSkeletonComponent_BaseFactory = ɵɵgetInheritedFactory(SkeletonComponent)))(t || SkeletonComponent);
  };
})();
SkeletonComponent.ɵcmp = ɵɵdefineComponent({
  type: SkeletonComponent,
  selectors: [["sv-skeleton"]],
  inputs: {
    element: "element"
  },
  features: [ɵɵInheritDefinitionFeature],
  decls: 2,
  vars: 0,
  consts: [["template", ""], [1, "sv-skeleton-element", 3, "id"]],
  template: function SkeletonComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, SkeletonComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    }
  },
  styles: ["[_nghost-%COMP%]{display:none}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SkeletonComponent, [{
    type: Component,
    args: [{
      selector: "sv-skeleton",
      templateUrl: "./skeleton.component.html",
      styleUrls: ["../../hide-host.scss"]
    }]
  }], null, {
    element: [{
      type: Input
    }]
  });
})();
AngularComponentFactory.Instance.registerComponent("sv-skeleton", SkeletonComponent);
var TimerPanelComponent = class extends BaseAngular {
  constructor() {
    super(...arguments);
    this.circleLengthValue = 440;
  }
  getStateElement() {
    return this.model;
  }
  getModel() {
    return this.model;
  }
  get circleLength() {
    return this.circleLengthValue;
  }
  get progress() {
    return -this.model.progress * this.circleLength;
  }
};
TimerPanelComponent.ɵfac = (() => {
  let ɵTimerPanelComponent_BaseFactory;
  return function TimerPanelComponent_Factory(t) {
    return (ɵTimerPanelComponent_BaseFactory || (ɵTimerPanelComponent_BaseFactory = ɵɵgetInheritedFactory(TimerPanelComponent)))(t || TimerPanelComponent);
  };
})();
TimerPanelComponent.ɵcmp = ɵɵdefineComponent({
  type: TimerPanelComponent,
  selectors: [["sv-timerpanel"]],
  inputs: {
    model: "model"
  },
  features: [ɵɵInheritDefinitionFeature],
  decls: 2,
  vars: 2,
  consts: [[3, "class", 4, "ngIf"], ["sv-ng-svg-icon", "", 3, "class", "stroke-dasharray", "stroke-dashoffset", "size", "iconName", 4, "ngIf"], ["sv-ng-svg-icon", "", 3, "size", "iconName"]],
  template: function TimerPanelComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, TimerPanelComponent_div_0_Template, 6, 9, "div", 0)(1, TimerPanelComponent_div_1_Template, 2, 3, "div", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.model.isRunning && ctx.model.showTimerAsClock);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.model.isRunning && !ctx.model.showTimerAsClock);
    }
  },
  dependencies: [SvgIconComponent, NgIf],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimerPanelComponent, [{
    type: Component,
    args: [{
      selector: "sv-timerpanel",
      templateUrl: "./timer-panel.component.html"
    }]
  }], null, {
    model: [{
      type: Input
    }]
  });
})();
AngularComponentFactory.Instance.registerComponent("sv-timerpanel", TimerPanelComponent);
var ListItemComponent = class extends BaseAngular {
  get elementId() {
    var _a;
    return (_a = this.model) === null || _a === void 0 ? void 0 : _a.elementId;
  }
  get ariaSelected() {
    return this.listModel.isItemSelected(this.model) || "";
  }
  get class() {
    return this.listModel.getItemClass(this.model);
  }
  get paddingLeft() {
    return this.listModel.getItemIndent(this.model);
  }
  click(event) {
    this.listModel.onItemClick(this.model);
    event.stopPropagation();
  }
  pointerdown(event) {
    this.listModel.onPointerDown(event, this.model);
  }
  getModel() {
    return this.model;
  }
  ngAfterViewInit() {
    this.listModel.onLastItemRended(this.model);
  }
};
ListItemComponent.ɵfac = (() => {
  let ɵListItemComponent_BaseFactory;
  return function ListItemComponent_Factory(t) {
    return (ɵListItemComponent_BaseFactory || (ɵListItemComponent_BaseFactory = ɵɵgetInheritedFactory(ListItemComponent)))(t || ListItemComponent);
  };
})();
ListItemComponent.ɵcmp = ɵɵdefineComponent({
  type: ListItemComponent,
  selectors: [["sv-ng-list-item"], ["", "sv-ng-list-item", ""]],
  inputs: {
    element: "element",
    model: "model",
    listModel: "listModel"
  },
  features: [ɵɵInheritDefinitionFeature],
  decls: 2,
  vars: 0,
  consts: [["template", ""], ["role", "option", 3, "key2click", "visible", "click", "pointerdown"], [4, "ngIf"], ["sv-ng-svg-icon", "", 3, "class", "iconName", "size", 4, "ngIf"], [3, "model"], ["sv-ng-svg-icon", "", 3, "iconName", "size"], [3, "component"]],
  template: function ListItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, ListItemComponent_ng_template_0_Template, 5, 13, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    }
  },
  dependencies: [SvgIconComponent, SurveyStringComponent, Key2ClickDirective, VisibleDirective, NgIf, DynamicComponentDirective],
  styles: ["[_nghost-%COMP%]{display:none}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListItemComponent, [{
    type: Component,
    args: [{
      selector: "sv-ng-list-item, '[sv-ng-list-item]'",
      templateUrl: "./list-item.component.html",
      styleUrls: ["../../hide-host.scss"]
    }]
  }], null, {
    element: [{
      type: Input
    }],
    model: [{
      type: Input
    }],
    listModel: [{
      type: Input
    }]
  });
})();
AngularComponentFactory.Instance.registerComponent("sv-list-item", ListItemComponent);
var ListComponent = class extends BaseAngular {
  constructor() {
    super(...arguments);
    this.trackItemBy = (_, item) => {
      return item.id;
    };
  }
  getModel() {
    return this.model;
  }
  onGoToItems(event) {
    this.model.goToItems(event);
  }
  onMouseDown(event) {
    event.preventDefault();
  }
  onKeyDown(event) {
    this.model.onKeyDown(event);
  }
  onMouseMove(event) {
    this.model.onMouseMove(event);
  }
  getPropertiesToUpdateSync() {
    return ["renderElements"];
  }
  ngAfterViewInit() {
    var _a;
    if (!!((_a = this.listContainerElement) === null || _a === void 0 ? void 0 : _a.nativeElement)) {
      this.model.initListContainerHtmlElement(this.listContainerElement.nativeElement);
    }
  }
  ngOnDestroy() {
    this.model.initListContainerHtmlElement(void 0);
    super.ngOnDestroy();
  }
};
ListComponent.ɵfac = (() => {
  let ɵListComponent_BaseFactory;
  return function ListComponent_Factory(t) {
    return (ɵListComponent_BaseFactory || (ɵListComponent_BaseFactory = ɵɵgetInheritedFactory(ListComponent)))(t || ListComponent);
  };
})();
ListComponent.ɵcmp = ɵɵdefineComponent({
  type: ListComponent,
  selectors: [["sv-ng-list"], ["", "sv-ng-list", ""]],
  viewQuery: function ListComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c39, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listContainerElement = _t.first);
    }
  },
  inputs: {
    model: "model"
  },
  features: [ɵɵInheritDefinitionFeature],
  decls: 2,
  vars: 0,
  consts: [["template", ""], ["listContainerElement", ""], [3, "class", 4, "ngIf"], [3, "visible"], ["role", "listbox", 3, "class", "visible", "mousedown", "keydown", "mousemove", 4, "ngIf"], ["sv-ng-svg-icon", "", 3, "iconName", "size"], ["type", "text", 3, "ngModel", "ngModelChange", "keyup"], [3, "class", "click", 4, "ngIf"], [3, "click"], ["role", "listbox", 3, "visible", "mousedown", "keydown", "mousemove"], [3, "listModel", "model", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "listModel", "model"]],
  template: function ListComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, ListComponent_ng_template_0_Template, 7, 11, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    }
  },
  dependencies: [SvgIconComponent, ListItemComponent, NgIf, DefaultValueAccessor, NgControlStatus, NgModel, VisibleDirective, NgForOf],
  styles: ["[_nghost-%COMP%]{display:none}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListComponent, [{
    type: Component,
    args: [{
      selector: "sv-ng-list, '[sv-ng-list]'",
      templateUrl: "./list.component.html",
      styleUrls: ["../../hide-host.scss"]
    }]
  }], null, {
    model: [{
      type: Input
    }],
    listContainerElement: [{
      type: ViewChild,
      args: ["listContainerElement"]
    }]
  });
})();
AngularComponentFactory.Instance.registerComponent("sv-list", ListComponent);
var RatingItemComponent = class extends BaseAngular {
  onClick(event) {
    this.model.setValueFromClick(event.target.value);
    event.stopPropagation();
  }
  getModel() {
    return this.item;
  }
};
RatingItemComponent.ɵfac = (() => {
  let ɵRatingItemComponent_BaseFactory;
  return function RatingItemComponent_Factory(t) {
    return (ɵRatingItemComponent_BaseFactory || (ɵRatingItemComponent_BaseFactory = ɵɵgetInheritedFactory(RatingItemComponent)))(t || RatingItemComponent);
  };
})();
RatingItemComponent.ɵcmp = ɵɵdefineComponent({
  type: RatingItemComponent,
  selectors: [["sv-ng-rating-item"]],
  inputs: {
    element: "element",
    model: "model",
    item: "item",
    index: "index"
  },
  features: [ɵɵInheritDefinitionFeature],
  decls: 2,
  vars: 0,
  consts: [["template", ""], [3, "mousedown"], ["type", "radio", 1, "sv-visuallyhidden", 3, "value", "disabled", "checked", "click"], ["sv-ng-string", "", 3, "model"]],
  template: function RatingItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, RatingItemComponent_ng_template_0_Template, 3, 14, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    }
  },
  dependencies: [SurveyStringComponent],
  styles: ["[_nghost-%COMP%]{display:none}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RatingItemComponent, [{
    type: Component,
    args: [{
      selector: "sv-ng-rating-item",
      templateUrl: "./rating-item.component.html",
      styleUrls: ["../../hide-host.scss"]
    }]
  }], null, {
    element: [{
      type: Input
    }],
    model: [{
      type: Input
    }],
    item: [{
      type: Input
    }],
    index: [{
      type: Input
    }]
  });
})();
AngularComponentFactory.Instance.registerComponent("sv-rating-item", RatingItemComponent);
var RatingItemStarComponent = class extends BaseAngular {
  onClick(event) {
    this.model.setValueFromClick(event.target.value);
    event.stopPropagation();
  }
  getModel() {
    return this.item;
  }
};
RatingItemStarComponent.ɵfac = (() => {
  let ɵRatingItemStarComponent_BaseFactory;
  return function RatingItemStarComponent_Factory(t) {
    return (ɵRatingItemStarComponent_BaseFactory || (ɵRatingItemStarComponent_BaseFactory = ɵɵgetInheritedFactory(RatingItemStarComponent)))(t || RatingItemStarComponent);
  };
})();
RatingItemStarComponent.ɵcmp = ɵɵdefineComponent({
  type: RatingItemStarComponent,
  selectors: [["sv-ng-rating-item-star"]],
  inputs: {
    element: "element",
    model: "model",
    item: "item",
    index: "index"
  },
  features: [ɵɵInheritDefinitionFeature],
  decls: 2,
  vars: 0,
  consts: [["template", ""], [3, "mouseover", "mouseout", "mousedown"], ["type", "radio", 1, "sv-visuallyhidden", 3, "value", "disabled", "checked", "click"], ["sv-ng-svg-icon", "", 3, "iconName", "size", "title"]],
  template: function RatingItemStarComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, RatingItemStarComponent_ng_template_0_Template, 4, 21, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    }
  },
  dependencies: [SvgIconComponent],
  styles: ["[_nghost-%COMP%]{display:none}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RatingItemStarComponent, [{
    type: Component,
    args: [{
      selector: "sv-ng-rating-item-star",
      templateUrl: "./rating-item-star.component.html",
      styleUrls: ["../../hide-host.scss"]
    }]
  }], null, {
    element: [{
      type: Input
    }],
    model: [{
      type: Input
    }],
    item: [{
      type: Input
    }],
    index: [{
      type: Input
    }]
  });
})();
AngularComponentFactory.Instance.registerComponent("sv-rating-item-star", RatingItemStarComponent);
var RatingItemSmileyComponent = class extends BaseAngular {
  onClick(event) {
    this.model.setValueFromClick(event.target.value);
    event.stopPropagation();
  }
  getModel() {
    return this.item;
  }
};
RatingItemSmileyComponent.ɵfac = (() => {
  let ɵRatingItemSmileyComponent_BaseFactory;
  return function RatingItemSmileyComponent_Factory(t) {
    return (ɵRatingItemSmileyComponent_BaseFactory || (ɵRatingItemSmileyComponent_BaseFactory = ɵɵgetInheritedFactory(RatingItemSmileyComponent)))(t || RatingItemSmileyComponent);
  };
})();
RatingItemSmileyComponent.ɵcmp = ɵɵdefineComponent({
  type: RatingItemSmileyComponent,
  selectors: [["sv-ng-rating-item-smiley"]],
  inputs: {
    element: "element",
    model: "model",
    item: "item",
    index: "index"
  },
  features: [ɵɵInheritDefinitionFeature],
  decls: 2,
  vars: 0,
  consts: [["template", ""], [3, "mouseover", "mouseout", "mousedown"], ["type", "radio", 1, "sv-visuallyhidden", 3, "value", "disabled", "checked", "click"], ["sv-ng-svg-icon", "", 3, "iconName", "size", "title"]],
  template: function RatingItemSmileyComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, RatingItemSmileyComponent_ng_template_0_Template, 3, 16, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    }
  },
  dependencies: [SvgIconComponent],
  styles: ["[_nghost-%COMP%]{display:none}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RatingItemSmileyComponent, [{
    type: Component,
    args: [{
      selector: "sv-ng-rating-item-smiley",
      templateUrl: "./rating-item-smiley.component.html",
      styleUrls: ["../../hide-host.scss"]
    }]
  }], null, {
    element: [{
      type: Input
    }],
    model: [{
      type: Input
    }],
    item: [{
      type: Input
    }],
    index: [{
      type: Input
    }]
  });
})();
AngularComponentFactory.Instance.registerComponent("sv-rating-item-smiley", RatingItemSmileyComponent);
var RatingDropdownComponent = class {
};
RatingDropdownComponent.ɵfac = function RatingDropdownComponent_Factory(t) {
  return new (t || RatingDropdownComponent)();
};
RatingDropdownComponent.ɵcmp = ɵɵdefineComponent({
  type: RatingDropdownComponent,
  selectors: [["sv-ng-rating-dropdown-question"]],
  inputs: {
    model: "model"
  },
  decls: 2,
  vars: 3,
  consts: [[3, "model"]],
  template: function RatingDropdownComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div");
      ɵɵelement(1, "sv-ng-dropdown", 0);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵclassMap(ctx.model.cssClasses.rootDropdown);
      ɵɵadvance(1);
      ɵɵproperty("model", ctx.model);
    }
  },
  dependencies: [DropdownComponent],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RatingDropdownComponent, [{
    type: Component,
    args: [{
      selector: "sv-ng-rating-dropdown-question",
      templateUrl: "./rating-dropdown.component.html"
    }]
  }], null, {
    model: [{
      type: Input
    }]
  });
})();
AngularComponentFactory.Instance.registerComponent("rating-dropdown-question", RatingDropdownComponent);
import_survey_core.RendererFactory.Instance.registerRenderer("rating", "dropdown", "rating-dropdown-question");
var BooleanCheckboxComponent = class {
};
BooleanCheckboxComponent.ɵfac = function BooleanCheckboxComponent_Factory(t) {
  return new (t || BooleanCheckboxComponent)();
};
BooleanCheckboxComponent.ɵcmp = ɵɵdefineComponent({
  type: BooleanCheckboxComponent,
  selectors: [["sv-ng-boolean-checkbox-question"]],
  inputs: {
    model: "model"
  },
  decls: 9,
  vars: 24,
  consts: [["type", "checkbox", 3, "value", "id", "ngModel", "disabled", "indeterminate", "ngModelChange"], [3, "class", 4, "ngIf"], [1, "check"], [3, "class", "id", 4, "ngIf"], ["sv-ng-string", "", 3, "class", "model", 4, "ngIf"], [3, "id"], [3, "element"], ["sv-ng-string", "", 3, "model"]],
  template: function BooleanCheckboxComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div")(1, "div")(2, "label")(3, "input", 0);
      ɵɵlistener("ngModelChange", function BooleanCheckboxComponent_Template_input_ngModelChange_3_listener($event) {
        return ctx.model.booleanValue = $event;
      });
      ɵɵelementEnd();
      ɵɵelementStart(4, "span");
      ɵɵtemplate(5, BooleanCheckboxComponent__svg_svg_5_Template, 2, 3, "svg", 1);
      ɵɵelement(6, "span", 2);
      ɵɵelementEnd();
      ɵɵtemplate(7, BooleanCheckboxComponent_span_7_Template, 2, 4, "span", 3);
      ɵɵelementEnd();
      ɵɵtemplate(8, BooleanCheckboxComponent_div_8_Template, 1, 3, "div", 4);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵclassMap(ctx.model.cssClasses.rootCheckbox);
      ɵɵadvance(1);
      ɵɵclassMap(ctx.model.getCheckboxItemCss());
      ɵɵadvance(1);
      ɵɵclassMap(ctx.model.cssClasses.checkboxLabel);
      ɵɵadvance(1);
      ɵɵclassMap(ctx.model.cssClasses.controlCheckbox);
      ɵɵproperty("value", ctx.model.booleanValue)("id", ctx.model.inputId)("ngModel", ctx.model.booleanValue)("value", ctx.model.booleanValue)("disabled", ctx.model.isInputReadOnly)("indeterminate", ctx.model.isIndeterminate);
      ɵɵattribute("name", ctx.model.name)("aria-required", ctx.model.ariaRequired)("aria-label", ctx.model.ariaLabel)("aria-invalid", ctx.model.ariaInvalid)("aria-describedby", ctx.model.ariaDescribedBy);
      ɵɵadvance(1);
      ɵɵclassMap(ctx.model.cssClasses.checkboxMaterialDecorator);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", !!ctx.model.svgIcon);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.model.isLabelRendered);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.model.canRenderLabelDescription);
    }
  },
  dependencies: [ElementTitleActionsComponent, SurveyStringComponent, CheckboxControlValueAccessor, NgControlStatus, NgModel, NgIf],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BooleanCheckboxComponent, [{
    type: Component,
    args: [{
      selector: "sv-ng-boolean-checkbox-question",
      templateUrl: "./boolean-checkbox.component.html"
    }]
  }], null, {
    model: [{
      type: Input
    }]
  });
})();
AngularComponentFactory.Instance.registerComponent("boolean-checkbox-question", BooleanCheckboxComponent);
import_survey_core.RendererFactory.Instance.registerRenderer("boolean", "checkbox", "boolean-checkbox-question");
var BooleanRadioItemComponent = class {
  constructor() {
  }
};
BooleanRadioItemComponent.ɵfac = function BooleanRadioItemComponent_Factory(t) {
  return new (t || BooleanRadioItemComponent)();
};
BooleanRadioItemComponent.ɵcmp = ɵɵdefineComponent({
  type: BooleanRadioItemComponent,
  selectors: [["sv-ng-boolean-radio-item"]],
  inputs: {
    question: "question",
    value: "value",
    locText: "locText"
  },
  decls: 5,
  vars: 15,
  consts: [["role", "presentation"], ["type", "radio", 3, "value", "ngModel", "disabled", "ngModelChange"], [3, "class", 4, "ngIf"], ["sv-ng-string", "", 3, "model"]],
  template: function BooleanRadioItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0)(1, "label")(2, "input", 1);
      ɵɵlistener("ngModelChange", function BooleanRadioItemComponent_Template_input_ngModelChange_2_listener($event) {
        return ctx.question.booleanValue = $event;
      });
      ɵɵelementEnd();
      ɵɵtemplate(3, BooleanRadioItemComponent_span_3_Template, 1, 2, "span", 2);
      ɵɵelement(4, "span", 3);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵclassMap(ctx.question.getRadioItemClass(ctx.question.cssClasses, ctx.value));
      ɵɵadvance(1);
      ɵɵclassMap(ctx.question.cssClasses.radioLabel);
      ɵɵadvance(1);
      ɵɵclassMap(ctx.question.cssClasses.itemRadioControl || "");
      ɵɵproperty("value", ctx.value)("ngModel", ctx.question.booleanValue)("disabled", ctx.question.isInputReadOnly);
      ɵɵattribute("name", ctx.question.name)("aria-describedby", ctx.question.ariaDescribedBy);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.question.cssClasses.materialRadioDecorator);
      ɵɵadvance(1);
      ɵɵclassMap(ctx.question.cssClasses.radioControlLabel);
      ɵɵproperty("model", ctx.locText);
    }
  },
  dependencies: [SurveyStringComponent, RadioControlValueAccessor, DefaultValueAccessor, NgControlStatus, NgModel, NgIf],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BooleanRadioItemComponent, [{
    type: Component,
    args: [{
      selector: "sv-ng-boolean-radio-item",
      templateUrl: "boolean-radio-item.component.html"
    }]
  }], function() {
    return [];
  }, {
    question: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    locText: [{
      type: Input
    }]
  });
})();
var BooleanRadioComponent = class {
};
BooleanRadioComponent.ɵfac = function BooleanRadioComponent_Factory(t) {
  return new (t || BooleanRadioComponent)();
};
BooleanRadioComponent.ɵcmp = ɵɵdefineComponent({
  type: BooleanRadioComponent,
  selectors: [["sv-ng-boolean-radio-question"]],
  inputs: {
    model: "model"
  },
  decls: 4,
  vars: 10,
  consts: [["role", "presentation"], [3, "value", "locText", "question"]],
  template: function BooleanRadioComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div")(1, "fieldset", 0);
      ɵɵelement(2, "sv-ng-boolean-radio-item", 1)(3, "sv-ng-boolean-radio-item", 1);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵclassMap(ctx.model.cssClasses.rootRadio);
      ɵɵadvance(1);
      ɵɵclassMap(ctx.model.cssClasses.radioFieldset);
      ɵɵadvance(1);
      ɵɵproperty("value", false)("locText", ctx.model.locLabelFalse)("question", ctx.model);
      ɵɵadvance(1);
      ɵɵproperty("value", true)("locText", ctx.model.locLabelTrue)("question", ctx.model);
    }
  },
  dependencies: [BooleanRadioItemComponent],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BooleanRadioComponent, [{
    type: Component,
    args: [{
      selector: "sv-ng-boolean-radio-question",
      templateUrl: "./boolean-radio.component.html"
    }]
  }], null, {
    model: [{
      type: Input
    }]
  });
})();
AngularComponentFactory.Instance.registerComponent("boolean-radio-question", BooleanRadioComponent);
import_survey_core.RendererFactory.Instance.registerRenderer("boolean", "radio", "boolean-radio-question");
var ProgressDefaultComponent = class extends EmbeddedViewContentComponent {
  getProgressTextInBarCss(css) {
    return import_survey_core.SurveyProgressModel.getProgressTextInBarCss(css);
  }
  getProgressTextUnderBarCss(css) {
    return import_survey_core.SurveyProgressModel.getProgressTextUnderBarCss(css);
  }
};
ProgressDefaultComponent.ɵfac = (() => {
  let ɵProgressDefaultComponent_BaseFactory;
  return function ProgressDefaultComponent_Factory(t) {
    return (ɵProgressDefaultComponent_BaseFactory || (ɵProgressDefaultComponent_BaseFactory = ɵɵgetInheritedFactory(ProgressDefaultComponent)))(t || ProgressDefaultComponent);
  };
})();
ProgressDefaultComponent.ɵcmp = ɵɵdefineComponent({
  type: ProgressDefaultComponent,
  selectors: [["sv-ng-progress-default"]],
  inputs: {
    container: "container",
    model: "model"
  },
  features: [ɵɵInheritDefinitionFeature],
  decls: 2,
  vars: 0,
  consts: [["template", ""], ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", "aria-label", "progress"]],
  template: function ProgressDefaultComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, ProgressDefaultComponent_ng_template_0_Template, 6, 12, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    }
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressDefaultComponent, [{
    type: Component,
    args: [{
      selector: "sv-ng-progress-default",
      templateUrl: "./progress.component.html"
    }]
  }], null, {
    container: [{
      type: Input
    }],
    model: [{
      type: Input
    }]
  });
})();
AngularComponentFactory.Instance.registerComponent("sv-progress-progress", ProgressDefaultComponent);
AngularComponentFactory.Instance.registerComponent("sv-progress-pages", ProgressDefaultComponent);
AngularComponentFactory.Instance.registerComponent("sv-progress-questions", ProgressDefaultComponent);
AngularComponentFactory.Instance.registerComponent("sv-progress-correctquestions", ProgressDefaultComponent);
AngularComponentFactory.Instance.registerComponent("sv-progress-requiredquestions", ProgressDefaultComponent);
var ProgressButtonsComponent = class {
  constructor(changeDetectorRef) {
    this.changeDetectorRef = changeDetectorRef;
    this.hasScroller = false;
    this.updateScroller = void 0;
  }
  createProgressButtonsModel() {
    this.progressButtonsModel = new import_survey_core.SurveyProgressButtonsModel(this.model);
  }
  ngOnInit() {
    this.createProgressButtonsModel();
  }
  ngOnChanges(changes) {
    this.createProgressButtonsModel();
  }
  isListElementClickable(index) {
    return this.progressButtonsModel.isListElementClickable(index);
  }
  getListElementCss(index) {
    return this.progressButtonsModel.getListElementCss(index);
  }
  clickListElement(index) {
    this.progressButtonsModel.clickListElement(index);
  }
  getScrollButtonCss(isLeftScroll) {
    return this.progressButtonsModel.getScrollButtonCss(this.hasScroller, isLeftScroll);
  }
  clickScrollButton(isLeftScroll) {
    if (this.progressButtonsListContainer) {
      this.progressButtonsListContainer.nativeElement.scrollLeft += (isLeftScroll ? -1 : 1) * 70;
    }
  }
  ngAfterViewInit() {
    this.progressButtonsModel = new import_survey_core.SurveyProgressButtonsModel(this.model);
    this.updateScroller = setInterval(() => {
      var _a;
      if (!!((_a = this.progressButtonsListContainer) === null || _a === void 0 ? void 0 : _a.nativeElement)) {
        const listContainerElement = this.progressButtonsListContainer.nativeElement;
        this.hasScroller = listContainerElement.scrollWidth > listContainerElement.offsetWidth;
        this.changeDetectorRef.detectChanges();
      }
    }, 100);
  }
  ngOnDestroy() {
    if (typeof this.updateScroller !== "undefined") {
      clearInterval(this.updateScroller);
      this.updateScroller = void 0;
    }
  }
};
ProgressButtonsComponent.ɵfac = function ProgressButtonsComponent_Factory(t) {
  return new (t || ProgressButtonsComponent)(ɵɵdirectiveInject(ChangeDetectorRef));
};
ProgressButtonsComponent.ɵcmp = ɵɵdefineComponent({
  type: ProgressButtonsComponent,
  selectors: [["sv-ng-progress-buttons"]],
  viewQuery: function ProgressButtonsComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c40, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.progressButtonsListContainer = _t.first);
    }
  },
  inputs: {
    model: "model"
  },
  features: [ɵɵNgOnChangesFeature],
  decls: 8,
  vars: 13,
  consts: [["role", "button", 3, "click"], ["progressButtonsListContainer", ""], [3, "class", "click", 4, "ngFor", "ngForOf"], [3, "click"], [3, "title"]],
  template: function ProgressButtonsComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div")(1, "div")(2, "div", 0);
      ɵɵlistener("click", function ProgressButtonsComponent_Template_div_click_2_listener() {
        return ctx.clickScrollButton(true);
      });
      ɵɵelementEnd();
      ɵɵelementStart(3, "div", null, 1)(5, "ul");
      ɵɵtemplate(6, ProgressButtonsComponent_li_6_Template, 5, 10, "li", 2);
      ɵɵelementEnd()();
      ɵɵelementStart(7, "div", 0);
      ɵɵlistener("click", function ProgressButtonsComponent_Template_div_click_7_listener() {
        return ctx.clickScrollButton(false);
      });
      ɵɵelementEnd()()();
    }
    if (rf & 2) {
      ɵɵclassMap(ctx.model.css.progressButtonsContainerCenter);
      ɵɵadvance(1);
      ɵɵclassMap(ctx.model.css.progressButtonsContainer);
      ɵɵadvance(1);
      ɵɵclassMap(ctx.getScrollButtonCss(true));
      ɵɵadvance(1);
      ɵɵclassMap(ctx.model.css.progressButtonsListContainer);
      ɵɵadvance(2);
      ɵɵclassMap(ctx.model.css.progressButtonsList);
      ɵɵadvance(1);
      ɵɵproperty("ngForOf", ctx.model.visiblePages);
      ɵɵadvance(1);
      ɵɵclassMap(ctx.getScrollButtonCss(false));
    }
  },
  dependencies: [NgForOf],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressButtonsComponent, [{
    type: Component,
    args: [{
      selector: "sv-ng-progress-buttons",
      templateUrl: "./progress.component.html"
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }];
  }, {
    model: [{
      type: Input
    }],
    progressButtonsListContainer: [{
      type: ViewChild,
      args: ["progressButtonsListContainer"]
    }]
  });
})();
AngularComponentFactory.Instance.registerComponent("sv-progress-buttons", ProgressButtonsComponent);
var ProgressTocComponent = class extends EmbeddedViewContentComponent {
  createProgressTOCModel() {
    this.tocModel = new import_survey_core.TOCModel(this.model);
  }
  ngOnInit() {
    super.ngOnInit();
    this.createProgressTOCModel();
  }
  ngOnChanges(changes) {
    this.createProgressTOCModel();
  }
};
ProgressTocComponent.ɵfac = (() => {
  let ɵProgressTocComponent_BaseFactory;
  return function ProgressTocComponent_Factory(t) {
    return (ɵProgressTocComponent_BaseFactory || (ɵProgressTocComponent_BaseFactory = ɵɵgetInheritedFactory(ProgressTocComponent)))(t || ProgressTocComponent);
  };
})();
ProgressTocComponent.ɵcmp = ɵɵdefineComponent({
  type: ProgressTocComponent,
  selectors: [["sv-progress-toc"], ["sv-ng-progress-toc"]],
  inputs: {
    model: "model"
  },
  features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature],
  decls: 2,
  vars: 0,
  consts: [["template", ""], [3, "model", 4, "ngIf"], ["data-bind", "key2click", 3, "click", 4, "ngIf"], [3, "model"], ["data-bind", "key2click", 3, "click"], ["sv-ng-svg-icon", "", 3, "iconName", "size"], [3, "popupModel"]],
  template: function ProgressTocComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, ProgressTocComponent_ng_template_0_Template, 3, 4, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    }
  },
  dependencies: [ListComponent, SvgIconComponent, PopupComponent, NgIf],
  styles: ["[_nghost-%COMP%] { display: none; }"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressTocComponent, [{
    type: Component,
    args: [{
      selector: "sv-progress-toc, sv-ng-progress-toc",
      templateUrl: "./progress.component.html",
      styles: [":host { display: none; }"]
    }]
  }], null, {
    model: [{
      type: Input
    }]
  });
})();
AngularComponentFactory.Instance.registerComponent("sv-progress-toc", ProgressTocComponent);
var PanelComponent = class extends BaseAngular {
  constructor() {
    super(...arguments);
    this.trackRowBy = (_, row) => {
      return row.id;
    };
  }
  getModel() {
    return this.model;
  }
  ngAfterViewInit() {
    var _a, _b;
    if (!!((_a = this.panelContainerRef) === null || _a === void 0 ? void 0 : _a.nativeElement)) {
      (_b = this.model.survey) === null || _b === void 0 ? void 0 : _b.afterRenderPanel(this.model, this.panelContainerRef.nativeElement);
    }
  }
};
PanelComponent.ɵfac = (() => {
  let ɵPanelComponent_BaseFactory;
  return function PanelComponent_Factory(t) {
    return (ɵPanelComponent_BaseFactory || (ɵPanelComponent_BaseFactory = ɵɵgetInheritedFactory(PanelComponent)))(t || PanelComponent);
  };
})();
PanelComponent.ɵcmp = ɵɵdefineComponent({
  type: PanelComponent,
  selectors: [["sv-ng-panel"], ["", "sv-ng-panel", ""]],
  viewQuery: function PanelComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c41, 5, ElementRef);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.panelContainerRef = _t.first);
    }
  },
  inputs: {
    model: "model"
  },
  features: [ɵɵInheritDefinitionFeature],
  decls: 2,
  vars: 0,
  consts: [["template", ""], [3, "class", "focusin", 4, "ngIf"], [3, "focusin"], ["panelContainer", ""], ["sv-ng-errors", "", 3, "element", 4, "ngIf"], ["sv-ng-element-header", "", 3, "element", 4, "ngIf"], [3, "paddingLeft", "class", 4, "ngIf"], ["sv-ng-errors", "", 3, "element"], ["sv-ng-element-header", "", 3, "element"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "model"], [3, "component"], [3, "row"]],
  template: function PanelComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, PanelComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    }
  },
  dependencies: [ErrorsComponent, ElementHeaderComponent, RowComponent, ActionBarComponent, NgIf, NgForOf, DynamicComponentDirective],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PanelComponent, [{
    type: Component,
    args: [{
      selector: "sv-ng-panel, '[sv-ng-panel]'",
      templateUrl: "./panel.component.html"
    }]
  }], null, {
    model: [{
      type: Input
    }],
    panelContainerRef: [{
      type: ViewChild,
      args: ["panelContainer", {
        static: false,
        read: ElementRef
      }]
    }]
  });
})();
AngularComponentFactory.Instance.registerComponent("panel", PanelComponent);
var SurveyNavigationButton = class {
  getModel() {
    return this.model;
  }
  buttonMouseDown() {
    return this.model.data && this.model.data.mouseDown();
  }
};
SurveyNavigationButton.ɵfac = function SurveyNavigationButton_Factory(t) {
  return new (t || SurveyNavigationButton)();
};
SurveyNavigationButton.ɵcmp = ɵɵdefineComponent({
  type: SurveyNavigationButton,
  selectors: [["sv-ng-nav-btn"]],
  inputs: {
    model: "model"
  },
  decls: 1,
  vars: 1,
  consts: [["type", "button", 3, "value", "class", "disabled", "mousedown", "click", 4, "ngIf"], ["type", "button", 3, "value", "disabled", "mousedown", "click"]],
  template: function SurveyNavigationButton_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, SurveyNavigationButton_input_0_Template, 1, 5, "input", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.model.visible);
    }
  },
  dependencies: [NgIf],
  styles: ["[_nghost-%COMP%] { display: contents; }"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SurveyNavigationButton, [{
    type: Component,
    args: [{
      templateUrl: "./survey-nav-btn.component.html",
      selector: "sv-ng-nav-btn",
      styles: [":host { display: contents; }"]
    }]
  }], null, {
    model: [{
      type: Input
    }]
  });
})();
AngularComponentFactory.Instance.registerComponent("sv-nav-btn", SurveyNavigationButton);
var FilePreviewComponent = class extends EmbeddedViewContentComponent {
  constructor() {
    super(...arguments);
    this.trackFilesFn = (index) => {
      return this.question.inputId + "_" + index;
    };
  }
};
FilePreviewComponent.ɵfac = (() => {
  let ɵFilePreviewComponent_BaseFactory;
  return function FilePreviewComponent_Factory(t) {
    return (ɵFilePreviewComponent_BaseFactory || (ɵFilePreviewComponent_BaseFactory = ɵɵgetInheritedFactory(FilePreviewComponent)))(t || FilePreviewComponent);
  };
})();
FilePreviewComponent.ɵcmp = ɵɵdefineComponent({
  type: FilePreviewComponent,
  selectors: [["sv-ng-file-preview"]],
  inputs: {
    question: "question"
  },
  features: [ɵɵInheritDefinitionFeature],
  decls: 2,
  vars: 0,
  consts: [["template", ""], [4, "ngIf"], [3, "visible", "class", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "visible"], [3, "class", 4, "ngIf"], ["alt", "File preview", 3, "height", "width", 4, "ngIf"], ["sv-ng-svg-icon", "", 3, "iconName", "partCss", "size", 4, "ngIf"], [3, "class", "click", 4, "ngIf"], [3, "click"], ["alt", "File preview"], ["sv-ng-svg-icon", "", 3, "iconName", "partCss", "size"], ["sv-ng-svg-icon", "", 3, "title", "partCss", "iconName", "size", 4, "ngIf"], ["sv-ng-svg-icon", "", 3, "title", "partCss", "iconName", "size"]],
  template: function FilePreviewComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, FilePreviewComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    }
  },
  dependencies: [SvgIconComponent, NgIf, NgForOf, VisibleDirective, SafeUrlPipe],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FilePreviewComponent, [{
    type: Component,
    args: [{
      selector: "sv-ng-file-preview",
      templateUrl: "./file-preview.component.html"
    }]
  }], null, {
    question: [{
      type: Input
    }]
  });
})();
AngularComponentFactory.Instance.registerComponent("sv-file-preview", FilePreviewComponent);
var MatrixQuestionComponent = class extends QuestionAngular {
  ngOnInit() {
    this.model.visibleRowsChangedCallback = () => {
      this.detectChanges();
    };
    super.ngOnInit();
  }
  onChange(row, column) {
    if (this.model.isInputReadOnly)
      return;
    row.value = column.value;
    this.detectChanges();
  }
  trackRowByFn(i, row) {
    return "column-" + row.name + "-" + i;
  }
  trackColumnByFn(i, column) {
    return "column-" + column.value + "-" + i;
  }
};
MatrixQuestionComponent.ɵfac = (() => {
  let ɵMatrixQuestionComponent_BaseFactory;
  return function MatrixQuestionComponent_Factory(t) {
    return (ɵMatrixQuestionComponent_BaseFactory || (ɵMatrixQuestionComponent_BaseFactory = ɵɵgetInheritedFactory(MatrixQuestionComponent)))(t || MatrixQuestionComponent);
  };
})();
MatrixQuestionComponent.ɵcmp = ɵɵdefineComponent({
  type: MatrixQuestionComponent,
  selectors: [["sv-ng-matrix-question"]],
  features: [ɵɵInheritDefinitionFeature],
  decls: 2,
  vars: 0,
  consts: [["template", ""], ["contentElement", ""], [1, "sv-hidden"], [4, "ngIf"], [3, "class", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "style", "class", 4, "ngFor", "ngForOf"], [3, "component"], [3, "model"], [3, "class", "style", 4, "ngIf"], ["sv-ng-string", "", 3, "class", "model", "click", 4, "ngFor", "ngForOf"], ["sv-ng-string", "", 3, "model", "click"], [3, "mousedown"], ["type", "radio", 3, "name", "value", "checked", "disabled", "change"], [3, "class", 4, "ngIf"], ["sv-ng-string", "", 3, "visible", "model"]],
  template: function MatrixQuestionComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, MatrixQuestionComponent_ng_template_0_Template, 9, 8, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    }
  },
  dependencies: [SurveyStringComponent, NgIf, NgForOf, DynamicComponentDirective, VisibleDirective],
  styles: ["[_nghost-%COMP%]{display:none}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatrixQuestionComponent, [{
    type: Component,
    args: [{
      selector: "sv-ng-matrix-question",
      templateUrl: "./matrix.component.html",
      styleUrls: ["../hide-host.scss"]
    }]
  }], null, null);
})();
AngularComponentFactory.Instance.registerComponent("matrix-question", MatrixQuestionComponent);
var ChooseFileBtn = class extends EmbeddedViewContentComponent {
  get question() {
    return this.model && this.model.data.question || this.data.question;
  }
};
ChooseFileBtn.ɵfac = (() => {
  let ɵChooseFileBtn_BaseFactory;
  return function ChooseFileBtn_Factory(t) {
    return (ɵChooseFileBtn_BaseFactory || (ɵChooseFileBtn_BaseFactory = ɵɵgetInheritedFactory(ChooseFileBtn)))(t || ChooseFileBtn);
  };
})();
ChooseFileBtn.ɵcmp = ɵɵdefineComponent({
  type: ChooseFileBtn,
  selectors: [["sv-ng-choose-file-btn"]],
  inputs: {
    data: "data",
    model: "model"
  },
  features: [ɵɵInheritDefinitionFeature],
  decls: 2,
  vars: 0,
  consts: [["template", ""], ["tabindex", "0", 3, "key2click"], ["sv-ng-svg-icon", "", 3, "title", "iconName", "size", 4, "ngIf"], ["sv-ng-svg-icon", "", 3, "title", "iconName", "size"]],
  template: function ChooseFileBtn_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, ChooseFileBtn_ng_template_0_Template, 4, 6, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    }
  },
  dependencies: [SvgIconComponent, Key2ClickDirective, NgIf],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChooseFileBtn, [{
    type: Component,
    args: [{
      selector: "sv-ng-choose-file-btn",
      templateUrl: "./choose-file.component.html"
    }]
  }], null, {
    data: [{
      type: Input
    }],
    model: [{
      type: Input
    }]
  });
})();
AngularComponentFactory.Instance.registerComponent("sv-file-choose-btn", ChooseFileBtn);
var LoadingIndicatorComponent = class extends EmbeddedViewContentComponent {
};
LoadingIndicatorComponent.ɵfac = (() => {
  let ɵLoadingIndicatorComponent_BaseFactory;
  return function LoadingIndicatorComponent_Factory(t) {
    return (ɵLoadingIndicatorComponent_BaseFactory || (ɵLoadingIndicatorComponent_BaseFactory = ɵɵgetInheritedFactory(LoadingIndicatorComponent)))(t || LoadingIndicatorComponent);
  };
})();
LoadingIndicatorComponent.ɵcmp = ɵɵdefineComponent({
  type: LoadingIndicatorComponent,
  selectors: [["sv-ng-loading-indicator"]],
  features: [ɵɵInheritDefinitionFeature],
  decls: 2,
  vars: 0,
  consts: [["template", ""], [1, "sd-loading-indicator"], ["sv-ng-svg-icon", "", 3, "iconName", "size"]],
  template: function LoadingIndicatorComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, LoadingIndicatorComponent_ng_template_0_Template, 2, 2, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    }
  },
  dependencies: [SvgIconComponent],
  styles: ["[_nghost-%COMP%]{display:none}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoadingIndicatorComponent, [{
    type: Component,
    args: [{
      templateUrl: "./loading-indicator.component.html",
      selector: "sv-ng-loading-indicator",
      styleUrls: ["../../hide-host.scss"]
    }]
  }], null, null);
})();
var FileQuestionComponent = class extends QuestionAngular {
};
FileQuestionComponent.ɵfac = (() => {
  let ɵFileQuestionComponent_BaseFactory;
  return function FileQuestionComponent_Factory(t) {
    return (ɵFileQuestionComponent_BaseFactory || (ɵFileQuestionComponent_BaseFactory = ɵɵgetInheritedFactory(FileQuestionComponent)))(t || FileQuestionComponent);
  };
})();
FileQuestionComponent.ɵcmp = ɵɵdefineComponent({
  type: FileQuestionComponent,
  selectors: [["sv-ng-file-question"]],
  features: [ɵɵInheritDefinitionFeature],
  decls: 16,
  vars: 13,
  consts: [["contentElement", ""], ["tabindex", "-1", "type", "file", 3, "class", "change", 4, "ngIf"], ["type", "file", "disabled", "", "style", "color: transparent", 3, "class", 4, "ngIf"], [3, "dragenter", "drop", "dragover", "dragleave"], [3, "class", 4, "ngIf"], [4, "ngIf"], [3, "model", 4, "ngIf"], ["fileCleanButton", ""], ["fileVideo", ""], ["tabindex", "-1", "type", "file", 3, "change"], ["type", "file", "disabled", "", 2, "color", "transparent"], ["sv-ng-string", "", 3, "model"], [3, "data", 4, "ngIf"], [3, "data"], [3, "model"], [4, "ngTemplateOutlet"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "component"], ["type", "button", 3, "click"], ["sv-ng-svg-icon", "", 3, "iconName", "size", "title", 4, "ngIf"], ["sv-ng-svg-icon", "", 3, "iconName", "size", "title"], ["autoplay", "", "playsinline", ""]],
  template: function FileQuestionComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", null, 0);
      ɵɵtemplate(2, FileQuestionComponent_input_2_Template, 1, 11, "input", 1)(3, FileQuestionComponent_input_3_Template, 1, 5, "input", 2);
      ɵɵelementStart(4, "div", 3);
      ɵɵlistener("dragenter", function FileQuestionComponent_Template_div_dragenter_4_listener($event) {
        return ctx.model.onDragEnter($event);
      })("drop", function FileQuestionComponent_Template_div_drop_4_listener($event) {
        return ctx.model.onDrop($event);
      })("dragover", function FileQuestionComponent_Template_div_dragover_4_listener($event) {
        return ctx.model.onDragOver($event);
      })("dragleave", function FileQuestionComponent_Template_div_dragleave_4_listener($event) {
        return ctx.model.onDragLeave($event);
      });
      ɵɵtemplate(5, FileQuestionComponent_div_5_Template, 6, 10, "div", 4)(6, FileQuestionComponent_ng_container_6_Template, 3, 2, "ng-container", 5)(7, FileQuestionComponent_ng_container_7_Template, 2, 1, "ng-container", 5)(8, FileQuestionComponent_ng_container_8_Template, 2, 4, "ng-container", 5)(9, FileQuestionComponent_ng_container_9_Template, 2, 5, "ng-container", 5)(10, FileQuestionComponent_ng_container_10_Template, 2, 4, "ng-container", 5)(11, FileQuestionComponent_sv_action_bar_11_Template, 1, 1, "sv-action-bar", 6);
      ɵɵelementEnd()();
      ɵɵtemplate(12, FileQuestionComponent_ng_template_12_Template, 4, 4, "ng-template", null, 7, ɵɵtemplateRefExtractor)(14, FileQuestionComponent_ng_template_14_Template, 5, 8, "ng-template", null, 8, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      ɵɵclassMap(ctx.model.fileRootCss);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", !ctx.model.isReadOnly && ctx.model.hasFileUI);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.model.isReadOnly);
      ɵɵadvance(1);
      ɵɵclassMap(ctx.model.cssClasses.dragArea);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.model.showFileDecorator);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.model.showLoadingIndicator);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.model.isPlayingVideo);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.model.showRemoveButton);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.model.allowShowPreview);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.model.showRemoveButtonBottom);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.model.fileNavigatorVisible);
    }
  },
  dependencies: [SurveyStringComponent, ChooseFileBtn, ActionBarComponent, LoadingIndicatorComponent, SvgIconComponent, ActionComponent, NgIf, NgTemplateOutlet, DynamicComponentDirective],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FileQuestionComponent, [{
    type: Component,
    args: [{
      selector: "sv-ng-file-question",
      templateUrl: "./file.component.html",
      styleUrls: []
    }]
  }], null, null);
})();
AngularComponentFactory.Instance.registerComponent("file-question", FileQuestionComponent);
var CommentQuestionComponent = class extends QuestionAngular {
  onChange(event) {
    this.model.value = event.target.value;
  }
};
CommentQuestionComponent.ɵfac = (() => {
  let ɵCommentQuestionComponent_BaseFactory;
  return function CommentQuestionComponent_Factory(t) {
    return (ɵCommentQuestionComponent_BaseFactory || (ɵCommentQuestionComponent_BaseFactory = ɵɵgetInheritedFactory(CommentQuestionComponent)))(t || CommentQuestionComponent);
  };
})();
CommentQuestionComponent.ɵcmp = ɵɵdefineComponent({
  type: CommentQuestionComponent,
  selectors: [["sv-ng-question-comment"]],
  features: [ɵɵInheritDefinitionFeature],
  decls: 3,
  vars: 3,
  consts: [[3, "readonly", "id", "class", "value", "resize", "input", "keydown", "change", 4, "ngIf"], [3, "counter", "remainingCharacterCounter", 4, "ngIf"], [4, "ngIf"], [3, "readonly", "id", "value", "input", "keydown", "change"], ["contentElement", ""], [3, "counter", "remainingCharacterCounter"]],
  template: function CommentQuestionComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, CommentQuestionComponent_textarea_0_Template, 2, 17, "textarea", 0)(1, CommentQuestionComponent_sv_ng_character_counter_1_Template, 1, 2, "sv-ng-character-counter", 1)(2, CommentQuestionComponent_div_2_Template, 3, 1, "div", 2);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", !ctx.model.isReadOnlyRenderDiv());
      ɵɵadvance(1);
      ɵɵproperty("ngIf", !ctx.model.isReadOnlyRenderDiv() && ctx.model.getMaxLength());
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.model.isReadOnlyRenderDiv());
    }
  },
  dependencies: [CharacterCounterComponent, NgIf],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CommentQuestionComponent, [{
    type: Component,
    args: [{
      templateUrl: "./comment.component.html",
      selector: "sv-ng-question-comment"
    }]
  }], null, null);
})();
AngularComponentFactory.Instance.registerComponent("comment-question", CommentQuestionComponent);
var SignaturePadQuestionComponent = class extends QuestionAngular {
};
SignaturePadQuestionComponent.ɵfac = (() => {
  let ɵSignaturePadQuestionComponent_BaseFactory;
  return function SignaturePadQuestionComponent_Factory(t) {
    return (ɵSignaturePadQuestionComponent_BaseFactory || (ɵSignaturePadQuestionComponent_BaseFactory = ɵɵgetInheritedFactory(SignaturePadQuestionComponent)))(t || SignaturePadQuestionComponent);
  };
})();
SignaturePadQuestionComponent.ɵcmp = ɵɵdefineComponent({
  type: SignaturePadQuestionComponent,
  selectors: [["sv-ng-signature-component"]],
  features: [ɵɵInheritDefinitionFeature],
  decls: 10,
  vars: 19,
  consts: [["contentElement", ""], ["sv-ng-string", "", 3, "visible", "model"], [3, "src", "width", "class", 4, "ngIf"], ["tabindex", "0"], [3, "visible"], ["type", "button", 3, "title", "click"], [4, "ngIf"], ["sv-ng-svg-icon", "", 3, "iconName", "size", 4, "ngIf"], [3, "src"], ["sv-ng-svg-icon", "", 3, "iconName", "size"]],
  template: function SignaturePadQuestionComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", null, 0);
      ɵɵelement(2, "div", 1);
      ɵɵelementStart(3, "div");
      ɵɵtemplate(4, SignaturePadQuestionComponent_img_4_Template, 1, 5, "img", 2);
      ɵɵelement(5, "canvas", 3);
      ɵɵelementEnd();
      ɵɵelementStart(6, "div", 4)(7, "button", 5);
      ɵɵlistener("click", function SignaturePadQuestionComponent_Template_button_click_7_listener() {
        return ctx.model.clearValue();
      });
      ɵɵtemplate(8, SignaturePadQuestionComponent_span_8_Template, 2, 0, "span", 6)(9, SignaturePadQuestionComponent__svg_svg_9_Template, 1, 2, "svg", 7);
      ɵɵelementEnd()()();
    }
    if (rf & 2) {
      ɵɵclassMap(ctx.model.cssClasses.root);
      ɵɵstyleProp("width", ctx.model.renderedCanvasWidth);
      ɵɵadvance(2);
      ɵɵclassMap(ctx.model.cssClasses.placeholder);
      ɵɵproperty("visible", ctx.model.needShowPlaceholder())("model", ctx.model.locPlaceholder);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", !!ctx.model.backgroundImage);
      ɵɵadvance(1);
      ɵɵclassMap(ctx.model.cssClasses.canvas);
      ɵɵadvance(1);
      ɵɵclassMap(ctx.model.cssClasses.controls);
      ɵɵproperty("visible", ctx.model.canShowClearButton);
      ɵɵadvance(1);
      ɵɵclassMap(ctx.model.cssClasses.clearButton);
      ɵɵproperty("title", ctx.model.clearButtonCaption);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", !ctx.model.cssClasses.clearButtonIconId);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.model.cssClasses.clearButtonIconId);
    }
  },
  dependencies: [SurveyStringComponent, SvgIconComponent, VisibleDirective, NgIf],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignaturePadQuestionComponent, [{
    type: Component,
    args: [{
      selector: "sv-ng-signature-component",
      templateUrl: "./signature.component.html"
    }]
  }], null, null);
})();
AngularComponentFactory.Instance.registerComponent("signaturepad-question", SignaturePadQuestionComponent);
var MultipleTextItemComponent = class extends BaseAngular {
  getModel() {
    if (!this.model.isErrorsCell) {
      return this.model.item.editor;
    }
    return null;
  }
  get item() {
    return this.model.item;
  }
  get editor() {
    return this.model.item.editor;
  }
  ngDoCheck() {
    super.ngDoCheck();
    if (this.model.isErrorsCell) {
      this.editor.registerFunctionOnPropertyValueChanged("errors", () => {
        this.update();
      }, "__ngSubscription");
    }
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    if (this.model.isErrorsCell) {
      this.editor.unRegisterFunctionOnPropertyValueChanged("errors", "__ngSubscription");
    }
  }
};
MultipleTextItemComponent.ɵfac = (() => {
  let ɵMultipleTextItemComponent_BaseFactory;
  return function MultipleTextItemComponent_Factory(t) {
    return (ɵMultipleTextItemComponent_BaseFactory || (ɵMultipleTextItemComponent_BaseFactory = ɵɵgetInheritedFactory(MultipleTextItemComponent)))(t || MultipleTextItemComponent);
  };
})();
MultipleTextItemComponent.ɵcmp = ɵɵdefineComponent({
  type: MultipleTextItemComponent,
  selectors: [["", "sv-ng-multipletext-item", ""]],
  inputs: {
    question: "question",
    model: "model"
  },
  features: [ɵɵInheritDefinitionFeature],
  attrs: _c46,
  decls: 2,
  vars: 2,
  consts: [[4, "ngIf"], [3, "class", 4, "ngIf"], [3, "model"], ["aria-hidden", "true", 3, "class", 4, "ngIf"], [3, "focusin"], ["aria-hidden", "true"], ["sv-ng-errors", "", 3, "element", 4, "ngIf"], ["sv-ng-errors", "", 3, "element"]],
  template: function MultipleTextItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, MultipleTextItemComponent_ng_container_0_Template, 9, 11, "ng-container", 0)(1, MultipleTextItemComponent_ng_container_1_Template, 2, 1, "ng-container", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", !ctx.model.isErrorsCell);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.model.isErrorsCell);
    }
  },
  dependencies: [SurveyStringComponent, TextQuestionComponent, ErrorsComponent, NgIf],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MultipleTextItemComponent, [{
    type: Component,
    args: [{
      selector: "'[sv-ng-multipletext-item]'",
      templateUrl: "./mutlipletextitem.component.html"
    }]
  }], null, {
    question: [{
      type: Input
    }],
    model: [{
      type: Input
    }]
  });
})();
var MultipleTextRowComponent = class extends BaseAngular {
  getModel() {
    return this.model;
  }
  trackItemBy(_, cell) {
    return "item" + cell.item.editor.id;
  }
};
MultipleTextRowComponent.ɵfac = (() => {
  let ɵMultipleTextRowComponent_BaseFactory;
  return function MultipleTextRowComponent_Factory(t) {
    return (ɵMultipleTextRowComponent_BaseFactory || (ɵMultipleTextRowComponent_BaseFactory = ɵɵgetInheritedFactory(MultipleTextRowComponent)))(t || MultipleTextRowComponent);
  };
})();
MultipleTextRowComponent.ɵcmp = ɵɵdefineComponent({
  type: MultipleTextRowComponent,
  selectors: [["sv-ng-multipletext-row"]],
  inputs: {
    question: "question",
    model: "model"
  },
  features: [ɵɵInheritDefinitionFeature],
  decls: 2,
  vars: 0,
  consts: [["template", ""], [3, "class", 4, "ngIf"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["sv-ng-multipletext-item", "", 3, "question", "model"]],
  template: function MultipleTextRowComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, MultipleTextRowComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    }
  },
  dependencies: [MultipleTextItemComponent, NgIf, NgForOf],
  styles: ["[_nghost-%COMP%]{display:none}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MultipleTextRowComponent, [{
    type: Component,
    args: [{
      selector: "sv-ng-multipletext-row",
      templateUrl: "./multipletextrow.component.html",
      styleUrls: ["../hide-host.scss"]
    }]
  }], null, {
    question: [{
      type: Input
    }],
    model: [{
      type: Input
    }]
  });
})();
var MultipleTextComponent = class extends QuestionAngular {
  constructor() {
    super(...arguments);
    this.trackRowBy = (index) => {
      return this.model.inputId + "rowkey" + index;
    };
  }
};
MultipleTextComponent.ɵfac = (() => {
  let ɵMultipleTextComponent_BaseFactory;
  return function MultipleTextComponent_Factory(t) {
    return (ɵMultipleTextComponent_BaseFactory || (ɵMultipleTextComponent_BaseFactory = ɵɵgetInheritedFactory(MultipleTextComponent)))(t || MultipleTextComponent);
  };
})();
MultipleTextComponent.ɵcmp = ɵɵdefineComponent({
  type: MultipleTextComponent,
  selectors: [["sv-ng-multipletext-question"]],
  features: [ɵɵInheritDefinitionFeature],
  decls: 4,
  vars: 4,
  consts: [["contentElement", ""], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "model", "question"]],
  template: function MultipleTextComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "table", null, 0)(2, "tbody");
      ɵɵtemplate(3, MultipleTextComponent_ng_container_3_Template, 2, 2, "ng-container", 1);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵclassMap(ctx.model.getQuestionRootCss());
      ɵɵadvance(3);
      ɵɵproperty("ngForOf", ctx.model.getRows())("ngForTrackBy", ctx.trackRowBy);
    }
  },
  dependencies: [MultipleTextRowComponent, NgForOf],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MultipleTextComponent, [{
    type: Component,
    args: [{
      selector: "sv-ng-multipletext-question",
      templateUrl: "./multipletext.component.html"
    }]
  }], null, null);
})();
AngularComponentFactory.Instance.registerComponent("multipletext-question", MultipleTextComponent);
var RankingQuestionComponent = class extends SelectBaseComponent {
  constructor() {
    super(...arguments);
    this.inputType = "";
    this.trackItemBy = (index, item) => {
      return item.value + "-" + index + "-item";
    };
  }
  getDefaultComponentName() {
    return "sv-ng-ranking-item";
  }
  getItemValueComponentData(item, index, unrankedItem) {
    const res = super.getItemValueComponentData(item);
    res.componentData.index = index;
    res.componentData.unrankedItem = unrankedItem;
    return res;
  }
};
RankingQuestionComponent.ɵfac = (() => {
  let ɵRankingQuestionComponent_BaseFactory;
  return function RankingQuestionComponent_Factory(t) {
    return (ɵRankingQuestionComponent_BaseFactory || (ɵRankingQuestionComponent_BaseFactory = ɵɵgetInheritedFactory(RankingQuestionComponent)))(t || RankingQuestionComponent);
  };
})();
RankingQuestionComponent.ɵcmp = ɵɵdefineComponent({
  type: RankingQuestionComponent,
  selectors: [["sv-ng-ranking-question"]],
  features: [ɵɵInheritDefinitionFeature],
  decls: 2,
  vars: 2,
  consts: [[3, "class", 4, "ngIf"], ["contentElement", ""], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "component"], ["data-ranking", "from-container"], ["data-ranking", "to-container"]],
  template: function RankingQuestionComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, RankingQuestionComponent_div_0_Template, 3, 4, "div", 0)(1, RankingQuestionComponent_div_1_Template, 9, 14, "div", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", !ctx.model.selectToRankEnabled);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.model.selectToRankEnabled);
    }
  },
  dependencies: [NgIf, NgForOf, DynamicComponentDirective],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RankingQuestionComponent, [{
    type: Component,
    args: [{
      selector: "sv-ng-ranking-question",
      templateUrl: "./ranking.component.html"
    }]
  }], null, null);
})();
AngularComponentFactory.Instance.registerComponent("ranking-question", RankingQuestionComponent);
var RankingItemComponent = class extends BaseAngular {
  getModel() {
    return this.model;
  }
};
RankingItemComponent.ɵfac = (() => {
  let ɵRankingItemComponent_BaseFactory;
  return function RankingItemComponent_Factory(t) {
    return (ɵRankingItemComponent_BaseFactory || (ɵRankingItemComponent_BaseFactory = ɵɵgetInheritedFactory(RankingItemComponent)))(t || RankingItemComponent);
  };
})();
RankingItemComponent.ɵcmp = ɵɵdefineComponent({
  type: RankingItemComponent,
  selectors: [["sv-ng-ranking-item"]],
  inputs: {
    question: "question",
    model: "model",
    index: "index",
    unrankedItem: "unrankedItem"
  },
  features: [ɵɵInheritDefinitionFeature],
  decls: 14,
  vars: 21,
  consts: [[3, "keydown", "pointerdown"], ["tabindex", "-1", 2, "outline", "none"], [3, "class", 4, "ngIf", "ngIfElse"], ["elseBlock", ""], [3, "model"]],
  template: function RankingItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0);
      ɵɵlistener("keydown", function RankingItemComponent_Template_div_keydown_0_listener($event) {
        return ctx.question.handleKeydown($event, ctx.model);
      })("pointerdown", function RankingItemComponent_Template_div_pointerdown_0_listener($event) {
        return ctx.question.handlePointerDown($event, ctx.model, $event.currentTarget);
      });
      ɵɵelementStart(1, "div", 1);
      ɵɵelement(2, "div");
      ɵɵelementStart(3, "div")(4, "div");
      ɵɵnamespaceSVG();
      ɵɵelementStart(5, "svg");
      ɵɵelement(6, "use");
      ɵɵelementEnd();
      ɵɵelementStart(7, "svg");
      ɵɵelement(8, "use");
      ɵɵelementEnd()();
      ɵɵtemplate(9, RankingItemComponent_div_9_Template, 2, 3, "div", 2)(10, RankingItemComponent_ng_template_10_Template, 3, 3, "ng-template", null, 3, ɵɵtemplateRefExtractor);
      ɵɵnamespaceHTML();
      ɵɵelementStart(12, "div");
      ɵɵelement(13, "sv-ng-string", 4);
      ɵɵelementEnd()()()();
    }
    if (rf & 2) {
      const _r2 = ɵɵreference(11);
      ɵɵclassMap(ctx.question.getItemClass(ctx.model));
      ɵɵattribute("tabindex", ctx.question.getItemTabIndex(ctx.model))("data-sv-drop-target-ranking-item", ctx.index);
      ɵɵadvance(2);
      ɵɵclassMap(ctx.question.cssClasses.itemGhostNode);
      ɵɵadvance(1);
      ɵɵclassMap(ctx.question.cssClasses.itemContent);
      ɵɵadvance(1);
      ɵɵclassMap(ctx.question.cssClasses.itemIconContainer);
      ɵɵadvance(1);
      ɵɵclassMap(ctx.question.getIconHoverCss());
      ɵɵadvance(1);
      ɵɵattribute("href", ctx.question.dragDropSvgIcon, null, "xlink");
      ɵɵadvance(1);
      ɵɵclassMap(ctx.question.getIconFocusCss());
      ɵɵadvance(1);
      ɵɵattribute("href", ctx.question.arrowsSvgIcon, null, "xlink");
      ɵɵadvance(1);
      ɵɵproperty("ngIf", !ctx.unrankedItem && ctx.question.getNumberByIndex(ctx.index))("ngIfElse", _r2);
      ɵɵadvance(3);
      ɵɵclassMap(ctx.question.cssClasses.controlLabel);
      ɵɵadvance(1);
      ɵɵproperty("model", ctx.model.locText);
    }
  },
  dependencies: [SurveyStringComponent, NgIf],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RankingItemComponent, [{
    type: Component,
    args: [{
      selector: "sv-ng-ranking-item",
      templateUrl: "./ranking-item.component.html"
    }]
  }], null, {
    question: [{
      type: Input
    }],
    model: [{
      type: Input
    }],
    index: [{
      type: Input
    }],
    unrankedItem: [{
      type: Input
    }]
  });
})();
AngularComponentFactory.Instance.registerComponent("sv-ng-ranking-item", RankingItemComponent);
var StringEditorComponent = class {
  constructor() {
    this.onInput = (event) => {
      this.model.text = event.target.innerText;
    };
    this.onClick = (event) => {
      event.preventDefault();
      event.stopPropagation();
    };
  }
};
StringEditorComponent.ɵfac = function StringEditorComponent_Factory(t) {
  return new (t || StringEditorComponent)();
};
StringEditorComponent.ɵcmp = ɵɵdefineComponent({
  type: StringEditorComponent,
  selectors: [["sv-ng-string-editor"]],
  inputs: {
    model: "model"
  },
  decls: 2,
  vars: 2,
  consts: [["class", "sv-string-editor", "contenteditable", "true", 3, "innerHtml", "blur", "click", 4, "ngIf"], ["class", "sv-string-editor", "contenteditable", "true", 3, "blur", "click", 4, "ngIf"], ["contenteditable", "true", 1, "sv-string-editor", 3, "innerHtml", "blur", "click"], ["contenteditable", "true", 1, "sv-string-editor", 3, "blur", "click"]],
  template: function StringEditorComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, StringEditorComponent_span_0_Template, 1, 1, "span", 0)(1, StringEditorComponent_span_1_Template, 2, 1, "span", 1);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.model.hasHtml);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", !ctx.model.hasHtml);
    }
  },
  dependencies: [NgIf],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StringEditorComponent, [{
    type: Component,
    args: [{
      selector: "sv-ng-string-editor",
      templateUrl: "./string-editor.component.html"
    }]
  }], null, {
    model: [{
      type: Input
    }]
  });
})();
AngularComponentFactory.Instance.registerComponent(import_survey_core.LocalizableString.editableRenderer, StringEditorComponent);
var PaneldynamicAction = class {
  get question() {
    return this.model && this.model.data.question || this.data.question;
  }
};
PaneldynamicAction.ɵfac = function PaneldynamicAction_Factory(t) {
  return new (t || PaneldynamicAction)();
};
PaneldynamicAction.ɵcmp = ɵɵdefineComponent({
  type: PaneldynamicAction,
  selectors: [["ng-component"]],
  inputs: {
    data: "data",
    model: "model"
  },
  decls: 0,
  vars: 0,
  template: function PaneldynamicAction_Template(rf, ctx) {
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaneldynamicAction, [{
    type: Component,
    args: [{
      selector: "",
      template: ""
    }]
  }], null, {
    data: [{
      type: Input
    }],
    model: [{
      type: Input
    }]
  });
})();
var PanelDynamicAddBtn = class extends PaneldynamicAction {
  addPanelClick() {
    this.question.addPanelUI();
  }
};
PanelDynamicAddBtn.ɵfac = (() => {
  let ɵPanelDynamicAddBtn_BaseFactory;
  return function PanelDynamicAddBtn_Factory(t) {
    return (ɵPanelDynamicAddBtn_BaseFactory || (ɵPanelDynamicAddBtn_BaseFactory = ɵɵgetInheritedFactory(PanelDynamicAddBtn)))(t || PanelDynamicAddBtn);
  };
})();
PanelDynamicAddBtn.ɵcmp = ɵɵdefineComponent({
  type: PanelDynamicAddBtn,
  selectors: [["sv-ng-paneldynamic-add-btn"]],
  features: [ɵɵInheritDefinitionFeature],
  decls: 1,
  vars: 1,
  consts: [["type", "button", 3, "class", "click", 4, "ngIf"], ["type", "button", 3, "click"]],
  template: function PanelDynamicAddBtn_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, PanelDynamicAddBtn_button_0_Template, 3, 5, "button", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.question.canAddPanel);
    }
  },
  dependencies: [NgIf],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PanelDynamicAddBtn, [{
    type: Component,
    args: [{
      selector: "sv-ng-paneldynamic-add-btn",
      templateUrl: "./paneldynamic-add-btn.component.html"
    }]
  }], null, null);
})();
AngularComponentFactory.Instance.registerComponent("sv-paneldynamic-add-btn", PanelDynamicAddBtn);
var PanelDynamicNextBtn = class extends PaneldynamicAction {
  nextPanelClick() {
    this.question.goToNextPanel();
  }
};
PanelDynamicNextBtn.ɵfac = (() => {
  let ɵPanelDynamicNextBtn_BaseFactory;
  return function PanelDynamicNextBtn_Factory(t) {
    return (ɵPanelDynamicNextBtn_BaseFactory || (ɵPanelDynamicNextBtn_BaseFactory = ɵɵgetInheritedFactory(PanelDynamicNextBtn)))(t || PanelDynamicNextBtn);
  };
})();
PanelDynamicNextBtn.ɵcmp = ɵɵdefineComponent({
  type: PanelDynamicNextBtn,
  selectors: [["sv-ng-paneldynamic-next-btn"]],
  features: [ɵɵInheritDefinitionFeature],
  decls: 2,
  vars: 5,
  consts: [[3, "click"], ["sv-ng-svg-icon", "", 3, "iconName", "size"]],
  template: function PanelDynamicNextBtn_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0);
      ɵɵlistener("click", function PanelDynamicNextBtn_Template_div_click_0_listener() {
        return ctx.nextPanelClick();
      });
      ɵɵnamespaceSVG();
      ɵɵelement(1, "svg", 1);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵclassMap(ctx.question.getNextButtonCss());
      ɵɵattribute("title", ctx.question.panelNextText);
      ɵɵadvance(1);
      ɵɵproperty("iconName", ctx.question.cssClasses.progressBtnIcon)("size", "auto");
    }
  },
  dependencies: [SvgIconComponent],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PanelDynamicNextBtn, [{
    type: Component,
    args: [{
      selector: "sv-ng-paneldynamic-next-btn",
      templateUrl: "./paneldynamic-next-btn.component.html"
    }]
  }], null, null);
})();
AngularComponentFactory.Instance.registerComponent("sv-paneldynamic-next-btn", PanelDynamicNextBtn);
var PanelDynamicPrevBtn = class extends PaneldynamicAction {
  prevPanelClick() {
    this.question.goToPrevPanel();
  }
};
PanelDynamicPrevBtn.ɵfac = (() => {
  let ɵPanelDynamicPrevBtn_BaseFactory;
  return function PanelDynamicPrevBtn_Factory(t) {
    return (ɵPanelDynamicPrevBtn_BaseFactory || (ɵPanelDynamicPrevBtn_BaseFactory = ɵɵgetInheritedFactory(PanelDynamicPrevBtn)))(t || PanelDynamicPrevBtn);
  };
})();
PanelDynamicPrevBtn.ɵcmp = ɵɵdefineComponent({
  type: PanelDynamicPrevBtn,
  selectors: [["sv-ng-paneldynamic-prev-btn"]],
  features: [ɵɵInheritDefinitionFeature],
  decls: 2,
  vars: 5,
  consts: [[3, "click"], ["sv-ng-svg-icon", "", 3, "iconName", "size"]],
  template: function PanelDynamicPrevBtn_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0);
      ɵɵlistener("click", function PanelDynamicPrevBtn_Template_div_click_0_listener() {
        return ctx.prevPanelClick();
      });
      ɵɵnamespaceSVG();
      ɵɵelement(1, "svg", 1);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵclassMap(ctx.question.getPrevButtonCss());
      ɵɵattribute("title", ctx.question.panelPrevText);
      ɵɵadvance(1);
      ɵɵproperty("iconName", ctx.question.cssClasses.progressBtnIcon)("size", "auto");
    }
  },
  dependencies: [SvgIconComponent],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PanelDynamicPrevBtn, [{
    type: Component,
    args: [{
      selector: "sv-ng-paneldynamic-prev-btn",
      templateUrl: "./paneldynamic-prev-btn.component.html"
    }]
  }], null, null);
})();
AngularComponentFactory.Instance.registerComponent("sv-paneldynamic-prev-btn", PanelDynamicPrevBtn);
var PaneldynamicRemoveButtonComponent = class extends PaneldynamicAction {
  get panel() {
    return (this.data ? this.data : this.model.data).panel;
  }
};
PaneldynamicRemoveButtonComponent.ɵfac = (() => {
  let ɵPaneldynamicRemoveButtonComponent_BaseFactory;
  return function PaneldynamicRemoveButtonComponent_Factory(t) {
    return (ɵPaneldynamicRemoveButtonComponent_BaseFactory || (ɵPaneldynamicRemoveButtonComponent_BaseFactory = ɵɵgetInheritedFactory(PaneldynamicRemoveButtonComponent)))(t || PaneldynamicRemoveButtonComponent);
  };
})();
PaneldynamicRemoveButtonComponent.ɵcmp = ɵɵdefineComponent({
  type: PaneldynamicRemoveButtonComponent,
  selectors: [["sv-ng-paneldynamic-remove-btn"]],
  features: [ɵɵInheritDefinitionFeature],
  decls: 4,
  vars: 7,
  consts: [["type", "button", 3, "click"]],
  template: function PaneldynamicRemoveButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "button", 0);
      ɵɵlistener("click", function PaneldynamicRemoveButtonComponent_Template_button_click_0_listener() {
        return ctx.question.removePanelUI(ctx.panel);
      });
      ɵɵelementStart(1, "span");
      ɵɵtext(2);
      ɵɵelementEnd();
      ɵɵelement(3, "span");
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵclassMap(ctx.question.getPanelRemoveButtonCss());
      ɵɵadvance(1);
      ɵɵclassMap(ctx.question.cssClasses.buttonRemoveText);
      ɵɵadvance(1);
      ɵɵtextInterpolate(ctx.question.panelRemoveText);
      ɵɵadvance(1);
      ɵɵclassMap(ctx.question.cssClasses.iconRemove);
    }
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaneldynamicRemoveButtonComponent, [{
    type: Component,
    args: [{
      selector: "sv-ng-paneldynamic-remove-btn",
      templateUrl: "./paneldynamic-remove-btn.component.html"
    }]
  }], null, null);
})();
AngularComponentFactory.Instance.registerComponent("sv-paneldynamic-remove-btn", PaneldynamicRemoveButtonComponent);
var PanelDynamicProgressText = class extends PaneldynamicAction {
};
PanelDynamicProgressText.ɵfac = (() => {
  let ɵPanelDynamicProgressText_BaseFactory;
  return function PanelDynamicProgressText_Factory(t) {
    return (ɵPanelDynamicProgressText_BaseFactory || (ɵPanelDynamicProgressText_BaseFactory = ɵɵgetInheritedFactory(PanelDynamicProgressText)))(t || PanelDynamicProgressText);
  };
})();
PanelDynamicProgressText.ɵcmp = ɵɵdefineComponent({
  type: PanelDynamicProgressText,
  selectors: [["sv-ng-paneldynamic-progress-text"]],
  features: [ɵɵInheritDefinitionFeature],
  decls: 2,
  vars: 3,
  template: function PanelDynamicProgressText_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div");
      ɵɵtext(1);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵclassMap(ctx.question.cssClasses.progressText);
      ɵɵadvance(1);
      ɵɵtextInterpolate(ctx.question.progressText);
    }
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PanelDynamicProgressText, [{
    type: Component,
    args: [{
      selector: "sv-ng-paneldynamic-progress-text",
      templateUrl: "./paneldynamic-progress-text.component.html"
    }]
  }], null, null);
})();
AngularComponentFactory.Instance.registerComponent("sv-paneldynamic-progress-text", PanelDynamicProgressText);
var PanelDynamicQuestionComponent = class extends QuestionAngular {
  get renderedPanels() {
    if (this.model.isRenderModeList)
      return this.model.visiblePanels;
    const panels = [];
    if (this.model.currentPanel) {
      panels.push(this.model.currentPanel);
    }
    return panels;
  }
  onModelChanged() {
    super.onModelChanged();
    this.model.panelCountChangedCallback = () => {
      this.update();
    };
    this.model.currentIndexChangedCallback = () => {
      this.update();
    };
    this.model.renderModeChangedCallback = () => {
      this.update();
    };
  }
  get progressCssClass() {
    return this.model.isProgressTopShowing ? this.model.cssClasses.progressTop : this.model.cssClasses.progressBottom;
  }
  ngOnDestroy() {
    this.model.panelCountChangedCallback = () => {
    };
    this.model.currentIndexChangedCallback = () => {
    };
    this.model.renderModeChangedCallback = () => {
    };
    super.ngOnDestroy();
  }
  getPanelComponentName(panel) {
    const survey = this.surveyModel;
    if (!!survey) {
      const name = survey.getElementWrapperComponentName(panel);
      if (!!name) {
        return name;
      }
    }
    return "panel";
  }
  getPanelComponentData(panel) {
    const survey = this.surveyModel;
    let data;
    if (!!survey) {
      data = survey.getElementWrapperComponentData(panel);
    }
    return {
      componentName: "panel",
      componentData: {
        model: panel,
        data
      }
    };
  }
};
PanelDynamicQuestionComponent.ɵfac = (() => {
  let ɵPanelDynamicQuestionComponent_BaseFactory;
  return function PanelDynamicQuestionComponent_Factory(t) {
    return (ɵPanelDynamicQuestionComponent_BaseFactory || (ɵPanelDynamicQuestionComponent_BaseFactory = ɵɵgetInheritedFactory(PanelDynamicQuestionComponent)))(t || PanelDynamicQuestionComponent);
  };
})();
PanelDynamicQuestionComponent.ɵcmp = ɵɵdefineComponent({
  type: PanelDynamicQuestionComponent,
  selectors: [["sv-ng-paneldynamic-question"]],
  features: [ɵɵInheritDefinitionFeature],
  decls: 13,
  vars: 9,
  consts: [["contentElement", ""], [3, "class", 4, "ngIf"], [3, "ngTemplateOutlet", 4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "data", 4, "ngIf"], ["progressV2", ""], ["progress", ""], ["sv-ng-string", "", 3, "model"], [3, "data"], ["role", "progressbar"], [3, "ngTemplateOutlet"], [3, "component"], [4, "ngIf"], [3, "model"], [2, "clear", "both"]],
  template: function PanelDynamicQuestionComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", null, 0);
      ɵɵtemplate(2, PanelDynamicQuestionComponent_div_2_Template, 3, 6, "div", 1)(3, PanelDynamicQuestionComponent_div_3_Template, 2, 8, "div", 1)(4, PanelDynamicQuestionComponent_ng_container_4_Template, 1, 1, "ng-container", 2)(5, PanelDynamicQuestionComponent_ng_container_5_Template, 5, 8, "ng-container", 3)(6, PanelDynamicQuestionComponent_ng_container_6_Template, 1, 1, "ng-container", 2)(7, PanelDynamicQuestionComponent_sv_ng_paneldynamic_add_btn_7_Template, 1, 3, "sv-ng-paneldynamic-add-btn", 4)(8, PanelDynamicQuestionComponent_ng_container_8_Template, 1, 1, "ng-container", 2);
      ɵɵelementEnd();
      ɵɵtemplate(9, PanelDynamicQuestionComponent_ng_template_9_Template, 1, 1, "ng-template", null, 5, ɵɵtemplateRefExtractor)(11, PanelDynamicQuestionComponent_ng_template_11_Template, 8, 19, "ng-template", null, 6, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      ɵɵclassMap(ctx.model.cssClasses.root);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.model.getShowNoEntriesPlaceholder());
      ɵɵadvance(1);
      ɵɵproperty("ngIf", !ctx.model.showLegacyNavigation && ctx.model.isProgressTopShowing && ctx.model.isRangeShowing);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.model.showLegacyNavigation && ctx.model.isProgressTopShowing);
      ɵɵadvance(1);
      ɵɵproperty("ngForOf", ctx.renderedPanels);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.model.showLegacyNavigation && ctx.model.isProgressBottomShowing);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.model.showLegacyNavigation && ctx.model.isRenderModeList);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.model.showNavigation);
    }
  },
  dependencies: [SurveyStringComponent, PanelDynamicAddBtn, ActionBarComponent, PanelDynamicPrevBtn, PanelDynamicNextBtn, PanelDynamicProgressText, NgIf, NgTemplateOutlet, NgForOf, DynamicComponentDirective],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PanelDynamicQuestionComponent, [{
    type: Component,
    args: [{
      selector: "sv-ng-paneldynamic-question",
      templateUrl: "./paneldynamic.component.html"
    }]
  }], null, null);
})();
AngularComponentFactory.Instance.registerComponent("paneldynamic-question", PanelDynamicQuestionComponent);
var TemplateRendererComponent = class extends EmbeddedViewContentComponent {
};
TemplateRendererComponent.ɵfac = (() => {
  let ɵTemplateRendererComponent_BaseFactory;
  return function TemplateRendererComponent_Factory(t) {
    return (ɵTemplateRendererComponent_BaseFactory || (ɵTemplateRendererComponent_BaseFactory = ɵɵgetInheritedFactory(TemplateRendererComponent)))(t || TemplateRendererComponent);
  };
})();
TemplateRendererComponent.ɵcmp = ɵɵdefineComponent({
  type: TemplateRendererComponent,
  selectors: [["sv-template-renderer"]],
  inputs: {
    componentName: "componentName",
    componentData: "componentData",
    contentTempl: "contentTempl"
  },
  features: [ɵɵInheritDefinitionFeature],
  decls: 2,
  vars: 0,
  consts: [["template", ""], [4, "ngIf"], [3, "component"], [4, "ngTemplateOutlet"]],
  template: function TemplateRendererComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, TemplateRendererComponent_ng_template_0_Template, 2, 2, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    }
  },
  dependencies: [NgIf, DynamicComponentDirective, NgTemplateOutlet],
  styles: ["[_nghost-%COMP%]{display:none}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TemplateRendererComponent, [{
    type: Component,
    args: [{
      selector: "sv-template-renderer",
      templateUrl: "./template-renderer.component.html",
      styleUrls: ["./hide-host.scss"]
    }]
  }], null, {
    componentName: [{
      type: Input
    }],
    componentData: [{
      type: Input
    }],
    contentTempl: [{
      type: Input
    }]
  });
})();
AngularComponentFactory.Instance.registerComponent(import_survey_core.SurveyModel.TemplateRendererComponentName, TemplateRendererComponent);
var CustomWidgetComponent = class {
  get hasDefaultRender() {
    return this.model.customWidget.isDefaultRender || this.hasAngularComponent;
  }
  get hasHtml() {
    return this.model.customWidget.htmlTemplate ? true : false;
  }
  get customHtml() {
    return this.model.customWidget.htmlTemplate;
  }
  get hasAngularComponent() {
    return AngularComponentFactory.Instance.isComponentRegistered(this.model.customWidget.name);
  }
  get componentName() {
    if (this.hasAngularComponent)
      return this.model.customWidget.name;
    return this.model.getTemplate() + "-question";
  }
  ngAfterViewInit() {
    this.model.customWidget.afterRender(this.model, this.container.nativeElement);
  }
  ngOnChanges(simpleChanges) {
    if (simpleChanges["model"].previousValue !== void 0 && simpleChanges["model"].currentValue !== void 0) {
      this.model.customWidget.afterRender(this.model, this.container.nativeElement);
    }
  }
  ngOnDestroy() {
    this.model.customWidget.willUnmount(this.model, this.container.nativeElement);
  }
};
CustomWidgetComponent.ɵfac = function CustomWidgetComponent_Factory(t) {
  return new (t || CustomWidgetComponent)();
};
CustomWidgetComponent.ɵcmp = ɵɵdefineComponent({
  type: CustomWidgetComponent,
  selectors: [["sv-ng-custom-widget"]],
  viewQuery: function CustomWidgetComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c50, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.container = _t.first);
    }
  },
  inputs: {
    css: "css",
    model: "model"
  },
  features: [ɵɵNgOnChangesFeature],
  decls: 4,
  vars: 2,
  consts: [["content", ""], [3, "innerHTML", 4, "ngIf"], [4, "ngIf"], [3, "innerHTML"], [3, "component"]],
  template: function CustomWidgetComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", null, 0);
      ɵɵtemplate(2, CustomWidgetComponent_div_2_Template, 2, 3, "div", 1)(3, CustomWidgetComponent_ng_container_3_Template, 2, 7, "ng-container", 2);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.hasHtml);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.hasDefaultRender);
    }
  },
  dependencies: [NgIf, DynamicComponentDirective, SafeHtmlPipe],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomWidgetComponent, [{
    type: Component,
    args: [{
      templateUrl: "./customwidget.component.html",
      selector: "sv-ng-custom-widget"
    }]
  }], null, {
    css: [{
      type: Input
    }],
    model: [{
      type: Input
    }],
    container: [{
      type: ViewChild,
      args: ["content"]
    }]
  });
})();
AngularComponentFactory.Instance.registerComponent("survey-customwidget", CustomWidgetComponent);
var MatrixDynamicDragDropIconComponent = class extends EmbeddedViewContentComponent {
  get question() {
    return this.model.data.question;
  }
};
MatrixDynamicDragDropIconComponent.ɵfac = (() => {
  let ɵMatrixDynamicDragDropIconComponent_BaseFactory;
  return function MatrixDynamicDragDropIconComponent_Factory(t) {
    return (ɵMatrixDynamicDragDropIconComponent_BaseFactory || (ɵMatrixDynamicDragDropIconComponent_BaseFactory = ɵɵgetInheritedFactory(MatrixDynamicDragDropIconComponent)))(t || MatrixDynamicDragDropIconComponent);
  };
})();
MatrixDynamicDragDropIconComponent.ɵcmp = ɵɵdefineComponent({
  type: MatrixDynamicDragDropIconComponent,
  selectors: [["sv-ng-matrix-drag-drop-icon"]],
  inputs: {
    model: "model"
  },
  features: [ɵɵInheritDefinitionFeature],
  decls: 2,
  vars: 0,
  consts: [["template", ""], [3, "class", 4, "ngIf"], ["data-bind", "css: question.cssClasses.iconDrag", 4, "ngIf"], ["data-bind", "css: question.cssClasses.iconDrag"]],
  template: function MatrixDynamicDragDropIconComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, MatrixDynamicDragDropIconComponent_ng_template_0_Template, 2, 2, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    }
  },
  dependencies: [NgIf],
  styles: ["[_nghost-%COMP%]{display:none}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatrixDynamicDragDropIconComponent, [{
    type: Component,
    args: [{
      templateUrl: "drag-drop-icon.component.html",
      selector: "sv-ng-matrix-drag-drop-icon",
      styleUrls: ["../../../hide-host.scss"]
    }]
  }], null, {
    model: [{
      type: Input
    }]
  });
})();
AngularComponentFactory.Instance.registerComponent("sv-matrix-drag-drop-icon", MatrixDynamicDragDropIconComponent);
var MatrixCellComponent = class extends BaseAngular {
  getModel() {
    if (this.cell.hasQuestion) {
      return this.cell.question;
    }
    return null;
  }
  get row() {
    return this.cell.row;
  }
  ngDoCheck() {
    var _a;
    super.ngDoCheck();
    if (this.cell.isErrorsCell && ((_a = this.cell) === null || _a === void 0 ? void 0 : _a.question)) {
      this.cell.question.registerFunctionOnPropertyValueChanged("errors", () => {
        this.update();
      }, "__ngSubscription");
    }
  }
  get panelComponentName() {
    const panel = this.cell.panel;
    const survey = panel.survey;
    if (!!survey) {
      const name = survey.getElementWrapperComponentName(panel);
      if (!!name) {
        return name;
      }
    }
    return "panel";
  }
  get panelComponentData() {
    const panel = this.cell.panel;
    const survey = panel.survey;
    let data;
    if (!!survey) {
      data = survey.getElementWrapperComponentData(panel);
    }
    return {
      componentName: "panel",
      componentData: {
        model: panel,
        data
      }
    };
  }
  getComponentName(element) {
    return getComponentName(element);
  }
  getHeaders() {
    return this.cell.headers;
  }
  getCellStyle() {
    if (!!this.cell.width || !!this.cell.minWidth)
      return {
        width: this.cell.width,
        minWidth: this.cell.minWidth
      };
    return null;
  }
  ngAfterViewInit() {
    if (!this.cell.hasQuestion || !this.question || !this.question.survey)
      return;
    const el = this.cellContainer.nativeElement;
    const cellQ = this.cell.question;
    var options = {
      cell: this.cell.cell,
      cellQuestion: cellQ,
      htmlElement: el,
      row: this.cell.row,
      column: this.cell.cell.column
    };
    this.question.survey.matrixAfterCellRender(this.question, options);
    cellQ.afterRenderCore(el);
  }
  ngOnDestroy() {
    var _a;
    super.ngOnDestroy();
    if (this.cell.isErrorsCell && ((_a = this.cell) === null || _a === void 0 ? void 0 : _a.question)) {
      this.cell.question.unRegisterFunctionOnPropertyValueChanged("errors", "__ngSubscription");
    }
  }
};
MatrixCellComponent.ɵfac = (() => {
  let ɵMatrixCellComponent_BaseFactory;
  return function MatrixCellComponent_Factory(t) {
    return (ɵMatrixCellComponent_BaseFactory || (ɵMatrixCellComponent_BaseFactory = ɵɵgetInheritedFactory(MatrixCellComponent)))(t || MatrixCellComponent);
  };
})();
MatrixCellComponent.ɵcmp = ɵɵdefineComponent({
  type: MatrixCellComponent,
  selectors: [["sv-ng-matrix-cell"]],
  viewQuery: function MatrixCellComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c52, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.cellContainer = _t.first);
    }
  },
  inputs: {
    question: "question",
    cell: "cell"
  },
  features: [ɵɵInheritDefinitionFeature],
  decls: 2,
  vars: 0,
  consts: [["template", ""], [3, "title", "focusin"], ["cellContainer", ""], [3, "model", 4, "ngIf"], [3, "model", "handleClick", 4, "ngIf"], [4, "ngIf"], ["sv-ng-errors", "", 3, "element", 4, "ngIf"], [3, "class", "visible", 4, "ngIf"], [3, "model"], [3, "model", "handleClick"], [3, "component"], ["sv-ng-errors", "", 3, "element"], [3, "visible"], ["sv-ng-comment-other", "", 3, "class", "question", 4, "ngIf"], [3, "showLabel", "inputType", "question", "model"], ["sv-ng-comment-other", "", 3, "question"], [3, "class", 4, "ngIf"]],
  template: function MatrixCellComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, MatrixCellComponent_ng_template_0_Template, 8, 13, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    }
  },
  dependencies: [MatrixDynamicDragDropIconComponent, ActionBarComponent, ErrorsComponent, SelectBaseItemComponent, SurveyCommentOtherComponent, SurveyStringComponent, NgIf, DynamicComponentDirective, VisibleDirective],
  styles: ["[_nghost-%COMP%] { display: none; }"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatrixCellComponent, [{
    type: Component,
    args: [{
      selector: "sv-ng-matrix-cell",
      templateUrl: "./matrixcell.component.html",
      styles: [":host { display: none; }"]
    }]
  }], null, {
    question: [{
      type: Input
    }],
    cell: [{
      type: Input
    }],
    cellContainer: [{
      type: ViewChild,
      args: ["cellContainer"]
    }]
  });
})();
var MatrixRequiredHeader = class extends BaseAngular {
  getModel() {
    return this.column;
  }
};
MatrixRequiredHeader.ɵfac = (() => {
  let ɵMatrixRequiredHeader_BaseFactory;
  return function MatrixRequiredHeader_Factory(t) {
    return (ɵMatrixRequiredHeader_BaseFactory || (ɵMatrixRequiredHeader_BaseFactory = ɵɵgetInheritedFactory(MatrixRequiredHeader)))(t || MatrixRequiredHeader);
  };
})();
MatrixRequiredHeader.ɵcmp = ɵɵdefineComponent({
  type: MatrixRequiredHeader,
  selectors: [["sv-ng-matrixheaderrequired"]],
  inputs: {
    column: "column",
    question: "question"
  },
  features: [ɵɵInheritDefinitionFeature],
  decls: 2,
  vars: 0,
  consts: [["template", ""], [4, "ngIf"]],
  template: function MatrixRequiredHeader_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, MatrixRequiredHeader_ng_template_0_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    }
  },
  dependencies: [NgIf],
  styles: ["[_nghost-%COMP%] { display: none; }"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatrixRequiredHeader, [{
    type: Component,
    args: [{
      selector: "sv-ng-matrixheaderrequired",
      styles: [":host { display: none; }"],
      template: "<ng-template #template><ng-container *ngIf='column.isRenderedRequired'><span>&nbsp;</span><span [class]='question.cssClasses.cellRequiredText'>{{ column.requiredText }}</span></ng-container></ng-template>"
    }]
  }], null, {
    column: [{
      type: Input
    }],
    question: [{
      type: Input
    }]
  });
})();
var MatrixRowComponent = class extends BaseAngular {
  getModel() {
    return this.model;
  }
  get row() {
    return this.model.row;
  }
  trackCellBy(_, cell) {
    return cell.id;
  }
};
MatrixRowComponent.ɵfac = (() => {
  let ɵMatrixRowComponent_BaseFactory;
  return function MatrixRowComponent_Factory(t) {
    return (ɵMatrixRowComponent_BaseFactory || (ɵMatrixRowComponent_BaseFactory = ɵɵgetInheritedFactory(MatrixRowComponent)))(t || MatrixRowComponent);
  };
})();
MatrixRowComponent.ɵcmp = ɵɵdefineComponent({
  type: MatrixRowComponent,
  selectors: [["sv-ng-matrix-row"]],
  inputs: {
    model: "model",
    question: "question"
  },
  features: [ɵɵInheritDefinitionFeature],
  decls: 2,
  vars: 0,
  consts: [["template", ""], [3, "class", "pointerdown", 4, "ngIf"], [3, "pointerdown"], [3, "cell", "question", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "cell", "question"]],
  template: function MatrixRowComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, MatrixRowComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    }
  },
  dependencies: [MatrixCellComponent, NgIf, NgForOf],
  styles: ["[_nghost-%COMP%] { display: none; }"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatrixRowComponent, [{
    type: Component,
    args: [{
      selector: "sv-ng-matrix-row",
      templateUrl: "./matrix-row.component.html",
      styles: [":host { display: none; }"]
    }]
  }], null, {
    model: [{
      type: Input
    }],
    question: [{
      type: Input
    }]
  });
})();
var MatrixTableComponent = class extends BaseAngular {
  getModel() {
    return this.table;
  }
  trackCellBy(_, cell) {
    return cell.id;
  }
  trackRowBy(index, row) {
    return row.id;
  }
};
MatrixTableComponent.ɵfac = (() => {
  let ɵMatrixTableComponent_BaseFactory;
  return function MatrixTableComponent_Factory(t) {
    return (ɵMatrixTableComponent_BaseFactory || (ɵMatrixTableComponent_BaseFactory = ɵɵgetInheritedFactory(MatrixTableComponent)))(t || MatrixTableComponent);
  };
})();
MatrixTableComponent.ɵcmp = ɵɵdefineComponent({
  type: MatrixTableComponent,
  selectors: [["sv-ng-matrix-table"]],
  inputs: {
    question: "question",
    table: "table"
  },
  features: [ɵɵInheritDefinitionFeature],
  decls: 7,
  vars: 12,
  consts: [["contentElement", ""], [4, "ngIf"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "class", "style", 4, "ngIf"], [3, "component"], [3, "model"], [3, "column", "question", 4, "ngIf"], [3, "column", "question"], [3, "model", "question"], [3, "cell", "question", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "cell", "question"]],
  template: function MatrixTableComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", null, 0)(2, "table");
      ɵɵtemplate(3, MatrixTableComponent_thead_3_Template, 3, 2, "thead", 1);
      ɵɵelementStart(4, "tbody");
      ɵɵtemplate(5, MatrixTableComponent_ng_container_5_Template, 2, 2, "ng-container", 2);
      ɵɵelementEnd();
      ɵɵtemplate(6, MatrixTableComponent_tfoot_6_Template, 3, 2, "tfoot", 1);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵstyleMap(ɵɵpureFunction1(10, _c54, ctx.question.showHorizontalScroll ? "scroll" : ""));
      ɵɵclassMap(ctx.question.cssClasses.tableWrapper);
      ɵɵadvance(2);
      ɵɵclassMap(ctx.question.getTableCss());
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.table.showHeader);
      ɵɵadvance(2);
      ɵɵproperty("ngForOf", ctx.table.rows)("ngForTrackBy", ctx.trackRowBy);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.table.showFooter);
    }
  },
  dependencies: [SurveyStringComponent, MatrixRequiredHeader, MatrixRowComponent, MatrixCellComponent, NgIf, NgForOf, DynamicComponentDirective],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatrixTableComponent, [{
    type: Component,
    args: [{
      selector: "sv-ng-matrix-table",
      templateUrl: "./matrixtable.component.html"
    }]
  }], null, {
    question: [{
      type: Input
    }],
    table: [{
      type: Input
    }]
  });
})();
var MatrixDropdownComponent = class extends QuestionAngular {
};
MatrixDropdownComponent.ɵfac = (() => {
  let ɵMatrixDropdownComponent_BaseFactory;
  return function MatrixDropdownComponent_Factory(t) {
    return (ɵMatrixDropdownComponent_BaseFactory || (ɵMatrixDropdownComponent_BaseFactory = ɵɵgetInheritedFactory(MatrixDropdownComponent)))(t || MatrixDropdownComponent);
  };
})();
MatrixDropdownComponent.ɵcmp = ɵɵdefineComponent({
  type: MatrixDropdownComponent,
  selectors: [["sv-ng-matrixdropdown-question"]],
  features: [ɵɵInheritDefinitionFeature],
  decls: 2,
  vars: 0,
  consts: [["template", ""], [3, "question", "table", 4, "ngIf"], [3, "question", "table"]],
  template: function MatrixDropdownComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, MatrixDropdownComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    }
  },
  dependencies: [MatrixTableComponent, NgIf],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatrixDropdownComponent, [{
    type: Component,
    args: [{
      selector: "sv-ng-matrixdropdown-question",
      templateUrl: "./matrixdropdown.component.html"
    }]
  }], null, null);
})();
AngularComponentFactory.Instance.registerComponent("matrixdropdown-question", MatrixDropdownComponent);
var MatrixDynamicComponent = class extends QuestionAngular {
};
MatrixDynamicComponent.ɵfac = (() => {
  let ɵMatrixDynamicComponent_BaseFactory;
  return function MatrixDynamicComponent_Factory(t) {
    return (ɵMatrixDynamicComponent_BaseFactory || (ɵMatrixDynamicComponent_BaseFactory = ɵɵgetInheritedFactory(MatrixDynamicComponent)))(t || MatrixDynamicComponent);
  };
})();
MatrixDynamicComponent.ɵcmp = ɵɵdefineComponent({
  type: MatrixDynamicComponent,
  selectors: [["sv-ng-matrixdynamic-question"]],
  features: [ɵɵInheritDefinitionFeature],
  decls: 2,
  vars: 0,
  consts: [["template", ""], ["contentElement", ""], [3, "class", 4, "ngIf"], [3, "question", "table", 4, "ngIf"], ["addRowButton", ""], [4, "ngTemplateOutlet"], [3, "question", "table"], ["sv-ng-string", "", 3, "model"], [4, "ngIf"], ["type", "button", 3, "click"], [3, "model"]],
  template: function MatrixDynamicComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, MatrixDynamicComponent_ng_template_0_Template, 8, 4, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    }
  },
  dependencies: [MatrixTableComponent, SurveyStringComponent, NgIf, NgTemplateOutlet],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatrixDynamicComponent, [{
    type: Component,
    args: [{
      selector: "sv-ng-matrixdynamic-question",
      templateUrl: "./matrixdynamic.component.html"
    }]
  }], null, null);
})();
AngularComponentFactory.Instance.registerComponent("matrixdynamic-question", MatrixDynamicComponent);
var MatrixDynamicRemoveButtonComponent = class {
  get question() {
    return this.model.data.question;
  }
  get row() {
    return this.model.data.row;
  }
  getModel() {
    return this.model;
  }
};
MatrixDynamicRemoveButtonComponent.ɵfac = function MatrixDynamicRemoveButtonComponent_Factory(t) {
  return new (t || MatrixDynamicRemoveButtonComponent)();
};
MatrixDynamicRemoveButtonComponent.ɵcmp = ɵɵdefineComponent({
  type: MatrixDynamicRemoveButtonComponent,
  selectors: [["sv-ng-matrix-remove-btn"]],
  inputs: {
    model: "model"
  },
  decls: 3,
  vars: 6,
  consts: [["type", "button", 3, "disabled", "click"], [3, "model"]],
  template: function MatrixDynamicRemoveButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "button", 0);
      ɵɵlistener("click", function MatrixDynamicRemoveButtonComponent_Template_button_click_0_listener() {
        return ctx.question.removeRowUI(ctx.row);
      });
      ɵɵelement(1, "sv-ng-string", 1)(2, "span");
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵclassMap(ctx.question.getRemoveRowButtonCss());
      ɵɵproperty("disabled", ctx.question.isInputReadOnly);
      ɵɵadvance(1);
      ɵɵproperty("model", ctx.question.locRemoveRowText);
      ɵɵadvance(1);
      ɵɵclassMap(ctx.question.cssClasses.iconRemove);
    }
  },
  dependencies: [SurveyStringComponent],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatrixDynamicRemoveButtonComponent, [{
    type: Component,
    args: [{
      selector: "sv-ng-matrix-remove-btn",
      templateUrl: "./remove-button.component.html"
    }]
  }], null, {
    model: [{
      type: Input
    }]
  });
})();
AngularComponentFactory.Instance.registerComponent("sv-matrix-remove-button", MatrixDynamicRemoveButtonComponent);
var MatrixDetailButtonComponent = class {
  get question() {
    return this.model.data.question;
  }
  get row() {
    return this.model.data.row;
  }
  getModel() {
    return this.model;
  }
};
MatrixDetailButtonComponent.ɵfac = function MatrixDetailButtonComponent_Factory(t) {
  return new (t || MatrixDetailButtonComponent)();
};
MatrixDetailButtonComponent.ɵcmp = ɵɵdefineComponent({
  type: MatrixDetailButtonComponent,
  selectors: [["sv-ng-matrix-detail-btn"]],
  inputs: {
    model: "model"
  },
  decls: 2,
  vars: 8,
  consts: [["type", "button", 3, "click"], ["sv-ng-svg-icon", "", 3, "iconName", "size"]],
  template: function MatrixDetailButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "button", 0);
      ɵɵlistener("click", function MatrixDetailButtonComponent_Template_button_click_0_listener() {
        return ctx.row.showHideDetailPanelClick();
      });
      ɵɵnamespaceSVG();
      ɵɵelement(1, "svg", 1);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵclassMap(ctx.question.getDetailPanelButtonCss(ctx.row));
      ɵɵattribute("aria-expanded", ctx.question.getIsDetailPanelShowing(ctx.row) ? "true" : "false")("aria-controls", ctx.question.getIsDetailPanelShowing(ctx.row) ? ctx.row.detailPanelId : null);
      ɵɵadvance(1);
      ɵɵclassMap(ctx.question.getDetailPanelIconCss(ctx.row));
      ɵɵproperty("iconName", ctx.question.getDetailPanelIconId(ctx.row))("size", "auto");
    }
  },
  dependencies: [SvgIconComponent],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatrixDetailButtonComponent, [{
    type: Component,
    args: [{
      selector: "sv-ng-matrix-detail-btn",
      templateUrl: "./detail-button.component.html"
    }]
  }], null, {
    model: [{
      type: Input
    }]
  });
})();
AngularComponentFactory.Instance.registerComponent("sv-matrix-detail-button", MatrixDetailButtonComponent);
var ExpressionComponent = class extends QuestionAngular {
};
ExpressionComponent.ɵfac = (() => {
  let ɵExpressionComponent_BaseFactory;
  return function ExpressionComponent_Factory(t) {
    return (ɵExpressionComponent_BaseFactory || (ɵExpressionComponent_BaseFactory = ɵɵgetInheritedFactory(ExpressionComponent)))(t || ExpressionComponent);
  };
})();
ExpressionComponent.ɵcmp = ɵɵdefineComponent({
  type: ExpressionComponent,
  selectors: [["sv-ng-expression"]],
  features: [ɵɵInheritDefinitionFeature],
  decls: 3,
  vars: 3,
  consts: [["contentElement", ""]],
  template: function ExpressionComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", null, 0);
      ɵɵtext(2);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵclassMap(ctx.model.cssClasses.root);
      ɵɵadvance(2);
      ɵɵtextInterpolate(ctx.model.formatedValue);
    }
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExpressionComponent, [{
    type: Component,
    args: [{
      selector: "sv-ng-expression",
      template: "<div [class]='model.cssClasses.root' #contentElement>{{ model.formatedValue }}</div>"
    }]
  }], null, null);
})();
AngularComponentFactory.Instance.registerComponent("expression-question", ExpressionComponent);
var ImageQuestionComponent = class extends QuestionAngular {
  ngAfterViewInit() {
    this.model.locImageLink.onChanged = () => {
      this.detectChanges();
    };
    super.ngAfterViewInit();
  }
  ngOnDestroy() {
    this.model.locImageLink.onChanged = () => {
    };
    super.ngOnDestroy();
  }
};
ImageQuestionComponent.ɵfac = (() => {
  let ɵImageQuestionComponent_BaseFactory;
  return function ImageQuestionComponent_Factory(t) {
    return (ɵImageQuestionComponent_BaseFactory || (ɵImageQuestionComponent_BaseFactory = ɵɵgetInheritedFactory(ImageQuestionComponent)))(t || ImageQuestionComponent);
  };
})();
ImageQuestionComponent.ɵcmp = ɵɵdefineComponent({
  type: ImageQuestionComponent,
  selectors: [["sv-ng-image-question"]],
  features: [ɵɵInheritDefinitionFeature],
  decls: 6,
  vars: 6,
  consts: [["contentElement", ""], [3, "visible", "class", "style", "load", "error", 4, "ngIf"], ["controls", "", 3, "visible", "class", "style", "loadedmetadata", "error", 4, "ngIf"], [3, "class", "style", 4, "ngIf"], [3, "class", 4, "ngIf"], [3, "visible", "load", "error"], ["controls", "", 3, "visible", "loadedmetadata", "error"], ["sv-ng-svg-icon", "", 3, "iconName", "size"]],
  template: function ImageQuestionComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", null, 0);
      ɵɵtemplate(2, ImageQuestionComponent_img_2_Template, 1, 13, "img", 1)(3, ImageQuestionComponent_video_3_Template, 1, 12, "video", 2)(4, ImageQuestionComponent_iframe_4_Template, 2, 13, "iframe", 3)(5, ImageQuestionComponent_div_5_Template, 2, 4, "div", 4);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵclassMap(ctx.model.cssClasses.root);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.model.renderedMode === "image");
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.model.renderedMode === "video");
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.model.renderedMode === "youtube");
      ɵɵadvance(1);
      ɵɵproperty("ngIf", !ctx.model.locImageLink.renderedHtml || ctx.model.contentNotLoaded);
    }
  },
  dependencies: [SvgIconComponent, NgIf, VisibleDirective, SafeResourceUrlPipe],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImageQuestionComponent, [{
    type: Component,
    args: [{
      selector: "sv-ng-image-question",
      templateUrl: "./image.component.html"
    }]
  }], null, null);
})();
AngularComponentFactory.Instance.registerComponent("image-question", ImageQuestionComponent);
var CustomQuestionComponent = class extends QuestionAngular {
  get contentQuestion() {
    return this.model.contentQuestion;
  }
  getComponentName(element) {
    return getComponentName(element);
  }
};
CustomQuestionComponent.ɵfac = (() => {
  let ɵCustomQuestionComponent_BaseFactory;
  return function CustomQuestionComponent_Factory(t) {
    return (ɵCustomQuestionComponent_BaseFactory || (ɵCustomQuestionComponent_BaseFactory = ɵɵgetInheritedFactory(CustomQuestionComponent)))(t || CustomQuestionComponent);
  };
})();
CustomQuestionComponent.ɵcmp = ɵɵdefineComponent({
  type: CustomQuestionComponent,
  selectors: [["sv-ng-custom-question"]],
  features: [ɵɵInheritDefinitionFeature],
  decls: 1,
  vars: 6,
  consts: [[3, "component"]],
  template: function CustomQuestionComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, CustomQuestionComponent_ng_template_0_Template, 0, 0, "ng-template", 0);
    }
    if (rf & 2) {
      ɵɵproperty("component", ɵɵpureFunction2(3, _c5, ctx.getComponentName(ctx.contentQuestion), ɵɵpureFunction1(1, _c2, ctx.contentQuestion)));
    }
  },
  dependencies: [DynamicComponentDirective],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomQuestionComponent, [{
    type: Component,
    args: [{
      selector: "sv-ng-custom-question",
      template: "<ng-template [component]='{ name: getComponentName(contentQuestion), data: { model: contentQuestion } }'></ng-template>"
    }]
  }], null, null);
})();
AngularComponentFactory.Instance.registerComponent("custom-question", CustomQuestionComponent);
var CompositeQuestionComponent = class extends QuestionAngular {
  get contentPanel() {
    return this.model.contentPanel;
  }
};
CompositeQuestionComponent.ɵfac = (() => {
  let ɵCompositeQuestionComponent_BaseFactory;
  return function CompositeQuestionComponent_Factory(t) {
    return (ɵCompositeQuestionComponent_BaseFactory || (ɵCompositeQuestionComponent_BaseFactory = ɵɵgetInheritedFactory(CompositeQuestionComponent)))(t || CompositeQuestionComponent);
  };
})();
CompositeQuestionComponent.ɵcmp = ɵɵdefineComponent({
  type: CompositeQuestionComponent,
  selectors: [["sv-ng-composite-question"]],
  features: [ɵɵInheritDefinitionFeature],
  decls: 1,
  vars: 1,
  consts: [[3, "model"]],
  template: function CompositeQuestionComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelement(0, "sv-ng-panel", 0);
    }
    if (rf & 2) {
      ɵɵproperty("model", ctx.contentPanel);
    }
  },
  dependencies: [PanelComponent],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CompositeQuestionComponent, [{
    type: Component,
    args: [{
      selector: "sv-ng-composite-question",
      template: "<sv-ng-panel [model]='contentPanel'></sv-ng-panel>"
    }]
  }], null, null);
})();
AngularComponentFactory.Instance.registerComponent("composite-question", CompositeQuestionComponent);
var HeaderCellComponent = class extends EmbeddedViewContentComponent {
};
HeaderCellComponent.ɵfac = (() => {
  let ɵHeaderCellComponent_BaseFactory;
  return function HeaderCellComponent_Factory(t) {
    return (ɵHeaderCellComponent_BaseFactory || (ɵHeaderCellComponent_BaseFactory = ɵɵgetInheritedFactory(HeaderCellComponent)))(t || HeaderCellComponent);
  };
})();
HeaderCellComponent.ɵcmp = ɵɵdefineComponent({
  type: HeaderCellComponent,
  selectors: [["sv-ng-header-cell"]],
  viewQuery: function HeaderCellComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c1, 7, ViewContainerRef);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.actionContent = _t.first);
    }
  },
  inputs: {
    model: "model"
  },
  features: [ɵɵInheritDefinitionFeature],
  decls: 2,
  vars: 0,
  consts: [["template", ""], [1, "sv-header__cell-content"], ["class", "sv-header__logo", 4, "ngIf"], ["class", "sv-header__title", 3, "style", 4, "ngIf"], ["class", "sv-header__description", 3, "style", 4, "ngIf"], [1, "sv-header__logo"], [3, "component"], [1, "sv-header__title"], [3, "element"], [1, "sv-header__description"], ["sv-ng-string", "", 3, "class", "model", 4, "ngIf"], ["sv-ng-string", "", 3, "model"]],
  template: function HeaderCellComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, HeaderCellComponent_ng_template_0_Template, 5, 9, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    }
  },
  dependencies: [ElementTitleComponent, SurveyStringComponent, NgIf, DynamicComponentDirective],
  styles: ["[_nghost-%COMP%] { display: none; }"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderCellComponent, [{
    type: Component,
    args: [{
      selector: "sv-ng-header-cell",
      templateUrl: "./header-cell.component.html",
      styles: [":host { display: none; }"]
    }]
  }], null, {
    model: [{
      type: Input
    }],
    actionContent: [{
      type: ViewChild,
      args: ["actionContent", {
        read: ViewContainerRef,
        static: true
      }]
    }]
  });
})();
AngularComponentFactory.Instance.registerComponent("sv-header-cell", HeaderCellComponent);
var HeaderMobileComponent = class extends EmbeddedViewContentComponent {
};
HeaderMobileComponent.ɵfac = (() => {
  let ɵHeaderMobileComponent_BaseFactory;
  return function HeaderMobileComponent_Factory(t) {
    return (ɵHeaderMobileComponent_BaseFactory || (ɵHeaderMobileComponent_BaseFactory = ɵɵgetInheritedFactory(HeaderMobileComponent)))(t || HeaderMobileComponent);
  };
})();
HeaderMobileComponent.ɵcmp = ɵɵdefineComponent({
  type: HeaderMobileComponent,
  selectors: [["sv-ng-header-mobile"]],
  viewQuery: function HeaderMobileComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c1, 7, ViewContainerRef);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.actionContent = _t.first);
    }
  },
  inputs: {
    model: "model"
  },
  features: [ɵɵInheritDefinitionFeature],
  decls: 2,
  vars: 0,
  consts: [["template", ""], [1, "sv-header--mobile"], ["class", "sv-header__logo", 4, "ngIf"], ["class", "sv-header__title", 3, "style", 4, "ngIf"], ["class", "sv-header__description", 3, "style", 4, "ngIf"], [1, "sv-header__logo"], [3, "component"], [1, "sv-header__title"], [3, "element"], [1, "sv-header__description"], ["sv-ng-string", "", 3, "class", "model", 4, "ngIf"], ["sv-ng-string", "", 3, "model"]],
  template: function HeaderMobileComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, HeaderMobileComponent_ng_template_0_Template, 4, 3, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    }
  },
  dependencies: [ElementTitleComponent, SurveyStringComponent, NgIf, DynamicComponentDirective],
  styles: ["[_nghost-%COMP%] { display: none; }"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderMobileComponent, [{
    type: Component,
    args: [{
      selector: "sv-ng-header-mobile",
      templateUrl: "./header-mobile.component.html",
      styles: [":host { display: none; }"]
    }]
  }], null, {
    model: [{
      type: Input
    }],
    actionContent: [{
      type: ViewChild,
      args: ["actionContent", {
        read: ViewContainerRef,
        static: true
      }]
    }]
  });
})();
AngularComponentFactory.Instance.registerComponent("sv-header-cell", HeaderMobileComponent);
var HeaderComponent = class extends BaseAngular {
  getModel() {
    this.model.survey = this.survey;
    return this.model;
  }
};
HeaderComponent.ɵfac = (() => {
  let ɵHeaderComponent_BaseFactory;
  return function HeaderComponent_Factory(t) {
    return (ɵHeaderComponent_BaseFactory || (ɵHeaderComponent_BaseFactory = ɵɵgetInheritedFactory(HeaderComponent)))(t || HeaderComponent);
  };
})();
HeaderComponent.ɵcmp = ɵɵdefineComponent({
  type: HeaderComponent,
  selectors: [["sv-header"], ["sv-ng-header"]],
  viewQuery: function HeaderComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c4, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.container = _t.first);
    }
  },
  inputs: {
    model: "model",
    survey: "survey"
  },
  features: [ɵɵInheritDefinitionFeature],
  decls: 2,
  vars: 0,
  consts: [["template", ""], [3, "class", "style", 4, "ngIf"], [3, "style", "class", 4, "ngIf"], [3, "class", "width", 4, "ngIf"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "model"]],
  template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, HeaderComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    }
  },
  dependencies: [HeaderCellComponent, HeaderMobileComponent, NgIf, NgForOf],
  styles: ["[_nghost-%COMP%] { display: none }"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderComponent, [{
    type: Component,
    args: [{
      selector: "sv-header, sv-ng-header",
      templateUrl: "./header.component.html",
      styles: [":host { display: none }"]
    }]
  }], null, {
    model: [{
      type: Input
    }],
    survey: [{
      type: Input
    }],
    container: [{
      type: ViewChild,
      args: ["container"]
    }]
  });
})();
AngularComponentFactory.Instance.registerComponent("sv-header", HeaderComponent);
var SurveyModule = class {
};
SurveyModule.ɵfac = function SurveyModule_Factory(t) {
  return new (t || SurveyModule)();
};
SurveyModule.ɵmod = ɵɵdefineNgModule({
  type: SurveyModule,
  declarations: [VisibleDirective, Key2ClickDirective, PanelDynamicAddBtn, PanelDynamicNextBtn, PanelDynamicPrevBtn, PanelDynamicProgressText, ElementComponent, TemplateRendererComponent, SurveyComponent, SurveyContentComponent, PopupSurveyComponent, PageComponent, PanelComponent, QuestionComponent, StringViewerComponent, SurveyStringComponent, StringEditorComponent, QuestionSkeletonComponent, TextQuestionComponent, RadiogroupComponent, RadiogroupItemComponent, CheckboxComponent, CheckboxItemComponent, DropdownComponent, DropdownQuestionComponent, DropdownSelectComponent, DropdownOptionItemComponent, PopupComponent, PopupBaseContainerComponent, PopupPointerComponent, CharacterCounterComponent, ListComponent, ListItemComponent, RatingItemComponent, RatingItemStarComponent, RatingItemSmileyComponent, TagboxFilterComponent, TagboxComponent, TagboxQuestionComponent, TagboxItemComponent, ActionBarComponent, ActionComponent, ActionBarItemComponent, ActionBarItemDropdownComponent, HtmlQuestionComponent, SelectBaseItemComponent, SelectBaseComponent, SurveyCommentComponent, SurveyCommentOtherComponent, ElementHeaderComponent, ElementTitleActionsComponent, ElementTitleComponent, DynamicHeadComponent, RowComponent, RatingQuestionComponent, RatingDropdownComponent, BooleanQuestionComponent, BooleanCheckboxComponent, BooleanRadioComponent, BooleanRadioItemComponent, ImagePickerItemComponent, ImagePickerQuestionComponent, ImageQuestionComponent, SurveyHeaderComponent, ProgressDefaultComponent, ProgressButtonsComponent, ProgressTocComponent, SurveyNavigationButton, MatrixQuestionComponent, SvgIconComponent, FileQuestionComponent, SafeUrlPipe, SafeHtmlPipe, CommentQuestionComponent, SignaturePadQuestionComponent, ErrorsComponent, MultipleTextComponent, MultipleTextItemComponent, DynamicComponentDirective, RankingQuestionComponent, RankingItemComponent, PanelDynamicQuestionComponent, EmbeddedViewContentComponent, CustomWidgetComponent, MatrixCellComponent, MatrixTableComponent, MatrixDropdownComponent, MatrixDynamicComponent, MatrixDetailButtonComponent, MatrixDynamicRemoveButtonComponent, MatrixDynamicDragDropIconComponent, MatrixRequiredHeader, ExpressionComponent, SafeResourceUrlPipe, BrandInfoComponent, CustomQuestionComponent, CompositeQuestionComponent, ButtonGroupItemComponent, ButtonGroupQuestionComponent, MatrixRowComponent, ModalComponent, LogoImageComponent, SkeletonComponent, TimerPanelComponent, PaneldynamicRemoveButtonComponent, NotifierComponent, ComponentsContainerComponent, MultipleTextRowComponent, LoadingIndicatorComponent, HeaderComponent, HeaderCellComponent, HeaderMobileComponent, ChooseFileBtn, FilePreviewComponent],
  imports: [CommonModule, FormsModule],
  exports: [VisibleDirective, Key2ClickDirective, PanelDynamicAddBtn, PanelDynamicNextBtn, PanelDynamicPrevBtn, PanelDynamicProgressText, ElementComponent, TemplateRendererComponent, SurveyComponent, SurveyContentComponent, PopupSurveyComponent, PageComponent, PanelComponent, QuestionComponent, StringViewerComponent, SurveyStringComponent, StringEditorComponent, QuestionSkeletonComponent, TextQuestionComponent, RadiogroupComponent, RadiogroupItemComponent, CheckboxComponent, CheckboxItemComponent, CharacterCounterComponent, DropdownComponent, DropdownQuestionComponent, DropdownSelectComponent, DropdownOptionItemComponent, PopupComponent, PopupBaseContainerComponent, PopupPointerComponent, CharacterCounterComponent, ListComponent, ListItemComponent, RatingItemComponent, RatingItemStarComponent, RatingItemSmileyComponent, TagboxFilterComponent, TagboxComponent, TagboxQuestionComponent, TagboxItemComponent, ActionBarComponent, ActionComponent, ActionBarItemComponent, ActionBarItemDropdownComponent, HtmlQuestionComponent, SelectBaseItemComponent, SelectBaseComponent, SurveyCommentComponent, SurveyCommentOtherComponent, ElementHeaderComponent, ElementTitleComponent, DynamicHeadComponent, RowComponent, RatingQuestionComponent, RatingDropdownComponent, BooleanQuestionComponent, BooleanCheckboxComponent, BooleanRadioComponent, BooleanRadioItemComponent, ImagePickerItemComponent, ImagePickerQuestionComponent, ImageQuestionComponent, SurveyHeaderComponent, ProgressDefaultComponent, ProgressButtonsComponent, SurveyNavigationButton, MatrixQuestionComponent, SvgIconComponent, FileQuestionComponent, SafeUrlPipe, SafeHtmlPipe, CommentQuestionComponent, SignaturePadQuestionComponent, ErrorsComponent, MultipleTextComponent, MultipleTextItemComponent, DynamicComponentDirective, RankingQuestionComponent, RankingItemComponent, PanelDynamicQuestionComponent, EmbeddedViewContentComponent, CustomWidgetComponent, MatrixCellComponent, MatrixTableComponent, MatrixDropdownComponent, MatrixDynamicComponent, MatrixDetailButtonComponent, MatrixDynamicRemoveButtonComponent, MatrixDynamicDragDropIconComponent, MatrixRequiredHeader, ExpressionComponent, SafeResourceUrlPipe, CustomQuestionComponent, CompositeQuestionComponent, ButtonGroupQuestionComponent, ModalComponent, LogoImageComponent, SkeletonComponent, TimerPanelComponent, PaneldynamicRemoveButtonComponent, NotifierComponent, ComponentsContainerComponent, MultipleTextRowComponent, LoadingIndicatorComponent, HeaderComponent, HeaderCellComponent, HeaderMobileComponent, FilePreviewComponent]
});
SurveyModule.ɵinj = ɵɵdefineInjector({
  providers: [PopupService],
  imports: [[CommonModule, FormsModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SurveyModule, [{
    type: NgModule,
    args: [{
      declarations: [VisibleDirective, Key2ClickDirective, PanelDynamicAddBtn, PanelDynamicNextBtn, PanelDynamicPrevBtn, PanelDynamicProgressText, ElementComponent, TemplateRendererComponent, SurveyComponent, SurveyContentComponent, PopupSurveyComponent, PageComponent, PanelComponent, QuestionComponent, StringViewerComponent, SurveyStringComponent, StringEditorComponent, QuestionSkeletonComponent, TextQuestionComponent, RadiogroupComponent, RadiogroupItemComponent, CheckboxComponent, CheckboxItemComponent, DropdownComponent, DropdownQuestionComponent, DropdownSelectComponent, DropdownOptionItemComponent, PopupComponent, PopupBaseContainerComponent, PopupPointerComponent, CharacterCounterComponent, ListComponent, ListItemComponent, RatingItemComponent, RatingItemStarComponent, RatingItemSmileyComponent, TagboxFilterComponent, TagboxComponent, TagboxQuestionComponent, TagboxItemComponent, ActionBarComponent, ActionComponent, ActionBarItemComponent, ActionBarItemDropdownComponent, HtmlQuestionComponent, SelectBaseItemComponent, SelectBaseComponent, SurveyCommentComponent, SurveyCommentOtherComponent, ElementHeaderComponent, ElementTitleActionsComponent, ElementTitleComponent, DynamicHeadComponent, RowComponent, RatingQuestionComponent, RatingDropdownComponent, BooleanQuestionComponent, BooleanCheckboxComponent, BooleanRadioComponent, BooleanRadioItemComponent, ImagePickerItemComponent, ImagePickerQuestionComponent, ImageQuestionComponent, SurveyHeaderComponent, ProgressDefaultComponent, ProgressButtonsComponent, ProgressTocComponent, SurveyNavigationButton, MatrixQuestionComponent, SvgIconComponent, FileQuestionComponent, SafeUrlPipe, SafeHtmlPipe, CommentQuestionComponent, SignaturePadQuestionComponent, ErrorsComponent, MultipleTextComponent, MultipleTextItemComponent, DynamicComponentDirective, RankingQuestionComponent, RankingItemComponent, PanelDynamicQuestionComponent, EmbeddedViewContentComponent, CustomWidgetComponent, MatrixCellComponent, MatrixTableComponent, MatrixDropdownComponent, MatrixDynamicComponent, MatrixDetailButtonComponent, MatrixDynamicRemoveButtonComponent, MatrixDynamicDragDropIconComponent, MatrixRequiredHeader, ExpressionComponent, SafeResourceUrlPipe, BrandInfoComponent, CustomQuestionComponent, CompositeQuestionComponent, ButtonGroupItemComponent, ButtonGroupQuestionComponent, MatrixRowComponent, ModalComponent, LogoImageComponent, SkeletonComponent, TimerPanelComponent, PaneldynamicRemoveButtonComponent, NotifierComponent, ComponentsContainerComponent, MultipleTextRowComponent, LoadingIndicatorComponent, HeaderComponent, HeaderCellComponent, HeaderMobileComponent, ChooseFileBtn, FilePreviewComponent],
      imports: [CommonModule, FormsModule],
      exports: [VisibleDirective, Key2ClickDirective, PanelDynamicAddBtn, PanelDynamicNextBtn, PanelDynamicPrevBtn, PanelDynamicProgressText, ElementComponent, TemplateRendererComponent, SurveyComponent, SurveyContentComponent, PopupSurveyComponent, PageComponent, PanelComponent, QuestionComponent, StringViewerComponent, SurveyStringComponent, StringEditorComponent, QuestionSkeletonComponent, TextQuestionComponent, RadiogroupComponent, RadiogroupItemComponent, CheckboxComponent, CheckboxItemComponent, CharacterCounterComponent, DropdownComponent, DropdownQuestionComponent, DropdownSelectComponent, DropdownOptionItemComponent, PopupComponent, PopupBaseContainerComponent, PopupPointerComponent, CharacterCounterComponent, ListComponent, ListItemComponent, RatingItemComponent, RatingItemStarComponent, RatingItemSmileyComponent, TagboxFilterComponent, TagboxComponent, TagboxQuestionComponent, TagboxItemComponent, ActionBarComponent, ActionComponent, ActionBarItemComponent, ActionBarItemDropdownComponent, HtmlQuestionComponent, SelectBaseItemComponent, SelectBaseComponent, SurveyCommentComponent, SurveyCommentOtherComponent, ElementHeaderComponent, ElementTitleComponent, DynamicHeadComponent, RowComponent, RatingQuestionComponent, RatingDropdownComponent, BooleanQuestionComponent, BooleanCheckboxComponent, BooleanRadioComponent, BooleanRadioItemComponent, ImagePickerItemComponent, ImagePickerQuestionComponent, ImageQuestionComponent, SurveyHeaderComponent, ProgressDefaultComponent, ProgressButtonsComponent, SurveyNavigationButton, MatrixQuestionComponent, SvgIconComponent, FileQuestionComponent, SafeUrlPipe, SafeHtmlPipe, CommentQuestionComponent, SignaturePadQuestionComponent, ErrorsComponent, MultipleTextComponent, MultipleTextItemComponent, DynamicComponentDirective, RankingQuestionComponent, RankingItemComponent, PanelDynamicQuestionComponent, EmbeddedViewContentComponent, CustomWidgetComponent, MatrixCellComponent, MatrixTableComponent, MatrixDropdownComponent, MatrixDynamicComponent, MatrixDetailButtonComponent, MatrixDynamicRemoveButtonComponent, MatrixDynamicDragDropIconComponent, MatrixRequiredHeader, ExpressionComponent, SafeResourceUrlPipe, CustomQuestionComponent, CompositeQuestionComponent, ButtonGroupQuestionComponent, ModalComponent, LogoImageComponent, SkeletonComponent, TimerPanelComponent, PaneldynamicRemoveButtonComponent, NotifierComponent, ComponentsContainerComponent, MultipleTextRowComponent, LoadingIndicatorComponent, HeaderComponent, HeaderCellComponent, HeaderMobileComponent, FilePreviewComponent],
      providers: [PopupService]
    }]
  }], null, null);
})();
export {
  ActionBarComponent,
  ActionBarItemComponent,
  ActionBarItemDropdownComponent,
  ActionComponent,
  AngularComponentFactory,
  BaseAngular,
  BooleanCheckboxComponent,
  BooleanQuestionComponent,
  BooleanRadioComponent,
  BooleanRadioItemComponent,
  BrandInfoComponent,
  ButtonGroupQuestionComponent,
  CharacterCounterComponent,
  CheckboxComponent,
  CheckboxItemComponent,
  CommentQuestionComponent,
  ComponentsContainerComponent,
  CompositeQuestionComponent,
  CustomQuestionComponent,
  CustomWidgetComponent,
  DropdownComponent,
  DropdownOptionItemComponent,
  DropdownQuestionComponent,
  DropdownSelectComponent,
  DynamicComponentDirective,
  DynamicHeadComponent,
  ElementComponent,
  ElementHeaderComponent,
  ElementTitleComponent,
  EmbeddedViewContentComponent,
  ErrorsComponent,
  ExpressionComponent,
  FilePreviewComponent,
  FileQuestionComponent,
  HeaderCellComponent,
  HeaderComponent,
  HeaderMobileComponent,
  HtmlQuestionComponent,
  ImagePickerItemComponent,
  ImagePickerQuestionComponent,
  ImageQuestionComponent,
  Key2ClickDirective,
  ListComponent,
  ListItemComponent,
  LoadingIndicatorComponent,
  LogoImageComponent,
  MatrixCellComponent,
  MatrixDetailButtonComponent,
  MatrixDropdownComponent,
  MatrixDynamicComponent,
  MatrixDynamicDragDropIconComponent,
  MatrixDynamicRemoveButtonComponent,
  MatrixQuestionComponent,
  MatrixRequiredHeader,
  MatrixTableComponent,
  ModalComponent,
  MultipleTextComponent,
  MultipleTextItemComponent,
  MultipleTextRowComponent,
  NotifierComponent,
  PageComponent,
  PanelComponent,
  PanelDynamicAddBtn,
  PanelDynamicNextBtn,
  PanelDynamicPrevBtn,
  PanelDynamicProgressText,
  PanelDynamicQuestionComponent,
  PaneldynamicAction,
  PaneldynamicRemoveButtonComponent,
  PopupBaseContainerComponent,
  PopupComponent,
  PopupPointerComponent,
  PopupService,
  PopupSurveyComponent,
  ProgressButtonsComponent,
  ProgressDefaultComponent,
  ProgressTocComponent,
  QuestionAngular,
  QuestionComponent,
  QuestionSkeletonComponent,
  RadiogroupComponent,
  RadiogroupItemComponent,
  RankingItemComponent,
  RankingQuestionComponent,
  RatingDropdownComponent,
  RatingItemComponent,
  RatingItemSmileyComponent,
  RatingItemStarComponent,
  RatingQuestionComponent,
  RowComponent,
  SafeHtmlPipe,
  SafeResourceUrlPipe,
  SafeUrlPipe,
  SelectBaseComponent,
  SelectBaseItemComponent,
  SignaturePadQuestionComponent,
  SkeletonComponent,
  StringEditorComponent,
  StringViewerComponent,
  SurveyCommentComponent,
  SurveyCommentOtherComponent,
  SurveyComponent,
  SurveyContentComponent,
  SurveyHeaderComponent,
  SurveyModule,
  SurveyNavigationButton,
  SurveyStringComponent,
  SvgIconComponent,
  TagboxComponent,
  TagboxFilterComponent,
  TagboxItemComponent,
  TagboxQuestionComponent,
  TemplateRendererComponent,
  TextQuestionComponent,
  TimerPanelComponent,
  VisibleDirective,
  getComponentName
};
/*! Bundled license information:

@angular/forms/fesm2022/forms.mjs:
  (**
   * @license Angular v17.0.3
   * (c) 2010-2022 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=survey-angular-ui.js.map
