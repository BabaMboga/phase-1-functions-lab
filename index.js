// function to calculate the distance in blocks from the headquarters
function distanceFromHqInBlocks(destination) {
    if (destination > 42) {
      return destination - 42;
    } else {
      return 42 - destination;
    }
  }
  
  // function to calculate the distance in feet from the headquarters
  function distanceFromHqInFeet(destination) {
    return distanceFromHqInBlocks(destination) * 264;
  }
  
  // function to calculate the distance travelled in feet between two locations
  function distanceTravelledInFeet(startblock, endblock) {
    if (startblock < endblock) {
      return (endblock - startblock) * 264;
    } else {
      return (startblock - endblock) * 264;
    }
  }
  
  // function to calculate the fare price based on distance travelled
  function calculatesFarePrice(startblock, endblock) {
    const distance = distanceTravelledInFeet(startblock, endblock);
  
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }
  