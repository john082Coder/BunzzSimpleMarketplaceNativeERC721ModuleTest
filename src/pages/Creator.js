import { Button, Col, Container, Row, Form, Spinner } from "react-bootstrap";
import React, { useState,  } from "react";

import useBunzz from '../hooks/useBunzz';

import { getMarketplaceNativeERC721Contract, changePrice, buy, list, cancelListing  } from '../contracts/utils'
import { useWeb3React } from "@web3-react/core";

import { bnToDec, isAddress } from "../utils";
const Creator = () => {
    const bunzz = useBunzz();
    const { account} = useWeb3React();
    const MarketplaceNativeERC721Contract = getMarketplaceNativeERC721Contract(bunzz);

    const [listPrice, setListPrice] = useState(0);
    const [listTokenId, setListTokenId] = useState(0);

    const [buyTokenId, setBuyTokenId] = useState(0);
    const [buyAmount, setBuyAmount] = useState(0);

    const [cancelTokenId, setCancelTokenId] = useState(0);

    const [changePriceTokenId, setChangePriceTokenId] = useState(0);
    const [newPrice, setNewPrice] = useState(0);

  

    const [pendingList, setPendingList] = useState(false);
    const [pendingBuy, setPendingBuy] = useState(false);
    const [pendingCancelList, setPendingCancelList] = useState(false);
    const [pendingChangePrice, setPendingChangePrice] = useState(false);
  
  
   
    return (
        <Container>
            <Row className="justify-content-center mt-5">
                <Col lg="4" md="4" xs="12">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Input Token ID</Form.Label>
                            <Form.Control type="email" placeholder="Enter token id" value={listTokenId} onChange={(val) => setListTokenId(val.target.value)} />
                            <Form.Label>Input Price</Form.Label>
                            <Form.Control type="email" placeholder="Enter price" value={listPrice} onChange={(val) => setListPrice(val.target.value)} />
                        </Form.Group>
                            {!pendingList ?
                                <Button className="mx-3 mt-2" variant="dark" onClick={async () => {
                                    setPendingList(true);
                                try {
                                    let txHash;
                                    
                                    txHash = await list(
                                        MarketplaceNativeERC721Contract,
                                        listTokenId,
                                        listPrice,
                                        account,
                                    );
                                
                                    console.log(txHash);
                                    setPendingList(false);
                                    
                                } catch (e) {
                                    console.log(e);
                                    setPendingList(false);
                                    
                                }
                            }}>
                                List
                            </Button>
                            :
                            <Button className="mx-3 mt-2" variant="dark">
                                 <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                    />{` `} List
                            </Button>
                        }
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Input TokenId</Form.Label>
                            <Form.Control type="email" placeholder="Enter token id" value={changePriceTokenId} onChange={(val) => setChangePriceTokenId(val.target.value)} />
                            <Form.Label>Input New Price</Form.Label>
                            <Form.Control type="email" placeholder="Enter new price" value={newPrice} onChange={(val) => setNewPrice(val.target.value)} />
                        </Form.Group>
                        {!pendingChangePrice ?
                                <Button className="mx-3 mt-2" variant="dark" onClick={async () => {
                                    setPendingChangePrice(true);
                                try {
                                    let txHash;
                                    
                                    txHash = await changePrice(
                                        MarketplaceNativeERC721Contract,
                                        changePriceTokenId,
                                        newPrice,
                                        account,
                                    );
                                
                                    console.log(txHash);
                                    setPendingChangePrice(false);
                                    
                                } catch (e) {
                                    console.log(e);
                                    setPendingChangePrice(false);
                                    
                                }
                            }}>
                                ChangePrice
                            </Button>
                            :
                            <Button className="mx-3 mt-2" variant="dark">
                                 <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                    />{` `} ChangePrice
                            </Button>
                        }
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Input TokenId</Form.Label>
                            <Form.Control type="email" placeholder="Enter token id" value={buyTokenId} onChange={(val) => setBuyTokenId(val.target.value)} />
                            <Form.Label>Input ETH Amount</Form.Label>
                            <Form.Control type="email" placeholder="Enter ETH amount" value={buyAmount} onChange={(val) => setBuyAmount(val.target.value)} />
                        </Form.Group>

                        {!pendingBuy ?
                                <Button className="mx-3 mt-2" variant="dark" onClick={async () => {
                                    setPendingBuy(true);
                                try {
                                    let txHash;
                                    
                                    txHash = await buy(
                                        MarketplaceNativeERC721Contract,
                                        buyTokenId,
                                        buyAmount,
                                        account,
                                    );
                                
                                    console.log(txHash);
                                    
                                    setPendingBuy(false);
                                    
                                } catch (e) {
                                    console.log(e);
                                    setPendingBuy(false);
                                    
                                }
                            }}>
                                Buy
                            </Button>
                            :
                            <Button className="mx-3 mt-2" variant="dark">
                                 <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                    />{` `} Buy
                            </Button>
                        }

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Input TokenId</Form.Label>
                            <Form.Control type="email" placeholder="Enter token id" value={cancelTokenId} onChange={(val) => setCancelTokenId(val.target.value)} />
                        </Form.Group>

                        {!pendingCancelList ?
                                <Button className="mx-3 mt-2" variant="dark" onClick={async () => {
                                    setPendingCancelList(true);
                                try {
                                    let txHash;
                                    
                                    txHash = await cancelListing(
                                        MarketplaceNativeERC721Contract,
                                        cancelTokenId,
                                        account,
                                    );
                                
                                    console.log(txHash);
                                    
                                    setPendingCancelList(false);
                                    
                                } catch (e) {
                                    console.log(e);
                                    setPendingCancelList(false);
                                    
                                }
                            }}>
                                CancelList
                            </Button>
                            :
                            <Button className="mx-3 mt-2" variant="dark">
                                 <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                    />{` `} CancelList
                            </Button>
                        }
                       
                        
                     
                    </Form>
                    
                   


                </Col>
            </Row>
        </Container>
    )
}

export default Creator;