<template>
  <div class="surf-location">
    <div class="title flex">
      <div class="title-l">
        <h3>Surf</h3>
        <svg class="icon" aria-hidden="true" id="Surf">
          <use xlink:href="#icon-type"></use>
        </svg>
      </div>
      <div class="title-r commonText">
        <span>Current location</span>
        <p>Aranya｜</p>
        <p>China</p>
      </div>
    </div>
    <div class="location">
      <div class="img">
        <img src="@/assets/images/i_surf_bg.png" alt="" id="location" />
        <div class="info">
          <div class="info-title">
            <h3>Aranya Beach</h3>
            <div></div>
            <span>China</span>
          </div>
          <div class="info-img flex">
            <div class="info-img-item">
              <svg class="icon" aria-hidden="true" id="surf">
                <use xlink:href="#icon-surf"></use>
              </svg>
              <span>Surf</span>
              <p>9-13</p>
              <span class="text">(FT)</span>
            </div>
            <div class="info-img-item">
              <svg class="icon" aria-hidden="true" id="water">
                <use xlink:href="#icon-water"></use>
              </svg>
              <span>Tide</span>
              <p>+3.2</p>
              <span class="text">(FT)</span>
            </div>
            <div class="info-img-item">
              <svg class="icon" aria-hidden="true" id="wind">
                <use xlink:href="#icon-wind"></use>
              </svg>
              <span>Wind</span>
              <p>4 SE</p>
              <span class="text">(KTS)</span>
            </div>
          </div>
          <div class="icon-close">
            <svg class="icon" aria-hidden="true" id="infoImg">
              <use xlink:href="#icon-close"></use>
            </svg>
          </div>
        </div>
        <svg class="icon" aria-hidden="true" id="i-location">
          <use xlink:href="#icon-location"></use>
        </svg>
      </div>
      <p class="latitude">N39 ° 55 ′ 39.23 ″ n e119 ° 38 ′ 9.39 ″ e</p>
    </div>
    <div class="heng"></div>
  </div>
</template>

<script>
export default {
  name: "location",
};
</script>

<style lang="scss" scoped>
.title {
  max-width: 63.6rem;
  margin: 0 auto;
  justify-content: space-between;

  .title-l {
    position: relative;

    h3 {
      font-size: 2.8rem;
      font-weight: 400;
      text-align: left;
      color: #ffffff;
      line-height: 3.9rem;
      position: relative;
      padding-top: 4.5rem;

      &after {
        content: "";
        position: absolute;
        width: 7.5rem;
        height: 0.2rem;
        background-color: #c0ffec;
        bottom: 0.6rem;
        left: 0;
      }
    }
  }

  .title-r {
    padding-top: 5.9rem;
  }
}

.location {
  max-width: 63.6rem;
  margin: 0 auto;

  .img {
    position: relative;

    .info {
      position: absolute;
      top: 10.5rem;
      right: 0;
      width: 20.5rem;
      height: 12.4rem;
      background: #262938;
      border-radius: 0.4rem;
      box-shadow: 0 0.2rem 0.4rem 0 rgba(0, 0, 0, 0.2);

      .info-title {
        padding: 1.2rem 0 0 1.2rem;

        h3 {
          font-size: 0.9rem;
          font-weight: 400;
          color: #ffffff;
          line-height: 1.1rem;
        }

        div {
          width: 5.15rem;
          height: 0.05rem;
          background: #c0ffec;
          margin: 0.2rem 0;
        }

        span {
          font-size: 0.9rem;
          font-weight: 400;
          text-align: center;
          color: #ffffff;
          line-height: 1.1rem;
        }
      }

      .info-img {
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;
        text-align: center;
        margin-top: 1.6rem;

        .info-img-item {
          span.text {
            font-size: 0.6rem;
            font-weight: 400;
            text-align: center;
            color: #c6c9d4;
            line-height: 0.9rem;
            display: inherit;
          }

          span {
            font-size: 0.7rem;
            font-weight: 400;
            text-align: center;
            color: #c6c9d4;
            line-height: 1rem;
          }

          p {
            font-size: 0.7rem;
            font-family: PingFangSC, PingFangSC-Medium;
            font-weight: 500;
            text-align: center;
            color: #ffffff;
            line-height: 1rem;
            margin: 0.9rem 0 0.1rem;
          }

          #surf {
            width: 1.65rem;
            height: 1.2rem;
            display: block;
            margin: 0 auto;
          }
          #water {
            width: 0.95rem;
            height: 1.25rem;
            display: block;
            margin: 0 auto;
          }
          #wind {
            width: 1.6rem;
            height: 1.3rem;
            display: block;
            margin: 0 auto;
          }
          #i-location {
            position: absolute;
            bottom: 4.1rem;
            right: 6.25rem;
            width: 2.75rem;
            height: 3.5rem;
          }
        }
      }

      .icon-close {
        position: absolute;
        top: 1rem;
        right: 1.35rem;

        #infoImg {
          width: 0.65rem;
          height: 0.65rem;
        }
      }
    }
  }

  .latitude {
    font-size: 0.9rem;
    font-family: PingFangSC, PingFangSC-Semibold;
    text-align: right;
    color: #c0ffec;
    line-height: 1.25rem;
    letter-spacing: 0.4rem;
  }
}

.heng {
  width: 100%;
  height: 0.05rem;
  background-color: #fff;
  margin-top: 6.5rem;
  margin-bottom: 4rem;
}
</style>
