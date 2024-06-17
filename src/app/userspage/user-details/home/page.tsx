"use client";
import Navbar from '@/components/Navbar'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useRouter } from 'next/navigation';

const UsersHomePage = () => {
  const router = useRouter();

  const handleHome = () => {
    router.push('/userspage/user-details/home');
  };

  const handleContact = () => {
    router.push('/userspage/user-details/contact');
  };

  const handleLeave = () => {
    router.push('/userspage/user-details/leave');
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <div className="sticky top-0 z-10">
        <Navbar />
      </div>

      <div className="flex flex-grow overflow-hidden">
        {/* Sidebar */}
        <div className="sticky top-0 bg-gray-200 w-64 p-4 h-screen flex flex-col">
          {/* Sidebar content */}
          <div className="flex items-center mb-4 cursor-pointer" onClick={handleHome}>
            <HomeIcon className="h-6 w-6 text-gray-800 mr-2" />
            {/* <span>Home</span> */}
          </div>
          <div className="flex items-center mb-4 cursor-pointer" onClick={handleContact}>
            <MailIcon className="h-6 w-6 text-gray-800 mr-2" />
            {/* <span>Contact</span> */}
          </div>
          <div className="flex items-center cursor-pointer" onClick={handleLeave}>
            <ExitToAppIcon className="h-6 w-6 text-gray-800 mr-2" />
            {/* <span>Leave</span> */}
          </div>
        </div>

        {/* UsersPage content */}
        <div className="flex-grow p-4 overflow-y-auto">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est eius sit iste ratione, sequi facere dicta quia minima, quos ipsam minus aut necessitatibus, suscipit voluptas modi eveniet odio. Distinctio eveniet, impedit accusantium voluptate temporibus soluta illo eaque, officia beatae magnam enim facilis corporis? Eius neque dolorem maiores atque aliquam, pariatur id delectus, dolores saepe repudiandae illum recusandae corporis dolore vero est omnis vitae sed voluptatum dolor? Aliquid quisquam nobis iusto molestiae beatae incidunt ullam enim illo reiciendis distinctio qui voluptatibus quaerat repudiandae harum obcaecati architecto culpa unde est nesciunt, at dolore odio perspiciatis sequi labore. Corrupti, aperiam animi, recusandae placeat a soluta tenetur ipsam consequatur quos hic vitae consectetur aliquid accusamus vel distinctio, laudantium repellendus facere cumque neque molestias sunt ad tempora laborum ab. Mollitia corrupti, tempore labore harum sit itaque qui corporis saepe odio excepturi rerum reprehenderit. Sed reiciendis nostrum aliquid harum deserunt, eveniet nesciunt, neque accusamus delectus vel eaque doloremque magni, corporis rerum dicta architecto asperiores! Dicta earum, eum neque, at sed laborum rerum alias ipsum ipsa omnis doloribus ratione quidem, dolor magnam laboriosam quis commodi animi quod voluptatibus doloremque voluptates aliquid non repellendus excepturi! Ea adipisci esse eos nesciunt doloremque mollitia non reprehenderit fugit animi temporibus labore delectus hic voluptatibus error doloribus tenetur minus, distinctio ad maiores cumque suscipit ullam. Ab, facilis consequatur a eveniet itaque eos ullam iure, ducimus minima repellat obcaecati inventore suscipit fuga corrupti deserunt rem magni ipsa ratione! Dolorem suscipit iure repellat laudantium adipisci nihil minus aspernatur asperiores cupiditate quia dolore vero perspiciatis, sed consectetur atque deleniti earum doloribus fuga a facilis expedita voluptatem voluptates excepturi? Iusto, dolor cum et commodi, dolore reiciendis eligendi facere similique labore neque libero laudantium delectus vero voluptatum ut fugiat nobis minima earum veniam sint, quaerat possimus id. Nulla ea quas aperiam quisquam hic. Aperiam minima beatae enim nostrum. Est, molestias molestiae pariatur fuga minima facere, consequatur itaque magni totam rerum et, alias aspernatur explicabo iure quia. Doloribus sapiente, voluptatem eos ullam perspiciatis, laudantium ab officia officiis omnis in molestiae labore odio nam fugiat nostrum explicabo accusantium maxime dolor sit delectus eligendi aliquid illo unde! Est deleniti, sint repudiandae aliquid sequi facilis maiores numquam quae consequatur ullam laborum, dolore eaque omnis, explicabo perferendis consequuntur. Excepturi voluptas illum, consequuntur sint facilis numquam eveniet iusto ad odio recusandae est expedita? Delectus similique animi temporibus, a, illo obcaecati optio quidem fugit molestias repellendus impedit mollitia magni quos corporis nihil commodi perferendis earum recusandae laboriosam voluptas vero minima nobis! Dolor harum provident animi sunt distinctio, nam, sed asperiores reprehenderit autem delectus quia et odio impedit, architecto facilis ab temporibus labore suscipit rem nesciunt magnam! Repellat aliquam rem sit odio quaerat voluptate vero voluptatibus hic nobis cumque ipsum soluta repudiandae atque quibusdam, numquam tempore reiciendis excepturi, officiis sed quia nulla magnam id nam! Exercitationem optio hic reiciendis dolorum consequatur quos dolore ad natus, unde sunt. Et consequuntur non tempore ipsum nam sit ipsam aperiam id. Odio corporis suscipit unde exercitationem quis animi nemo perferendis quasi architecto reprehenderit atque obcaecati ad quos praesentium consectetur facere deleniti neque tenetur, soluta, consequuntur aliquam, sapiente quaerat labore voluptas. Deserunt quas accusamus impedit recusandae. Modi beatae non, architecto quibusdam esse quidem est sit accusantium enim! Ab, id. A accusamus harum dolore totam earum veritatis pariatur ipsa corrupti ab neque consequatur similique recusandae deleniti, quod officiis sed nisi eligendi quaerat dicta obcaecati. Similique optio quasi magnam, libero velit quis dignissimos dolor nemo at. Illum reprehenderit incidunt sapiente omnis amet nisi asperiores tempora doloremque assumenda quae dicta optio, eaque reiciendis aperiam quas! Excepturi, facere ipsum. Non nam dicta iste saepe. Sapiente obcaecati in non corrupti vitae deleniti illo temporibus id iusto, impedit voluptates quas iste. Rem laboriosam libero hic magni at, saepe veniam fugiat est! Provident autem, alias soluta eaque iure totam cum. Quas, dolor totam non eius dolorum, quisquam animi pariatur provident incidunt aut at, a iure numquam placeat dolore. Consequuntur animi incidunt ullam eligendi tempore voluptas quaerat magni temporibus debitis. Modi, ullam fugiat vero sequi numquam quidem corrupti? Maxime in vel, harum repellendus, repudiandae similique accusamus rem laudantium autem nihil enim possimus quaerat sapiente voluptates veniam laborum debitis magni aliquam a quis excepturi ipsa assumenda! Quo perferendis quae earum maxime sapiente. Consectetur totam cupiditate soluta, vel non officiis eveniet cum quae incidunt rem repellat corrupti magnam dolorum ipsam eaque earum illum architecto. Nobis aliquam, eos reprehenderit doloremque amet eaque harum eveniet velit illum quam sapiente incidunt unde ab, nemo cumque voluptatem! Unde sunt quae praesentium! Eum asperiores velit odit sequi minima corporis omnis ad voluptatibus deserunt ut blanditiis eos, ipsum voluptates consectetur praesentium inventore minus, fugit, nulla iste harum. Repellendus, quis eligendi. Harum labore, nesciunt tempore eum nihil soluta quas? Cumque quam enim neque ullam hic? Aliquam animi maiores ipsam rerum cum, quisquam unde necessitatibus nihil, fugiat deleniti minima odit eum. Doloremque quasi possimus iure ratione quaerat sint voluptates deleniti neque quibusdam, laborum ea labore distinctio dolore nisi nulla? Sit perspiciatis optio a impedit quod sed iusto voluptatibus quisquam adipisci, dolor maiores ipsam recusandae consequuntur dolores corrupti, molestiae repudiandae doloribus, accusamus laboriosam totam sapiente harum. In nostrum, sequi quae illo repellendus veritatis modi vel. Quidem dolorem, odit dignissimos libero quos sint ut voluptatum quasi harum voluptate explicabo hic eveniet repellendus provident delectus suscipit repellat vero recusandae laboriosam iure nesciunt. Laudantium nulla, voluptatum pariatur vitae assumenda maiores molestiae, numquam neque, inventore ullam consectetur doloremque fugit autem laborum similique? Soluta eaque necessitatibus, iste, quae doloremque praesentium ut et culpa, consectetur voluptate tempore quasi maiores libero delectus ducimus sequi ab omnis veniam temporibus provident. Impedit, nobis itaque architecto, suscipit modi dicta rerum quaerat fuga nihil quidem deleniti accusamus, quia soluta? Dolorem, consequuntur neque nisi ipsa ea quod tempore possimus. Eligendi doloremque sed tempora dicta voluptatum non! Magnam iste in, repudiandae non laborum quae voluptatibus quaerat maiores fuga! Sequi iusto ipsum laboriosam quos suscipit harum corrupti. Culpa sequi quod nostrum rerum ullam quo est commodi aliquam sed, placeat excepturi dignissimos illo alias repellat iure laborum veritatis harum, tempore neque atque quas, repellendus libero facere fuga? A, odit similique veniam aut laborum quisquam?
        </div>
      </div>
      
      {/* Footer */}
      <div className="bg-gray-200 h-16 flex items-center justify-center w-full">
        Footer
      </div>
    </div>
  );
};

export default UsersHomePage;
