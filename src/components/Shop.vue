<template>
  <div class="i_shop">
    <div class="container flex">
      <div class="title">
        <div class="title-top">
          <h3>Shop</h3>
          <svg class="icon" aria-hidden="true" id="shop">
            <use xlink:href="#icon-type_shop"></use>
          </svg>
        </div>
        <span>Style</span>
        <p>Something- Surf board</p>
        <span class="money">$699</span>
        <div class="stars">
          <svg class="icon" aria-hidden="true" id="stars">
            <use xlink:href="#icon-stars"></use>
          </svg>
          <svg class="icon" aria-hidden="true" id="stars">
            <use xlink:href="#icon-stars"></use>
          </svg>
          <svg class="icon" aria-hidden="true" id="stars">
            <use xlink:href="#icon-stars"></use>
          </svg>
          <svg class="icon" aria-hidden="true" id="stars">
            <use xlink:href="#icon-stars"></use>
          </svg>
          <svg class="icon" aria-hidden="true" id="stars">
            <use xlink:href="#icon-stars"></use>
          </svg>
        </div>
        <div class="buy">Buy</div>
      </div>
      <div class="picture">
        <img src="../assets/images/surf_board.png" alt="" />
      </div>
      <div class="details">
        <span>DOUBLE CONCAVE WITH VEE SHAPE LOW POINT</span>
        <p>Excellent balance and better control of waves</p>
        <div class="speed flex">
          <div>
            <span>Flexibility</span>
            <span>speed</span>
            <span>Balance</span>
          </div>
          <div>
            <img src="../assets/images/speed.png" alt="" />
          </div>
        </div>
        <div class="img flex">
          <div>
            <p>Manufacturer logo</p>
            <img src="../assets/images/shop01.png" alt="" />
          </div>
          <div>
            <p>Some Logo</p>
            <img src="../assets/images/shop02.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Shop",
};
</script>

<style lang="scss" scoped>
.i_shop {
  background-image: url(../assets/images/shop_bg.png);
  background-repeat: no-repeat;
  background-size: 100%;

  .container {
    max-width: 59.8rem;
    margin: 0 auto;

    .title {
      width: 15.8rem;
      margin-right: 5.25rem;
      text-align: left;

      .title-top {
        position: relative;
        margin-bottom: 4.35rem;

        h3 {
          font-size: 2.8rem;
          font-weight: 400;
          text-align: left;
          color: #ffffff;
          line-height: 3.9rem;
          margin-top: 5.7rem;
          position: relative;

          &::after {
            content: "";
            position: absolute;
            width: 7.65rem;
            height: 0.2rem;
            background: #c0ffec;
            left: 0;
            bottom: 0.6rem;
          }
        }

        #shop {
          width: 14.2rem;
          height: 8.4rem;
          position: absolute;
          bottom: -1.9rem;
        }
      }

      span {
        font-size: 1.2rem;
        font-family: PingFangSC, PingFangSC-Semibold;
        text-align: left;
        color: #c6c9d4;
        line-height: 1.65rem;
        letter-spacing: 0.4rem;
      }

      p {
        font-size: 1.6rem;
        font-family: PingFangSC, PingFangSC-Semibold;
        text-align: left;
        color: #c0ffec;
        line-height: 2.25rem;
        letter-spacing: 0.65rem;
        margin: 0.8rem 0 2.4rem;
      }

      span.money {
        font-size: 1.6rem;
        font-family: DINAlternate, DINAlternate-Bold;
        font-weight: 700;
        text-align: left;
        color: #ffffff;
        line-height: 1.85rem;
        letter-spacing: 0.15rem;
      }

      .stars {
        margin: 0.9rem 0 2.4rem;

        #stars {
          width: 1rem;
          height: 1rem;
        }
      }

      .buy {
        width: 4.9rem;
        height: 2.3rem;
        border: 0.05rem solid #c0ffec;
        border-radius: 4px;
        text-align: center;
        font-size: 0.8rem;
        font-family: PingFangSC, PingFangSC-Medium;
        font-weight: 500;
        color: #c0ffec;
        line-height: 2.3rem;
        letter-spacing: 0.1rem;
      }
    }

    .picture {
      width: 14.6rem;
      margin-top: 2rem;
      margin-right: 0.8rem;
    }

    .details {
      margin-top: 13.2rem;
      text-align: left;

      span {
        width: 12.75rem;
        display: inline-block;
        font-size: 1rem;
        font-family: PingFangSC, PingFangSC-Semibold;
        text-align: left;
        color: #ffffff;
        line-height: 1.4rem;
        margin-bottom: 0.6rem;
      }

      p {
        font-size: 0.8rem;
        font-weight: 400;
        text-align: left;
        color: #ffffff;
        line-height: 1.2rem;
        margin-top: 0.6rem;
      }

      .speed {
        margin-top: 3.3rem;
        margin-bottom: 8.4rem;
        justify-content: center;
        align-items: center;

        div {
          &:first-child {
            width: 88px;
          }
        }

        span {
          font-size: 0.8rem;
          font-family: PingFangSC, PingFangSC-Medium;
          font-weight: 500;
          color: #ffffff;
          line-height: 1.1rem;
        }
      }

      .img {
        margin-left: 9.25rem;
        margin-bottom: 2.4rem;

        div {
          text-align: center;

          &:first-child {
            margin-right: 4rem;
            text-align: center;
          }
        }

        p {
          font-size: 0.7rem;
          font-weight: 400;
          text-align: right;
          color: #ffffff;
          line-height: 1rem;
          margin-bottom: 0.6rem;
          margin-top: 0;
        }
      }
    }
  }
}
</style>
