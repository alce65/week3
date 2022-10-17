const main = () => {
    const handleSubmit = (ev: Event) => {
        ev.preventDefault();
        const eInput = document.querySelector('[name="user-name"]');
        const value = (eInput as HTMLInputElement).value;
        const eOutput = document.querySelector('output');
        (eOutput as HTMLOutputElement).value = `Hola ${value}`;
        const data = { bioName: '' };
        data.bioName = value;
        const template = `
        <article>
            <h3>La vida de ${data.bioName}</h3>
            <p>Lorem ipsum, dolor sit amet consectetur ${data.bioName} adipisicing elit. 
            Quam officiis cum amet aperiam assumenda animi eaque exercitationem 
            vitae eius nihil, molestiae, et optio? Quos odit 
            repudiandae error atque quae dolorum.</p>
        </article>
    `;
        const eSlot = document.querySelector('slot');
        (eSlot as HTMLSlotElement).outerHTML = template;
    };

    const eUserForm = document.querySelector('.user-form');
    eUserForm?.addEventListener('submit', handleSubmit);
};

console.log('Loaded Index');
document.addEventListener('DOMContentLoaded', main);
