const inputA = [
  77442, 71181, 49755, 38798, 89857, 96168, 68503, 52053, 27070, 78107, 18422,
  34555, 52260, 35963, 92308, 25352, 87921, 21112, 40251, 66316, 10872, 78694,
  80223, 69732, 38939, 34636, 10066, 21755, 59907, 40042, 10479, 92724, 49261,
  14450, 20138, 49196, 78226, 55352, 73181, 88373, 55224, 78343, 50215, 93394,
  12421, 30218, 60899, 53443, 78769, 34837, 57703, 84563, 95968, 18237, 88136,
  75094, 14017, 18973, 45202, 67888, 58743, 65978, 27877, 23703, 63594, 19101,
  49192, 78677, 74303, 56874, 90161, 39443, 59419, 16790, 23505, 70298, 64391,
  62270, 12823, 83131, 29372, 21121, 22012, 42673, 81026, 96443, 30527, 88227,
  43550, 83170, 97480, 57306, 12562, 70051, 23409, 98618, 55824, 26417, 47973,
  88458, 78792, 49946, 80977, 64506, 51584, 74305, 29886, 66682, 25165, 58380,
  69518, 13253, 47096, 30095, 53753, 18402, 96146, 78431, 58498, 48373, 84718,
  60072, 82045, 11287, 37090, 38432, 13148, 29704, 45645, 68457, 66349, 72212,
  16845, 49997, 56793, 27128, 92355, 76013, 20620, 23056, 82567, 13147, 70591,
  68310, 36484, 97410, 31951, 65334, 14656, 91768, 56457, 57141, 18561, 75233,
  73250, 14002, 42157, 34516, 55035, 13086, 43301, 38864, 95169, 73367, 53500,
  81688, 93934, 54841, 66614, 52867, 92062, 74176, 75046, 64084, 17516, 58314,
  30184, 82359, 83956, 87246, 66231, 42526, 96228, 70702, 72108, 62377, 72553,
  57600, 16563, 35342, 29419, 22242, 81264, 27706, 11777, 96931, 27765, 65779,
  82921, 87744, 85543, 56196, 34774, 93073, 37699, 45701, 60801, 66024, 38321,
  32244, 95866, 91365, 96047, 60690, 40819, 19229, 56978, 84539, 50724, 90639,
  70374, 83465, 67309, 56678, 91876, 11246, 66054, 40614, 56899, 65744, 80749,
  74619, 60988, 84866, 45318, 14541, 79263, 48847, 73082, 79835, 62446, 62036,
  13498, 18172, 35258, 60068, 43622, 23059, 61060, 45296, 31310, 69945, 89043,
  44661, 32843, 83953, 44774, 47310, 96064, 79098, 11333, 31875, 92000, 60969,
  37597, 97194, 90624, 15881, 29211, 19865, 37093, 85746, 88886, 94576, 59784,
  98263, 47612, 27380, 33552, 72012, 18549, 23250, 43410, 55986, 62202, 86252,
  76363, 39103, 94626, 11792, 62872, 66617, 76923, 54667, 80651, 24898, 78913,
  86226, 41730, 62228, 20570, 48070, 89609, 21233, 67520, 69207, 80773, 98652,
  77753, 61668, 49504, 90868, 50836, 34661, 36590, 29788, 36309, 45305, 77866,
  26091, 73725, 89578, 62919, 18631, 65733, 63976, 57363, 63193, 93512, 22455,
  12710, 80568, 82907, 70300, 65593, 66452, 81168, 81230, 15461, 99354, 97780,
  11597, 86142, 22929, 72577, 87562, 15882, 18782, 21443, 97662, 26467, 12181,
  99202, 92349, 20986, 85821, 70172, 54212, 42712, 90995, 62165, 70665, 23358,
  82477, 71987, 95504, 40799, 35361, 10730, 43173, 28181, 23939, 38685, 36349,
  38913, 36681, 34231, 84150, 53592, 90048, 56334, 92955, 26500, 11840, 23430,
  79148, 60469, 15750, 51639, 66378, 33011, 74383, 13342, 43984, 78415, 37553,
  86775, 34408, 53067, 83096, 59779, 92173, 93789, 34804, 86853, 19023, 24014,
  88189, 96897, 71969, 57758, 84236, 39543, 45629, 46405, 88155, 39913, 58055,
  67449, 97296, 11979, 97896, 16406, 33210, 22366, 14047, 62524, 85153, 35374,
  76324, 50715, 30446, 75098, 60654, 92593, 37954, 67845, 18665, 46953, 22488,
  76756, 52973, 88681, 67431, 58093, 61522, 19692, 55686, 75663, 75619, 83139,
  96583, 76437, 19832, 32727, 64900, 99403, 20217, 68879, 55020, 22732, 70441,
  35671, 87206, 15719, 70843, 80802, 60385, 68163, 51564, 14231, 10468, 58531,
  89365, 65598, 30226, 13423, 43242, 45581, 55879, 28959, 67482, 21358, 40107,
  56957, 68981, 45865, 83968, 36082, 51895, 97489, 13164, 43619, 80054, 43543,
  21603, 29392, 79097, 91813, 27744, 66902, 84610, 63644, 63408, 71224, 48293,
  57365, 13590, 34822, 90168, 88698, 59044, 64826, 46286, 49565, 89303, 57427,
  84546, 68856, 44748, 18252, 32823, 36238, 34436, 25905, 11310, 71865, 31257,
  82139, 66945, 23390, 95805, 53931, 46434, 75144, 88419, 99702, 38898, 83475,
  57700, 42255, 68559, 48622, 48063, 36896, 61761, 45534, 84197, 10741, 57029,
  61058, 16955, 95154, 20941, 76420, 57350, 37339, 11022, 11086, 64945, 95125,
  70646, 70553, 52129, 35583, 52407, 21537, 49682, 20290, 66261, 90484, 25358,
  59209, 21520, 46692, 83918, 68641, 93012, 10186, 84383, 33576, 42089, 76287,
  63821, 17944, 57972, 51596, 22418, 68055, 19554, 59117, 17210, 61968, 22768,
  22419, 33546, 34755, 17956, 19543, 85916, 66761, 30911, 12158, 91771, 87708,
  70837, 27584, 67642, 62273, 16352, 41901, 25732, 75816, 25681, 86396, 44190,
  58070, 44532, 47227, 36638, 15632, 72120, 32764, 51180, 49739, 66274, 61723,
  59015, 21891, 18747, 86144, 39681, 38150, 61321, 38754, 70627, 91724, 91330,
  38159, 78498, 24641, 12550, 70711, 17338, 56076, 21353, 61551, 42398, 80835,
  69604, 76284, 73817, 35170, 52139, 40826, 85479, 56430, 67747, 25739, 17558,
  89499, 78373, 95268, 33958, 12195, 63380, 60034, 80467, 98506, 58067, 75075,
  43692, 17039, 97439, 79297, 68473, 47630, 61662, 86027, 62403, 24100, 87270,
  35793, 91493, 55623, 82673, 15863, 57779, 45405, 93780, 99320, 40036, 33370,
  82692, 78117, 68580, 57478, 15588, 73700, 81481, 49442, 61061, 37624, 90983,
  60057, 80319, 99544, 14572, 35131, 90273, 19621, 88549, 90170, 35057, 34283,
  24485, 41063, 47154, 87986, 36053, 20687, 66575, 81371, 91665, 51369, 19220,
  45158, 61595, 79096, 72662, 10875, 99736, 85897, 83776, 40755, 80969, 53053,
  58468, 68895, 10193, 51578, 59446, 98969, 15913, 95191, 27476, 94851, 47345,
  35791, 56194, 71120, 42599, 33848, 68814, 25584, 85338, 77668, 82555, 44609,
  73386, 30553, 35913, 70145, 99873, 32644, 15974, 70045, 37614, 70738, 96972,
  71948, 18962, 22983, 50419, 92422, 29173, 17365, 76649, 72431, 46431, 25817,
  83620, 83434, 25031, 31968, 31604, 94886, 88754, 14709, 40906, 89846, 29736,
  62109, 41649, 13672, 58161, 63752, 22495, 55699, 69083, 20079, 34505, 70644,
  18606, 90720, 33445, 66398, 22680, 27166, 94319, 19586, 51374, 28183, 49601,
  45765, 57265, 77954, 81735, 17145, 62809, 38935, 26249, 86870, 49988, 57756,
  69866, 38276, 65159, 88269, 18994, 89894, 19078, 13692, 34577, 93672, 66156,
  52761, 71038, 59876, 95962, 33277, 22237, 42882, 42825, 44396, 89726, 16770,
  44209, 98471, 63754, 52305, 21085, 84268, 23150, 60140, 96903, 94329, 26226,
  74515, 68426, 36722, 91076, 10149, 49208, 64396, 35021, 10780, 86680, 65532,
  35181, 85405, 91632, 75023, 37042, 53779, 37585, 23603, 88436, 69158, 70402,
  44083, 82394, 27746, 19624, 97957, 30896, 78374, 66971, 96748, 47956, 84663,
  89157, 12228, 42362, 93195, 75162, 45009, 39320, 67273, 65163, 18734, 73297,
  91431, 14963, 71185, 42321, 64599, 53334, 20187, 83616, 66914, 81279, 99419,
  79294, 28220, 80676, 24797, 35108, 65643, 36523, 33040, 81868, 53306, 47740,
  37843, 98695, 51321, 95514, 26419, 20382, 18337, 24862, 96800, 88316, 93747,
  89689, 86418, 37119, 98276, 37447, 41319, 43040, 44573, 93294, 37495, 33107,
  54548, 54445, 88038, 66613, 64729, 81937, 86560, 90763, 10930, 52132, 93840,
  14381, 23038, 12809, 28706, 35811, 64368, 14652, 24290, 35618, 76669, 65052,
  27533, 37756, 28054, 56969, 83129, 81613, 75625, 17846, 77897, 93086, 73969,
  87726, 88858, 65550, 60065, 91526, 15647, 40208, 45614, 56409, 14733, 50641,
  60500, 66336, 52887, 72997, 44985, 79421, 36332, 69182, 59092, 29363,
];

