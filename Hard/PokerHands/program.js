
function getSuitEnumValue(letter){

	switch(letter){
		case  'S':
		return CardRanks.SPADES;
		break;
		case  'H':
		return CardRanks.HEARTS;
		break;
		case  'D':
		return CardRanks.DIAMONDS;
		break;
		case  'C':
		return CardRanks.CLUBS;
		break;
		case  'J':
		return CardRanks.JOKER;
	}

}


function getRankEnumValue(letter){

	switch(letter){
		case  'A':
		return CardRanks.ACE;
		break;
		case  'T':
		return CardRanks.TEN;
		break;
		case  'J':
		return CardRanks.JACK;
		break;
		case  'Q':
		return CardRanks.QUEEN;
		break;
		case  'K':
		return CardRanks.KING;
		default:
		return letter;
		break;
	}

}

var CardRanks = {
	SPADES: 0,   // Codes for the 4 suits, plus Joker.
   	HEARTS: 1,
   	DIAMONDS: 2,
   	CLUBS: 3,
   	JOKER:4,
   
   	ACE : 1,     // Codes for the non-numeric cards.
   	TEN: 10,
   	JACK : 11,    //   Cards 2 through 10 have their 
   	QUEEN : 12,   //   numerical values for their codes.
   	KING : 13
};

