import { FieldModels, Fields } from '../../../lib';

describe('AssetField', () => {

    const assetValue = [
        {
            'name': 'tom_hardy.jpg',
            'type': 'image/jpeg',
            'size': '8091',
            'description': 'description',
            'url': 'https://assets.kenticocloud.com:443/da5abe9f-fdad-4168-97cd-b3464be2ccb9/bb0899cf-2c3a-4e3f-8962-60e5a54fcca5/tom_hardy.jpg'
        }
    ];

    const field = new Fields.AssetsField('name', assetValue);

    it(`checks name`, () => {
        expect(field.name).toEqual(field.name);
    });

    it(`checks value`, () => {
        expect(field.value).toEqual(assetValue);
    });

    it(`checks that assets are defined`, () => {
        expect(field.assets).toBeDefined();
    });

    it(`checks that correct number of assets are created`, () => {
        expect(field.assets.length).toEqual(1);
    });

    it(`checks that asset is of 'AssetModel' type`, () => {
        expect(field.assets[0]).toEqual(jasmine.any(FieldModels.AssetModel));
    });

    it(`checks name of asset`, () => {
        expect(field.assets[0].name).toEqual(assetValue[0].name);
    });

    it(`checks type of asset`, () => {
        expect(field.assets[0].type).toEqual(assetValue[0].type);
    });

    it(`checks description of asset`, () => {
        expect(field.assets[0].description).toEqual(assetValue[0].description);
    });

    it(`checks url of asset`, () => {
        expect(field.assets[0].url).toEqual(assetValue[0].url);
    });

    it(`should throw an error when no value is provided`, () => {
        expect(() => new Fields.AssetsField('name', null)).toThrowError();
    });

    it(`should throw a error when the value is not array`, () => {
        expect(() => new Fields.AssetsField('name', 'this_should_not_contain_string')).toThrowError();
    });
});

