import styled from "styled-components";

const Loading = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .ball {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: var(--textElementSecondary);
    margin-right: 6px;
    animation: jumpingball 0.7s ease-in forwards infinite;
  }

  .one {
    animation-delay: 0.5s;
  }
  .two {
    animation-delay: 1s;
  }
  .three {
    animation-delay: 2s;
  }

  @keyframes jumpingball {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(20px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

export const LoadingScreen = () => {
  return (
    <Loading>
      <span className="ball one"></span>
      <span className="ball two"></span>
      <span className="ball three"></span>
    </Loading>
  );
};