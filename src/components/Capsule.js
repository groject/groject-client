/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React, { useEffect, useRef, useState } from 'react'
import Header from './Header'
import Modal from 'react-modal';
import { MdOutlineClose } from 'react-icons/md';
import Select from './select';
import { categoryState, newPostState, sortState } from '../atom';
import { useRecoilState } from 'recoil';
import { instance } from '../instance';

function IdeaLink({ item, setLiked }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [liked, setLiked] = useState(false);
  const [hover, setHover] = useState(false);

  // useEffect(() => {
  //   (async () => {
  //     try {

  //     } catch (error) {
  //       console.log(error);
  //     }
  //   })();
  // }, [item.liked]);

  const openModal = () => {
    setIsModalOpen(true);
    getEnterPost();
  }

  const getEnterPost = async () => {
    try {
      const response = await instance.get(`/post/enter/${item.id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access-token")}`,
        },
      })
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  const upLike = async () => {
    try {
      const response = await instance.post(`/like/${item.id}`, null, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access-token")}`,
        },
      });
      console.log(response);
      setLiked(true);
    } catch (error) {
      console.log(error);
    }
  }

  const downLike = async () => {
    try {
      const response = await instance.delete(`/like/${item.id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access-token")}`,
        },
      });
      console.log(response);
      setLiked(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div css={css`
      width: 280px;
      height: 420px;
      border-radius: 140px;
      background: #FFE7DA;
      box-shadow: 5px 5px 5px rgba(0, 0, 0, 30%);
      cursor: pointer;
    `}
      >
        <div css={css`
        width: 260px;
        height: 260px;
        border-radius: 130px 130px 0px 0px;
        margin: 10px;
        text-align: center;
        background-color: white;
        position: relative;
      `}>
          <img src={item.imageUrl} alt='아이디어의 로고 사진' css={css`
          width: 260px;
          height: 260px;
          border-radius: 130px 130px 0px 0px;
        `} onClick={() => openModal()} />
          <div css={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            position: absolute;
            right: 5px;
            bottom: 5px;
          `} onClick={() => !item.liked ? upLike() : downLike()}>
            <img src={hover ? './images/hoverPlant.svg' : (!item.liked ? './images/defaultPlant.svg' : './images/clickPlant.svg')} alt='좋아요 개수' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} />
            <span css={css`
              font-size: 12px;
            `}>{item.like}</span>
          </div>
        </div>
        <div css={css`
        font-size: 18px;
        padding: 20px;
        padding-top: 10px;
        padding-bottom: 10px;
        text-align: center;
      `}>
          <div onClick={() => openModal()}>
            <h4 css={css`
            margin: 0;
          `}>{item.projectName}</h4>
            <span css={css`
            font-size: 0.6em;
          `}>{item.intro}</span>
          </div>
        </div>
        <div css={css`
          font-size: 18px;
          padding: 20px;
          text-align: center;
        `}>
          <div onClick={() => setIsModalOpen(true)}>
            <span css={css`
            font-size: 0.6em;
            display: block;
          `}>{item.skill}</span>
            {/* <span css={css`
            font-size: 0.6em;
            display: block;
          `}>1일 전</span> */}
          </div>
          {/* <div css={css`
            display: flex;
            flex-direction: column;
            align-items: center;
          `} onClick={() => !item.liked ? upLike() : downLike()}>
            <img src={hover ? './images/hoverPlant.svg' : (!item.liked ? './images/defaultPlant.svg' : './images/clickPlant.svg')} alt='좋아요 개수' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} />
            <span css={css`
              font-size: 12px;
            `}>{item.like}</span>
          </div> */}
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            zIndex: 100,
          },
          content: {
            width: "1100px",
            height: "500px",
            margin: "auto",
            borderRadius: "20px",
            overflowX: "hidden",
            padding: "50px",
          },
        }}
      >
        <MdOutlineClose onClick={() => setIsModalOpen(false)} size={36} css={css`
          cursor: pointer;
          color: #898989;
          float: right;
        `} />
        <div>
          <div css={css`
            display: flex;
          `}>
            <div css={css`
              display: inline-block;
              width: 250px;
              height: 250px;
              background-color: #F6F6F6;
              border-radius: 20px;
              border: 1px solid black;
              text-align: center;
              margin-left: 50px;
            `}>
              <img src={`${item.imageUrl ? item.imageUrl : './images/clickPlant.svg'}`} alt='프로젝트 로고' css={css`
                width: 250px;
                height: 250px;
                border-radius: 20px;
              `} />
            </div>
            <div css={css`
              display: inline-block;
              width: 742px;
              height: 250px;
              padding: 30px;
            `}>
              <div>
                <h4 css={css`
                font-size: 32px;
                margin: 0;
              `}>{item.projectName}
                  {/* <span css={css`
                font-size: 24px;
                font-weight: normal;
                color: #727272;
              `}>2022.10.05</span> */}
                </h4>
                <span css={css`
                font-size: 20px;
              `}>{item.intro}</span>
              </div>
              <div css={css`
                display: flex;
                flex-direction: column;
                margin-top: 80px;
              `}>
                <span css={css`
                font-size: 20px;
              `}>서비스 종류: {item.category}</span>
                <span css={css`
                font-size: 20px;
              `}>사용 언어/툴: {item.skill}</span>
                <span css={css`
                font-size: 20px;
              `}>연락처: {`${item.phoneNumber.substr(0, 3)}-${item.phoneNumber.substr(3, 4)}-${item.phoneNumber.substr(7, 4)}`}</span>
              </div>
            </div>
          </div>
          <p css={css`
            font-size: 20px;
            width: 1000px;
            margin: 0;
            margin-left: 50px;
            word-break: break-all;
          `}>
            {item.content}
          </p>
        </div>
        <div css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          position: absolute;
          right: 50px;
          cursor: pointer;
          bottom: 50px;
        `} onClick={() => !item.liked ? upLike() : downLike()}>
          <img src={hover ? './images/hoverPlant.svg' : (!item.liked ? './images/defaultPlant.svg' : './images/clickPlant.svg')} alt='좋아요 개수' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} />
          <span css={css`
          font-size: 12px;
        `}>{item.like}</span>
        </div>
      </Modal>
    </>
  )
}