//create a Hand Object
var Hand =  function(data){

	var cards = data;

	var values = [0,0,0,0,0,0];

	this.setHandValues = function(){
		//create a array to hold the ranks value
		var ranks = [];

		//fill the rank array with 0 (we are creating a position for every card posible value)
		for (var i = 0; i <= 13; i++) {
			ranks.push(0);
		};

		//for every card increment the rank value in the ranks array
		for (var x = 0; x <=4; x++) {
			var position = cards[x].getValue();

			ranks[position]++;
		};
		//number or cards
		var identyCards = 1;
		var identyCards2 = 1;
		//number of combination
		var groupCards = 0;
		var groupCards2 = 0;

		//fill up the combinations
		for (var z = 13; z >= 1; z--) {
			//console.log(z, ranks[z], identyCards)
			if (ranks[z] > identyCards) {
				//if same card has already a combination
				if (identyCards == 1) {

					groupCards = z;
				}
				else
				{
					//pass the actual combination to the identycards variable;
					identyCards2 = identyCards;
					//pass the actualgroup value to the second group
					groupCards2 = z;

				}
				identyCards = ranks[z];
			}
			else 
				if(ranks[z] > identyCards2){
					identyCards2 = ranks[z];
					groupCards2 = z;

			}
		};

		//ordering the results
	  	var orderedRanks = [0,0,0,0,0];

		var index=0;
	 	if (ranks[1]==1) //if ace, ace is highest card
		{
			orderedRanks[index]=14; //record an ace as 14 instead of one, as its the highest card
			index++; //increment position
		}

		for (var x=13; x>=2; x--)
		{
			if (ranks[x]==1) //we have already written code to handle the case of their being two cards of the same rank
			{
				orderedRanks[index]=x; 
				index++;
			}
		}

		  for (var x=0; x<=5; x++)
        {
            values[x]=0;
        }

		// console.log(ranks.toString(),'----',orderedRanks.toString())

		//look for hight card ----1
		if (identyCards == 1) {
			//hight card
			values[0] = 1
			values[1] = orderedRanks[0]
			values[2] = orderedRanks[1]
			values[3] = orderedRanks[2]
			values[4] = orderedRanks[3]
			values[5] = orderedRanks[4]
		};

		//look for pair ----------2
		if (identyCards == 2 && identyCards2 == 1) {
			//pair
			if (groupCards == 1) {
            	groupCards = 14
            };

			values[0] = 2
			values[1] = groupCards // rank of pairs
			values[2] = orderedRanks[0]
			values[3] = orderedRanks[1]
			values[4] = orderedRanks[2]
		};

		//look for 2 pair ----------3
        if (identyCards==2 && identyCards2==2) //two pair
        {
        	if (groupCards == 1) {
            	groupCards = 14
            };

            if (groupCards2 == 1) {
            	groupCards2 = 14
            };

            values[0]=3;
            values[1]= groupCards>groupCards2 ? groupCards : groupCards2;//rank of greater pair
            values[2]= groupCards<groupCards2 ? groupCards : groupCards2; //rank of smaller pair
            values[3]=orderedRanks[0];  //extra card

            // console.log(values[0], values[1],values[2],values[3])
            // console.log('---------------')
            // console.log(groupCards, groupCards2)
        }


		//look for 3 of a kind----4
		if (identyCards == 3 && identyCards2 != 2) {
			//trio
			values[0]=4;
            values[1]= groupCards
            values[2]=orderedRanks[0]
            values[3]=orderedRanks[1];  //extra card

		};

		//look for straight  -----5
		var straight = validateStraight2(ranks)
		if (straight!= 0) {
			var topStraightValue = straight;

			 values[0]=5;
            values[1]=topStraightValue;  //if we have two straights, the one with the highest top cards wins
		};

		//look for flush ---------6
		var flush = validateFlush()
		if(flush){
				values[0] = 6
			values[1] = orderedRanks[0]
			values[2] = orderedRanks[1]
			values[3] = orderedRanks[2]
			values[4] = orderedRanks[3]
			values[5] = orderedRanks[4]
		};

		//look for fullhouse -----7
		if (identyCards == 3 && identyCards2 == 2) {
			//full house
			values[0] = 7
			values[1] = groupCards
			values[2] = groupCards2
		}

		//look for 4 of a kind----8
		if (identyCards == 4) {
			//four 
			values[0] = 8
			values[1] = groupCards
			values[2] = orderedRanks[0]


		};

		//look for straight flush-9
		if (straight != 0 && flush) {
			//straight flush
			values[0] = 9
			values[1] = straight
		};

		//look for royal flush----10
		if (straight==14 && flush) {
			//royal flush
			values[0] = 10
		};
		
	}

	this.getResults = function(){
		return values;
	}

	this.displayAll = function()
    {
        for (var x=0; x<5; x++)
            console.log(cards[x].getValue(), cards[x].getSuit()); //calls cards[x].toString()
    }

    this.displayResults = function()
	{
	var s;
	switch( values[0] )
	{

		case 1:
			s="high card";
			break;
		case 2:
			s="pair";
			break;
		case 3:
			s="two pair ";
			break;
		case 4:
			s="three of a kind";
			break;
		case 5:
			s= "high straight";
			break;
		case 6:
			s="flush";
			break;
		case 7:
			s="full house ";
			break;
		case 8:
			s="four of a kind "
			break;
		case 9:
			s="straight flush " 
			break;
			case 10:
			s="royal flush " 
			break;
		default:
			s="error value undefined";
	}
	s = "   "+ s; //this just moves the output over a little in the console so its easier to see when viewing the output
	console.log(s, values[0]);
}

    this.CompareHand = function(handtocompare){

    	var result = makeValidation(handtocompare);

		if (result == 1)
			console.log('left');
		else if (result == -1)
			console.log('right');
		else if (result == 0)
			console.log('none');
    }

    var makeValidation = function(handtocompare){

    	var left = values

    	var right = handtocompare.getResults()

		for (var x=0; x<6; x++)
        {
        	 // if (left[x] != 0) {left[x]=14};
        	 // if (right[x] != 0) {right[x]=14};
        	// console.log(left[x], right[x])
            if (left[x]>right[x])
				return 1
            else if (left[x] != right[x]) //if not greater and not equal must be less
				return -1
                
        }

        return 0;

    }

    var validateStraight2 =  function(ranks){

    	var topStraightValue=0;
		var straight=false;   

		for (var x=1; x<=9; x++) //can't have straight with lowest value of more than 10
		{
			if (ranks[x]==1 && ranks[x+1]==1 && ranks[x+2]==1 && ranks[x+3]==1 && ranks[x+4]==1)
			{
				straight=true;
				topStraightValue=x+4; //4 above bottom value
				break;
			}
		}

		if (ranks[10]==1 && ranks[11]==1 && ranks[12]==1 && ranks[13]==1 && ranks[1]==1) //ace high
		{
			straight=true;
			topStraightValue=14; //higher than king
		}
		return topStraightValue;

    }

	var validateStraight = function(){
		var topvalue = 0;
		var isStraght = true;
		//create a new array to hold the hand ranks value
		var newarray = [];
		//fill the array with the hand value
		for (var i = 0; i <= 4; i++) {
			newarray.push(cards[i].getValue())	
		}

		//sort the array asc
		newarray.sort(function(a, b){
			return a - b;
		});
		//validate if there is a ACE in the array
		if(newarray.toString().indexOf(CardRanks.ACE.toString()) == 0){
			//console.log('validando -----',CardRanks.ACE.toString(),'----', newarray.toString().indexOf(CardRanks.ACE.toString()))

			//if there is an ACE then we need to check for the final straight combination (10,J,Q,K,A)
			var finalstraightcombination = [1,10,11,12,13]
			var straightcombination = [1,2,3,4,5]

			if(newarray.toString() == finalstraightcombination.toString()){
				topvalue = 14;
				return topvalue;
			}
			else
			if(newarray.toString() == straightcombination.toString()){
				topvalue = 5;
				return topvalue;
			}

			return 0;

		}
		else
		{
			//compare the array with the next value incresing the actual value + 1
			var isvalid = 0;
			for (var x = 0; x <= 4; x++) {
				if (x == 4) {
					if(Number(newarray[x]) == newarray[x]) 
					{
						isvalid = 1;
					}
					else{
						isvalid = 0;
					}

				}else{
					if(Number(newarray[x]) == newarray[x+1] - 1) 
					{
						isvalid = 1;
					}
					else{
						isvalid = 0;
					}

				};
				// console.log(x ,Number(newarray[x]), newarray[x+1] - 1)
				
			}

			if (isvalid == 1) { 
				return newarray[newarray.length-1]
			};

		}

		return topvalue;
    }

    //function to validate flush
   	var validateFlush = function(){
       		
   		var flush=true; //assume there is a flush

   		//compare one card with the next one and if the next one has a diff color this is not a flush had
		for (var x=0; x<4; x++) 
	  	{
			if ( cards[x].getSuit() != cards[x+1].getSuit() ) 
				flush=false;
		}

		return flush;
    }

}

