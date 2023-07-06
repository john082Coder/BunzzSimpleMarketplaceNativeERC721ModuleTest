## Preparation before deployment
1. Prepare ERC721 token which you want the marketplace to support 

## Get started(Operation)
1. Deploy the MarketplaceNativeERC721 contract, providing the address of the ERC721 token contract you want the marketplace to support.
2. To list a token for sale, the token owner should call the list function with the token ID and the price as arguments. The owner must have approved the contract to handle the token.
3. To buy a listed token, a buyer should call the buy function with the token ID as an argument and send the specified price in the transaction.
4. To change the price of a listed token, the seller should call the changePrice function with the token ID and the new price as arguments.
5. To cancel the listing of a token, the seller should call the cancelListing function with the token ID as an argument.