function Button({ children, disabled, clickButton }) {
  const [category, setCategory] = useRecoilState(categoryState);
  return (
    <button css={css`
      border: ${!disabled ? '2px solid black' : 'none'};
      border-radius: 20px;
      height: 40px;
      font-size: 20px;
      cursor: pointer;
      width: 100px;
      background-color: ${!disabled ? '#F3F3F3' : '#3FB05E'};
      color: ${!disabled ? 'black' : 'white'};
    `} disabled={disabled} onClick={() => {
        clickButton();
        setCategory(children.toLowerCase());
      }}>
      {children}
    </button>
  )
}

function JoinButton({ children, color, onClick }) {
  return (
    <button css={css`
      background-color: ${color};
      border-radius: 10px;
      border: none;
      width: 80px;
      cursor: pointer;
      height: 40px;
      margin: 5px;
      margin-bottom: 0;
      color: white;
    `} onClick={onClick}>
      {children}
    </button>
  )
}

function InputInfo({ children, name }) {
  const [newPost, setNewPost] = useRecoilState(newPostState);
  const onChange = (e) => {
    const { name, value } = e.target;
    const nextInputs = {
      ...newPost,
      [name]: value,
    }
    setNewPost(nextInputs);
  }

  return (
    <div css={css`
      display: flex;
      align-items: center;
    `}>
      <span css={css`
        display: inline-block;
        width: 120px;
        height: 30px;
        margin-right: 10px;
        text-align: right;
        font-size: 18px;
        line-height: 30px;
      `}>{children}</span>
      <input type='text' placeholder={children} css={css`
        padding-left: 15px;
        border: none;
        box-sizing: border-box;
        border-radius: 5px;
        outline: none;
        box-shadow: 2px 2px 5px rgba(0,0,0,25%);
        width: 500px;
        height: 35px;
        font-size: 16px;

        &:focus{
          border: 2px solid #3FB05E;
        }
      `} name={name} onChange={onChange} />
    </div>
  )
}

