export type FormSchema0 = FormSchemaAutocomplete | FormSchemaBirthday | FormSchemaCard | FormSchemaCheckbox | FormSchemaMarkdown | FormSchemaRadio | FormSchemaSelect | FormSchemaTextfield | FormSchemaWarning;
/**
 * 複数選択不可 / selectの強化版
 */
export interface FormSchemaAutocomplete {
    component: "autocomplete";
    label: string;
    name: string;
    options: string[];
    /**
     * describe: Unimplemented <未実装>
     */
    describe?: string;
    show?: string;
    validate?: FormSchemaValidation;
}
/**
 * Unimplemented <未実装>
 */
export interface FormSchemaBirthday {
    component: "birthday";
    label: string;
    name: string;
    /**
     * describe: Unimplemented <未実装>
     */
    describe?: string;
    show?: string;
    validate?: FormSchemaValidation;
}
/**
 * Deprecated <削除予定>
 */
export interface FormSchemaCard {
    component: "card";
    show?: string;
}
/**
 * 複数選択可
 */
export interface FormSchemaCheckbox {
    component: "checkbox";
    label: string;
    name: string;
    options: string[];
    /**
     * describe: Unimplemented <未実装>
     */
    describe?: string;
    show?: string;
    validate?: FormSchemaValidation;
}
export interface FormSchemaMarkdown {
    component: "markdown";
    contents: string;
    show?: string;
}
/**
 * 複数選択不可
 */
export interface FormSchemaRadio {
    component: "radio";
    label: string;
    name: string;
    options: string[];
    /**
     * describe: Unimplemented <未実装>
     */
    describe?: string;
    show?: string;
    validate?: FormSchemaValidation;
}
/**
 * 複数選択不可
 */
export interface FormSchemaSelect {
    component: "select";
    label: string;
    name: string;
    options: string[];
    /**
     * describe: Unimplemented <未実装>
     */
    describe?: string;
    show?: string;
    validate?: FormSchemaValidation;
}
export interface FormSchemaTextfield {
    component: "textfield";
    label: string;
    name: string;
    /**
     * describe: Unimplemented <未実装>
     */
    describe?: string;
    show?: string;
    type?: HtmlInputTypeAttribute;
    validate?: FormSchemaValidation;
}
/**
 * Deprecated <削除予定>
 */
export interface FormSchemaWarning {
    component: "warning";
    contents: string[];
    show?: string;
}
export type FormSchema = FormSchema0[];
export interface FormSchemaValidationItem {
    expr: string;
    message: string;
}
export interface FormSchemaValidation {
    items?: FormSchemaValidationItem[];
    required?: string;
}
export declare enum HtmlInputTypeAttribute {
    Button = "button",
    Checkbox = "checkbox",
    Color = "color",
    Date = "date",
    DatetimeLocal = "datetime-local",
    Email = "email",
    File = "file",
    Hidden = "hidden",
    Image = "image",
    Month = "month",
    Number = "number",
    Password = "password",
    Radio = "radio",
    Range = "range",
    Reset = "reset",
    Search = "search",
    Submit = "submit",
    Tel = "tel",
    Text = "text",
    Time = "time",
    Url = "url",
    Week = "week"
}
