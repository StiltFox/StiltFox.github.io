Array.from(document.getElementsByTagName("product-item")).forEach( Element => {
    var name = Element.dataset.name;
    var version = Element.dataset.version;
    var link = Element.dataset.link;
    var image = Element.dataset.image;
    var description = Element.innerHTML;

    if (image == undefined) 
    {
        image = `<div class="unknown-product">?</div>`;
    }
    else
    {
        image = `<img src="${image}" class="product-image" alt="">`;
    }

    Element.innerHTML = 
        `<a href="${link}" target="_blank" class="product-entry">
            ${image}
            <div class="product-body">
                <div class="product-info">
                    <div class="product-info-item">
                        <b>Name: </b> ${name}
                    </div>
                    <div class="product-info-item">
                        <b>Most Recent Version:</b> ${version}
                    </div>
                </div>
                <b>Description:</b>
                <div>
                    ${description}
                </div>
            </div>
        </a>`;
});