function Capsule() {
  const [disabled, setDisabled] = useState([false, false, false]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [sort, setSort] = useRecoilState(sortState);
  const selectFile = useRef(null);
  const [selected, setSelected] = useState(-1);
  const [newPost, setNewPost] = useRecoilState(newPostState);
  const [postList, setPostList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [liked, setLiked] = useState(false);


  const [category, setCategory] = useRecoilState(categoryState);

  const clickButton = (index) => {
    let newDisabledArray = [false, false, false];
    newDisabledArray[index] = true;
    setDisabled(newDisabledArray);
  }

  const getTimeList = async () => {
    try {
      setLoading(true);
      const response = await instance.get('/post/time', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access-token")}`,
        },
      });
      setPostList(response.data.postDtos);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  const getLikeList = async () => {
    try {
      setLoading(true);
      const response = await instance.get('/post/like', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access-token")}`,
        },
      });
      setPostList(response.data.postDtos);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       setLoading(true);
  //       const response = await instance.get('/post/time', {
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem("access-token")}`,
  //         },
  //       });
  //       setPostList(response.data.postDtos);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   })();
  //   setLoading(false);
  // }, [isModalOpen]);

  useEffect(() => {
    console.log(category);
    (async () => {
      try {
        const response = await instance.get(`/post/${sort === '인기순' ? 'like' : 'time'}${category && `/${category}`}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access-token")}`,
          },
        });
        console.log(response);
        setPostList(response.data.postDtos);
      } catch (error) {
        console.log(error);
      }
    })()
  }, [category, sort, isModalOpen, liked]);

  const profileImgFormData = new FormData();

  const changeProfileImg = async (e) => {
    try {
      // console.log(e.target);
      const newProfileImg = e.target.files;
      profileImgFormData.append("file", newProfileImg[0]);
      const response = await instance.post(
        "image",
        profileImgFormData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access-token")}`,
            "Content-Type":
              "multipart/form-data; boundary=<calculated when request is sent>",
          },
        }
      );
      setNewPost({
        ...newPost,
        imageUrl: response.data.imageUrl[0],
      })
    } catch (error) {
      console.log(error);
    }
  };

  const Post = async () => {
    try {
      const response = await instance.post('/post', newPost, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access-token")}`,
        },
      });
      setIsModalOpen(false);
    } catch (error) {
      console.log(error);
    }
  }
  const onChange = (e) => {
    const { name, value } = e.target;
    const nextInputs = {
      ...newPost,
      [name]: value,
    }
    setNewPost(nextInputs);
  }

  return (
    <>
      <Header />
      <div css={css`
        text-align: center;
        margin-top: 110px;
      `} >
        <img src='./images/logo.svg' alt="로고" css={css`
          width: 200px;
        `} />
      </div>
      <div css={css`
        justify-content: center;
        margin-top: 30px;
        display: flex;
        gap: 30px;
      `} >
        <Button disabled={disabled[0]} clickButton={() => clickButton(0)}>WEB</Button>
        <Button disabled={disabled[1]} clickButton={() => clickButton(1)}>APP</Button>
        <Button disabled={disabled[2]} clickButton={() => clickButton(2)}>HW</Button>
      </div>
      <div css={css`
        margin: 30px;
        height: 40px;
        display: flex;
        gap: 5px;
      `}>
        <button css={css`
          border-radius: 10px;
          height: 40px;
          position: absolute;
          right: calc(10% + 140px);
          width: 80px;
          font-size: 16px;
          background-color: white;
          border: 1px solid black;
          cursor: pointer;
          `} onClick={() => setIsModalOpen(true)}>글쓰기</button>
        <ul css={css`
            list-style-type: none;
            margin: 0;
            padding: 0;
            position: absolute;
            text-align: left;
            right: 10%;
          `}>
          <li value="0" css={css`
            background-color: white;
            border-radius: ${dropdown ? '10px 10px 0 0' : '10px'};
            border: 1px solid black;
            height: 38px;
            cursor: pointer;
            width: 120px;
            line-height: 40px;
            padding-left: 10px;
          `} onClick={() => setDropdown(prev => !prev)}>{sort}<img src={dropdown ? './images/up.svg' : './images/down.svg'} css={css`
            position: absolute;
            top: 18px;
            right: 20px;
          `} alt='화살표'></img></li>
          {dropdown && <>
            <li value="1" css={css`
            background-color: white;
            height: 40px;
            width: 120px;
            line-height: 40px;
            padding-left: 10px;
            transition: 0.5s;
            &:hover{
              background-color: #F1F1F1;
            }
          `} onClick={() => {
                setDropdown(prev => !prev);
                setSort('최신순');
                getTimeList();
              }}>최신순</li>
            <li value="2" css={css`
            background-color: white;
            height: 40px;
            width: 120px;
            line-height: 40px;
            padding-left: 10px;
            transition: 0.5s;
            &:hover{
              background-color: #F1F1F1;
            }
          `} onClick={() => {
                setDropdown(prev => !prev);
                setSort('인기순');
                getLikeList();
              }}>인기순</li>
          </>}
        </ul>
      </div>
      <div css={css`
        display: grid;
        width: 80%;
        /* grid-template-columns: 1fr 1fr 1fr 1fr; */
        grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
        margin: 0 auto;
        gap: 50px;
      `} >
        {!loading ? postList.map((item) => {
          return (
            <IdeaLink item={item} key={item.id} setLiked={setLiked} />
          )
        }) : null}
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            zIndex: 100,
          },
          content: {
            width: "940px",
            height: "500px",
            margin: "auto",
            outline: 'none',
            borderRadius: "20px",
            overflowX: "hidden",
            paddingLeft: "130px",
            paddingRight: "80px",
            paddingBottom: "20px",
          },
        }}
      >
        <div css={css`
          display: flex;
          
        `}>
          <div css={css`
          display: flex;
          flex-direction: column;
          height: 300px;
        `}>
            <div css={css`
            display: inline-block;
            width: 250px;
            height: 250px;
            background-color: #F6F6F6;
            border-radius: 20px;
            padding: 10px;
            border: 1px solid black;
            text-align: center;
          `}>
              <img src={`${newPost.imageUrl ? newPost.imageUrl : './images/hoverPlant.svg'}`} alt='프로젝트 로고' css={css`
              width: 250px;
              height: 250px;
            `} />
            </div>
            <div css={css`
            display: block;
          `}>
              <div css={css`
              width: 272px;
              display: flex;
              justify-content: space-between;
            `}>
                <input
                  type="file"
                  style={{ display: "none" }}
                  ref={selectFile}
                  onChange={(e) => changeProfileImg(e)}
                  accept="image/*"
                />
                <button css={css`
                padding: 5px;
                width: 135px;
                display: flex;
                justify-content: space-between;
                height: 40px;
                align-items: center;
                margin: 0;
                margin-top: 5px;
                border-radius: 10px 0 0 10px;
                background-color: white;
                border: 1px solid black;
                cursor: pointer;
              `} onClick={() => selectFile.current.click()}><img src='./images/camera.svg' alt='카메라 아이콘' /> 사진 등록</button>
                <button css={css`
                padding: 5px;
                width: 135px;
                display: flex;
                justify-content: space-between;
                height: 40px;
                align-items: center;
                margin-top: 5px;
                border-radius: 0 10px 10px 0;
                background-color: white;
                border: 1px solid black;
                cursor: pointer;
              `}><img src='./images/trash.svg' alt='쓰레기통 아이콘' /> 사진 삭제</button>
              </div>
            </div>
          </div>
          <div css={css`
            padding: 15px;
            display: flex;
            width: 100%;
            flex-direction: column;
            gap: 30px;
          `}>
            <InputInfo name='projectName'>프로젝트 명</InputInfo>
            <InputInfo name='intro'>한 줄 설명</InputInfo>
            <div css={css`
              display: flex;
              align-items: center;
            `}>
              <span css={css`
                display: inline-block;
                width: 120px;
                height: 30px;
                margin-right: 10px;
                text-align: right;
                font-size: 18px;
                line-height: 30px;
              `}>서비스 종류</span>
              <div css={css`
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  margin: 0;
                  width: 500px;
                `} >
                <Select cssProp={selected === 2 && 'border: 2px solid #3FB05E'} event={() => {
                  setSelected(2);
                  setNewPost({
                    ...newPost,
                    category: 'WEB',
                  });
                }} display='none' margin='0' width='135px' height='30px' id='2' title='웹 서비스' fontSize='18px' divStyle={`margin: 0`} />
                <Select cssProp={selected === 1 && 'border: 2px solid #3FB05E'} event={() => {
                  setSelected(1);
                  setNewPost({
                    ...newPost,
                    category: 'APP',
                  });
                }} display='none' margin='0' width='135px' height='30px' id='1' title='앱 서비스' fontSize='18px' divStyle={`margin: 0`} />
                <Select cssProp={selected === 3 && 'border: 2px solid #3FB05E'} event={() => {
                  setSelected(3);
                  setNewPost({
                    ...newPost,
                    category: 'HW',
                  });
                }} display='none' margin='0' width='135px' height='30px' id='3' title='하드웨어' fontSize='18px' divStyle={`margin: 0`} />
              </div>
            </div>
            <InputInfo name='skill'>사용 언어/툴</InputInfo>
            <InputInfo name='phoneNumber'>연락처</InputInfo>
          </div>
        </div>
        <textarea placeholder='프로젝트 및 아이디어에 대한 설명을 작성해주세요.' css={css`
          width: calc(100% - 40px);
          height: 120px;
          resize: none;
          outline: none;
          border: none;
          border-radius: 10px;
          box-sizing: border-box;
          box-shadow: inset 0px 0px 4px 3px rgba(0, 0, 0, 0.25);
          padding: 15px;
          margin-top: 12px;
          
          &:focus{
            border: 2px solid #3FB05E;
            box-shadow: inset 0px 0px 4px 3px rgba(63, 176, 94, 0.25)
          }
        `} name='content' onChange={(e) => onChange(e)} />
        <div css={css`
          text-align: center;
        `}>
          <JoinButton color='#EC4B4B' onClick={() => setIsModalOpen(false)}>취소</JoinButton>
          <JoinButton color='#3FB05E' onClick={() => Post()}>등록</JoinButton>
        </div>
      </Modal>
    </>
  )
}

export default Capsule;