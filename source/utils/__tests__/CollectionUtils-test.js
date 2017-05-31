/**
 * Created by AL383171 on 31/05/2017.
 */
jest.autoMockOff();

describe('Collection utilities module', function () {
    var CollectionUtils = require('../CollectionUtils');
    var collectionTweetsMock = {
        collectionTweet7: {},
        collectionTweet8: {},
        collectionTweet9: {}
    }

    it('return a number of tweets in collection', function getNumberOfTweetsInCollection() {
        var actualNumberOdfTweetsInCollection = CollectionUtils.getNumberOfTweetsInCollection(collectionTweetsMock);
        var expectedNumberOfTweetsInCollection = 3;
        expect(actualNumberOdfTweetsInCollection).toBe(expectedNumberOfTweetsInCollection);
        it('checks if collection is not empty', function isNotEmptyCollection() {
            var actualIsEmptyCollectionValue = CollectionUtils.isEmptyCollection(collectionTweetsMock);

            expect(actualIsEmptyCollectionValue).toBeDefined();
            expect(actualIsEmptyCollectionValue).toBe(false);
            expect(actualIsEmptyCollectionValue).not.toBe(true);
        });
    });
})