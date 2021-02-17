import * as contentful from 'contentful'

const fetchContentful = async (contentType) => {
    var client = contentful.createClient({
        space: 'z67ub1h0a7t4',
        accessToken: '-PTqI4a37RirY-az5ZzJe5nosyh_Z4w5feNnGe1J8U8' });

    const products = [];
    const sections = [];
    
    await client.getEntries(
        {
            content_type: contentType
        }
    ).then(entries => {
        entries.items.forEach(entry => {
            if(entry.sys.contentType.sys.id==="product" && entry.fields.active) {
              entry.fields.id = entry.sys.id
              products.push(entry.fields);
            }
            if(entry.sys.contentType.sys.id==="productSection" && entry.fields.active) {
              entry.fields.id = entry.sys.id
              sections.push(entry.fields);
            }
        })
    });
    return {products, sections};
}

export default fetchContentful;