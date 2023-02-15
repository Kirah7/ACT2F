let form = document.getElementsByTagName('form')[0]

form.addEventListener('submit', (e) => {
  e.preventDefault();
  return false;
});
/* Variables */

$body_background: #ffffff;

*,
*::after,
*::before {
    box-sizing: border-box;
}

html,
body {
    margin: 0;
    padding: 0;
    height: 100%;
}

body {
    background: $body_background;
    font-family: 'PT Sans', sans-serif;
    line-height: 1.3;
}

button {
  outline: none;
}

header {
    width: 100%;
    height: 720px;
    position: relative;
    overflow: hidden;
    &::after {
        background: #f4f6f9;
        z-index: -2;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
    &::before {
        border-radius: 15%;
        content: '';
        position: absolute;
        background: linear-gradient(#5442d2, #5932d0);
        width: 65%;
        right: 0;
        top: 0;
        padding-top: 93%;
        transform: rotate(304deg);
        transform-origin: top left;
        z-index: -1;
    }
    .nav {
        font-family: 'Josefin Sans', sans-serif;
        font-weight: 600;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0 4%;
        justify-content: space-between;
        z-index: 2;
        a {
            color: #fff;
            font-size: 13px;
            text-decoration: none;
            display: inline-block;
            padding: 15px 15px;
        }
        a.btn-nav {
            background: #5e45d3;
            border-radius: 8px;
        }
        .logo {
            height: 90px;
            width: 75px;
            img {
                width: 100%;
            }
        }
    }
    .header-container {
        padding: 10% 12%;
        .small {
            color: #555;
            font-family: 'Josefin Sans', sans-serif;
            text-transform: uppercase;
            font-size: 14px;
        }
        .large {
            width: 500px;
            font-size: 2rem;
            color: #3f3b41;
            span {
                font-weight: bold;
                color: #373339;
            }
        }
        form {
            display: flex;
            align-items: center;
            input {
                width: 500px;
                padding: 20px 15px;
                border-radius: 45px;
                border: none;
                outline: none;
                font-family: 'PT Sans', sans-serif;
                font-size: 16px;
                text-indent: 15px;
                box-shadow: 0 8px 30px rgba($color: #000000, $alpha: 0.1);
            }
            button {
                width: 50px;
                height: 50px;
                border: none;
                background: linear-gradient(#ff8e59, #ffb153);
                border-radius: 100%;
                margin-left: -57px;
                box-shadow: 0 8px 15px #ffb253c7;
                cursor: pointer;
                svg {
                    width: 20px;
                    fill: #fff;
                    margin: auto;
                    margin-top: 4px;
                }
            }
        }
    }
}

main {
    margin-top: -130px;
    .main-container {
        padding: 0 12%;
        margin-bottom: 35px;
        .small {
            color: #555;
            font-family: 'Josefin Sans', sans-serif;
            text-transform: uppercase;
            font-size: 14px;
        }
        .cards {
            display: flex;
            justify-content: space-between;
            .card {
                .card-content {
                    padding: 15px;
                }
                .card-footer {
                    background: #faf9fe;
                    padding: 15px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    .text {
                        p.price {
                            color: #5b2ed0;
                            font-size: 1.4rem;
                            margin-bottom: 5px;
                        }
                    }
                    .button {
                        button {
                            border: 2px solid #e9e5fa;
                            cursor: pointer;
                            background: transparent;
                            width: 50px;
                            height: 50px;
                            border-radius: 50%;
                            img {
                                max-width: 100%;
                            }
                        }
                    }
                }
                cursor: pointer;
                border-radius: 5px;
                width: 24%;
                background: #ffffff;
                color: #959499;
                box-shadow: 0 8px 30px rgba($color: #000000, $alpha: 0.1);
                font-weight: bold;
                p.dark {
                    color: darken($color: #959499, $amount: 35%)
                }
                .img {
                    padding: 0 15px;
                    height: 161px;
                    border-bottom: 1px solid #ebeaeb;
                    text-align: center;
                    position: relative;
                    img {
                        vertical-align: text-top;
                        width: 80%;
                        position: absolute;
                        top: 0;
                        bottom: 0;
                        left: 0;
                        right: 0;
                        margin: auto;
                    }
                }
            }
        }
    }
}