// import React, { useEffect, useState } from "react";
// import { PropTypes } from 'prop-types';
// import { FontAwesome5 } from "@expo/vector-icons";
// import { TouchableOpacity } from 'react-native';
// import styled from "styled-components/native";

// const Container = styled.View`
//   position: absolute;
//   flex-direction: column;
//   align-items: flex-end;
//   justify-content: flex-end;
// `;


// const HeartButton = ({ id }) => {
//   const [addedToFavorite, setAddedToFavorite] = useState({
//     selected: false,
//     favorites: []
//   });

//   addToFavorite = () => {
//     setAddedToFavorite({
//       selected: true,
//       favorites: 
//     });
//   }  

//   removeFromFavorite = () => {

//   }

//   useEffect(() => {
//     addToFavorite();
//   }, [id]);

//   return (
//     <TouchableOpacity
//     onPress={addToFavorite}
//     >
//       <Container>
//       {/* <View>
//         <Icon
//           name={addedToFavorite ? 'heart' : 'heart-o'}
//           color={addedToFavorite ? selectedColor : color}
//           size={18}
//         />

//         <Icon
//           name="heart-o"
//           size={18}
//           color={color}
//           style={[
//             { display: addedToFavorite ? 'flex' : 'none' },
//             styles.selectedColor,
//           ]}
//         />
//       </View> */}
//       </Container>
//     </TouchableOpacity>
//   );
// };


// HeartButton.propTypes = {
// color: PropTypes.string.isRequired,
// selectedColor: PropTypes.string.isRequired,
// onPress: PropTypes.func,
// };

// export default HeartButton;







// // export default class HeartButton extends Component {
// //   constructor(props) {
// //   	super(props);
// //   	this.state = { addedToFavorite: false };

// //     // this.addToFavorite = this.addToFavorite.bind(this);
// //   }

// //   componentWillReceiveProps(nextProps) {
// //     this.setState({ addedToFavorite: nextProps.selected });
// //   }

// //   addToFavorite = () => {
// //     this.setState({
// //       addedToFavorite: !this.state.addedToFavorite,
// //     }, () => {
// //       this.props.onPress();
// //     });
// //   }

// //   render() {
// //   	const { addedToFavorite } = this.state;
// //   	const { color, selectedColor, onPress } = this.props;

// //     return (
// //       <TouchableOpacity
// //         onPress={addToFavorite}
// //       >
// //         <Container>
// //         <View>
// //           <Icon
// //             name={addedToFavorite ? 'heart' : 'heart-o'}
// //             color={addedToFavorite ? selectedColor : color}
// //             size={18}
// //           />

// //           <Icon
// //             name="heart-o"
// //             size={18}
// //             color={color}
// //             style={[
// //               { display: addedToFavorite ? 'flex' : 'none' },
// //               styles.selectedColor,
// //             ]}
// //           />
// //         </View>
// //         </Container>
// //       </TouchableOpacity>
// //     );
// //   }
// // }

// // HeartButton.propTypes = {
// //   color: PropTypes.string.isRequired,
// //   selectedColor: PropTypes.string.isRequired,
// //   onPress: PropTypes.func,
// // };

// // const styles = StyleSheet.create({
// //   selectedColor: {
// //     position: 'absolute',
// //     left: 0,
// //     top: 0,
// //   },
// // });