const inputB = [
  88154, 76363, 69158, 22488, 49242, 60034, 43760, 29173, 63754, 13305, 95805,
  59209, 83075, 65961, 56524, 19586, 76287, 20450, 20187, 47227, 77651, 67481,
  15216, 81168, 38777, 24551, 49751, 21498, 37042, 20430, 30302, 56653, 18139,
  41684, 54577, 76287, 77472, 47752, 76363, 44539, 13454, 39913, 26340, 81365,
  17637, 22488, 27070, 63193, 76287, 64955, 90260, 61551, 61321, 59051, 22597,
  61551, 58846, 79651, 81168, 36454, 65364, 66336, 47227, 90563, 76363, 52928,
  16770, 33277, 76324, 47227, 64736, 58067, 76363, 61551, 93360, 20187, 61321,
  61551, 57714, 23208, 81168, 63648, 74365, 20187, 63754, 74839, 16770, 80574,
  81327, 87067, 59239, 33168, 19586, 69573, 59209, 36335, 77218, 29173, 28702,
  23040, 26612, 81708, 82477, 76324, 19586, 17617, 13430, 81168, 48749, 53467,
  61551, 54169, 90256, 92342, 74679, 68884, 54906, 82348, 30348, 28719, 49196,
  54268, 81168, 73806, 34498, 59686, 69158, 68950, 76324, 60034, 78117, 54196,
  53315, 16770, 64874, 43619, 71300, 43778, 81868, 37042, 61327, 79444, 58074,
  63193, 52913, 78373, 44983, 30896, 59209, 61551, 27850, 42263, 31760, 81868,
  95805, 12467, 47227, 26033, 81168, 73119, 41775, 65779, 31728, 69158, 63193,
  63754, 95142, 30896, 76324, 34526, 65386, 79531, 76363, 28284, 91401, 14259,
  48803, 33277, 16770, 96540, 34404, 87428, 96903, 63193, 20187, 59209, 10468,
  56860, 57459, 33277, 27070, 37042, 45944, 18763, 17623, 30714, 80535, 66518,
  19432, 43619, 40341, 81132, 97741, 61787, 62712, 81380, 76363, 25646, 50162,
  10468, 29173, 37520, 11889, 63193, 47227, 63551, 27070, 43393, 59209, 67420,
  28146, 27150, 61321, 42545, 78117, 81868, 83337, 69158, 37042, 20551, 37042,
  10468, 76287, 60034, 49196, 60910, 35253, 58067, 24937, 48742, 39600, 62719,
  71733, 81168, 59209, 38731, 33109, 12770, 43807, 76363, 72036, 10468, 62946,
  96601, 10468, 61321, 43897, 48153, 35936, 27177, 76324, 27736, 60034, 96903,
  73631, 20187, 70413, 59845, 22488, 95805, 27070, 17347, 46767, 81868, 19770,
  75790, 62157, 91120, 16758, 80611, 85133, 70963, 85770, 33277, 20187, 81868,
  81168, 67989, 14656, 43619, 29173, 16770, 37042, 22488, 76324, 98262, 43619,
  39913, 29173, 39913, 14090, 61321, 73535, 69158, 27006, 66474, 76363, 82728,
  65779, 40001, 65779, 87612, 27501, 98114, 31091, 95805, 46751, 33147, 89262,
  95805, 75617, 71004, 78373, 61551, 91526, 31808, 54799, 35481, 11640, 32469,
  33277, 61321, 31518, 76363, 58067, 68846, 19586, 95805, 78373, 27070, 16770,
  36795, 60034, 58067, 16770, 11734, 17423, 78117, 53759, 66320, 10468, 60034,
  76363, 72225, 25419, 58067, 92060, 59209, 76324, 90226, 20187, 81168, 63754,
  84396, 23192, 51191, 41278, 95805, 51728, 61551, 33277, 35592, 60717, 88861,
  47227, 54470, 80208, 32348, 31390, 13692, 66336, 73054, 20187, 75286, 42085,
  63193, 19586, 66336, 16201, 76287, 19586, 18079, 71848, 27950, 45783, 58067,
  68642, 60406, 58239, 30991, 47641, 31090, 84819, 35005, 98556, 69269, 78373,
  76324, 80598, 16770, 60034, 19912, 74542, 61518, 23011, 56357, 69880, 19586,
  33277, 41994, 74945, 11294, 47227, 16770, 19586, 99638, 35305, 11167, 52130,
  97224, 66545, 95805, 54539, 14555, 10468, 23752, 49196, 95058, 20187, 13898,
  95805, 20187, 61321, 37042, 59209, 58067, 22314, 78373, 88193, 70326, 34779,
  66996, 13367, 35599, 43276, 37042, 70388, 83512, 39957, 39913, 61321, 48560,
  30896, 77391, 65627, 68981, 77969, 54937, 27874, 60034, 59293, 69158, 33277,
  96591, 49196, 67781, 29173, 87650, 39913, 81168, 84631, 78373, 13041, 60034,
  66336, 42504, 67267, 32642, 29173, 92287, 19909, 23658, 32643, 68277, 10468,
  54219, 81168, 91391, 76324, 43619, 41779, 27070, 23335, 68981, 33277, 47227,
  48719, 33277, 59209, 71625, 88553, 71011, 60877, 85678, 52138, 29173, 76287,
  75928, 99211, 59209, 70479, 91526, 56724, 69158, 83377, 49196, 29173, 41046,
  76324, 47714, 33277, 81168, 19586, 95805, 41705, 10648, 63193, 53110, 59209,
  37042, 16770, 69158, 30896, 60034, 58465, 38881, 23509, 40976, 60540, 78300,
  76363, 76324, 29173, 43072, 10654, 57933, 33049, 33630, 39913, 97536, 27070,
  78373, 20187, 76287, 76287, 32158, 45488, 24598, 47227, 44764, 31261, 29173,
  88778, 49196, 41896, 13692, 78373, 68295, 63414, 19586, 99070, 59209, 61321,
  55986, 38193, 81168, 61321, 95805, 76287, 29173, 14656, 65375, 34453, 44020,
  92236, 83847, 58136, 31634, 59209, 34705, 93059, 50479, 32771, 29981, 60034,
  67717, 78373, 61551, 19018, 61551, 29173, 81298, 29212, 63754, 12643, 56820,
  19742, 83582, 35357, 44159, 76363, 47309, 47227, 78117, 14656, 78739, 43619,
  19586, 85648, 61551, 58938, 69158, 68516, 10468, 30896, 83718, 74971, 29173,
  73587, 78373, 61551, 83211, 83416, 65779, 39000, 27070, 85619, 85167, 63559,
  71196, 81168, 65125, 23254, 95805, 81168, 46622, 33363, 31755, 13587, 39762,
  93764, 73981, 46534, 28798, 66209, 76287, 27070, 76324, 95805, 99459, 60524,
  26965, 37042, 76324, 29173, 35985, 17932, 58771, 39235, 81835, 54006, 47227,
  39913, 19398, 19898, 78117, 91070, 66587, 49196, 61551, 65779, 47227, 83360,
  90756, 19586, 64705, 69158, 64663, 39913, 78593, 28165, 20187, 78760, 30919,
  61171, 60632, 63754, 32678, 83311, 78373, 19897, 43398, 60034, 61321, 61551,
  16250, 95805, 45332, 16770, 29173, 60034, 30896, 95805, 78117, 51581, 59209,
  39913, 98095, 75715, 59209, 44090, 16480, 65779, 52163, 19553, 76363, 76363,
  76324, 30896, 19586, 42226, 27070, 73952, 88063, 69158, 27070, 58067, 56070,
  59209, 62759, 31064, 76860, 20187, 60034, 51942, 71636, 99601, 35041, 16770,
  61321, 29173, 76363, 95805, 19236, 24024, 19406, 47227, 14925, 66336, 69158,
  76363, 63193, 27070, 60034, 18415, 94253, 35447, 65307, 40771, 45281, 42605,
  61152, 76363, 24195, 42631, 71439, 72284, 27196, 25431, 27070, 44931, 78373,
  76363, 82052, 35541, 31191, 55104, 47227, 81868, 14656, 36929, 27070, 33277,
  80975, 65841, 14656, 76324, 47227, 43619, 27070, 62041, 52608, 59545, 60267,
  51736, 29173, 77288, 27070, 10232, 52565, 53430, 78373, 42850, 91893, 60034,
  85817, 95805, 78373, 78117, 47227, 88633, 27070, 58448, 76324, 39465, 33277,
  75778, 95805, 23131, 85623, 13436, 76435, 27070, 27070, 19594, 78373, 65779,
  15242, 40691, 30896, 55759, 35037, 33277, 60228, 62491, 10468, 75565, 36931,
  63754, 57490, 76287, 59209, 82403, 56685, 93619, 76363, 30896, 54460, 35338,
  83328, 10723, 63754, 72435, 63193, 19586, 39913, 90041, 83914, 68981, 94227,
  65227, 14656, 16770, 45804, 71000, 28091, 26479, 16770, 49196, 30896, 80516,
  82477, 65947, 53557, 51572, 89269, 61551, 49305, 41190, 30289, 74713, 82175,
  13090, 46180, 16770, 48403, 67069, 34468, 57178, 10468, 20187, 20187, 37042,
  31121, 76363, 61551, 25016, 35246, 66828, 57465, 46127, 23412, 90826, 15732,
  22642, 87173, 38561, 61551, 35706, 64457, 76324, 42585, 57680, 78955, 40607,
  78373, 13271, 98421, 61657, 56593, 41419, 40781, 69158, 85174, 99697, 16770,
  62282, 80876, 88090, 65779, 18816, 14656, 49196, 79218, 80489, 37042, 96903,
  46862, 59209, 69134, 53283, 47227, 16770, 55002, 95805, 61879, 65779, 63193,
  84394, 60034, 78373, 59374, 27070, 16770, 78373, 70557, 20442, 30896, 96869,
  16313, 78373, 37042, 61551, 59209, 20187, 60034, 81345, 48982, 73493, 83354,
  30643, 39913, 80280, 39913, 61551, 34868, 36878, 95805, 67571, 98020,
];

inputA.sort();
inputB.sort();

const result = inputA.reduce((acc, current, index) => {
  console.log(
    'acc',
    acc,
    'current',
    current,
    'b',
    inputB[index],
    'diff',
    Math.abs(current - inputB[index])
  );
  return acc + Math.abs(current - inputB[index]);
}, 0);

console.log(result);
