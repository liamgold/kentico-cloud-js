import { htmlParseService } from '../lib/parser/html-parse.service';


describe('Developer testing', () => {

    it(`Parsing test`, () => {
        expect(true).toBeDefined();
    })

})

/*
describe('Developer testing', () => {

    const context = new Context();
    // remove type resolvers for testing
    context.typeResolvers = [];
    setup(context);

    const movieCodename: string = 'warrior_invalid';
    let response: ItemResponses.DeliveryItemResponse<Movie>;

    beforeAll((done) => {
        context.deliveryClient.item<Movie>(movieCodename)
            .get()
            .subscribe(r => {
                 console.log(r);
                response = r;
                done();
            })
    });

    it(`IContentItem should be returned`, () => {
        expect(response.item).toEqual(jasmine.any(ContentItem));
    });
});
*/