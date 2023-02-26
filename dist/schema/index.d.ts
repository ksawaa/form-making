export type FormSchema0 = FormSchemaAutocomplete | FormSchemaBirthday | FormSchemaCard | FormSchemaCheckbox | FormSchemaMarkdown | FormSchemaRadio | FormSchemaSelect | FormSchemaTextfield | FormSchemaWarning;
export interface FormSchemaAutocomplete {
    component: "autocomplete";
    describe: string;
    label: string;
    name: string;
    options: string[];
    show?: string;
    validate?: FormSchemaValidation;
}
export interface FormSchemaBirthday {
    component: "birthday";
    describe: string;
    label: string;
    name: string;
    show?: string;
    validate?: FormSchemaValidation;
}
export interface FormSchemaCard {
    component: "card";
    show?: string;
}
export interface FormSchemaCheckbox {
    component: "checkbox";
    describe: string;
    label: string;
    name: string;
    options: string[];
    show?: string;
    validate?: FormSchemaValidation;
}
export interface FormSchemaMarkdown {
    component: "markdown";
    contents: string;
    show?: string;
}
export interface FormSchemaRadio {
    component: "radio";
    describe: string;
    label: string;
    name: string;
    options: string[];
    show?: string;
    validate?: FormSchemaValidation;
}
export interface FormSchemaSelect {
    component: "select";
    describe: string;
    label: string;
    name: string;
    options: string[];
    show?: string;
    validate?: FormSchemaValidation;
}
export interface FormSchemaTextfield {
    component: "textfield";
    describe: string;
    label: string;
    name: string;
    type: HtmlInputTypeAttribute;
    show?: string;
    validate?: FormSchemaValidation;
}
export interface FormSchemaWarning {
    component: "warning";
    contents: string;
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