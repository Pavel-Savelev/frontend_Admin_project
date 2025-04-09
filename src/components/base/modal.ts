// modal.ts
// export class Modal {
//     private modalElement: HTMLElement;
//     private contentContainer: HTMLElement;

//     constructor() {
//         this.modalElement = document.querySelector('#modal-container');
//         this.contentContainer = this.modalElement.querySelector('.modal__content');
        
//         const closeButton = this.modalElement.querySelector('.modal__close')!;
//         closeButton.addEventListener('click', () => this.close());
//     }

//     open(content: HTMLElement): void {
//         this.contentContainer.innerHTML = '';
//         this.contentContainer.appendChild(content);
//         this.modalElement.classList.add('modal_active');
//         document.body.style.overflow = 'hidden';
//         window.scrollTo({
//             top: 0,
//             behavior: 'smooth' 
//         });
//     }

//     close(): void {
//         this.modalElement.classList.remove('modal_active');
//         document.body.style.overflow = '';
//     }
// }