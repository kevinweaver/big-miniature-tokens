pragma solidity ^0.5.0;

contract nftOwner {
  string public ownerText = "Nobody owns me yet!";

  function set(string memory x) public {
    ownerText = x;
  }
}