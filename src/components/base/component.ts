export class Component<T extends HTMLElement> {
	protected _element: T;

	constructor(template: HTMLTemplateElement) {
		
		this._element = template.content.firstElementChild!.cloneNode(true) as T;
		if (!this._element) {
            console.error('Шаблон пустой или не найден!');
            return;
        }
	}

	get element(): T {
		return this._element;
	}

	render(): T {
		return this._element;
	}
}
