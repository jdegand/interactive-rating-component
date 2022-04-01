(function(){

    const form = document.getElementById('form');
    form.addEventListener('submit', handleSubmit);

    function handleSubmit(e) {
        e.preventDefault()
        const ratings = document.getElementsByName("rating");
        const selected = Array.from(ratings).find(rating => rating.checked);
        //console.log(selected.value);

        if(!selected) return; /*could disable button */
        
        // replace content inside section
        removeSectionContent();

        // add thank you screen
        addNewSectionContent(selected.value);
    }

    const section = document.getElementById('section');

    function removeSectionContent(){
        var child = section.lastElementChild; 
        while (child) {
            section.removeChild(child);
            child = section.lastElementChild;
        }
    }

    function addNewSectionContent(rating){
        const image = document.createElement('img');
        image.src = 'images/illustration-thank-you.svg';
        image.alt = '';

        const ratingParagraph = document.createElement('p');
        ratingParagraph.textContent = `You selected ${rating} out of 5.`

        const ratingParagraphWrapper = document.createElement('div');
        ratingParagraphWrapper.classList.add('ratingParagraphWrapper');
        ratingParagraphWrapper.append(ratingParagraph);

        const heading = document.createElement('h2');
        heading.textContent = 'Thank You!';

        const lastParagraph = document.createElement('p');
        lastParagraph.textContent = `We appreciate you taking the time to give a rating. If you ever need more support,
        don't hesitate to get in touch!`;

        section.append(image, ratingParagraphWrapper, heading, lastParagraph);
        section.classList.add('thank-you-styling');
    }


})();