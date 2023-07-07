## ListingCanceled
Emitted when a token listing is canceled.

|Name|Type|Description|
|--- |---|---|
|nft|address|The address of the ERC721 token|
|tokenId|uint256|The id of the token which was cancelled for listing|


## NewListing
Event emitted when seller listed new token.

|Name|Type|Description|
|--- |---|---|
|listId|uint256|The id of the listing|
|tokenId|uint256|The id of the token|
|seller|address|The address of user which listed token|
|price|uint256|The listed price for the token|
|currency|address|The address of the currency token|
|timestamp|uint256|The listed time|

## NftSet
Event emitted when the setter changed the ERC721 NFT token address

|Name|Type|Description|
|--- |---|---|
|nft|address|The address of the ERC721 token|
|setter|address|The address of the setter|

## OwnershipTransferred
Event emitted when ownership transferred to another address.

|Name|Type|Description|
|--- |---|---|
|previousOwner|uint256|The address of the previous owner of the contract|
|newOwner|address|The address of the new owner|


## Sold
Event emitted when the listed token was sold.

|Name|Type|Description|
|--- |---|---|
|tokenId|uint256|The id of the token|
|seller|address|The address of user which listed token|
|buyer|address|The address of user which bought token|
|price|uint256|The price of the token which has been sold|
|currency|address|The currency token address|
|timestamp|uint256|The sold time|

## PriceChanged
Event emitted when seller changed price of the existing listed token.

|Name|Type|Description|
|--- |---|---|
|nft|address|The ERC721 token address|
|setter|address|The address of the setter|
|tokenId|uint256|The id of the token|
|oldPrice|uint256|The old listed price for the token|
|newPrice|uint256|The updated listed price for the token|