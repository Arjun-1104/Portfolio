const images = import.meta.glob('./images/*.{png,jpg}',{eager : true, import : 'default'});

const assets = {};

for(const path in images){
    const parts = path.split('/');
    const fileName = parts.pop();
    const key = fileName.split('.')[0];

    assets[key] = images[path];
}

export default assets;