//create a card object
var Card = function(theValue, theSuit){
   	var suit = theSuit;
   	var value = theValue;

	this.getValue = function(){
		return value;
	}

	this.getSuit = function(){
		return suit;
	}

}


var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
			var newarray = line.split(" ");

			//create both group left and right with the plays
			var GroupLeft = [];
			var GroupRight = [];

			for (var i = 0; i < newarray.length; i++) {
				
				if (i < 5) {
					GroupLeft.push(newarray[i]); 
				}else{
					GroupRight.push(newarray[i]); 
				};

			};

			//Cards Conversion

			//create the cards for the group 'left' and 'right'
			var GroupLeftCards = SetupHand(GroupLeft);
			var GroupRightCards = SetupHand(GroupRight);

			var hand = new Hand(GroupLeftCards);
			// hand.displayAll();
			hand.setHandValues();
			// hand.displayResults();

			// console.log('--------------------')

			var hand2 = new Hand(GroupRightCards);
			// hand2.displayAll();
			hand2.setHandValues();
			// hand2.displayResults();
			hand.CompareHand(hand2);
		};
});

function SetupHand(data){
	
	var listCards = [];

	data.forEach(function(value){

		var rank = 0;

		if (Number(value[0]).toString() === 'NaN') {
			 rank = getRankEnumValue(value[0].toString());
		}else
		{
			rank = value[0]
		};

		var suit = getSuitEnumValue(value[1].toString());

		var cardleft = new Card(rank, suit);

		listCards.push(cardleft);
	})

	return listCards;
}

