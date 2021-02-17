export const testSections = 
    [
        {
            id: "0",
            slug: "section1",
            sectionTitle: "Section 1",
            active: true
        },
        {
            id: "1",
            slug: "section2",
            sectionTitle: "Section 2",
            active: true
        }
    ]

export const testProducts = 
    [
        {
            id: "0",
            image1: {fields: {file: {url: "1"}}},
            image2: {fields: {file: {url: "2"}}},
            image3: {fields: {file: {url: "3"}}},
            price: 5,
            title: "Product 1",
            description: "Description",
            productSection: {fields: {slug: "section1"}},
            active: true
        },
        {
            id: "1",
            image1: {fields: {file: {url: "1"}}},
            image2: {fields: {file: {url: "2"}}},
            image3: {fields: {file: {url: "3"}}},
            price: 5,
            title: "Product 2",
            description: "Description",
            productSection: {fields: {slug: "section1"}},
            active: true
        },
        {
            id: "2",
            image1: {fields: {file: {url: "1"}}},
            image2: {fields: {file: {url: "2"}}},
            image3: {fields: {file: {url: "3"}}},
            price: 5,
            title: "Product 3",
            description: "Description",
            productSection: {fields: {slug: "section2"}},
            active: true
        }
    ]

export const testProduct = 
    {
        id: 0,
        image1: {fields: {file: {url: "1"}}},
        image2: {fields: {file: {url: "2"}}},
        image3: {fields: {file: {url: "3"}}},
        price: 5,
        title: "Product 1",
        description: "Description",
        productSection: {fields: {slug: "section1"}},
        active: true
    }

export const testCartProduct = 
[{
    id: 0,
    image1: {fields: {file: {url: "1"}}},
    image2: {fields: {file: {url: "2"}}},
    image3: {fields: {file: {url: "3"}}},
    price: 5,
    title: "Product 1",
    description: "Description",
    productSection: {fields: {slug: "section1"}},
    active: true,
    quantity: 1
}]
